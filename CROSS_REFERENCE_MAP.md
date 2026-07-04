# Cross-Reference Map

Progressive-depth concepts that appear in multiple chapters at different levels.
Cross-Reference (#13), Narrative Continuity (#14), and ENRICH-wave agents use these
arcs to place inline links. Each arc reads "introduced -> deepened -> transformed".

## The book's signature arcs (concept returns learned)

| Concept | Introduced | Deepened | Transformed |
|---|---|---|---|
| Search as discovery | Ch 1 (state spaces, UCB, Thompson sampling) | Ch 15 (algorithm search over complexity-correctness space), Ch 45 (Bayesian optimization, acquisition functions) | Ch 53 (AI scientists searching hypothesis space via automated research loops) |
| Bayesian reasoning | Ch 2 (Bayes theorem, posteriors, Bayes factors) | Ch 32 (full Bayesian workflow, PyMC, posterior predictive checks, NUTS) | Ch 46 (BALD acquisition, Bayesian experiment design), Ch 55 (SDL surrogate optimization under uncertainty) |
| Knowledge graphs | Ch 3 (triples, embeddings, TransE, vector databases) | Ch 38 (link prediction, RotatE, GNNs for KG completion) | Ch 39 (hypothesis generation from graph gaps and missing triples) |
| Reasoning chains | Ch 4 (deductive, abductive, causal, analogical reasoning) | Ch 29 (chain-of-thought, PRMs, MCTS over reasoning steps, AlphaGeometry) | Ch 53 (AI scientist reasoning loops: propose-implement-run-evaluate-critique) |
| Surrogate models | Ch 5 (GP surrogates, active learning, expected improvement) | Ch 33 (PINNs, neural operators, MACE universal force fields) | Ch 45 (BO surrogates with acquisition functions), Ch 55 (SDL surrogates for closed-loop experimentation) |
| Discovery Workbench | Ch 6 (architecture v0: artifact registry, task log, CLI) | Ch 12 (MCP tool endpoints), Ch 47 (experiment registry with provenance) | Ch 53-58 (autonomous research platform with governance, evaluation, and multi-agent teams) |
| Vibe coding loop | Ch 9 (specify-generate-verify-repair formalized) | Ch 16 (repository-scale multi-file changes), Ch 17 (multi-agent software teams) | Ch 24 (autonomous software organizations with self-improving loops) |
| Context engineering | Ch 11 (repository context: file trees, symbol graphs, token budgets) | Ch 28 (multimodal context: text, structure, sequence, image) | Ch 40 (research agent memory: episodic, semantic, procedural) |
| MCP servers | Ch 12 (building scientific tool servers: PubChem, OpenAlex, vector DB) | Ch 40 (research agent tool integration, ChemCrow pattern) | Ch 55 (instrument interfaces for self-driving laboratories) |
| Foundation models | Ch 27 (ESM, AlphaFold, GNoME, LoRA fine-tuning, scaling laws) | Ch 28 (multimodal: MolT5, ProteinChat, cross-modal retrieval), Ch 33 (MACE, universal force fields) | Ch 48-49 (domain-specific pipelines: protein design, molecular generation, cofolding) |
| Causal reasoning | Ch 4 (do-calculus introduction, causal graph queries) | Ch 31 (full causal discovery: PC/FCI/GES, DoWhy, double ML, refutation) | Ch 52 (causal inference in social systems: DID, network interference, policy simulation) |
| Generative models | Ch 34 (diffusion, flow matching, equivariant architectures, VAEs, GANs) | Ch 48 (protein design: RFDiffusion, FrameDiff, FoldFlow), Ch 49 (molecular generation: DiffSBDD, MatterGen) | Ch 55 (generative candidates feeding closed-loop SDL optimization) |
| Anomaly detection | Ch 30 (outliers vs novelties: LOF, Isolation Forest, deep methods) | Ch 41 (claim validation: artifact verification, benchmark leakage detection) | Ch 56 (benchmark leakage detection, contamination analysis in discovery evaluation) |
| Experiment design | Ch 5 (expected improvement acquisition function) | Ch 46 (BALD, active learning, sequential design, stopping rules) | Ch 55 (closed-loop SDL experiments with safety constraints and budget optimization) |
| Evaluation | Ch 23 (coding agent benchmarks: SWE-bench, confidence intervals) | Ch 41 (claim validation: reproducibility auditing, artifact traceability) | Ch 56 (discovery system evaluation: ScienceAgentBench, DiscoveryBench, FrontierMath, construct validity) |
| Multi-agent coordination | Ch 17 (software teams: PM, architect, developer, tester, reviewer roles) | Ch 40 (research agents: literature, coding, analysis, reviewer agents), Ch 54 (debate and adversarial critique) | Ch 53 (AI Co-Scientist multi-agent architecture with generation, debate, evolution, proximity agents) |
| Differentiable programming | Ch 5 (gradients for optimization, GP posterior gradients) | Ch 42 (JAX, adjoint methods, differentiable simulation, vmap/jit/grad) | Ch 49 (differentiable force field calibration: Lennard-Jones parameters via reverse-mode AD) |
| Reproducibility | Ch 2 (replication crisis, scientific method, falsification) | Ch 47 (experiment registries, artifact DAGs, W3C PROV, hash-based integrity) | Ch 57 (governance: approval workflows, audit trails, dual-use screening, publication ethics) |
| Symbolic and neural hybrid | Ch 4 (symbolic reasoning, resolution principle, SymPy) | Ch 29 (AlphaGeometry with synthetic theorems, Lean4 formal proofs, FunSearch) | Ch 35 (symbolic regression discovers interpretable equations from data with PySR) |
| Literature and retrieval | Ch 36 (literature mining: citation analysis, PageRank, claim extraction) | Ch 37 (RAG architecture: PaperQA2, rerankers, faithfulness metrics) | Ch 39 (hypothesis from literature gaps), Ch 53 (AI scientist reads and cites papers autonomously) |

## Linking rules

- When a chapter first touches an arc, link FORWARD ("we will meet this again when ...")
  sparingly (max 1-2 per section) and link BACKWARD generously ("as built in Section X.Y").
- Use the relative path rules in BOOK_CONFIG.md; link to the chapter index or a specific
  section file, never to a heading anchor that does not exist.
- Workbench integration sections (present in every chapter from Ch 6 onward) link back to
  every prior Workbench addition in their part.
