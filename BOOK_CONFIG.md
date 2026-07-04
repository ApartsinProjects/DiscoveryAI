# Book Configuration

This file contains all book-specific details for the textbook production pipeline
(the `book-skills` 42-agent team). The pipeline skill and its agent definitions are
generic; this file is the only place where content specific to THIS book lives.

## Book Identity

- **Title**: Building Discovery AI: From Vibe Coding to Autonomous Science
- **Subtitle**: A practitioner's guide to building AI systems that accelerate scientific research: from intelligent research agents to autonomous discovery pipelines.
- **Authors**: Alexander Apartsin & Yehudit Aperstein
- **Target Audience**: Software engineers, researchers, and domain scientists with Python proficiency and basic linear algebra. No prior ML or domain expertise assumed.
- **Output Format**: HTML chapter files linking to the shared stylesheet `styles/book.css`
- **Author/Footer line**: `© 2026 Alexander Apartsin & Yehudit Aperstein · <a href="../../toc.html">Contents</a>` (adjust relative depth per file location)
- **Edition line for footers**: `Building Discovery AI: From Vibe Coding to Autonomous Science, First Edition`

## The Seven-Part Arc

1. **Part I: Foundations of Discovery AI** (Ch 1-6): discovery as search, scientific knowledge creation, knowledge representation, reasoning, data/models/simulation, system architecture.
2. **Part II: Discovery Through Software Engineering & Vibe Coding** (Ch 7-24): software as discovery, AI-assisted engineering, vibe coding, context engineering, MCP servers, multi-agent teams, MLOps, autonomous software.
3. **Part III: Discovery Through Data & Models** (Ch 25-35): exploratory discovery, representation learning, foundation models, multimodal AI, reasoning models, anomaly detection, causal inference, Bayesian methods, scientific ML, generative models, symbolic regression.
4. **Part IV: Discovery Through Knowledge** (Ch 36-41): literature mining, RAG for discovery, knowledge graphs, hypothesis generation, research agents, claim validation.
5. **Part V: Discovery Through Simulation & Optimization** (Ch 42-47): differentiable programming, scientific simulation, world models, optimization, experiment design, provenance.
6. **Part VI: Discovery in Scientific Domains** (Ch 48-52): biology/medicine, chemistry/materials, physics/engineering, climate/earth science, social/economic systems.
7. **Part VII: Autonomous Discovery Systems** (Ch 53-58): AI scientists, multi-agent discovery, self-driving labs, evaluation, responsible AI, future directions.

A recurring narrative thread: the Discovery Workbench grows across all chapters, from a scaffold in Ch 6 to a complete autonomous discovery platform by Ch 58. Concepts introduced in foundations return applied: search (Ch 1) becomes optimization (Ch 45); knowledge representation (Ch 3) becomes knowledge graphs (Ch 38); reasoning (Ch 4) becomes reasoning models (Ch 29); vibe coding (Ch 9) becomes autonomous software organizations (Ch 24). Agents should exploit these arcs for cross-references (see CROSS_REFERENCE_MAP.md).

## Visual Style

- **Stylesheet**: every HTML file links `styles/book.css` (full callout system, 22 types). Code highlighting uses Prism (vendor) plus `styles/pygments.css`. Math uses KaTeX (vendor).
- **Illustrations**: inline SVG diagrams with `<figure class="diagram">` and numbered `<figcaption>`. Generated PNG illustrations are a later wave (gemini-imagegen); do not block on them.
- **Application Examples**: `.callout.practical-example` boxes, realistic industry and research mini-stories.
- **Bibliographies**: card layout on the chapter index page, 8 to 15 hyperlinked annotated entries.
- **Epigraphs**: humorous quotes attributed to a fictional AI/discovery persona, format "A [Adjective] [Discovery Role]".

### Example epigraph personas (discovery/science-flavored)

- "A Hypothesis That Refused to Be Falsified"
- "A Knowledge Graph With Trust Issues"
- "An Agent That Forgot Its System Prompt"
- "A Bayesian Prior With Strong Opinions"
- "A Diffusion Model, Halfway Through Denoising a Protein"
- "A Self-Driving Lab That Ran Out of Reagents"
- "A Vibe Coder Who Read the Specification"
- "An MCP Server That Lost Its Schema"
- "A Causal Graph With Too Many Confounders"
- "A Foundation Model Pretending to Be a Scientist"

## HTML Head Boilerplate

Section files (`part-*/module-*/section-N.M.html`) use this head (no analytics, no pagefind yet):

```html
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta content="Section N.M: Title. One-sentence description." name="description"/>
<title>Section N.M: Title | Building Discovery AI</title>
<link href="../../styles/book.css" rel="stylesheet"/>
<link href="../../styles/pygments.css" rel="stylesheet"/>
<link href="../../vendor/katex/katex.min.css" rel="stylesheet"/>
<script defer="" src="../../vendor/katex/katex.min.js"></script>
<script defer="" onload="renderMathInElement(document.body, {
  delimiters: [
  {left: '$$', right: '$$', display: true},
  {left: '$', right: '$', display: false}
  ],
  throwOnError: false
  });" src="../../vendor/katex/contrib/auto-render.min.js"></script>
<link href="../../vendor/prism/prism-theme.css" rel="stylesheet"/>
<script defer="" src="../../vendor/prism/prism-bundle.min.js"></script>
<script defer="" src="../../scripts/book.js"></script>
```

Chapter index files (`part-*/module-*/index.html`) use the same with the same `../../` depth.
Part index files (`part-*/index.html`) use `../` depth. Root files use no prefix.

Every page carries the standard header:

```html
<header class="chapter-header">
<nav class="header-nav">
<a class="book-title-link" href="../../index.html">Building Discovery AI: From Vibe Coding to Autonomous Science</a>
<a class="toc-link" href="../../toc.html" title="Table of Contents"><span class="toc-icon">&#9776;</span> Contents</a>
</nav>
<div class="part-label"><a href="../index.html">Part [ROMAN]: [PART TITLE]</a></div>
<div class="chapter-label"><a href="index.html">Chapter [N]: [CHAPTER TITLE]</a></div>
<h1>[SECTION TITLE]</h1>
</header>
```

## Chapter Map (Current Structure)

Module directory numbers equal global chapter numbers (1 to 58). The canonical
section-level breakdown lives in `toc.html` (the detailed ToC); this map is the
chapter-level source of truth.

```
Part 1: Foundations of Discovery AI (part-1-foundations/)
  Ch 1: Discovery as Search                                    module-01-discovery-as-search
  Ch 2: Scientific Discovery and Knowledge Creation             module-02-scientific-discovery
  Ch 3: Knowledge Representation                                module-03-knowledge-representation
  Ch 4: Reasoning for Discovery                                 module-04-reasoning-for-discovery
  Ch 5: Discovery Through Data, Models, and Simulation          module-05-data-models-simulation
  Ch 6: Discovery System Architecture                           module-06-system-architecture

Part 2: Discovery Through Software Engineering & Vibe Coding (part-2-software-engineering/)
  Ch 7: Software Development as a Discovery Process             module-07-software-discovery
  Ch 8: Foundations of AI Assisted Software Engineering          module-08-ai-software-foundations
  Ch 9: Vibe Coding as Specification, Steering, Verification    module-09-vibe-coding
  Ch 10: Prompting to Programming                               module-10-prompting-to-programming
  Ch 11: Context Engineering at Repository Scale                module-11-context-engineering
  Ch 12: Building MCP Servers for Scientific Workflows          module-12-mcp-servers
  Ch 13: Discovery of Requirements                              module-13-requirements-discovery
  Ch 14: Discovery of Architectures                             module-14-architecture-discovery
  Ch 15: Discovery of Algorithms                                module-15-algorithm-discovery
  Ch 16: AI Assisted Implementation at Repository Scale         module-16-ai-implementation
  Ch 17: Multi-Agent Software Teams                             module-17-multi-agent-teams
  Ch 18: AI Assisted Testing and QA                             module-18-ai-testing
  Ch 19: AI Assisted Debugging                                  module-19-ai-debugging
  Ch 20: AI for Software Security                               module-20-software-security
  Ch 21: AI for DevOps and Platform Engineering                 module-21-devops
  Ch 22: MLOps, LLMOps, and AgentOps                            module-22-mlops-llmops
  Ch 23: Evaluating AI Coding Agents                            module-23-evaluating-agents
  Ch 24: Autonomous Software Organizations                      module-24-autonomous-software

Part 3: Discovery Through Data & Models (part-3-data-models/)
  Ch 25: Exploratory Discovery                                  module-25-exploratory-discovery
  Ch 26: Representation Learning                                module-26-representation-learning
  Ch 27: Scientific Foundation Models                           module-27-foundation-models
  Ch 28: Multimodal Scientific AI                               module-28-multimodal-scientific-ai
  Ch 29: Reasoning Models for Discovery                         module-29-reasoning-models
  Ch 30: Anomaly and Novelty Discovery                          module-30-anomaly-novelty
  Ch 31: Causal Discovery and Causal Inference                  module-31-causal-discovery
  Ch 32: Bayesian Discovery and Uncertainty                     module-32-bayesian-discovery
  Ch 33: Scientific Machine Learning                            module-33-scientific-ml
  Ch 34: Generative Models for Discovery                        module-34-generative-models
  Ch 35: Symbolic Regression and Equation Discovery             module-35-symbolic-regression

Part 4: Discovery Through Knowledge (part-4-knowledge/)
  Ch 36: Literature Mining                                      module-36-literature-mining
  Ch 37: Retrieval Augmented Discovery Systems                  module-37-rag-discovery
  Ch 38: Knowledge Graph Discovery                              module-38-knowledge-graphs
  Ch 39: Hypothesis Generation                                  module-39-hypothesis-generation
  Ch 40: Research Agents                                        module-40-research-agents
  Ch 41: Scientific Claim Validation                            module-41-claim-validation

Part 5: Discovery Through Simulation & Optimization (part-5-simulation-optimization/)
  Ch 42: Differentiable Programming for Discovery               module-42-differentiable-programming
  Ch 43: Scientific Simulation                                  module-43-scientific-simulation
  Ch 44: World Models for Discovery                             module-44-world-models
  Ch 45: Optimization for Discovery                             module-45-optimization
  Ch 46: Automated Experiment Design                            module-46-experiment-design
  Ch 47: Experiment Registries and Scientific Provenance         module-47-experiment-registries

Part 6: Discovery in Scientific Domains (part-6-scientific-domains/)
  Ch 48: Discovery AI for Biology and Medicine                  module-48-biology-medicine
  Ch 49: Discovery AI for Chemistry and Materials               module-49-chemistry-materials
  Ch 50: Discovery AI for Physics and Engineering               module-50-physics-engineering
  Ch 51: Discovery AI for Climate and Earth Science             module-51-climate-earth
  Ch 52: Discovery AI for Social and Economic Systems           module-52-social-economic

Part 7: Autonomous Discovery Systems (part-7-autonomous-discovery/)
  Ch 53: AI Scientists                                          module-53-ai-scientists
  Ch 54: Multi-Agent Discovery Systems                          module-54-multi-agent-discovery
  Ch 55: Self-Driving Laboratories                              module-55-self-driving-labs
  Ch 56: Evaluating Discovery Systems                           module-56-evaluating-discovery
  Ch 57: Responsible Discovery AI                               module-57-responsible-discovery
  Ch 58: Future Directions                                      module-58-future-directions
```

Appendices live in `appendices/` (A-G):

```
Appendix A: Mathematical Foundations                            appendix-a
Appendix B: Python for Discovery AI                             appendix-b
Appendix C: Vibe Coding Practitioner Guide                      appendix-c
Appendix D: Discovery AI Tool Ecosystem                         appendix-d
Appendix E: Research Paper Reading Guide                        appendix-e
Appendix F: Reproducibility and Artifact Guide                  appendix-f
Appendix G: Discovery AI Capstone Projects                      appendix-g
```

Appendix G offers six capstone tracks: Graduate Research, Software Practitioner,
Scientific Computing, Knowledge Systems, Generative Discovery, Domain Application.

Front matter lives in `front-matter/`. See `toc.html` for the full plan.

## Relative Path Rules

- Same part: `../module-XX-name/index.html`
- Different part: `../../part-N-name/module-XX-name/index.html`
- To book root from a section file: `../../`

## Batch Partitioning (for parallel agent runs)

- Batch A: Part 1 (Ch 1-6, 6 modules)
- Batch B: Part 2 (Ch 7-24, 18 modules)
- Batch C: Part 3 (Ch 25-35, 11 modules)
- Batch D: Part 4 (Ch 36-41, 6 modules)
- Batch E: Part 5 (Ch 42-47, 6 modules)
- Batch F: Part 6 (Ch 48-52, 5 modules)
- Batch G: Part 7 (Ch 53-58, 6 modules)

Two agents must never edit the same file at overlapping times. One chapter equals
one file set; different chapters may proceed in parallel; agent waves within a
chapter run strictly in sequence.

## The "Right Tool" Principle

Every section that teaches a concept from scratch must also include a
`.callout.library-shortcut` showing the same task solved in a few lines with a modern
library (LangChain, LlamaIndex, Hugging Face, PyTorch, scikit-learn, NetworkX, SymPy,
JAX, DeepChem, RDKit, etc.). State the line-count reduction explicitly and name what
the library handles internally.

## QA Audit Pipeline

Two complementary gates, both run before any "done" or publish claim:

1. `C:\Python314\python.exe scripts\audit_book.py`: DiscoveryAI-specific content canaries
   (file completeness vs toc.html, dash discipline, per-section structure, link integrity).
2. `scripts\run_audit.cmd`: the book-skills audit-plugin pipeline (150 pluggable checks,
   P0-P3), the same system that gates the LLMBook and VisionBook. P0 includes the
   KDP/Kindle blockers (strict XHTML, bare-dollar math, unresolvable font weights).
   Auto-fix scripts for many check classes live in
   `E:\Projects\claude-skills\book-skills\scripts\fix\`.

## Style Rules (non-negotiable)

1. NEVER use em dashes or double dashes anywhere. Use commas, semicolons, colons, parentheses, or separate sentences.
2. Book hierarchy terminology: Part > Chapter > Section. Never "course", "lecture", "module" in reader-facing prose (directory names keep `module-NN` for tooling compatibility).
3. Every figure, table, code block, and callout must be referenced in surrounding prose.
4. Code captions (`<div class="code-caption">`) go BELOW the code block, are specific, and are unique within a file.
5. Every chapter index ends with a "What's Next" section linking the next chapter, placed before the bibliography.
6. Use `.part-label` (not `.subtitle`) for the Part label in headers.
7. No placeholder text of any kind. Every section ships complete or is not created.
