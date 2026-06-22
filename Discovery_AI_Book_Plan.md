# Building Discovery AI
## From Vibe Coding to Autonomous Science

## About the Hands-On AI Science Series

*Building Discovery AI* is part of **Hands-On AI Science**, a series that pairs serious depth with serious building.

Most AI books pick a side. Some are reference manuals for an API or a library: handy this year, stale the next, and quiet about why anything works. Others are theory texts you admire but rarely run. Hands-On AI Science was created to be both at once: the science and the build, in one connected story.

Each book in the series takes a single field of AI and develops it from first principles to the current research frontier. It treats the subject at graduate depth, with a real dive into the theories, models, and internals, and it aims to be complete, placing the classical foundations and the newest approaches side by side. Then it makes you build. Every core idea is implemented in plain Python, first in a small from-scratch version that exposes the mechanism, then with the modern libraries and tools that do the job quickly. That hands-on half is where the series gets its name.

**What "Hands-On AI Science" promises:** It is hands-on: it shows you how to build things. It is science: it does not stop at the API, and it takes the scientific and philosophical questions behind the models seriously. And it is AI: from the basics through the frontier.

Depth need not be dense. The series explains in plain language and leans on illustrations, analogies, mental models, and step-by-step reasoning, with epigraphs and a light tone that make the books genuinely pleasant to read. Next to the science you will find implementation best practices, rules of thumb, case studies, and the engineering issues that decide whether a method survives contact with real data.

Each volume is self-contained and structured to support a full undergraduate or graduate course, or a focused seminar on any one of its parts.

### The Books in the Series

1. **Building Language AI**: From Tokens to Agents
2. **Building Vision AI**: From Pixels to Generative Models
3. **Building Temporal AI**: From Forecasting to Sequential Decision Making
4. **Building Scalable AI**: From Big Data Algorithms to Distributed Intelligence
5. **Building Embodied AI**: From Sensors to Autonomous Action
6. **Building Agentic AI**: From Reactive Models to Autonomous Intelligent Systems
7. **Building Discovery AI**: From Vibe Coding to Autonomous Science *(this book)*

***

# Book Description

*Building Discovery AI* studies how artificial intelligence can assist, accelerate, and eventually automate the creation of software, knowledge, hypotheses, experiments, products, and scientific discoveries.

The book presents software engineering, scientific research, and innovation as discovery processes. Readers learn how modern AI systems participate in requirements discovery, architecture design, code generation, experimentation, causal analysis, hypothesis generation, literature mining, optimization, and autonomous research.

The book's central thesis is:

> Discovery AI is scientific reasoning plus executable software systems, developed through human-agent collaboration.

The arc runs from the practical to the autonomous. Part II develops vibe coding as a rigorous discipline: from natural language specification through multi-agent software teams to fully supervised coding organizations. Parts III-V develop the scientific toolkit: foundation models for proteins, molecules, and materials; multimodal AI; reasoning models; generative models for molecular design; differentiable programming; Bayesian and causal inference; simulation and optimization. Parts VI-VII apply these tools across scientific domains and culminate in autonomous AI scientists, self-driving laboratories, and multi-agent discovery teams.

A single platform called the **Discovery Workbench** grows across all chapters. By the end it can read a research area, build software from intent, design experiments, generate hypotheses, run simulations, and produce a reproducible evidence report.

The book combines:

- Scientific methodology and formal models of discovery as search, inference, and optimization
- Vibe coding as a rigorous engineering discipline: specification, steering, verification, and repair
- Context engineering and MCP server development for scientific agent workflows
- Scientific foundation models for molecules, proteins, materials, and genomes (ESM-3, AlphaFold3, GNoME, Uni-Mol2)
- Multimodal scientific AI bridging text, structure, sequence, and image
- Reasoning models and chain-of-thought for mathematical and scientific inference (o1/o3, AlphaProof, FunSearch)
- Generative models for molecular, protein, and material design (diffusion, flow matching, equivariant architectures)
- Causal and Bayesian reasoning under uncertainty
- Differentiable programming in JAX for physics-informed discovery
- Research agents, copilots, and autonomous discovery systems (AI Scientist, Coscientist, AI Co-Scientist)
- Self-driving laboratories and closed-loop experimentation
- Governance, reproducibility, and scientific integrity

Every chapter includes conceptual foundations, formal models, mathematical derivations, research background, hands-on coding examples, modern libraries, reproducible recipes, evaluation methods, failure modes, and research directions. Graduate depth sections connect implementations to theory in both directions.

***

# Who Should Read This Book

Three readers are at the center of the audience.

**The software engineer building AI-powered research or development tools.** You ship code, you have wired up LLM APIs, and you are increasingly asked to build systems that reason about code, literature, or scientific data. You want to understand how coding agents actually work, how to build reliable agentic workflows, and how to connect AI tools to scientific databases and instruments. Part II is your home base; the discovery system architecture chapters give you the platform design you need. Vibe coding in this book is not a shortcut — it is a discipline with specification, verification, and repair steps that you can teach to a team.

**The graduate student or researcher.** You read arXiv weekly. You need a foundation that lets the latest papers feel like an extension of what you already know rather than a discontinuity. You want the mathematical machinery — score functions, equivariant architectures, causal graphs, posterior predictive checks — derived carefully, not just cited. Parts I, III, IV, V, and VI are the scientific core. The graduate depth sections in each chapter connect implementations to theory in both directions.

**The domain scientist adding AI to a research workflow.** You are a chemist, biologist, physicist, or climate scientist who needs to understand which AI tools are genuinely useful for your field, how to evaluate their outputs rigorously, and how to build reproducible pipelines that produce defensible claims. Part VI covers your domain; Parts III-V supply the methods. The Discovery Workbench gives you a practical architecture for a human-supervised AI research assistant.

**What background is assumed:** Python proficiency, basic linear algebra, and comfort reading mathematical notation. The book does not assume prior machine learning, deep learning, or scientific domain expertise — it builds what it needs.

***

# Reading Paths

The book supports three non-exclusive reading paths:

**Graduate Research Path** (foundations-heavy): Parts I, III, IV, V, VI, VII with mathematical depth sections. Chapters: 1-6, 25-35, 36-41, 42-52, 53-58. Supports a full-semester graduate course on AI for scientific discovery.

**Software Practitioner Path** (vibe-coding-heavy): Parts I and II in full, then selected domain and agent chapters. Chapters: 1-6, 7-24, 36-41, 47, 53-57. Supports a course or intensive on AI-assisted software engineering and research agent development.

**Domain Scientist Path** (application-heavy): Part I, selected methods from Parts III-V, full Part VI. Chapters: 1-6, 27-35, 36-41, 42-47, 48-52. Supports a course on AI tools for computational science or a domain-specific seminar.

***

# Learning Outcomes

By the end of the book readers will be able to:

- Model discovery as search, inference, optimization, and experimentation with formal mathematical tools
- Build AI assisted software engineering workflows using coding agents, vibe coding, and MCP servers
- Use and fine-tune scientific foundation models for molecules, proteins, materials, and genomes
- Build multimodal scientific AI systems that connect text, structure, image, and sequence
- Apply reasoning models and chain-of-thought prompting to mathematical and scientific problems
- Design AI research assistants and research copilots with evidence grounding
- Construct discovery-oriented knowledge systems with hypothesis generation
- Implement causal, Bayesian, and optimization-based discovery workflows
- Build differentiable scientific programs using JAX and automatic differentiation
- Develop generative models for molecular, protein, and material design
- Build autonomous research agents and multi-agent discovery teams
- Evaluate discovery systems scientifically against construct-matched baselines
- Deploy practical discovery systems with observability, provenance, and governance

***

# Pedagogical Pattern

Each chapter uses a consistent high-value structure.

## Chapter Pattern

- **Problem:** What discovery task is being solved and why it matters.
- **Scientific model:** Search space, probabilistic model, causal graph, optimizer, simulator, generative model, agent loop, or repository graph.
- **Mathematics:** Core definitions, assumptions, objective functions, key derivations, uncertainty quantification, and validity conditions.
- **Software model:** Data structures, APIs, tools, orchestration patterns, tests, and artifact flow.
- **Graduate depth:** A worked theoretical example, a proof sketch, or a detailed derivation that connects the math to the implementation.
- **Library stack:** Production-grade tools and research libraries with version notes.
- **Recipe:** A concrete implementation with runnable, reproducible code.
- **Evaluation:** Metrics, baselines, ablations, robustness checks, and reproducibility artifacts.
- **Failure modes:** What breaks, why, and how to diagnose it.
- **Workbench integration:** How this chapter's component connects to the Discovery Workbench platform.
- **Research extension:** A publishable next question with pointers to open problems.
- **Practitioner extension:** A deployable next feature with production considerations.

## Recurring Reference System

The book builds one cumulative platform across chapters:

**Discovery Workbench:** a human-supervised AI discovery platform that combines coding agents, literature search, knowledge graphs, causal analysis, experiment planning, optimization, evaluation, and report generation.

The platform is introduced in Chapter 6 and receives a concrete addition in every subsequent chapter. By the final chapters it supports:

- Reading and summarizing a research area with evidence grounding
- Building a software prototype from natural language intent
- Inspecting, navigating, and modifying large repositories
- Designing experiments and managing their lifecycle
- Running simulations and model training with provenance
- Tracking artifacts, configurations, and data lineage
- Generating and ranking hypotheses against literature evidence
- Evaluating claims against artifacts and reproducible runs
- Producing a reproducible research report with citation backing

***

# Core Models Used Throughout The Book

- **Discovery as search:** state spaces, action spaces, objectives, utility, information gain, regret, exploration versus exploitation.
- **Scientific inference:** likelihoods, priors, posteriors, posterior predictive checks, model comparison, calibration.
- **Causal discovery and inference:** structural causal models, DAGs, interventions, counterfactuals, refutation.
- **Foundation models:** pre-training objectives, fine-tuning, adaptation, in-context learning, emergent capabilities.
- **Reasoning chains:** chain-of-thought, process reward models, tree search over reasoning steps, formal proof states.
- **Generative models:** variational autoencoders, score-based diffusion, flow matching, equivariant architectures, property-conditioned sampling.
- **Differentiable programming:** automatic differentiation, adjoint methods, differentiable simulation, gradient-based optimization of physical systems.
- **Software discovery:** repository graphs, dependency graphs, program dependence graphs, issue to patch search, test oracles.
- **Agent systems:** tool use policies, planner-executor loops, workflow graphs, memory, reflection, human approval, multi-agent coordination.
- **Knowledge discovery:** embeddings, vector search, citation graphs, link prediction, graph neural networks, semantic retrieval.
- **Optimization:** Bayesian optimization, evolutionary search, active learning, reinforcement learning, multi-objective optimization.
- **Simulation:** computational experiments, digital twins, agent-based models, world models, synthetic data generation.
- **Evaluation:** construct validity, benchmark leakage, reproducibility, uncertainty, human evaluation, cost and latency.

***

# Core Library And Platform Stack

## Scientific Computing And Modeling

- Python, Jupyter, NumPy, SciPy, pandas, Polars, DuckDB
- PyTorch, JAX, Flax, Equinox, diffrax for differentiable programming
- Hugging Face Transformers, Accelerate, PEFT (LoRA, adapters)
- scikit-learn, imbalanced-learn for classical methods
- PyMC, ArviZ, NumPyro for Bayesian modeling
- DoWhy, EconML, causal-learn for causal inference and discovery
- NetworkX, Neo4j, RDFLib, PyTorch Geometric for graphs
- PySR, SymPy, SciML tools for symbolic and equation discovery
- Optuna, BoTorch, Ray Tune, DEAP for optimization

## Scientific Domain Libraries

- ESM (EvolutionaryScale) for protein language models
- fair-esm, ProteinMPNN, RFDiffusion for protein design
- RDKit, DeepChem, torchdrug for chemistry and molecules
- MatterSim, MACE, CHGNet, SevenNet for materials force fields
- PyTorch Geometric, DGL for molecular and crystal graphs
- BioPython, MDAnalysis, OpenMM for molecular simulation
- JAX-MD, TorchMD-Net for differentiable molecular dynamics
- xarray, Zarr, earthengine-api, pangeo for earth science
- scVI, scANVI, Geneformer for single-cell genomics

## AI Assisted Software And Agents

- Claude Code, Codex CLI, Codex SDK, Cursor, Windsurf, Aider
- OpenAI Agents SDK, Anthropic API (claude-sonnet-4-6, claude-opus-4-8)
- Model Context Protocol (MCP) SDK for Python and TypeScript
- LangGraph, AutoGen, CrewAI for multi-agent orchestration
- DSPy for optimizing language model programs
- SWE-bench and repository task suites for coding agent evaluation

## Retrieval, Knowledge, And Data Systems

- OpenAlex, Semantic Scholar, Crossref, arXiv APIs
- PaperQA2 for literature-grounded question answering
- Qdrant, Weaviate, LanceDB, Chroma, FAISS for vector search
- PostgreSQL, pgvector, SQLite, DuckDB for structured storage
- Unstructured, PyMuPDF, Docling for document parsing
- LlamaIndex for retrieval pipeline construction

## Experiment Tracking And Deployment

- Git, GitHub Actions, pre-commit, pytest, Hypothesis, Playwright
- MLflow, Weights and Biases, DVC for experiment tracking
- Docker, devcontainers, FastAPI, Streamlit, Gradio
- OpenTelemetry, LangSmith, Arize Phoenix for observability

***

# Part I: Foundations Of Discovery AI

## Chapter 1. Discovery As Search

- Discovery, invention, and innovation as human activities
- Search spaces, solution spaces, and objective functions
- Utility, regret, information gain, and uncertainty
- Exploration versus exploitation: bandit problems and beyond
- Discovery workflows as state transition systems
- The role of AI in accelerating search

### Model

- Search problem: states S, actions A, transition function T, objective f, constraints C
- Multi-objective discovery with cost, novelty, validity, and impact
- Regret bounds for exploration strategies

### Mathematics

- Formal definition of a discovery problem as a tuple (S, A, T, f, C)
- Information gain as the reduction in entropy of the hypothesis distribution
- Upper confidence bound (UCB) derivation and regret analysis

### Tools

- Python, Jupyter, NetworkX, NumPy

### Recipe

Build a discovery simulator that searches a parametric design space, logs explored states and their evaluations, and compares random search, greedy search, UCB, and Thompson sampling on a synthetic objective.

***

## Chapter 2. Scientific Discovery And Knowledge Creation

- Scientific method: observation, hypothesis, prediction, experiment, revision
- Falsification and the Popperian framework
- Reproducibility and the replication crisis
- Bayesian science: prior beliefs, evidence, and posterior beliefs
- Measurement, uncertainty, and construct validity
- Modern AI assisted science: what changed and what did not

### Model

- Bayesian update: P(H|E) proportional to P(E|H) P(H)
- Hypothesis space and evidence structure
- Posterior predictive checking

### Mathematics

- Bayes theorem and conjugate priors
- Likelihood ratio test and model comparison via Bayes factors
- Calibration: expected calibration error and reliability diagrams

### Tools

- PyMC, ArviZ, pandas

### Recipe

Build a Bayesian hypothesis comparison notebook: specify two competing models, update each on synthetic evidence, compare via Bayes factors, and generate a reproducible evidence table.

***

## Chapter 3. Knowledge Representation

- Logic and formal languages
- Ontologies and schema languages
- Semantic networks and frames
- Knowledge graphs: triples, entities, relations
- Embeddings: from words to concepts
- Vector databases and hybrid retrieval
- When to use each representation

### Model

- Symbolic facts as triples (subject, predicate, object)
- Graph G = (V, E, L) with typed vertices and labeled edges
- Dense vectors in a metric space, cosine similarity, HNSW index

### Mathematics

- Description logic expressivity and complexity
- Embedding objectives: TransE, RotatE, ComplEx loss functions
- Approximate nearest neighbor: HNSW graph construction and search

### Tools

- Neo4j, RDFLib, NetworkX, Qdrant, pgvector

### Recipe

Create a scientific concept graph from a small paper collection, build a hybrid search index combining sparse BM25 and dense embeddings, and demonstrate that hybrid retrieval outperforms either alone on a held-out query set.

***

## Chapter 4. Reasoning For Discovery

- Deductive reasoning and logical consequence
- Inductive reasoning and generalization
- Abductive reasoning and explanation
- Analogical reasoning and structure mapping
- Causal reasoning: interventions and counterfactuals
- Reasoning in language models: chain-of-thought, scratchpad, tool use
- AlphaGeometry and formal mathematical reasoning
- Reasoning failures: hallucination, inconsistency, and brittleness

### Model

- Inference rule systems and resolution
- Abductive explanation: find H such that H and background knowledge entail observation
- Analogical mapping: structure alignment between source and target domains
- Causal graph queries: P(Y|do(X)) via the do-calculus

### Mathematics

- Resolution principle and soundness
- Structure mapping formalism (Gentner)
- Causal identification conditions via do-calculus rules 1-3

### Tools

- Python, SymPy, NetworkX, Anthropic API or local reasoning models

### Recipe

Build a reasoning pipeline that accepts a scientific observation, proposes abductive explanations using a language model, scores them by plausibility (Bayesian prior) and testability (experiment cost estimate), and outputs a ranked hypothesis list.

***

## Chapter 5. Discovery Through Data, Models, And Simulation

- Data-driven discovery: from observations to patterns
- Theory-driven discovery: from equations to predictions
- Simulation-driven discovery: computational experiments
- Hybrid approaches: theory-informed learning
- Digital twins and surrogate models
- The role of uncertainty in choosing what to observe next

### Model

- Surrogate model f_hat approximating expensive simulator f
- Epistemic uncertainty via ensembles or Bayesian neural networks
- Active learning criterion: query x* = argmax Var[f_hat(x)]

### Mathematics

- Gaussian process surrogate: posterior mean and variance
- Uncertainty decomposition: aleatoric versus epistemic
- Expected improvement acquisition function derivation

### Tools

- PyTorch, JAX, scipy, scikit-learn, GPyTorch

### Recipe

Fit a Gaussian process surrogate for a simulated physical phenomenon, use expected improvement to select the next experiment, and demonstrate that active learning reaches a target accuracy with fewer queries than random sampling.

***

## Chapter 6. Discovery System Architecture

- Discovery workbench architecture overview
- Data, code, models, tools, agents, memory, and provenance layers
- Artifact graphs: typed nodes, versioned edges, evidence links
- Human approvals, audit trails, and intervention points
- Sandboxes and safety boundaries for agent execution
- Cost, latency, reliability, and observability
- Bootstrapping the Discovery Workbench

### Model

- Discovery workflow graph: typed artifacts (data, code, model, report) with evidence links
- Run record schema: inputs, code hash, environment, outputs, metrics, claims
- Human-in-the-loop gate: approval state machine

### Mathematics

- Artifact dependency graph as a DAG; topological sort for reproduction
- Provenance path: trace any output back to raw inputs through a sequence of transforms

### Tools

- FastAPI, SQLite or PostgreSQL, MLflow, Git, Docker, OpenTelemetry

### Recipe

Build the Discovery Workbench v0: artifact registry with typed schemas, task log with run metadata, API layer, and a CLI that can reproduce any past result from its stored configuration.

***

# Part II: Discovery Through Software Engineering And Vibe Coding

## Chapter 7. Software Development As A Discovery Process

- SDLC as iterative hypothesis testing
- Agile and lean as discovery methodologies
- Design thinking and product discovery
- Engineering discovery: architecture, algorithm, and API selection
- Software as an evolving scientific hypothesis
- How AI changes the discovery loop

### Model

- Requirement hypothesis, implementation artifact, test evidence, user feedback loop
- Discovery velocity: hypotheses tested per unit cost

### Mathematics

- Search over a space of implementations: expected regret of a greedy development strategy

### Tools

- Git, GitHub, issue trackers, pytest, linear-style project management

### Recipe

Convert a vague product idea into a set of falsifiable hypotheses, user stories with acceptance criteria, and an initial repo structure with passing skeleton tests.

***

## Chapter 8. Foundations Of AI Assisted Software Engineering

- Code foundation models: pre-training, fine-tuning, in-context learning
- Program synthesis: specification, search, and verification
- Repository-level reasoning: dependency graphs, call graphs, symbol tables
- Human-AI collaboration patterns: pair programming, review, delegation
- AI coding ecosystems: capabilities and limitations
- Context management: what goes in the prompt and why

### Platforms

- Claude Code, Codex CLI, Cursor, Windsurf, Aider

### Model

- Issue-to-patch search: from natural language description to a diff
- Repository context graph: file nodes, import edges, symbol references
- Test-guided repair: failing test as oracle for patch search

### Mathematics

- Repository as a typed dependency graph; patch validity as satisfying test oracle T(patch) = pass

### Recipe

Use a coding agent to implement a non-trivial feature in a small repository, write tests before and after, capture the agent's reasoning trace, and review the diff systematically.

***

## Chapter 9. Vibe Coding As Specification, Steering, Verification, And Repair

- Natural language as partial specification
- Intent elicitation: how to say what you mean
- Conversational development: iterative refinement
- Steering by tests, traces, screenshots, and artifacts
- Verification: how to trust AI-generated code
- Repair: what to do when the agent goes wrong
- The vibe coding loop formalized

### Model

- Vibe coding loop: specify intent → generate → observe artifact → steer or verify → commit or repair
- Prompt as partial specification P: functional requirements + constraints + examples
- Test suite T as executable contract: T(artifact) = pass implies artifact is valid

### Mathematics

- Specification completeness: the gap between natural language intent and formal specification
- Test coverage as a lower bound on specification coverage

### Tools

- Claude Code, pytest, Playwright, Hypothesis, Pydantic

### Recipe

Build a small web application through conversation: write failing tests first, steer the agent with test output and screenshots, verify the full test suite passes, and document the steering decisions as a reproducible workflow.

***

## Chapter 10. Prompting To Programming

- Structured outputs and JSON schemas
- Tool definitions and function calling
- Typed agent interfaces with Pydantic
- Programmatic prompt optimization with DSPy
- Skills, workflows, and reusable agent components
- From ad hoc prompts to maintainable programs

### Model

- Language model program: inputs I, outputs O, metrics M, optimizer OPT
- DSPy module: signature, predictor, and compiled prompt

### Mathematics

- Prompt optimization as a discrete search problem
- Metric-guided few-shot selection: maximize metric over a validation set

### Tools

- DSPy, Pydantic, OpenAI Agents SDK, Anthropic SDK, Model Context Protocol

### Recipe

Convert an informal literature review prompt chain into a typed, testable, optimizable DSPy program with explicit input/output schemas, an evaluation set, and a compiled prompt that outperforms the hand-written baseline.

***

## Chapter 11. Context Engineering At Repository Scale

- Why context is the bottleneck for coding agents
- Repository structure: file trees, import graphs, symbol tables, call graphs
- Chunking strategies: syntactic, semantic, and hierarchical
- Summarization pipelines for large codebases
- Retrieval-augmented code generation: embedding code, BM25, hybrid search
- Context compression and distillation
- Agent memory across sessions: episodic and semantic
- Benchmark: how context strategy affects patch quality on SWE-bench tasks

### Model

- Repository as a typed labeled graph R = (V_files, V_symbols, E_import, E_call, E_define)
- Context budget B: token limit, relevance score, and selection policy
- Recall@k and MRR for context retrieval evaluation

### Mathematics

- Optimal context selection as a knapsack problem under token budget
- Hierarchical summarization: entropy compression ratio and information loss bounds

### Tools

- tree-sitter for syntax-aware parsing, ripgrep for search
- sentence-transformers, pgvector for code embedding and retrieval
- Claude Code SDK for context management, tiktoken for token counting

### Recipe

Build a repository intelligence layer: parse a 50k+ LOC Python codebase with tree-sitter, build a symbol dependency graph, embed code chunks, and provide a retrieval API that gives a coding agent targeted context for a multi-file change task.

***

## Chapter 12. Building MCP Servers For Scientific Workflows

- Model Context Protocol architecture: hosts, clients, servers, and transports
- Tool definitions: JSON Schema, descriptions, and validation
- Resource definitions: structured data sources and subscriptions
- Prompt templates: reusable conversational patterns
- Implementing an MCP server in Python and TypeScript
- Scientific tool integration: literature databases, chemistry APIs, instrument interfaces
- Authentication, sandboxing, and rate limiting
- Testing MCP servers: unit tests, integration tests, contract tests
- Publishing, versioning, and discovery

### Model

- MCP as typed tool interface: tool schema T = (name, description, input_schema, output_schema)
- Composition: agent calls tools, gets structured results, reasons over them

### Mathematics

- Tool schema as a typed API contract; validation as type checking

### Tools

- MCP SDK (Python and TypeScript), FastAPI, pytest, Docker
- Pydantic for schema validation, httpx for testing

### Recipe

Build an MCP server that exposes three scientific tools as typed endpoints: PubChem molecular property lookup, OpenAlex literature search, and a local vector database query. Write integration tests with mock and real backends. Connect the server to Claude Code and demonstrate a research agent using all three tools in a single session.

***

## Chapter 13. Discovery Of Requirements

- Stakeholders, goals, and context
- User stories, use cases, and acceptance criteria
- Requirement elicitation: interviews, observation, document analysis
- AI-assisted requirement extraction from transcripts and tickets
- Requirement validation: completeness, consistency, testability
- Requirement traceability from story to test to implementation
- Ambiguity and conflict detection

### Model

- Requirement graph: nodes = requirements, edges = conflicts, supports, refines
- Traceability matrix: requirements × tests × implementations

### Mathematics

- Conflict detection as satisfiability over a constraint graph
- Coverage score: percentage of requirements with linked passing tests

### Tools

- LLM extraction via Anthropic or OpenAI API, NetworkX for traceability graphs, issue trackers

### Recipe

Build a requirement discovery assistant: ingest interview transcripts and support tickets, extract candidate requirements with an LLM, cluster them, detect conflicts, link each to an acceptance test template, and produce a traceability matrix.

***

## Chapter 14. Discovery Of Architectures

- Architectural styles: microservices, event-driven, layered, hexagonal
- Design patterns and quality attributes
- Architecture decision records and fitness functions
- AI-assisted architecture generation and tradeoff analysis
- Architecture evaluation: performance, reliability, security, evolvability
- Diagrams as living artifacts

### Model

- Architecture as a component graph A = (C, D, Q) with components, dependencies, and quality attribute scores
- Design space D_A: finite set of architecture candidates with tradeoff scores

### Mathematics

- Pareto frontier over quality attributes; dominated solution pruning
- Fitness function F: architecture → quality score vector

### Tools

- Mermaid, Structurizr, NetworkX for architecture graphs
- Coding agents for architecture generation and evaluation

### Recipe

Generate three architectures for the same system using a coding agent with explicit tradeoff criteria, evaluate each against fitness functions for latency, fault tolerance, and deployment cost, and produce an architecture decision record for the Pareto-optimal choice.

***

## Chapter 15. Discovery Of Algorithms

- Algorithm search as exploration of a complexity-correctness space
- Complexity analysis: time, space, and communication
- Data structure selection and its algorithmic consequences
- Program synthesis for algorithms
- Benchmarking methodology: micro-benchmarks, profiling, reproducibility

### Model

- Algorithm candidate set A = {a_1, ..., a_k}, complexity estimates O(a_i), empirical benchmarks B(a_i)
- Benchmark validity: construct-matched metrics on representative inputs

### Mathematics

- Asymptotic analysis and constant factor estimation
- Statistical comparison of benchmark distributions: Mann-Whitney U, confidence intervals

### Tools

- Python benchmarking (timeit, memory_profiler), NumPy, Numba, Claude Code, Hypothesis

### Recipe

Ask a coding agent to propose three algorithms for a scientific data processing task, implement them, run reproducible benchmarks with statistical comparison, and select a winner with construct-matched justification.

***

## Chapter 16. AI Assisted Implementation At Repository Scale

- Code generation for multi-file changes
- Repository-scale reasoning: impact analysis, change propagation
- Tool use in coding agents: search, read, edit, run, test
- Context engineering for large changes
- Patch review: what to check and how
- Failure patterns in large agent changes

### Model

- Repository graph plus issue, patch, test, review loop
- Impact set I(patch): files and symbols affected by a change

### Mathematics

- Change propagation in a dependency graph: reachability from modified nodes

### Tools

- Claude Code SDK, GitHub API, pytest, ripgrep, tree-sitter

### Recipe

Implement a multi-file change in a real open-source repository with a coding agent: construct the repository graph, select context, generate the patch, run the full test suite, capture the reasoning trace, and produce a reviewable diff with an automated impact analysis.

***

## Chapter 17. Multi-Agent Software Teams

- Product manager, architect, developer, tester, and reviewer agent roles
- Workflow graphs: sequential, parallel, conditional, and looping
- Shared state and message passing between agents
- Debate and critique patterns for code quality
- Human approval gates: when and how to interrupt
- Failure recovery in multi-agent workflows

### Frameworks

- OpenAI Agents SDK, LangGraph, AutoGen, CrewAI

### Model

- Workflow graph W = (A, E, S, G) with agents, edges, shared state, and gate conditions

### Mathematics

- Workflow completion time under parallel execution
- Information flow: what each agent needs to see and when

### Recipe

Build a multi-agent software team that takes a GitHub issue through specification (PM agent), architecture (architect agent), implementation (developer agent), testing (tester agent), and review (reviewer agent), with a human approval gate before the final PR is opened.

***

## Chapter 18. AI Assisted Testing And QA

- Unit, integration, property, and end-to-end testing
- Test generation: from specifications, from code, from failures
- Property-based testing and invariant discovery
- Mutation testing as a quality signal
- Evaluation of AI-generated tests: coverage, fault detection, independence

### Model

- Test oracle: T(implementation, input) → pass | fail
- Behavioral invariant: a property P such that P(f(x)) holds for all valid x
- Mutation score: fraction of seeded defects caught by the test suite

### Mathematics

- Coverage metrics: statement, branch, and MC/DC coverage
- Mutation score lower bound via coverage

### Tools

- pytest, Hypothesis, mutmut, Playwright, coverage.py

### Recipe

Use an agent to infer behavioral invariants from a module's public API, generate property-based tests with Hypothesis, measure mutation score with mutmut, and catch a seeded defect that unit tests missed.

***

## Chapter 19. AI Assisted Debugging

- Failure analysis and hypothesis-driven debugging
- Root cause analysis from traces, logs, and core dumps
- Trace-driven debugging: reproducing failures from telemetry
- Self-debugging agents: generate hypothesis, write test, patch, verify
- Reliability engineering and error budgets

### Model

- Bug as a violated hypothesis: expected behavior B_expected, observed behavior B_observed
- Debugging as experiment design: minimal test case + patch candidate + verification

### Mathematics

- Delta debugging: binary search over change sets to isolate minimal failing input
- Fault localization via spectrum-based methods: Ochiai coefficient

### Tools

- pytest traces, structlog, OpenTelemetry, debugpy, coding agents

### Recipe

Plant a subtle bug in a data processing pipeline, collect traces and logs, use an agent to generate debugging hypotheses ranked by Ochiai score, generate a minimal reproducing test, patch the bug, and verify the fix with the full test suite.

***

## Chapter 20. AI For Software Security

- Threat modeling: STRIDE and attack trees
- Secure SDLC: security requirements, design review, testing
- Vulnerability discovery: static analysis, fuzzing, symbolic execution
- AI-assisted security review and red teaming
- Secure coding agents: sandboxing and output validation

### Model

- Attack surface graph: entry points, data flows, trust boundaries, assets
- Exploit hypothesis: attacker model, vulnerability, and exploit path
- Mitigation evidence: patch, test, regression proof

### Mathematics

- Attack tree probability: AND-OR tree with attacker effort and success probability

### Tools

- Semgrep, Bandit, CodeQL, OWASP resources, atheris (fuzzer), coding agents

### Recipe

Run an AI-assisted security review on a FastAPI service: generate a threat model, run static analysis, use an agent to propose exploit scenarios, patch the highest-severity finding, and add a regression test.

***

## Chapter 21. AI For DevOps And Platform Engineering

- CI/CD pipelines as discovery systems
- Observability: metrics, logs, traces, and profiles
- Infrastructure as code and configuration management
- Incident analysis and root cause identification
- Deployment automation and rollback

### Model

- Service dependency graph: microservices, load balancers, databases, queues
- Incident timeline: alert → root cause → mitigation → resolution → postmortem

### Mathematics

- Change failure rate, mean time to recovery: SRE golden signals

### Tools

- GitHub Actions, Docker, Terraform basics, OpenTelemetry, Grafana

### Recipe

Build an agent-assisted CI pipeline that runs tests, linting, security checks, and deployment dry runs, then use the agent to analyze a synthetic incident timeline and generate a postmortem draft.

***

## Chapter 22. MLOps, LLMOps, And AgentOps

- Data pipelines and feature stores
- Model lifecycle: training, evaluation, deployment, monitoring
- LLMOps: prompt versioning, evaluation, and cost tracking
- AgentOps: agent trace logging, tool call monitoring, failure analysis
- Governance: model cards, system cards, audit logs
- Rollback and incident response for AI systems

### Model

- Lifecycle graph: data → train → evaluate → deploy → monitor → retire
- Evaluation record: metric, dataset, split, config, timestamp, artifact link

### Mathematics

- Distribution shift detection: maximum mean discrepancy, population stability index

### Tools

- MLflow, DVC, Weights and Biases, LangSmith, Arize Phoenix, OpenTelemetry

### Recipe

Track a complete model lifecycle: data versioning with DVC, training runs in MLflow, prompt variants in LangSmith, agent traces in Arize Phoenix, and deploy a simple monitoring dashboard that alerts on metric drift.

***

## Chapter 23. Evaluating AI Coding Agents

- SWE-bench style task construction
- Repository task suites: issue, patch, test, verify
- Real user workflows as evaluation targets
- Human review and patch correctness
- Benchmark leakage, contamination, and validity threats
- Cost, latency, and reliability as evaluation dimensions

### Model

- Task distribution D_tasks, success criterion S(patch, task), regression risk R(patch, repo)

### Mathematics

- Bootstrap confidence intervals on agent success rate
- Paired comparison: Wilcoxon signed-rank test across task distributions

### Tools

- SWE-bench, pytest, GitHub Actions, custom repo task harnesses

### Recipe

Build a small internal coding agent benchmark from five real issues in an open-source project, evaluate two agent workflows (different context strategies), report success rate with confidence intervals, and document validity threats.

***

## Chapter 24. Autonomous Software Organizations

- SWE agents and their current capabilities
- Autonomous software factory architecture
- Issue triage, planning, and execution without humans
- Review and release in autonomous pipelines
- Human oversight: what to automate and what to keep
- Self-improving development systems

### Model

- Organization as a multi-agent workflow with governance metrics and human gates
- Autonomy ladder: fully human → human-on-the-loop → human-in-the-loop → fully automated

### Mathematics

- Reward signal for agent self-improvement: test pass rate, code quality metrics, user feedback

### Tools

- Claude Code SDK, OpenAI Agents SDK, LangGraph, GitHub API

### Recipe

Build a supervised autonomous software loop that polls for new GitHub issues, triages them by severity, proposes implementation plans, opens draft pull requests with tests, and requests human review before merge.

***

# Part III: Discovery Through Data And Models

## Chapter 25. Exploratory Discovery

- Exploratory data analysis as scientific inquiry
- Clustering: k-means, HDBSCAN, Gaussian mixture models
- Visualization: dimensionality reduction for discovery
- Pattern discovery: association rules, frequent itemsets
- From exploration to hypothesis

### Model

- Distributional structure: cluster assignment C, manifold M, anomaly score a(x)
- HDBSCAN: density-connected components in a mutual reachability graph

### Mathematics

- UMAP: topological data analysis and fuzzy simplicial sets
- Cluster stability and internal validation: silhouette score, DBCV

### Tools

- pandas, Polars, DuckDB, scikit-learn, UMAP, HDBSCAN, Plotly

### Recipe

Build an exploration notebook for a scientific dataset: run clustering, visualize with UMAP, extract cluster summaries, and use an LLM to generate candidate hypotheses about each cluster.

***

## Chapter 26. Representation Learning

- Self-supervised learning: masked prediction, contrastive, generative
- Contrastive learning: SimCLR, MoCo, CLIP-style objectives
- Latent representations and their geometry
- Foundation model embeddings: when to use them versus training from scratch
- Representation evaluation: probing, linear separability, downstream task transfer

### Model

- Encoder f_theta: x → z, embedding space Z, contrastive loss L_NT-Xent
- Linear probe: train a linear classifier on frozen embeddings

### Mathematics

- NT-Xent loss derivation and its connection to mutual information maximization
- Alignment and uniformity decomposition of contrastive objectives

### Tools

- PyTorch, Hugging Face Transformers, sentence-transformers

### Recipe

Train a domain-specific contrastive embedding model on scientific paper abstracts, evaluate transfer to downstream classification with a linear probe, and compare against general-purpose SPECTER2 embeddings.

***

## Chapter 27. Scientific Foundation Models

- What makes a model a scientific foundation model
- Pre-training on scientific data: sequences, structures, spectra, text
- Protein language models: ESM-2, ESM-3, ProGen2, evolutionary scaling laws
- Molecular foundation models: Uni-Mol2, MolFormer, ChemBERTa2, SMILES-based LLMs
- Materials foundation models: GNoME, MACE-MP-0, CHGNet, SevenNet
- Genomics models: Nucleotide Transformer, DNABERT-2, Evo
- Scientific document models: SPECTER2, MatBERT, BioLinkBERT
- Fine-tuning strategies: LoRA, adapter layers, task-specific heads
- Transfer learning and few-shot scientific discovery
- Scaling laws for scientific domains
- Historical landmark: the 2024 Nobel Prize in Chemistry recognized AlphaFold as a paradigm shift, the first time a computational AI system received this distinction

### Model

- Pre-trained encoder E_theta with domain vocabulary, masked prediction objective
- Fine-tuning: task head H_phi on top of frozen or partially frozen E_theta
- LoRA: low-rank decomposition W = W_0 + BA, rank r << d

### Mathematics

- Masked language model objective and connection to mutual information
- LoRA parameter count versus full fine-tuning: r(d_in + d_out) vs d_in * d_out
- Scaling law: L(N) = A/N^alpha + B for pre-training loss versus model size

### Tools

- ESM (EvolutionaryScale/fair-esm), Hugging Face Transformers, PEFT (LoRA)
- Uni-Mol for molecular pre-training, MolFormer, torchdrug
- MACE-MP-0 and CHGNet for universal materials force fields

### Recipe

Fine-tune ESM-2 with LoRA on a curated protein thermostability dataset, compare zero-shot ESM-3 predictions against the fine-tuned model, evaluate on a held-out protein set, and integrate the best model into the Discovery Workbench as a property prediction tool.

***

## Chapter 28. Multimodal Scientific AI

- Why modality alignment matters for discovery
- Molecule-text models: MolT5, GIT-Mol, MoleculeSTM, Text+Chem T5
- Protein-text models: ProteinChat, ESM3 multimodal, BioMedGPT
- Scientific vision-language models: figure and table understanding
- Cross-modal retrieval: text-to-structure, structure-to-text
- Scientific document AI: PaperQA2, SciAgent, Galactica lessons
- Multimodal hypothesis generation: combining structural and textual evidence
- Failure modes: hallucination, modality misalignment, out-of-distribution structures

### Model

- Cross-modal encoder: separate encoders for each modality, shared embedding space
- Contrastive alignment: InfoNCE loss over paired (text, structure) samples
- Generation head: decode from aligned embedding to target modality

### Mathematics

- InfoNCE loss and its connection to mutual information lower bound
- Alignment score: cosine similarity distribution across modalities

### Tools

- Hugging Face Transformers, MoleculeSTM, PaperQA2, PyMuPDF, Docling
- RDKit for structure rendering, sentence-transformers for text

### Recipe

Build a multimodal research assistant: given a natural language query about a biological process, retrieve relevant papers with PaperQA2, extract molecular structures mentioned in the text, embed them with MoleculeSTM, retrieve structurally similar known compounds, and synthesize a hypothesis report with evidence citations.

***

## Chapter 29. Reasoning Models For Discovery

- Chain-of-thought prompting: why it works and when it fails
- Test-time compute and search: o1/o3-style reasoning
- Process reward models (PRMs): scoring reasoning steps, not just answers
- Monte Carlo tree search over reasoning steps
- Formal mathematical reasoning: AlphaGeometry 2 (IMO 2024 silver medal), AlphaProof with Lean4
- Gemini Deep Think: gold medal at IMO 2025 in natural language mode
- FunSearch: evolutionary LLM-guided program search discovering new combinatorial mathematics (DeepMind, Nature 2023)
- Theorem proving with Lean4 and mathlib4
- Symbolic and neural hybrid reasoning
- Self-consistency and majority voting
- Scientific hypothesis as a structured reasoning chain
- GPQA Diamond trajectory: from 35% (GPT-4) to 83% (o3) in two years
- Limits: mathematical failures, hallucinated proofs, wrong reasoning traces

### Model

- Reasoning chain: sequence of steps s_1, ..., s_k with process reward r(s_i)
- MCTS over reasoning: states = partial proofs, actions = next reasoning step, value = PRM score
- Lean4 proof state: context Gamma, goal G, tactic t: Gamma |- G
- FunSearch loop: LLM proposes program → evaluator scores → best programs feed back as in-context examples

### Mathematics

- PRM training objective: binary cross-entropy on step-level correctness labels
- AlphaGeometry: synthetic theorem generation + auxiliary construction + symbolic deduction
- FunSearch as quality-diversity optimization over a discrete program space

### Tools

- Anthropic API (claude-opus-4-8 for extended thinking), OpenAI API (o3)
- Lean4, mathlib4, elan for formal proof
- DeepSeek-Prover-V1.5 for open-source formal reasoning
- FunSearch (open-source, Google DeepMind) for evolutionary program search

### Recipe

Solve a non-trivial mathematical optimization problem in experiment design: use chain-of-thought reasoning with an extended-thinking model, verify each step with a PRM, translate the final result to a Lean4 proof sketch, and compare against a direct-answer baseline without chain-of-thought.

***

## Chapter 30. Anomaly And Novelty Discovery

- Outlier detection versus novelty detection
- Density-based methods: LOF, HDBSCAN, kernel density estimation
- Isolation-based methods: Isolation Forest, Extended Isolation Forest
- Deep anomaly detection: autoencoders, VAEs, normalizing flows
- Open-world learning and out-of-distribution detection
- Drift detection in streaming data
- Separating errors from discoveries

### Model

- Anomaly score a: X → R, threshold tau, decision rule a(x) > tau → anomaly
- Reconstruction loss as anomaly score: a(x) = ||x - decoder(encoder(x))||

### Mathematics

- Isolation Forest: expected path length and its relationship to isolation probability
- CUSUM for drift detection: cumulative sum of likelihood ratio statistics

### Tools

- PyOD, HDBSCAN, scikit-learn, river for streaming, PyTorch for deep methods

### Recipe

Detect anomalies in a scientific dataset with three methods (Isolation Forest, LOF, VAE reconstruction), validate anomalies against ground-truth domain labels, quantify what fraction are errors versus genuine novelties, and add anomaly detection to the Discovery Workbench pipeline.

***

## Chapter 31. Causal Discovery And Causal Inference

- Structural causal models and the ladder of causation
- Causal discovery algorithms: PC, FCI, GES, LiNGAM
- Treatment effect estimation: ATE, ATT, CATE, heterogeneous effects
- Interventions versus observations: the do-operator
- Counterfactual reasoning and individual treatment effects
- Refutation tests and sensitivity analysis
- Double machine learning and high-dimensional settings

### Model

- Structural causal model M = (V, U, F, P_U)
- DAG G over observed variables V with directed edges encoding direct causes
- Potential outcomes framework: Y(1) - Y(0) = individual treatment effect

### Mathematics

- Backdoor criterion and adjustment formula
- Double ML: Neyman orthogonality and root-n consistent estimation
- Sensitivity analysis: E-value for unmeasured confounding

### Tools

- DoWhy, EconML, causal-learn, NetworkX

### Recipe

Estimate a heterogeneous treatment effect in a scientific dataset, run all available refutation tests in DoWhy, report the E-value for unmeasured confounding, and document which causal assumptions are load-bearing and how to test them.

***

## Chapter 32. Bayesian Discovery And Uncertainty

- Bayesian models as scientific hypotheses
- Priors, likelihoods, and the Bayesian workflow
- Posterior inference: MCMC, variational inference, normalizing flows
- Posterior predictive checking and model criticism
- Bayesian model comparison and Occam factors
- Calibration and decision making under uncertainty
- Bayesian experimental design: value of information

### Model

- Probabilistic program: prior P(theta), likelihood P(D|theta), posterior P(theta|D)
- Posterior predictive distribution P(y_new|D) = integral P(y_new|theta) P(theta|D) d theta

### Mathematics

- NUTS sampler: No-U-Turn Sampler geometry and dual averaging
- WAIC and LOO-CV for Bayesian model comparison
- Expected information gain for experimental design

### Tools

- PyMC, ArviZ, NumPyro, flowMC for normalizing flow posteriors

### Recipe

Build a Bayesian model for a scientific dataset with two competing hypotheses, use PyMC for inference, compare models with LOO-CV, run posterior predictive checks, compute expected information gain for the next experiment, and add the model to the Discovery Workbench experiment registry.

***

## Chapter 33. Scientific Machine Learning

- Physics-informed neural networks (PINNs): residual losses on PDEs
- Neural operators: DeepONet, FNO, and beyond
- Equivariant neural networks: E(3), SE(3), and O(3) symmetries
- Universal force fields: MACE, NequIP, GemNet, EquiformerV2
- Scientific foundation models for simulation: GNoME, FairChem
- Hybrid models: physics as regularizer, as architecture, as loss
- Differentiable simulation and inverse problems

### Model

- PINN loss: L = L_data + lambda * L_PDE + L_boundary
- Equivariant message passing: messages equivariant to group G transformations
- MACE: multi-ACE body-order expansion with equivariant features

### Mathematics

- Group equivariance: f(g.x) = g.f(x) for group element g
- MACE energy decomposition into atomic contributions
- FNO: Fourier layer with truncated modes and spectral convolution

### Tools

- PyTorch, JAX, DeepXDE, NeuralOperator
- MACE, NequIP, GemNet-OC via FairChem
- torchdiffeq for neural ODEs

### Recipe

Train a MACE universal force field on a small molecular dataset, compare against DFT reference energies and forces, use the model as a fast surrogate for geometry optimization, and benchmark against a purely data-driven baseline without equivariance constraints.

***

## Chapter 34. Generative Models For Discovery

- Generative models as hypothesis and candidate generators
- Variational autoencoders and latent space navigation
- Generative adversarial networks for scientific data synthesis
- Score-based diffusion models: denoising score matching, DDPM, DDIM
- Flow matching and continuous normalizing flows
- Equivariant architectures: SE(3)-equivariant diffusion for 3D structures
- Graph generative models for molecules and reaction networks
- Protein-ligand cofolding: Boltz-1 and Chai-1
- Conditional generation and property-guided sampling
- Validity, novelty, diversity, and synthesizability evaluation
- Reinforcement learning for generative molecule optimization

### Model

- Score function s_theta(x, t) = nabla_x log p_t(x)
- EDM equivariant diffusion: SE(3)-invariant noise schedule on atom positions and types
- Flow matching: straight-path ODE from noise to data with conditional vector field

### Mathematics

- Score matching objective: E[|| s_theta(x, t) - nabla_x log p_t(x) ||^2]
- Continuous normalizing flow: ODE dx/dt = v_theta(x, t), change of variables formula
- SE(3) equivariance: E[f(Rx + t)] = f(E[Rx + t]) for rotation R, translation t

### Tools

- PyTorch, Hugging Face Diffusers, torchdrug, PyTorch Geometric
- EDM and EQGAT-Diff for equivariant molecular diffusion
- DiffSBDD and DiffDock for structure-based drug design
- RFDiffusion, FrameDiff, FoldFlow for protein backbone design
- Boltz-1 and Chai-1 for protein-ligand cofolding
- MatterGen and CDVAE for crystal and material generation
- REINVENT for autoregressive lead optimization
- RDKit for validity filtering and synthesizability scoring

### Recipe

Generate novel drug-like molecules conditioned on a protein pocket using DiffSBDD, score candidates with a multi-property predictor (QED, SA score, docking score), apply REINFORCE fine-tuning to shift the distribution toward high-scoring molecules, and evaluate novelty and diversity against a reference library.

***

## Chapter 35. Symbolic Regression And Equation Discovery

- Equation discovery from data as a scientific paradigm
- Search over symbolic expression trees
- Genetic programming and evolutionary search
- Neural-guided symbolic regression
- Dimensional analysis and domain constraints as search priors
- Interpretability and parsimony
- Comparison to neural surrogates

### Model

- Expression tree T with operators, variables, and constants
- Fitness function F(T) = predictive accuracy - complexity_penalty(T)
- Genetic programming: crossover and mutation over expression trees

### Mathematics

- Kolmogorov complexity and minimum description length as parsimony measure
- Information-theoretic complexity penalty: bits to encode tree T

### Tools

- PySR, SymPy, scipy, gplearn

### Recipe

Generate noisy measurements from a hidden physical law, run PySR with dimensional constraints, recover the generating equation on a held-out test set, validate dimensional consistency with SymPy, and compare against a neural network surrogate on extrapolation.

***

# Part IV: Discovery Through Knowledge

## Chapter 36. Literature Mining

- Citation analysis and bibliometric methods
- Semantic search over large paper collections
- Knowledge extraction: entities, relations, claims, and evidence
- Claim and hypothesis extraction with LLMs
- Open problem identification: what is the frontier?
- Building domain maps from the literature

### Model

- Document graph: papers as nodes, citations as edges, topics as communities
- Claim-evidence relation: claim C supported by evidence E from paper P

### Mathematics

- PageRank for paper influence scoring
- Community detection: Louvain method on the citation graph

### Tools

- OpenAlex, Semantic Scholar, Crossref, arXiv APIs
- PyMuPDF, Docling for PDF parsing
- sentence-transformers for paper embedding
- NetworkX for citation graph analysis

### Recipe

Build a literature miner for a domain of your choice: fetch 500+ papers from OpenAlex, embed abstracts, cluster topics, build a citation subgraph, extract open problem statements with an LLM, and produce a domain map with gap annotations.

***

## Chapter 37. Retrieval Augmented Discovery Systems

- RAG architecture: retriever, reranker, generator
- Research copilots and evidence-grounded question answering
- Long-context systems versus retrieval: tradeoffs
- Query planning for complex research questions
- Evidence grounding and hallucination control
- PaperQA2: production RAG for scientific literature
- Citation checking and source verification

### Model

- RAG pipeline: q → retrieve(q, k) → rerank(passages) → generate(q, passages) → answer
- Citation graph for grounding: every claim backed by a retrievable passage

### Mathematics

- Recall@k and MRR for retrieval evaluation
- Faithfulness metric: fraction of output claims supported by retrieved passages

### Tools

- Qdrant or pgvector for vector search, BM25 for sparse retrieval
- PaperQA2 for scientific RAG, cross-encoder rerankers
- Anthropic API for generation, sentence-transformers for embedding

### Recipe

Build a research copilot that answers complex multi-hop questions about a scientific domain: implement query decomposition, retrieve passages from a 1000-paper corpus, rerank with a cross-encoder, generate a cited answer, and evaluate faithfulness and correctness on a hand-curated question set.

***

## Chapter 38. Knowledge Graph Discovery

- Link prediction: finding missing relations
- Graph embeddings: TransE, RotatE, ComplEx
- Graph neural networks for knowledge graph completion
- Ontology enrichment and relation extraction
- Scientific relation types: causes, inhibits, activates, binds
- Evaluation: MRR, Hits@k, and their validity conditions

### Model

- Knowledge graph G = (E, R, T) with entities E, relations R, and triples T
- Scoring function s(h, r, t) for triple (head, relation, tail)
- GNN message passing: h_v^(l+1) = AGG({h_u^(l) : u in N(v)})

### Mathematics

- RotatE scoring: s(h, r, t) = -|| h circle r - t ||
- TransR: relation-specific projection matrix W_r

### Tools

- Neo4j, NetworkX, PyTorch Geometric, RDFLib, ampligraph

### Recipe

Build a scientific knowledge graph from extracted paper relations, train a RotatE model for link prediction, evaluate with MRR and Hits@10, and surface the top-k predicted missing links for expert review as candidate hypotheses.

***

## Chapter 39. Hypothesis Generation

- Gap analysis: what is missing from current knowledge
- Analogical transfer: hypotheses from related domains
- Scientific creativity and combinatorial innovation
- AI-generated hypotheses: generation and scoring
- Testability, novelty, and plausibility as scoring dimensions
- Human-AI hypothesis refinement loops

### Model

- Hypothesis space H: structured (entity, relation, entity) triples or natural language claims
- Scoring function Q(h) = alpha * plausibility(h) + beta * novelty(h) + gamma * testability(h)

### Mathematics

- Novelty as distance from nearest known fact in embedding space
- Testability as a function of experiment existence and cost estimate

### Tools

- Anthropic or OpenAI API for generation, Qdrant for novelty scoring
- NetworkX for graph-based gap analysis, PyMC for plausibility under Bayesian model

### Recipe

Generate hypotheses from a scientific knowledge graph and literature corpus: use gap analysis to find missing (entity, relation, entity) triples, score by plausibility (literature support), novelty (embedding distance), and testability (experiment cost), and produce a ranked hypothesis report ready for expert review.

***

## Chapter 40. Research Agents

- Literature agents: searching, reading, extracting
- Coding agents: implementing experiments
- Analysis agents: running and interpreting results
- Reviewer agents: critique and error detection
- Human supervision: what to automate and what to gate
- Coscientist (Boiko et al., Nature 2023): autonomous chemical experiment design and robotic execution
- ChemCrow (Bran et al., Nature Machine Intelligence 2024): GPT-4 integrated with 18 chemistry tools including retrosynthesis and safety checks
- Google AI Co-Scientist (DeepMind 2025): multi-agent Gemini system with generation, debate, evolution, and proximity agents; independently rediscovered drug candidates and decoded a bacterial gene transfer mechanism
- Memory and long-horizon planning for research agents

### Model

- Multi-agent research workflow: propose → code → run → evaluate → critique → report
- Agent memory: episodic (prior runs), semantic (literature), procedural (reusable tools)

### Mathematics

- Research productivity as expected discoveries per unit token cost
- Optimal stopping for agent iteration: when to submit versus keep refining

### Tools

- OpenAI Agents SDK, LangGraph, DSPy, MLflow
- Claude Code SDK for coding sub-agents, PaperQA2 for literature agents
- ChemCrow (open-source) for chemistry tool-agent integration pattern

### Recipe

Build a research agent team modeled on the Google AI Co-Scientist architecture: a generation agent proposes hypotheses from literature, a debate agent challenges each hypothesis, a ranking agent scores by novelty and testability, a coding agent implements the top hypothesis as an experiment, and a reviewer agent critiques the result. Add human approval before any external API call or code execution.

***

## Chapter 41. Scientific Claim Validation

- Claim extraction and structuring
- Evidence mapping: claim to artifact to result
- Citation checking and paper verification
- Artifact verification: can you reproduce the number?
- Reproducibility auditing and result traceability
- Benchmark leakage detection

### Model

- Claim graph: claim → evidence artifacts → raw data → analysis code → reported number
- Audit path: every number in the paper traces to a saved artifact and a reproducible command

### Mathematics

- Reproducibility score: fraction of reported metrics reproduced within tolerance delta
- Leakage detection: overlap between training and test data distributions

### Tools

- Crossref, OpenAlex for citation checking
- MLflow for artifact tracking, pytest for re-execution
- DVC for data lineage, custom validators

### Recipe

Build a claim validation tool: extract numerical claims from a paper, link each to a saved MLflow artifact and a reproduction command, automatically verify reproducibility within a specified tolerance, and flag claims with missing or inconsistent artifact evidence.

***

# Part V: Discovery Through Simulation And Optimization

## Chapter 42. Differentiable Programming For Discovery

- Automatic differentiation: forward mode, reverse mode, and mixed
- JAX: functional transforms, vmap, jit, pmap, grad
- Equinox and Flax for differentiable neural architectures
- Differentiable physics: simulating with gradients
- Adjoint methods for PDE-constrained optimization
- Differentiable molecular dynamics: JAX-MD, TorchMD-Net
- End-to-end differentiable scientific pipelines
- Debugging differentiable programs: NaN propagation, gradient explosions

### Model

- Differentiable function f: R^n → R^m with Jacobian J_f = df/dx
- Adjoint state lambda satisfying dL/d theta = lambda^T (df/d theta)
- JAX computation graph: pure functions, no side effects, transformation composable

### Mathematics

- Reverse-mode AD as transposed Jacobian-vector products
- Adjoint derivation for ODE-constrained optimization
- Cotangent vector fields and the pullback of differential forms

### Tools

- JAX, Equinox, Flax, optax for optimization
- diffrax for differentiable ODEs and SDEs
- JAX-MD for differentiable molecular simulation
- TorchMD-Net for differentiable force fields in PyTorch

### Recipe

Build a differentiable force field calibration pipeline in JAX: parameterize a Lennard-Jones force field, simulate a small molecular system with JAX-MD, compute gradients of the simulation loss with respect to force field parameters using reverse-mode AD, and optimize the parameters against reference DFT data.

***

## Chapter 43. Scientific Simulation

- Computational experiments and their design
- Agent-based models: Mesa, emergent phenomena
- Stochastic simulation: Gillespie algorithm for biochemical networks
- Molecular dynamics: OpenMM, MDAnalysis, GROMACS interfaces
- Synthetic data generation as a discovery tool
- Simulator calibration: approximate Bayesian computation (ABC)
- Validation: does the simulation capture the right mechanisms?

### Model

- Simulator S: parameters theta → observations x
- ABC: sample theta ~ prior, accept if d(S(theta), x_obs) < epsilon
- Calibration posterior: P(theta | x_obs) via sequential Monte Carlo ABC

### Mathematics

- Gillespie algorithm: exponential waiting times, next-reaction selection
- ABC-SMC: sequential importance resampling, effective sample size

### Tools

- scipy, Mesa, SimPy, OpenMM, MDAnalysis, pyABC for ABC-SMC

### Recipe

Build a stochastic biochemical network simulator, calibrate its rate parameters to experimental time-series data using ABC-SMC, use the calibrated model to test counterfactual interventions, and document which model assumptions are testable.

***

## Chapter 44. World Models For Discovery

- Latent dynamics and predictive environments
- Recurrent world models: RSSM, DreamerV3
- Transformer world models and next-token prediction over physical states
- Counterfactual reasoning with learned world models
- Model-based planning: rollout-based action selection
- Uncertainty estimation in world models
- Limitations: model bias, compound error, and distribution shift

### Model

- RSSM: recurrent stochastic state model with deterministic and stochastic paths
- Rollout: H-step simulation from current state s_0 under policy pi
- Model uncertainty: ensemble disagreement or latent variability

### Mathematics

- ELBO for world model training: reconstruction + KL divergence
- Horizon-dependent model error accumulation

### Tools

- PyTorch, JAX, gymnasium, stable-baselines3, dreamer-pytorch

### Recipe

Train a simple RSSM world model on a physical simulation environment, use rollouts to plan the next 5 experimental actions, evaluate plan quality against ground-truth simulator outcomes, and diagnose failure modes from compound model error.

***

## Chapter 45. Optimization For Discovery

- Black-box optimization and the no-free-lunch theorem
- Bayesian optimization: surrogate models and acquisition functions
- Evolutionary algorithms: genetic algorithms, CMA-ES, NSGA-III
- Reinforcement learning as optimization: policy gradient, actor-critic
- Multi-objective optimization: Pareto frontiers, hypervolume indicator
- High-dimensional and combinatorial optimization
- Expensive function optimization with limited budgets

### Model

- BO loop: fit surrogate GP, maximize acquisition alpha(x), evaluate f(x), update GP
- NSGA-III: non-dominated sort, reference point association, crowding distance

### Mathematics

- Expected improvement: EI(x) = E[max(f(x) - f*, 0)] under GP posterior
- Hypervolume indicator and its monotonicity with Pareto front quality
- CMA-ES: covariance matrix adaptation as natural gradient step

### Tools

- Optuna, BoTorch, Ray Tune, DEAP, pymoo for multi-objective

### Recipe

Optimize a multi-objective expensive scientific function (simulated assay) with NSGA-III and BoTorch, compare the Pareto fronts, measure hypervolume as a function of budget, and demonstrate that Bayesian optimization reaches a given hypervolume with fewer evaluations than random search.

***

## Chapter 46. Automated Experiment Design

- Active learning: query by committee, core-set selection
- Sequential experimental design: information-theoretic criteria
- Bandit algorithms: Thompson sampling, UCB, contextual bandits
- Adaptive clinical trials and group sequential designs
- Closed-loop optimization: couple design, execution, and analysis
- Stopping rules: when have you learned enough?

### Model

- Active learning: query x* = argmax_{x in pool} U(x | D_train)
- Value of information: VOI(x) = E[reduction in posterior entropy from observing f(x)]

### Mathematics

- BALD acquisition: mutual information between model output and model parameters
- Expected improvement over current best: connection to VOI

### Tools

- BoTorch, scikit-learn, PyMC, modAL for active learning

### Recipe

Build a closed-loop experiment planner for a simulated assay: implement BALD-based active learning, run 10 rounds of query-observe-update, compare against random sampling on final held-out accuracy, and visualize the learning curve with uncertainty bands.

***

## Chapter 47. Experiment Registries And Scientific Provenance

- Experiment registry design: what to store and why
- Artifact versioning: code, data, models, and configurations
- Data lineage and transformation graphs
- Configuration management and hyperparameter tracking
- Reproducible report generation from saved artifacts
- Provenance standards: W3C PROV, OpenLineage

### Model

- Run graph R = (I_inputs, C_code, E_environment, O_outputs, M_metrics, A_claims)
- Artifact DAG: directed acyclic graph of transformations with hash-verified nodes

### Mathematics

- Topological sort of the artifact DAG for reproducibility order
- Hash-based integrity: SHA-256 content hashing for each artifact

### Tools

- MLflow, DVC, Git, Docker, Weights and Biases, DagHub

### Recipe

Create an experiment registry that tracks a three-stage ML pipeline (data prep, training, evaluation), regenerates the result table from stored run IDs and artifact hashes, and demonstrates that every reported metric traces to a reproducible command.

***

# Part VI: Discovery In Scientific Domains

## Chapter 48. Discovery AI For Biology And Medicine

- Drug discovery: target identification, hit finding, lead optimization
- Protein structure prediction: AlphaFold2, AlphaFold3, ESMFold
- De novo protein design: RFDiffusion, FrameDiff, FoldFlow
- Inverse folding and sequence design: ProteinMPNN, LigandMPNN
- Biomarker discovery and patient stratification
- Single-cell genomics: scVI, scANVI, scGPT, Geneformer
- Cell foundation models and perturbation prediction
- Clinical AI: risk prediction, trial design, evidence synthesis
- Validation constraints: statistical power, confounding, regulatory requirements

### Model

- Protein backbone: coordinates of N, CA, C, O atoms per residue
- RFDiffusion: diffusion over backbone frames in SE(3) space
- scVI: variational autoencoder for count-normalized single-cell data

### Mathematics

- ProteinMPNN: autoregressive sequence design with message-passing score function
- AlphaFold3: diffusion over atomic coordinates conditioned on MSA and templates
- Survival analysis for biomarker validation: Cox proportional hazards model

### Tools

- AlphaFold3, ESMFold for structure prediction; RFDiffusion (backbone design), RFDiffusion2 (enzyme active-site scaffolding, April 2025), FrameDiff, FoldFlow2 for design
- ProteinMPNN, LigandMPNN for sequence design
- scVI, scANVI, scGPT, Geneformer for single-cell analysis
- BioPython, MDAnalysis, OpenMM for structure analysis and simulation
- RDKit, DeepChem for small molecule work

### Recipe

Run a complete protein design pipeline: use RFDiffusion to generate 100 backbone scaffolds for a target binding site, score sequences with ProteinMPNN, predict structures with ESMFold to filter for foldability, rank by binding energy estimated from docking, and produce a candidate report ready for experimental validation.

***

## Chapter 49. Discovery AI For Chemistry And Materials

- De novo molecular generation and scaffold hopping
- Fragment-based and structure-based drug design
- Protein-ligand cofolding: Boltz-1 and Chai-1
- Reaction prediction: forward synthesis, retrosynthesis, condition prediction
- Crystal structure and material design
- Universal force fields for fast property screening
- Autonomous chemistry laboratories
- Synthesizability and green chemistry constraints

### Model

- EDM: equivariant diffusion over atom positions (R^3) and types (categorical)
- Boltz-1: end-to-end differentiable protein-ligand structure prediction
- MACE universal force field: E(3)-equivariant many-body interaction model

### Mathematics

- DiffSBDD pocket conditioning: cross-attention between pocket atoms and ligand atoms during diffusion
- Retrosynthesis as a graph editing problem: remove bonds to yield starting materials

### Tools

- RDKit, DeepChem, BoTorch, PyTorch, PyTorch Geometric
- EDM, EQGAT-Diff for equivariant molecular diffusion
- DiffSBDD, DiffDock-L (scaled blind docking), Boltz-1, Chai-1 for structure-based design
- MatterGen, CDVAE for crystal and material generation
- MACE-MP-0, CHGNet, MatterSim for universal force fields
- REINVENT for autoregressive lead optimization
- AiZynthFinder, ASKCOS for retrosynthesis
- ChemCrow (open-source, Nature Machine Intelligence 2024) for tool-augmented chemistry agents

### Recipe

Run a closed-loop drug discovery campaign: generate candidates conditioned on a protein pocket with DiffSBDD, predict protein-ligand complex structures with Boltz-1, score by multi-property predictor (QED, SA, docking pose energy), use Bayesian optimization to select the next batch, and log all runs in the Discovery Workbench with full provenance.

***

## Chapter 50. Discovery AI For Physics And Engineering

- Symbolic regression for physics law discovery
- Equation discovery with dimensional constraints
- Physics-informed learning for inverse problems
- Neural operators for PDE solution operators
- Engineering optimization: aerodynamics, structural design, materials
- Simulation-based inference and parameter estimation
- AI-assisted experimental physics

### Model

- PySR expression tree with physical dimension constraints
- PINN: physics residual loss enforces governing equations during training
- FNO: neural operator mapping from initial conditions to solution fields

### Mathematics

- Noether's theorem: symmetry ↔ conservation law, as a prior for symbolic search
- Neural operator theory: universal approximation for nonlinear operators on function spaces

### Tools

- PySR, SymPy, JAX, PyTorch, DeepXDE, NeuralOperator, BoTorch

### Recipe

Discover an interpretable physical law from noisy simulated measurements: run PySR with dimensional analysis constraints, validate against held-out data, use the discovered equation as a physics residual in a PINN for an inverse problem, and benchmark against a pure neural baseline on extrapolation to out-of-distribution inputs.

***

## Chapter 51. Discovery AI For Climate And Earth Science

- AI weather prediction: Pangu-Weather, GraphCast, FourCastNet, NeuralGCM
- Foundation models for earth observation and remote sensing
- Climate emulation and downscaling
- Extreme event detection and attribution
- Carbon accounting and emissions monitoring from satellite data
- Physics-constrained climate AI: conservation laws and energy balance
- Data challenges: reanalysis datasets, resolution mismatches, sparse observations
- Uncertainty quantification in climate projections

### Model

- GraphCast: graph neural network on an icosahedral mesh with encoder-processor-decoder
- Climate emulator: map from forcing scenario to temperature/precipitation fields
- Downscaling model: coarse grid → fine grid conditional generation

### Mathematics

- Spectral energy cascade and why it constrains neural weather models
- Optimal fingerprinting for attribution: generalized least squares on pattern correlations
- Calibration for ensemble forecasts: rank histograms and reliability diagrams

### Tools

- PyTorch, JAX, xarray, Zarr for data handling
- pangeo ecosystem, earthengine-api for satellite data
- WeatherBench2 for evaluation
- Hugging Face for pre-trained weather models (Pangu-Weather, GraphCast weights)

### Recipe

Fine-tune a pre-trained GraphCast checkpoint on regional downscaling data, evaluate against ERA5 reanalysis using WeatherBench2 metrics (RMSE, ACC for geopotential and wind), quantify calibration with rank histograms, and demonstrate skill improvement over a statistical baseline in the target region.

***

## Chapter 52. Discovery AI For Social And Economic Systems

- Market discovery and price formation
- Network analysis: social influence, diffusion, structural holes
- Behavioral modeling and agent-based economics
- Causal inference in observational social data
- Policy simulation and counterfactual analysis
- Ethical constraints on social AI systems

### Model

- Social graph G = (users, edges, attributes) with community structure
- Heterogeneous treatment effect: CATE tau(x) = E[Y(1) - Y(0) | X = x]
- Agent-based policy simulator: agents, decision rules, market clearing mechanism

### Mathematics

- Difference-in-differences identification with parallel trends assumption
- Network interference: SUTVA violation and exposure mapping approaches

### Tools

- NetworkX, DoWhy, EconML, Mesa, statsmodels, pysal

### Recipe

Estimate a heterogeneous treatment effect on a synthetic social intervention dataset, test for network interference using an exposure mapping, simulate how a policy adjustment affects different subgroups with an agent-based model, and document the causal assumptions required for each claim.

***

# Part VII: Autonomous Discovery Systems

## Chapter 53. AI Scientists

- Automated research loops: propose, implement, run, evaluate, critique, report
- The AI Scientist v1 (Lu et al., SakanaAI, 2024): linear pipeline, ~$15/paper, open-sourced
- The AI Scientist v2 (SakanaAI, April 2025): agentic tree search replaces linear pipeline; first fully AI-generated paper accepted at an ICLR 2025 workshop
- Coscientist (Boiko et al., Nature 2023): first LLM to design and execute real chemical experiments via robotics
- Google AI Co-Scientist (DeepMind 2025): multi-agent system with verified lab discoveries
- FunSearch (DeepMind, Nature 2023): evolutionary program search discovering new mathematics with formal verification
- Critical limits: current AI scientists restricted to ML-domain experiments, cannot yet generalize to physical labs or non-programming science
- Human supervision requirements and failure modes
- Research integrity: novelty verification, hallucinated citations, cherry-picked results

### Model

- Research loop: hypothesis H → code C → experiment E → results R → critique K → revision
- Novelty filter: embedding distance to known results must exceed threshold delta

### Mathematics

- Expected research return per dollar: E[discoveries] / E[cost], and how it scales with automation
- Diversity of generated hypotheses: entropy of embedding distribution

### Tools

- Claude Code SDK, OpenAI Agents SDK, LangGraph, MLflow, pytest
- PaperQA2 for novelty checking, Semantic Scholar API

### Recipe

Build a supervised AI scientist for a concrete scientific task: the system proposes three hypotheses, a coding agent implements experiments for each, an experimentation agent runs them, a reviewer agent critiques the results against the literature, and a writer agent produces a structured report. Add human approval gates at hypothesis selection and final report sign-off.

***

## Chapter 54. Multi-Agent Discovery Systems

- Scientific agent teams: specialized roles and coordination
- Debate and adversarial critique as quality filters
- Peer review simulation: independent evaluation agents
- Collective intelligence: when does the team beat the individual?
- Coordination mechanisms: shared state, voting, auction-based task allocation
- Failure recovery in long-horizon agent workflows

### Model

- Multi-agent graph: agents A, communication edges E, shared blackboard B, gates G
- Debate protocol: proposer agent generates claim, N critic agents refute, judge agent decides
- Borda count aggregation over agent rankings

### Mathematics

- Condorcet's jury theorem: conditions under which majority voting improves over individual accuracy
- Game-theoretic equilibria in multi-agent negotiation

### Tools

- LangGraph, OpenAI Agents SDK, AutoGen, CrewAI, DSPy

### Recipe

Build a research team with proposer, implementer, experimenter, and two independent reviewer agents. Run a debate protocol where reviewers independently evaluate results and a judge agent decides whether to accept or reject. Measure whether the review step improves result quality versus no review.

***

## Chapter 55. Self-Driving Laboratories

- Laboratory robotics and automation infrastructure
- Closed-loop experimentation: design, execute, observe, update
- Aspuru-Guzik group systems: Atlas (Bayesian optimizer) and ChemOS 2.0 (orchestration architecture, RSC Digital Discovery 2025)
- Coscientist extended: internet-enabled LLM directing robotic hardware for Suzuki and Sonogashira couplings
- GNoME → robotic synthesis: Berkeley Lab demonstrated synthesis of 41 GNoME-predicted materials
- Integration of AI planners with physical instruments
- Digital-physical interfaces: APIs for lab hardware
- Safety constraints: chemical safety, GHS checks (ChemCrow pattern), instrument protection, operator oversight
- Simulation-as-lab-substitute for software demonstrations

### Model

- SDL loop: planner Pi(D) → action a_t → executor → measurement x_t → update D
- Safety constraint: action a_t in feasible set A_safe(instrument, reagents)
- Experiment budget: maximize information gain subject to cost and safety constraints

### Mathematics

- Bayesian optimization for SDL: expected improvement under the current surrogate
- Safety constraints as filters on the acquisition function domain

### Tools

- BoTorch, PyMC for planning
- Simulated lab APIs (custom), OpenMM for molecular simulation as lab substitute
- FastAPI for instrument interface simulation

### Recipe

Simulate a self-driving lab for molecular optimization: build a simulated assay API that returns noisy property measurements, run 20 rounds of closed-loop Bayesian optimization, integrate safety constraints that reject infeasible candidates, log each experimental run with full provenance, and demonstrate convergence toward the known optimum.

***

## Chapter 56. Evaluating Discovery Systems

- What does it mean to discover something?
- Evaluation dimensions: novelty, impact, reproducibility, validity, efficiency
- ScienceAgentBench (Chen et al., NeurIPS 2024): 102 tasks from 44 papers across bioinformatics, computational chemistry, GIS, and cognitive neuroscience; best agent solves only 42%
- DiscoveryBench (2024): 264 real-world + 903 synthetic tasks for multi-step data-driven hypothesis testing
- MLE-bench (OpenAI, 2024): realistic ML engineering tasks including Kaggle competition subsets; tests whether agents can do ML research labor
- SWE-bench Verified and SWE-bench Live: GitHub issue resolution with living benchmark to prevent contamination
- GPQA Diamond: PhD-level science questions now largely saturated by frontier models, illustrating benchmark lifecycle
- FrontierMath: unpublished research-level mathematics; only ~30-37% solved, the current hard ceiling
- Human evaluation protocols: expert panels, blinded assessment
- Construct validity threats: contamination, benchmark leakage, metric gaming
- Cost and latency as primary constraints at deployment
- Leaderboard dynamics and benchmark saturation

### Model

- Discovery evaluation tuple (task, metric, baseline, validity_check)
- Construct validity: does the benchmark measure what it claims to measure?
- Statistical power: minimum detectable difference given sample size

### Mathematics

- Inter-rater reliability: Cohen's kappa and Krippendorff's alpha for expert evaluation
- Power analysis for benchmark design: effect size, alpha, beta, and required trials

### Tools

- Custom benchmark harnesses, SWE-bench style task runners
- MLflow for logging, scipy for statistical tests, human-in-the-loop annotation tools

### Recipe

Design an evaluation suite for the Discovery Workbench: define task types (literature question, hypothesis generation, code generation, experiment design), write evaluation rubrics, collect a small gold standard, run two system configurations, and report results with confidence intervals and validity analysis.

***

## Chapter 57. Responsible Discovery AI

- Safety in autonomous research systems
- Dual-use risks: accelerating harmful discovery
- Scientific integrity: authorship, plagiarism, and fabrication risks
- Alignment of AI scientists with human values and norms
- Governance: approval workflows, audit trails, and accountability
- Publication ethics in the age of AI-generated research
- Regulatory and institutional frameworks

### Model

- Risk register: (risk_type, likelihood, severity, mitigation, residual_risk)
- Governance workflow: research proposal → safety review → ethics check → approval → execution → audit

### Mathematics

- Risk-adjusted expected value: E[V(discovery)] - risk_penalty * P(harm)

### Tools

- Structured risk checklists, red-team workflow templates, approval systems, audit log schemas

### Recipe

Add a governance layer to the Discovery Workbench: implement a risk assessment form for each new research task, a dual-use screening step using a safety-focused LLM judge, an approval gate before any experiment runs external APIs or generates novel compounds, and an audit log that traces every discovery claim to its human approver.

***

## Chapter 58. Future Directions

- Autonomous innovation and the innovation economy
- Human-AI co-discovery: the collaboration frontier
- AI research organizations and their governance
- Open problems in Discovery AI
- Scientific institutions in the agent era
- What the field needs: benchmarks, theory, infrastructure, norms

### Model

- Discovery systems as socio-technical infrastructure: technical capabilities, institutional norms, incentive structures

### Recipe

Write a research roadmap for one discovery domain of your choice: identify the three most important open technical problems, propose evaluation strategies, estimate what capabilities are currently missing, and outline a deployment path that includes governance controls and a reproducibility standard.

***

# Appendices

## Appendix A. Mathematical Foundations

- Probability theory: measure-theoretic foundations, distributions, expectations
- Statistics: estimation, hypothesis testing, confidence intervals, multiple comparisons
- Information theory: entropy, KL divergence, mutual information, Fisher information
- Optimization: gradient descent, Newton methods, constrained optimization, duality
- Linear algebra: eigendecomposition, SVD, low-rank approximations
- Graph theory: paths, flows, spectral graph theory, random graphs
- Bayesian inference: conjugate priors, MCMC, variational inference
- Causal inference: DAGs, do-calculus, identification conditions
- Experimental design: factorial designs, response surface methods, optimal design

## Appendix B. Python For Discovery AI

- Scientific Python: NumPy, SciPy, pandas, Polars, DuckDB idioms
- Reproducible notebooks: parameterization, papermill, nbconvert
- Command-line tools: argparse, typer, click for research scripts
- Packaging: pyproject.toml, hatch, uv, virtual environments
- Testing: pytest, fixtures, parametrize, coverage
- Type checking: mypy, pyright, Pydantic for runtime validation
- Data pipelines: prefect, dagster, or simple Makefile-based pipelines

## Appendix C. Vibe Coding Practitioner Guide

- Specifying intent clearly: what the model needs to know
- Asking for plans before implementation
- Steering by tests: write the test first, not last
- Steering by traces, screenshots, and artifacts
- Inspecting diffs: a checklist for reviewing AI-generated code
- Recovering from bad agent changes: the rollback and restart protocol
- Context engineering: what to include and why
- Turning conversations into reusable skills and MCP tools
- Evaluating coding agent output: correctness, security, maintainability
- Red-teaming your own prompts

## Appendix D. Discovery AI Tool Ecosystem

- Coding agents and their capability profiles
- Agent frameworks: orchestration patterns and tradeoffs
- Scientific foundation model registry: models, sizes, license, and use cases
- Retrieval systems: vector databases, sparse search, hybrid
- Knowledge graph platforms: hosted versus embedded
- Scientific ML libraries: domain and task coverage map
- Causal inference tools: assumptions, methods, and interfaces
- Optimization libraries: Bayesian, evolutionary, RL-based
- Experiment tracking: feature comparison and integration notes
- Generative model zoo: molecules, proteins, materials, structures

## Appendix E. Research Paper Reading Guide

- How to read a paper with AI assistance
- Extracting claims: subject, predicate, object, and evidence
- Checking assumptions: what must be true for the result to hold
- Mapping evidence: figures, tables, and their backing experiments
- Detecting missing baselines and invalid comparisons
- Building a related-work graph
- Using PaperQA2 for evidence-grounded deep reading

## Appendix F. Reproducibility And Artifact Guide

- Data versioning with DVC and Git LFS
- Environment capture: Docker, conda-lock, pyproject.toml
- Experiment registries: MLflow schema recommendations
- Result tables: generate from saved artifacts, never from memory
- Claim-to-artifact traceability checklist
- Reproducible report templates with papermill
- Publishing a reproducibility package

## Appendix G. Discovery AI Capstone Projects

### Track A. Graduate Research Capstone

Build an AI hypothesis generator with literature grounding, causal assumptions, Bayesian uncertainty quantification, and reproducible experiments. Evaluate novelty against a curated corpus and testability using an expert rubric.

### Track B. Software Practitioner Capstone

Build an autonomous coding organization that takes GitHub issues, edits a repository with a multi-agent team, writes tests, opens pull requests, and runs evaluations. Include human approval gates, cost tracking, and a governance log.

### Track C. Scientific Computing Capstone

Build a closed-loop optimizer for a simulated scientific problem using BoTorch and JAX-based differentiable simulation. Track all experiments with MLflow and demonstrate that the optimizer reaches the target property with fewer evaluations than a random baseline.

### Track D. Knowledge Systems Capstone

Build a literature mining, knowledge graph, and RAG research copilot for a scientific domain. Demonstrate that it answers expert-level questions with higher faithfulness than a direct LLM baseline.

### Track E. Generative Discovery Capstone

Build a property-guided molecule or protein generation pipeline using an equivariant diffusion model, a property predictor, and Bayesian optimization. Evaluate generated candidates by validity, novelty, diversity, and predicted property score against a random baseline.

### Track F. Multimodal Science Capstone

Build a multimodal research assistant that accepts natural language queries and returns evidence grounded in paper text, figures, molecular structures, and protein structures. Evaluate recall and faithfulness on a hand-curated question set.

***

# Suggested Chapter Deliverables

Each chapter should produce at least one durable artifact:

- A runnable notebook or script with reproducible outputs
- A tested software component with documented API
- A reproducible experiment run logged in the Discovery Workbench
- A dataset or knowledge artifact with provenance
- A model card or system card with limitations and evaluation results
- An evaluation table with baselines and statistical comparisons
- A diagram or architecture decision record
- A short research note in structured format

***

# Quality Bar For The Finished Book

- Every major claim is connected to a model, implementation, or cited research result.
- Every chapter includes runnable code that executes in under 30 minutes on a consumer laptop or free cloud tier.
- Every comparison uses construct-matched metrics co-computed in one pass on one configuration.
- Every result table is reproducible from saved artifacts and a single command.
- Every agent workflow includes verification, human review points, and failure handling.
- Every scientific workflow exposes assumptions, uncertainty, and validity threats.
- Mathematical sections contain derivations, not just formulas.
- Graduate depth sections connect implementation to theory in both directions.
- The book serves both graduate seminars and real engineering teams without compromise.
- The Discovery Workbench grows into a usable research platform by the final chapter.
