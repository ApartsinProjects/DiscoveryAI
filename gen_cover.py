"""Generate book cover for Building Discovery AI using Imagen 4 Ultra."""
import json
import base64
import sys
from pathlib import Path

from google import genai
from google.genai import types

config = json.loads(Path.home().joinpath(".gemini-imagegen.json").read_text())
client = genai.Client(api_key=config["api_key"])

PROMPT = """
Professional book cover for "BUILDING DISCOVERY AI — From Vibe Coding to Autonomous Science",
a technical AI book by Alexander Apartsin and Yehudit Aperstein. Portrait orientation.

LAYOUT (from top to bottom):
- TOP AREA: Large bold white text "BUILDING DISCOVERY AI" centered, below it smaller text
  "From Vibe Coding to Autonomous Science" in light blue-gray color.
- CENTER: Main artwork — a glowing DNA/protein structure at the center emitting teal-emerald
  light (#3ed6a0), surrounded by flowing neural network graphs, molecular structures,
  mathematical equations, and faint code fragments dissolving upward. Abstract AI scientist
  figure (wireframe/geometric, not literal robot) on one side. Atmospheric scientific
  discovery composition with cinematic lighting.
- BOTTOM RIGHT CORNER: A circular metallic gold badge with the text "HANDS-ON AI SCIENCE"
  around the top arc and "SERIES" at the bottom, with a 4-pointed star in the center.
  The badge should look like a premium embossed seal, gold/amber color.
- BOTTOM CENTER: White text "Alexander Apartsin & Yehudit Aperstein" in clean sans-serif font.

STYLE: Deep dark navy blue background (almost black-blue, #060d1a), cinematic lighting,
photorealistic scientific illustration, professional Kindle/print book cover quality.
No extra decorative borders. All text must be clearly legible.
Aspect ratio: 5:8 portrait (tall book cover format).
"""

print("Generating cover image with Imagen 4 Ultra...")
response = client.models.generate_images(
    model="imagen-4.0-ultra-generate-001",
    prompt=PROMPT,
    config=types.GenerateImagesConfig(
        number_of_images=1,
        aspect_ratio="9:16",
        output_mime_type="image/jpeg",
        output_compression_quality=92,
    ),
)

if not response.generated_images:
    print("ERROR: No images generated")
    sys.exit(1)

img_data = response.generated_images[0].image.image_bytes
out_path = Path("images/book-cover.jpg")
out_path.parent.mkdir(exist_ok=True)
out_path.write_bytes(img_data)
print(f"Saved {len(img_data)//1024} KB -> {out_path}")

# Resize to 1600x2560 to match VisionAI cover dimensions
try:
    from PIL import Image
    import io
    img = Image.open(io.BytesIO(img_data))
    print(f"Original size: {img.size}")
    target = (1600, 2560)
    if img.size != target:
        img_resized = img.resize(target, Image.LANCZOS)
        img_resized.save(out_path, "JPEG", quality=92)
        print(f"Resized to {target} -> {out_path}")
except ImportError:
    print("Pillow not available, keeping original dimensions")
