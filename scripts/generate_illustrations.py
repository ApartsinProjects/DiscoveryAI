#!/usr/bin/env python3
"""Generate 198 technical illustrations for DiscoveryAI book sections.

Reads illustration_queue.json, generates each image via Gemini,
saves to the correct section directory, and writes illustration_queue_done.json.

Usage:
    python scripts/generate_illustrations.py [--workers 3] [--resume]
"""

import argparse
import json
import sys
import time
import concurrent.futures
from pathlib import Path

BOOK_ROOT = Path(__file__).resolve().parent.parent
QUEUE_FILE = BOOK_ROOT / "scripts" / "illustration_queue.json"
DONE_FILE = BOOK_ROOT / "scripts" / "illustration_queue_done.json"


def load_config():
    config_path = Path.home() / ".gemini-imagegen.json"
    if not config_path.exists():
        raise FileNotFoundError("Config not found at ~/.gemini-imagegen.json")
    with open(config_path) as f:
        return json.load(f)


def generate_one(client, model, entry, book_root):
    sec = entry["sec"]
    prompt = entry["prompt"]
    section_dir = book_root / Path(entry["path"]).parent
    out_path = section_dir / entry["filename"]

    if out_path.exists() and out_path.stat().st_size > 1000:
        print(f"  [{sec}] SKIP (already exists: {out_path.name})")
        return entry

    from google.genai import types

    for attempt in range(3):
        try:
            response = client.models.generate_content(
                model=model,
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE"],
                    image_config=types.ImageConfig(
                        aspect_ratio="16:9",
                        image_size="1K",
                    ),
                ),
            )
            for part in response.parts:
                if part.inline_data:
                    section_dir.mkdir(parents=True, exist_ok=True)
                    part.as_image().save(str(out_path))
                    print(f"  [{sec}] OK: {out_path.name}")
                    return entry
            print(f"  [{sec}] No image in response (filtered?)")
            return None
        except Exception as e:
            err = str(e)
            if attempt < 2:
                delay = 5 * (2 ** attempt)
                print(f"  [{sec}] Retry {attempt+1}/3 after {delay}s: {err[:80]}")
                time.sleep(delay)
            else:
                print(f"  [{sec}] FAILED after 3 attempts: {err[:120]}")
                return None


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--workers", type=int, default=3)
    parser.add_argument("--resume", action="store_true",
                        help="Skip entries whose output file already exists")
    parser.add_argument("--start", type=int, default=0,
                        help="Start from this index in the queue")
    parser.add_argument("--limit", type=int, default=0,
                        help="Process at most this many entries (0=all)")
    args = parser.parse_args()

    queue = json.loads(QUEUE_FILE.read_text(encoding="utf-8"))
    print(f"Loaded {len(queue)} entries from illustration_queue.json")

    existing_done = []
    if DONE_FILE.exists():
        existing_done = json.loads(DONE_FILE.read_text(encoding="utf-8"))
        print(f"  {len(existing_done)} already in done file")

    done_secs = {e["sec"] for e in existing_done}

    to_process = queue[args.start:]
    if args.limit > 0:
        to_process = to_process[:args.limit]

    if args.resume:
        to_process = [e for e in to_process if e["sec"] not in done_secs]
        print(f"  {len(to_process)} remaining after resume filter")

    if not to_process:
        print("Nothing to process.")
        return

    config = load_config()
    model = config.get("default_model", "gemini-3.1-flash-image")

    from google import genai
    client = genai.Client(api_key=config["api_key"])

    print(f"Generating {len(to_process)} images with model={model}, workers={args.workers}")

    completed = list(existing_done)
    failed = []

    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = {
            executor.submit(generate_one, client, model, entry, BOOK_ROOT): entry
            for entry in to_process
        }
        for future in concurrent.futures.as_completed(futures):
            entry = futures[future]
            try:
                result = future.result()
                if result:
                    if result["sec"] not in {e["sec"] for e in completed}:
                        completed.append(result)
                else:
                    failed.append(entry["sec"])
            except Exception as e:
                print(f"  [{entry['sec']}] Exception: {e}")
                failed.append(entry["sec"])

            if len(completed) % 10 == 0:
                DONE_FILE.write_text(
                    json.dumps(completed, indent=2, ensure_ascii=False),
                    encoding="utf-8"
                )

    DONE_FILE.write_text(
        json.dumps(completed, indent=2, ensure_ascii=False),
        encoding="utf-8"
    )

    print(f"\nDone: {len(completed)}/{len(queue)} total, {len(failed)} failed")
    if failed:
        print(f"Failed sections: {', '.join(failed)}")
    print(f"Output: {DONE_FILE}")


if __name__ == "__main__":
    main()
