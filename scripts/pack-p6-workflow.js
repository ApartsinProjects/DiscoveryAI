export const meta = {
  name: "pack-p6-qa",
  description: "Pack P6: QA — curriculum alignment, teaching flow, student advocate, cognitive load, skeptical reader (#01 #03 #04 #05 #28)",
  phases: [{ title: "QA" }],
}

const SECTIONS = [
  {
    "sec": "1.1",
    "title": "1.1 Discovery, Invention, and Innovation",
    "path": "part-1-foundations/module-01-discovery-as-search/section-1.1.html"
  },
  {
    "sec": "1.2",
    "title": "1.2 Exploration Versus Exploitation",
    "path": "part-1-foundations/module-01-discovery-as-search/section-1.2.html"
  },
  {
    "sec": "1.3",
    "title": "1.3 Discovery Workflows",
    "path": "part-1-foundations/module-01-discovery-as-search/section-1.3.html"
  },
  {
    "sec": "1.4",
    "title": "1.4 Building a Discovery Simulator",
    "path": "part-1-foundations/module-01-discovery-as-search/section-1.4.html"
  },
  {
    "sec": "2.1",
    "title": "2.1 The Scientific Method Revisited",
    "path": "part-1-foundations/module-02-scientific-discovery/section-2.1.html"
  },
  {
    "sec": "2.2",
    "title": "2.2 Bayesian Science",
    "path": "part-1-foundations/module-02-scientific-discovery/section-2.2.html"
  },
  {
    "sec": "2.3",
    "title": "2.3 Reproducibility and Measurement",
    "path": "part-1-foundations/module-02-scientific-discovery/section-2.3.html"
  },
  {
    "sec": "2.4",
    "title": "2.4 Building a Bayesian Hypothesis Tester",
    "path": "part-1-foundations/module-02-scientific-discovery/section-2.4.html"
  },
  {
    "sec": "3.1",
    "title": "3.1 Logic, Ontologies, and Semantic Networks",
    "path": "part-1-foundations/module-03-knowledge-representation/section-3.1.html"
  },
  {
    "sec": "3.2",
    "title": "3.2 Knowledge Graphs",
    "path": "part-1-foundations/module-03-knowledge-representation/section-3.2.html"
  },
  {
    "sec": "3.3",
    "title": "3.3 Embeddings and Vector Search",
    "path": "part-1-foundations/module-03-knowledge-representation/section-3.3.html"
  },
  {
    "sec": "3.4",
    "title": "3.4 Building a Hybrid Scientific Search",
    "path": "part-1-foundations/module-03-knowledge-representation/section-3.4.html"
  },
  {
    "sec": "4.1",
    "title": "4.1 Forms of Reasoning",
    "path": "part-1-foundations/module-04-reasoning-for-discovery/section-4.1.html"
  },
  {
    "sec": "4.2",
    "title": "4.2 Reasoning in Language Models",
    "path": "part-1-foundations/module-04-reasoning-for-discovery/section-4.2.html"
  },
  {
    "sec": "4.3",
    "title": "4.3 Causal Reasoning and the Do-Calculus",
    "path": "part-1-foundations/module-04-reasoning-for-discovery/section-4.3.html"
  },
  {
    "sec": "4.4",
    "title": "4.4 Building a Reasoning Pipeline",
    "path": "part-1-foundations/module-04-reasoning-for-discovery/section-4.4.html"
  },
  {
    "sec": "5.1",
    "title": "5.1 Data-Driven and Theory-Driven Discovery",
    "path": "part-1-foundations/module-05-data-models-simulation/section-5.1.html"
  },
  {
    "sec": "5.2",
    "title": "5.2 Simulation and Surrogate Models",
    "path": "part-1-foundations/module-05-data-models-simulation/section-5.2.html"
  },
  {
    "sec": "5.3",
    "title": "5.3 Active Learning and Experiment Selection",
    "path": "part-1-foundations/module-05-data-models-simulation/section-5.3.html"
  },
  {
    "sec": "5.4",
    "title": "5.4 Building an Active Learning Loop",
    "path": "part-1-foundations/module-05-data-models-simulation/section-5.4.html"
  },
  {
    "sec": "6.1",
    "title": "6.1 Workbench Architecture Overview",
    "path": "part-1-foundations/module-06-system-architecture/section-6.1.html"
  },
  {
    "sec": "6.2",
    "title": "6.2 Artifact Graphs and Provenance",
    "path": "part-1-foundations/module-06-system-architecture/section-6.2.html"
  },
  {
    "sec": "6.3",
    "title": "6.3 Safety, Cost, and Observability",
    "path": "part-1-foundations/module-06-system-architecture/section-6.3.html"
  },
  {
    "sec": "6.4",
    "title": "6.4 Bootstrapping the Discovery Workbench",
    "path": "part-1-foundations/module-06-system-architecture/section-6.4.html"
  },
  {
    "sec": "7.1",
    "title": "7.1 SDLC as Iterative Hypothesis Testing",
    "path": "part-2-software-engineering/module-07-software-discovery/section-7.1.html"
  },
  {
    "sec": "7.2",
    "title": "7.2 Engineering Discovery and AI",
    "path": "part-2-software-engineering/module-07-software-discovery/section-7.2.html"
  },
  {
    "sec": "7.3",
    "title": "7.3 Building a Hypothesis-Driven Dev Workflow",
    "path": "part-2-software-engineering/module-07-software-discovery/section-7.3.html"
  },
  {
    "sec": "8.1",
    "title": "8.1 Code Foundation Models",
    "path": "part-2-software-engineering/module-08-ai-software-foundations/section-8.1.html"
  },
  {
    "sec": "8.2",
    "title": "8.2 Repository-Level Reasoning",
    "path": "part-2-software-engineering/module-08-ai-software-foundations/section-8.2.html"
  },
  {
    "sec": "8.3",
    "title": "8.3 Human-AI Collaboration Patterns",
    "path": "part-2-software-engineering/module-08-ai-software-foundations/section-8.3.html"
  },
  {
    "sec": "8.4",
    "title": "8.4 Building with a Coding Agent",
    "path": "part-2-software-engineering/module-08-ai-software-foundations/section-8.4.html"
  },
  {
    "sec": "9.1",
    "title": "9.1 Natural Language as Specification",
    "path": "part-2-software-engineering/module-09-vibe-coding/section-9.1.html"
  },
  {
    "sec": "9.2",
    "title": "9.2 The Vibe Coding Loop",
    "path": "part-2-software-engineering/module-09-vibe-coding/section-9.2.html"
  },
  {
    "sec": "9.3",
    "title": "9.3 Verification and Repair",
    "path": "part-2-software-engineering/module-09-vibe-coding/section-9.3.html"
  },
  {
    "sec": "9.4",
    "title": "9.4 Building Through Conversation",
    "path": "part-2-software-engineering/module-09-vibe-coding/section-9.4.html"
  },
  {
    "sec": "10.1",
    "title": "10.1 Structured Outputs and Tool Use",
    "path": "part-2-software-engineering/module-10-prompting-to-programming/section-10.1.html"
  },
  {
    "sec": "10.2",
    "title": "10.2 Programmatic Prompt Optimization",
    "path": "part-2-software-engineering/module-10-prompting-to-programming/section-10.2.html"
  },
  {
    "sec": "10.3",
    "title": "10.3 Building a DSPy Literature Program",
    "path": "part-2-software-engineering/module-10-prompting-to-programming/section-10.3.html"
  },
  {
    "sec": "11.1",
    "title": "11.1 Why Context Is the Bottleneck",
    "path": "part-2-software-engineering/module-11-context-engineering/section-11.1.html"
  },
  {
    "sec": "11.2",
    "title": "11.2 Chunking and Summarization",
    "path": "part-2-software-engineering/module-11-context-engineering/section-11.2.html"
  },
  {
    "sec": "11.3",
    "title": "11.3 Retrieval-Augmented Code Generation",
    "path": "part-2-software-engineering/module-11-context-engineering/section-11.3.html"
  },
  {
    "sec": "11.4",
    "title": "11.4 Building a Repository Intelligence Layer",
    "path": "part-2-software-engineering/module-11-context-engineering/section-11.4.html"
  },
  {
    "sec": "12.1",
    "title": "12.1 MCP Architecture",
    "path": "part-2-software-engineering/module-12-mcp-servers/section-12.1.html"
  },
  {
    "sec": "12.2",
    "title": "12.2 Implementing Scientific Tools",
    "path": "part-2-software-engineering/module-12-mcp-servers/section-12.2.html"
  },
  {
    "sec": "12.3",
    "title": "12.3 Testing and Publishing",
    "path": "part-2-software-engineering/module-12-mcp-servers/section-12.3.html"
  },
  {
    "sec": "12.4",
    "title": "12.4 Building a Scientific MCP Server",
    "path": "part-2-software-engineering/module-12-mcp-servers/section-12.4.html"
  },
  {
    "sec": "13.1",
    "title": "13.1 Stakeholders and Requirements",
    "path": "part-2-software-engineering/module-13-requirements-discovery/section-13.1.html"
  },
  {
    "sec": "13.2",
    "title": "13.2 AI-Assisted Requirement Extraction",
    "path": "part-2-software-engineering/module-13-requirements-discovery/section-13.2.html"
  },
  {
    "sec": "13.3",
    "title": "13.3 Building a Requirement Discovery Assistant",
    "path": "part-2-software-engineering/module-13-requirements-discovery/section-13.3.html"
  },
  {
    "sec": "14.1",
    "title": "14.1 Architectural Styles and Quality Attributes",
    "path": "part-2-software-engineering/module-14-architecture-discovery/section-14.1.html"
  },
  {
    "sec": "14.2",
    "title": "14.2 AI-Assisted Architecture Generation",
    "path": "part-2-software-engineering/module-14-architecture-discovery/section-14.2.html"
  },
  {
    "sec": "14.3",
    "title": "14.3 Building Architecture Decision Records",
    "path": "part-2-software-engineering/module-14-architecture-discovery/section-14.3.html"
  },
  {
    "sec": "15.1",
    "title": "15.1 Algorithm Search and Complexity",
    "path": "part-2-software-engineering/module-15-algorithm-discovery/section-15.1.html"
  },
  {
    "sec": "15.2",
    "title": "15.2 Program Synthesis and Benchmarking",
    "path": "part-2-software-engineering/module-15-algorithm-discovery/section-15.2.html"
  },
  {
    "sec": "15.3",
    "title": "15.3 Building an Algorithm Benchmark",
    "path": "part-2-software-engineering/module-15-algorithm-discovery/section-15.3.html"
  },
  {
    "sec": "16.1",
    "title": "16.1 Multi-File Code Generation",
    "path": "part-2-software-engineering/module-16-ai-implementation/section-16.1.html"
  },
  {
    "sec": "16.2",
    "title": "16.2 Impact Analysis and Patch Review",
    "path": "part-2-software-engineering/module-16-ai-implementation/section-16.2.html"
  },
  {
    "sec": "16.3",
    "title": "16.3 Building a Repository-Scale Change",
    "path": "part-2-software-engineering/module-16-ai-implementation/section-16.3.html"
  },
  {
    "sec": "17.1",
    "title": "17.1 Agent Roles and Workflows",
    "path": "part-2-software-engineering/module-17-multi-agent-teams/section-17.1.html"
  },
  {
    "sec": "17.2",
    "title": "17.2 Coordination and Human Gates",
    "path": "part-2-software-engineering/module-17-multi-agent-teams/section-17.2.html"
  },
  {
    "sec": "17.3",
    "title": "17.3 Building a Software Agent Team",
    "path": "part-2-software-engineering/module-17-multi-agent-teams/section-17.3.html"
  },
  {
    "sec": "18.1",
    "title": "18.1 Test Generation Strategies",
    "path": "part-2-software-engineering/module-18-ai-testing/section-18.1.html"
  },
  {
    "sec": "18.2",
    "title": "18.2 Property-Based Testing and Mutation",
    "path": "part-2-software-engineering/module-18-ai-testing/section-18.2.html"
  },
  {
    "sec": "18.3",
    "title": "18.3 Building an Invariant Discovery System",
    "path": "part-2-software-engineering/module-18-ai-testing/section-18.3.html"
  },
  {
    "sec": "19.1",
    "title": "19.1 Hypothesis-Driven Debugging",
    "path": "part-2-software-engineering/module-19-ai-debugging/section-19.1.html"
  },
  {
    "sec": "19.2",
    "title": "19.2 Self-Debugging Agents",
    "path": "part-2-software-engineering/module-19-ai-debugging/section-19.2.html"
  },
  {
    "sec": "19.3",
    "title": "19.3 Building a Debugging Pipeline",
    "path": "part-2-software-engineering/module-19-ai-debugging/section-19.3.html"
  },
  {
    "sec": "20.1",
    "title": "20.1 Threat Modeling",
    "path": "part-2-software-engineering/module-20-software-security/section-20.1.html"
  },
  {
    "sec": "20.2",
    "title": "20.2 AI-Assisted Security Review",
    "path": "part-2-software-engineering/module-20-software-security/section-20.2.html"
  },
  {
    "sec": "20.3",
    "title": "20.3 Building a Security Review Pipeline",
    "path": "part-2-software-engineering/module-20-software-security/section-20.3.html"
  },
  {
    "sec": "21.1",
    "title": "21.1 CI/CD as Discovery",
    "path": "part-2-software-engineering/module-21-devops/section-21.1.html"
  },
  {
    "sec": "21.2",
    "title": "21.2 Observability and Incident Analysis",
    "path": "part-2-software-engineering/module-21-devops/section-21.2.html"
  },
  {
    "sec": "21.3",
    "title": "21.3 Building an Agent-Assisted Pipeline",
    "path": "part-2-software-engineering/module-21-devops/section-21.3.html"
  },
  {
    "sec": "22.1",
    "title": "22.1 Model Lifecycle Management",
    "path": "part-2-software-engineering/module-22-mlops-llmops/section-22.1.html"
  },
  {
    "sec": "22.2",
    "title": "22.2 LLMOps and AgentOps",
    "path": "part-2-software-engineering/module-22-mlops-llmops/section-22.2.html"
  },
  {
    "sec": "22.3",
    "title": "22.3 Building a Lifecycle Dashboard",
    "path": "part-2-software-engineering/module-22-mlops-llmops/section-22.3.html"
  },
  {
    "sec": "23.1",
    "title": "23.1 SWE-bench and Task Suites",
    "path": "part-2-software-engineering/module-23-evaluating-agents/section-23.1.html"
  },
  {
    "sec": "23.2",
    "title": "23.2 Validity and Contamination",
    "path": "part-2-software-engineering/module-23-evaluating-agents/section-23.2.html"
  },
  {
    "sec": "23.3",
    "title": "23.3 Building an Agent Benchmark",
    "path": "part-2-software-engineering/module-23-evaluating-agents/section-23.3.html"
  },
  {
    "sec": "24.1",
    "title": "24.1 SWE Agents and Capabilities",
    "path": "part-2-software-engineering/module-24-autonomous-software/section-24.1.html"
  },
  {
    "sec": "24.2",
    "title": "24.2 Autonomous Factory Architecture",
    "path": "part-2-software-engineering/module-24-autonomous-software/section-24.2.html"
  },
  {
    "sec": "24.3",
    "title": "24.3 Building a Supervised Autonomous Loop",
    "path": "part-2-software-engineering/module-24-autonomous-software/section-24.3.html"
  },
  {
    "sec": "25.1",
    "title": "25.1 Exploratory Data Analysis as Inquiry",
    "path": "part-3-data-models/module-25-exploratory-discovery/section-25.1.html"
  },
  {
    "sec": "25.2",
    "title": "25.2 Clustering and Dimensionality Reduction",
    "path": "part-3-data-models/module-25-exploratory-discovery/section-25.2.html"
  },
  {
    "sec": "25.3",
    "title": "25.3 From Exploration to Hypothesis",
    "path": "part-3-data-models/module-25-exploratory-discovery/section-25.3.html"
  },
  {
    "sec": "25.4",
    "title": "25.4 Building an Exploration Notebook",
    "path": "part-3-data-models/module-25-exploratory-discovery/section-25.4.html"
  },
  {
    "sec": "26.1",
    "title": "26.1 Self-Supervised Learning",
    "path": "part-3-data-models/module-26-representation-learning/section-26.1.html"
  },
  {
    "sec": "26.2",
    "title": "26.2 Contrastive Objectives",
    "path": "part-3-data-models/module-26-representation-learning/section-26.2.html"
  },
  {
    "sec": "26.3",
    "title": "26.3 Representation Evaluation",
    "path": "part-3-data-models/module-26-representation-learning/section-26.3.html"
  },
  {
    "sec": "26.4",
    "title": "26.4 Building a Domain Embedding Model",
    "path": "part-3-data-models/module-26-representation-learning/section-26.4.html"
  },
  {
    "sec": "27.1",
    "title": "27.1 What Makes a Scientific Foundation Model",
    "path": "part-3-data-models/module-27-foundation-models/section-27.1.html"
  },
  {
    "sec": "27.2",
    "title": "27.2 Protein and Molecular Models",
    "path": "part-3-data-models/module-27-foundation-models/section-27.2.html"
  },
  {
    "sec": "27.3",
    "title": "27.3 Materials and Genomics Models",
    "path": "part-3-data-models/module-27-foundation-models/section-27.3.html"
  },
  {
    "sec": "27.4",
    "title": "27.4 Fine-Tuning with LoRA",
    "path": "part-3-data-models/module-27-foundation-models/section-27.4.html"
  },
  {
    "sec": "27.5",
    "title": "27.5 Building a Protein Property Predictor",
    "path": "part-3-data-models/module-27-foundation-models/section-27.5.html"
  },
  {
    "sec": "28.1",
    "title": "28.1 Modality Alignment for Discovery",
    "path": "part-3-data-models/module-28-multimodal-scientific-ai/section-28.1.html"
  },
  {
    "sec": "28.2",
    "title": "28.2 Molecule-Text and Protein-Text Models",
    "path": "part-3-data-models/module-28-multimodal-scientific-ai/section-28.2.html"
  },
  {
    "sec": "28.3",
    "title": "28.3 Scientific Document AI",
    "path": "part-3-data-models/module-28-multimodal-scientific-ai/section-28.3.html"
  },
  {
    "sec": "28.4",
    "title": "28.4 Building a Multimodal Research Assistant",
    "path": "part-3-data-models/module-28-multimodal-scientific-ai/section-28.4.html"
  },
  {
    "sec": "29.1",
    "title": "29.1 Chain-of-Thought and Test-Time Compute",
    "path": "part-3-data-models/module-29-reasoning-models/section-29.1.html"
  },
  {
    "sec": "29.2",
    "title": "29.2 Process Reward Models and MCTS",
    "path": "part-3-data-models/module-29-reasoning-models/section-29.2.html"
  },
  {
    "sec": "29.3",
    "title": "29.3 Formal Mathematical Reasoning",
    "path": "part-3-data-models/module-29-reasoning-models/section-29.3.html"
  },
  {
    "sec": "29.4",
    "title": "29.4 Building a Verified Reasoning Pipeline",
    "path": "part-3-data-models/module-29-reasoning-models/section-29.4.html"
  },
  {
    "sec": "30.1",
    "title": "30.1 Outlier vs. Novelty Detection",
    "path": "part-3-data-models/module-30-anomaly-novelty/section-30.1.html"
  },
  {
    "sec": "30.2",
    "title": "30.2 Deep Anomaly Detection",
    "path": "part-3-data-models/module-30-anomaly-novelty/section-30.2.html"
  },
  {
    "sec": "30.3",
    "title": "30.3 Drift and Open-World Learning",
    "path": "part-3-data-models/module-30-anomaly-novelty/section-30.3.html"
  },
  {
    "sec": "30.4",
    "title": "30.4 Building an Anomaly Discovery Pipeline",
    "path": "part-3-data-models/module-30-anomaly-novelty/section-30.4.html"
  },
  {
    "sec": "31.1",
    "title": "31.1 Structural Causal Models",
    "path": "part-3-data-models/module-31-causal-discovery/section-31.1.html"
  },
  {
    "sec": "31.2",
    "title": "31.2 Causal Discovery Algorithms",
    "path": "part-3-data-models/module-31-causal-discovery/section-31.2.html"
  },
  {
    "sec": "31.3",
    "title": "31.3 Treatment Effect Estimation",
    "path": "part-3-data-models/module-31-causal-discovery/section-31.3.html"
  },
  {
    "sec": "31.4",
    "title": "31.4 Building a Causal Analysis Pipeline",
    "path": "part-3-data-models/module-31-causal-discovery/section-31.4.html"
  },
  {
    "sec": "32.1",
    "title": "32.1 The Bayesian Workflow",
    "path": "part-3-data-models/module-32-bayesian-discovery/section-32.1.html"
  },
  {
    "sec": "32.2",
    "title": "32.2 Posterior Inference Methods",
    "path": "part-3-data-models/module-32-bayesian-discovery/section-32.2.html"
  },
  {
    "sec": "32.3",
    "title": "32.3 Model Comparison and Decision Making",
    "path": "part-3-data-models/module-32-bayesian-discovery/section-32.3.html"
  },
  {
    "sec": "32.4",
    "title": "32.4 Building a Bayesian Discovery Model",
    "path": "part-3-data-models/module-32-bayesian-discovery/section-32.4.html"
  },
  {
    "sec": "33.1",
    "title": "33.1 Physics-Informed Neural Networks",
    "path": "part-3-data-models/module-33-scientific-ml/section-33.1.html"
  },
  {
    "sec": "33.2",
    "title": "Neural Operators",
    "path": "part-3-data-models/module-33-scientific-ml/section-33.2.html"
  },
  {
    "sec": "33.3",
    "title": "Equivariant Neural Networks",
    "path": "part-3-data-models/module-33-scientific-ml/section-33.3.html"
  },
  {
    "sec": "33.4",
    "title": "Building a Universal Force Field",
    "path": "part-3-data-models/module-33-scientific-ml/section-33.4.html"
  },
  {
    "sec": "34.1",
    "title": "34.1 Generative Models as Hypothesis Generators",
    "path": "part-3-data-models/module-34-generative-models/section-34.1.html"
  },
  {
    "sec": "34.2",
    "title": "34.2 Score-Based Diffusion and Flow Matching",
    "path": "part-3-data-models/module-34-generative-models/section-34.2.html"
  },
  {
    "sec": "34.3",
    "title": "34.3 Equivariant Generation for 3D Structures",
    "path": "part-3-data-models/module-34-generative-models/section-34.3.html"
  },
  {
    "sec": "34.4",
    "title": "34.4 Conditional Generation and Evaluation",
    "path": "part-3-data-models/module-34-generative-models/section-34.4.html"
  },
  {
    "sec": "35.1",
    "title": "35.1 Equation Discovery from Data",
    "path": "part-3-data-models/module-35-symbolic-regression/section-35.1.html"
  },
  {
    "sec": "35.2",
    "title": "35.2 Genetic Programming and Neural Guidance",
    "path": "part-3-data-models/module-35-symbolic-regression/section-35.2.html"
  },
  {
    "sec": "35.3",
    "title": "35.3 Building an Equation Discovery Pipeline",
    "path": "part-3-data-models/module-35-symbolic-regression/section-35.3.html"
  },
  {
    "sec": "36.1",
    "title": "36.1 Citation Analysis and Bibliometrics",
    "path": "part-4-knowledge/module-36-literature-mining/section-36.1.html"
  },
  {
    "sec": "36.2",
    "title": "36.2 Knowledge Extraction from Papers",
    "path": "part-4-knowledge/module-36-literature-mining/section-36.2.html"
  },
  {
    "sec": "36.3",
    "title": "36.3 Building a Literature Miner",
    "path": "part-4-knowledge/module-36-literature-mining/section-36.3.html"
  },
  {
    "sec": "37.1",
    "title": "37.1 RAG Architecture",
    "path": "part-4-knowledge/module-37-rag-discovery/section-37.1.html"
  },
  {
    "sec": "37.2",
    "title": "37.2 Evidence Grounding and Hallucination Control",
    "path": "part-4-knowledge/module-37-rag-discovery/section-37.2.html"
  },
  {
    "sec": "37.3",
    "title": "37.3 Building a Research Copilot",
    "path": "part-4-knowledge/module-37-rag-discovery/section-37.3.html"
  },
  {
    "sec": "38.1",
    "title": "38.1 Link Prediction and Graph Embeddings",
    "path": "part-4-knowledge/module-38-knowledge-graphs/section-38.1.html"
  },
  {
    "sec": "38.2",
    "title": "38.2 GNNs for Knowledge Completion",
    "path": "part-4-knowledge/module-38-knowledge-graphs/section-38.2.html"
  },
  {
    "sec": "38.3",
    "title": "38.3 Building a Scientific Knowledge Graph",
    "path": "part-4-knowledge/module-38-knowledge-graphs/section-38.3.html"
  },
  {
    "sec": "39.1",
    "title": "39.1 Gap Analysis and Analogical Transfer",
    "path": "part-4-knowledge/module-39-hypothesis-generation/section-39.1.html"
  },
  {
    "sec": "39.2",
    "title": "39.2 AI-Generated Hypotheses",
    "path": "part-4-knowledge/module-39-hypothesis-generation/section-39.2.html"
  },
  {
    "sec": "39.3",
    "title": "39.3 Building a Hypothesis Generator",
    "path": "part-4-knowledge/module-39-hypothesis-generation/section-39.3.html"
  },
  {
    "sec": "40.1",
    "title": "40.1 Literature, Coding, and Analysis Agents",
    "path": "part-4-knowledge/module-40-research-agents/section-40.1.html"
  },
  {
    "sec": "40.2",
    "title": "40.2 AI Scientists and Coscientist",
    "path": "part-4-knowledge/module-40-research-agents/section-40.2.html"
  },
  {
    "sec": "40.3",
    "title": "40.3 Building a Research Agent Team",
    "path": "part-4-knowledge/module-40-research-agents/section-40.3.html"
  },
  {
    "sec": "41.1",
    "title": "41.1 Claim Extraction and Evidence Mapping",
    "path": "part-4-knowledge/module-41-claim-validation/section-41.1.html"
  },
  {
    "sec": "41.2",
    "title": "41.2 Reproducibility Auditing",
    "path": "part-4-knowledge/module-41-claim-validation/section-41.2.html"
  },
  {
    "sec": "41.3",
    "title": "41.3 Building a Claim Validator",
    "path": "part-4-knowledge/module-41-claim-validation/section-41.3.html"
  },
  {
    "sec": "42.1",
    "title": "42.1 Automatic Differentiation",
    "path": "part-5-simulation-optimization/module-42-differentiable-programming/section-42.1.html"
  },
  {
    "sec": "42.2",
    "title": "42.2 JAX Functional Transforms",
    "path": "part-5-simulation-optimization/module-42-differentiable-programming/section-42.2.html"
  },
  {
    "sec": "42.3",
    "title": "42.3 Differentiable Physics and Molecular Dynamics",
    "path": "part-5-simulation-optimization/module-42-differentiable-programming/section-42.3.html"
  },
  {
    "sec": "42.4",
    "title": "42.4 Building a Differentiable Force Field",
    "path": "part-5-simulation-optimization/module-42-differentiable-programming/section-42.4.html"
  },
  {
    "sec": "43.1",
    "title": "43.1 Computational Experiments",
    "path": "part-5-simulation-optimization/module-43-scientific-simulation/section-43.1.html"
  },
  {
    "sec": "43.2",
    "title": "43.2 Stochastic Simulation and Molecular Dynamics",
    "path": "part-5-simulation-optimization/module-43-scientific-simulation/section-43.2.html"
  },
  {
    "sec": "43.3",
    "title": "43.3 Simulator Calibration",
    "path": "part-5-simulation-optimization/module-43-scientific-simulation/section-43.3.html"
  },
  {
    "sec": "43.4",
    "title": "43.4 Building a Calibrated Simulator",
    "path": "part-5-simulation-optimization/module-43-scientific-simulation/section-43.4.html"
  },
  {
    "sec": "44.1",
    "title": "44.1 Latent Dynamics Models",
    "path": "part-5-simulation-optimization/module-44-world-models/section-44.1.html"
  },
  {
    "sec": "44.2",
    "title": "44.2 Counterfactual Reasoning with World Models",
    "path": "part-5-simulation-optimization/module-44-world-models/section-44.2.html"
  },
  {
    "sec": "44.3",
    "title": "44.3 Building a World Model Planner",
    "path": "part-5-simulation-optimization/module-44-world-models/section-44.3.html"
  },
  {
    "sec": "45.1",
    "title": "45.1 Bayesian Optimization",
    "path": "part-5-simulation-optimization/module-45-optimization/section-45.1.html"
  },
  {
    "sec": "45.2",
    "title": "45.2 Evolutionary and Multi-Objective Methods",
    "path": "part-5-simulation-optimization/module-45-optimization/section-45.2.html"
  },
  {
    "sec": "45.3",
    "title": "45.3 Reinforcement Learning as Optimization",
    "path": "part-5-simulation-optimization/module-45-optimization/section-45.3.html"
  },
  {
    "sec": "45.4",
    "title": "45.4 Building a Multi-Objective Optimizer",
    "path": "part-5-simulation-optimization/module-45-optimization/section-45.4.html"
  },
  {
    "sec": "46.1",
    "title": "46.1 Active Learning",
    "path": "part-5-simulation-optimization/module-46-experiment-design/section-46.1.html"
  },
  {
    "sec": "46.2",
    "title": "46.2 Sequential Experimental Design",
    "path": "part-5-simulation-optimization/module-46-experiment-design/section-46.2.html"
  },
  {
    "sec": "46.3",
    "title": "46.3 Building a Closed-Loop Experiment Planner",
    "path": "part-5-simulation-optimization/module-46-experiment-design/section-46.3.html"
  },
  {
    "sec": "47.1",
    "title": "47.1 Registry Design and Artifact Versioning",
    "path": "part-5-simulation-optimization/module-47-experiment-registries/section-47.1.html"
  },
  {
    "sec": "47.2",
    "title": "47.2 Data Lineage and Provenance Standards",
    "path": "part-5-simulation-optimization/module-47-experiment-registries/section-47.2.html"
  },
  {
    "sec": "47.3",
    "title": "47.3 Building an Experiment Registry",
    "path": "part-5-simulation-optimization/module-47-experiment-registries/section-47.3.html"
  },
  {
    "sec": "48.1",
    "title": "48.1 Drug Discovery Pipeline",
    "path": "part-6-scientific-domains/module-48-biology-medicine/section-48.1.html"
  },
  {
    "sec": "48.2",
    "title": "48.2 Protein Structure and Design",
    "path": "part-6-scientific-domains/module-48-biology-medicine/section-48.2.html"
  },
  {
    "sec": "48.3",
    "title": "48.3 Single-Cell Genomics",
    "path": "part-6-scientific-domains/module-48-biology-medicine/section-48.3.html"
  },
  {
    "sec": "48.4",
    "title": "48.4 Clinical AI",
    "path": "part-6-scientific-domains/module-48-biology-medicine/section-48.4.html"
  },
  {
    "sec": "49.1",
    "title": "49.1 Molecular Generation and Drug Design",
    "path": "part-6-scientific-domains/module-49-chemistry-materials/section-49.1.html"
  },
  {
    "sec": "49.2",
    "title": "49.2 Protein-Ligand Cofolding",
    "path": "part-6-scientific-domains/module-49-chemistry-materials/section-49.2.html"
  },
  {
    "sec": "49.3",
    "title": "49.3 Materials Design and Universal Force Fields",
    "path": "part-6-scientific-domains/module-49-chemistry-materials/section-49.3.html"
  },
  {
    "sec": "50.1",
    "title": "50.1 Symbolic Regression for Physics",
    "path": "part-6-scientific-domains/module-50-physics-engineering/section-50.1.html"
  },
  {
    "sec": "50.2",
    "title": "50.2 Physics-Informed Learning",
    "path": "part-6-scientific-domains/module-50-physics-engineering/section-50.2.html"
  },
  {
    "sec": "50.3",
    "title": "50.3 Neural Operators for PDEs",
    "path": "part-6-scientific-domains/module-50-physics-engineering/section-50.3.html"
  },
  {
    "sec": "50.4",
    "title": "50.4 Building a Physics Discovery Pipeline",
    "path": "part-6-scientific-domains/module-50-physics-engineering/section-50.4.html"
  },
  {
    "sec": "51.1",
    "title": "51.1 AI Weather Prediction",
    "path": "part-6-scientific-domains/module-51-climate-earth/section-51.1.html"
  },
  {
    "sec": "51.2",
    "title": "51.2 Climate Emulation and Downscaling",
    "path": "part-6-scientific-domains/module-51-climate-earth/section-51.2.html"
  },
  {
    "sec": "51.3",
    "title": "51.3 Extreme Events and Attribution",
    "path": "part-6-scientific-domains/module-51-climate-earth/section-51.3.html"
  },
  {
    "sec": "52.1",
    "title": "52.1 Network Analysis and Market Discovery",
    "path": "part-6-scientific-domains/module-52-social-economic/section-52.1.html"
  },
  {
    "sec": "52.2",
    "title": "52.2 Causal Inference in Social Data",
    "path": "part-6-scientific-domains/module-52-social-economic/section-52.2.html"
  },
  {
    "sec": "52.3",
    "title": "52.3 Policy Simulation",
    "path": "part-6-scientific-domains/module-52-social-economic/section-52.3.html"
  },
  {
    "sec": "52.4",
    "title": "52.4 Building a Policy Impact Analyzer",
    "path": "part-6-scientific-domains/module-52-social-economic/section-52.4.html"
  },
  {
    "sec": "53.1",
    "title": "53.1 Automated Research Loops",
    "path": "part-7-autonomous-discovery/module-53-ai-scientists/section-53.1.html"
  },
  {
    "sec": "53.2",
    "title": "53.2 AI Scientist v1 and v2",
    "path": "part-7-autonomous-discovery/module-53-ai-scientists/section-53.2.html"
  },
  {
    "sec": "53.3",
    "title": "53.3 Coscientist and AI Co-Scientist",
    "path": "part-7-autonomous-discovery/module-53-ai-scientists/section-53.3.html"
  },
  {
    "sec": "53.4",
    "title": "53.4 Building a Supervised AI Scientist",
    "path": "part-7-autonomous-discovery/module-53-ai-scientists/section-53.4.html"
  },
  {
    "sec": "54.1",
    "title": "54.1 Scientific Agent Teams",
    "path": "part-7-autonomous-discovery/module-54-multi-agent-discovery/section-54.1.html"
  },
  {
    "sec": "54.2",
    "title": "54.2 Debate and Peer Review Protocols",
    "path": "part-7-autonomous-discovery/module-54-multi-agent-discovery/section-54.2.html"
  },
  {
    "sec": "54.3",
    "title": "54.3 Building a Research Team with Review",
    "path": "part-7-autonomous-discovery/module-54-multi-agent-discovery/section-54.3.html"
  },
  {
    "sec": "55.1",
    "title": "55.1 Laboratory Automation Infrastructure",
    "path": "part-7-autonomous-discovery/module-55-self-driving-labs/section-55.1.html"
  },
  {
    "sec": "55.2",
    "title": "55.2 Closed-Loop Experimentation",
    "path": "part-7-autonomous-discovery/module-55-self-driving-labs/section-55.2.html"
  },
  {
    "sec": "55.3",
    "title": "55.3 Safety and Digital-Physical Interfaces",
    "path": "part-7-autonomous-discovery/module-55-self-driving-labs/section-55.3.html"
  },
  {
    "sec": "56.1",
    "title": "56.1 What It Means to Discover",
    "path": "part-7-autonomous-discovery/module-56-evaluating-discovery/section-56.1.html"
  },
  {
    "sec": "56.2",
    "title": "56.2 Benchmarks for Discovery",
    "path": "part-7-autonomous-discovery/module-56-evaluating-discovery/section-56.2.html"
  },
  {
    "sec": "56.3",
    "title": "56.3 Validity and Contamination",
    "path": "part-7-autonomous-discovery/module-56-evaluating-discovery/section-56.3.html"
  },
  {
    "sec": "57.1",
    "title": "57.1 Safety in Autonomous Research",
    "path": "part-7-autonomous-discovery/module-57-responsible-discovery/section-57.1.html"
  },
  {
    "sec": "57.2",
    "title": "57.2 Scientific Integrity and Publication Ethics",
    "path": "part-7-autonomous-discovery/module-57-responsible-discovery/section-57.2.html"
  },
  {
    "sec": "57.3",
    "title": "57.3 Governance and Accountability",
    "path": "part-7-autonomous-discovery/module-57-responsible-discovery/section-57.3.html"
  },
  {
    "sec": "58.1",
    "title": "58.1 Autonomous Innovation",
    "path": "part-7-autonomous-discovery/module-58-future-directions/section-58.1.html"
  },
  {
    "sec": "58.2",
    "title": "58.2 Human-AI Co-Discovery",
    "path": "part-7-autonomous-discovery/module-58-future-directions/section-58.2.html"
  },
  {
    "sec": "58.3",
    "title": "58.3 Open Problems and What the Field Needs",
    "path": "part-7-autonomous-discovery/module-58-future-directions/section-58.3.html"
  }
]

const BOOK_ROOT = "E:/Projects/Books/DiscoveryAI"

phase("QA")
await pipeline(SECTIONS, async (t) => {
  return agent(
    `You are quality-reviewing section ${t.sec} — "${t.title}".
File path: ${BOOK_ROOT}/${t.path}

Read the file once. Perform all five passes. Write the file ONCE with all fixes.
Do not use em dashes or double hyphens.

=== PASS 1: Curriculum Alignment (Agent #01) ===
Verify the section's content matches the learning objectives implied by its title.
If the section introduces a concept but never explains how to use it, or promises
"you will learn X" but never delivers X: add the missing content or correct the
mismatch. One intervention maximum. Mark data-agent="01".

=== PASS 2: Teaching Flow (Agent #03) ===
Verify the section teaches concepts in dependency order (prerequisites before
applications). If a later concept is used before it is defined, reorder the paragraphs
or add a forward reference. One reorder or insertion maximum. Mark data-agent="03".

=== PASS 3: Student Advocate (Agent #04) ===
Read as an advanced undergraduate confused by unexplained jumps. For each jump
(concept A used to explain B, but B was not defined): insert a one-sentence bridge.
For jargon without a definition: add a parenthetical gloss on first use. Maximum 3
interventions. Mark data-agent="04".

=== PASS 4: Cognitive Load (Agent #05) ===
Find the longest continuous dense block (3+ new concepts in a row, no visual break).
If found, insert a <div class="callout key-insight"><h4>Checkpoint</h4><p>So far:
[one-sentence recap]</p></div> after the third concept. One insertion per section.
Mark data-agent="05".

=== PASS 5: Skeptical Reader (Agent #28) ===
Read as a domain expert looking for reasons to distrust the content. Fix:
- Claims stated as fact without evidence -> add hedging ("typically", "in practice").
- "clearly", "obviously", "it is well known" -> delete or provide the actual reason.
- Logical gaps where conclusion does not follow -> add the missing step.
- Internal contradictions -> reconcile them.
Mark each fix data-agent="28".

Write the complete updated file with all fixes applied.
`,
    { label: `pack-p6-qa-${t.sec}`, phase: "QA" }
  )
})

return { wave: "pack-p6-qa", sections: SECTIONS.length }
