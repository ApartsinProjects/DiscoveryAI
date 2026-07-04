export const meta = {
  name: 'gen-part-2',
  description: 'Generate initial content for Part II: Discovery Through Software Engineering & Vibe Coding (Ch 7-24)',
  phases: [
    { title: 'Generate', detail: 'Write all 18 chapters with section HTML files' }
  ]
}

const BOOK_ROOT = 'E:/Projects/Books/DiscoveryAI'
const PART_NUM = 'II'
const PART_TITLE = 'Discovery Through Software Engineering and Vibe Coding'
const PART_DIR = 'part-2-software-engineering'

const CHAPTERS = [
  { num: 7, slug: 'module-07-software-discovery', title: 'Software Development As A Discovery Process',
    sections: ['7.1:SDLC as Iterative Hypothesis Testing', '7.2:Engineering Discovery and AI', '7.3:Building a Hypothesis-Driven Dev Workflow'],
    outline: 'SDLC as hypothesis testing. Agile/lean as discovery. Design thinking. Discovery velocity. Expected regret of greedy development. Tools: Git, GitHub, pytest. Recipe: vague idea -> falsifiable hypotheses -> user stories -> skeleton tests.' },
  { num: 8, slug: 'module-08-ai-software-foundations', title: 'Foundations Of AI Assisted Software Engineering',
    sections: ['8.1:Code Foundation Models', '8.2:Repository-Level Reasoning', '8.3:Human-AI Collaboration Patterns', '8.4:Building with a Coding Agent'],
    outline: 'Code LLMs: pre-training, fine-tuning, ICL. Program synthesis. Repo graphs: dependency, call, symbol. Issue-to-patch search. Test-guided repair. Tools: Claude Code, Codex CLI, Cursor. Recipe: agent implements feature with tests and reasoning trace.' },
  { num: 9, slug: 'module-09-vibe-coding', title: 'Vibe Coding As Specification, Steering, Verification, And Repair',
    sections: ['9.1:Natural Language as Specification', '9.2:The Vibe Coding Loop', '9.3:Verification and Repair', '9.4:Building Through Conversation'],
    outline: 'Vibe coding loop: specify -> generate -> observe -> steer/verify -> commit/repair. Prompt as partial spec. Test suite as executable contract. Spec completeness gap. Tools: Claude Code, pytest, Playwright, Hypothesis, Pydantic. Recipe: web app through conversation with failing tests first.' },
  { num: 10, slug: 'module-10-prompting-to-programming', title: 'Prompting To Programming',
    sections: ['10.1:Structured Outputs and Tool Use', '10.2:Programmatic Prompt Optimization', '10.3:Building a DSPy Literature Program'],
    outline: 'Structured outputs, JSON schemas, function calling. Typed agent interfaces with Pydantic. DSPy modules: signature, predictor, compiled prompt. Prompt optimization as discrete search. Tools: DSPy, Pydantic, OpenAI Agents SDK, Anthropic SDK, MCP. Recipe: convert prompt chain to typed DSPy program.' },
  { num: 11, slug: 'module-11-context-engineering', title: 'Context Engineering At Repository Scale',
    sections: ['11.1:Why Context is the Bottleneck', '11.2:Chunking and Summarization', '11.3:Retrieval-Augmented Code Generation', '11.4:Building a Repository Intelligence Layer'],
    outline: 'Context bottleneck for coding agents. Repo structure: file trees, import graphs, symbol tables. Chunking: syntactic, semantic, hierarchical. Summarization. Embedding code, BM25, hybrid search. Context budget as knapsack. Tools: tree-sitter, ripgrep, sentence-transformers, pgvector. Recipe: repo intelligence layer for 50k+ LOC codebase.' },
  { num: 12, slug: 'module-12-mcp-servers', title: 'Building MCP Servers For Scientific Workflows',
    sections: ['12.1:MCP Architecture', '12.2:Implementing Scientific Tools', '12.3:Testing and Publishing', '12.4:Building a Scientific MCP Server'],
    outline: 'MCP: hosts, clients, servers, transports. Tool/resource/prompt definitions. JSON Schema validation. Scientific tool integration: literature, chemistry, instruments. Auth, sandboxing. Testing. Tools: MCP SDK (Python/TS), FastAPI, pytest, Docker. Recipe: MCP server with PubChem, OpenAlex, vector DB tools.' },
  { num: 13, slug: 'module-13-requirements-discovery', title: 'Discovery Of Requirements',
    sections: ['13.1:Stakeholders and Requirements', '13.2:AI-Assisted Requirement Extraction', '13.3:Building a Requirement Discovery Assistant'],
    outline: 'User stories, use cases, acceptance criteria. AI extraction from transcripts/tickets. Requirement validation: completeness, consistency, testability. Traceability matrix. Conflict detection as satisfiability. Tools: LLM extraction, NetworkX. Recipe: ingest transcripts, extract/cluster requirements, detect conflicts.' },
  { num: 14, slug: 'module-14-architecture-discovery', title: 'Discovery Of Architectures',
    sections: ['14.1:Architectural Styles and Quality Attributes', '14.2:AI-Assisted Architecture Generation', '14.3:Building Architecture Decision Records'],
    outline: 'Microservices, event-driven, layered, hexagonal. ADRs. Fitness functions. Pareto frontier over quality attributes. Architecture as component graph. Tools: Mermaid, Structurizr, NetworkX. Recipe: generate 3 architectures with tradeoff analysis, produce ADR for Pareto-optimal choice.' },
  { num: 15, slug: 'module-15-algorithm-discovery', title: 'Discovery Of Algorithms',
    sections: ['15.1:Algorithm Search and Complexity', '15.2:Program Synthesis and Benchmarking', '15.3:Building an Algorithm Benchmark'],
    outline: 'Algorithm search as complexity-correctness exploration. Data structure selection. Program synthesis. Benchmarking methodology. Statistical comparison: Mann-Whitney U. Tools: timeit, memory_profiler, Hypothesis. Recipe: propose 3 algorithms, benchmark statistically, select winner.' },
  { num: 16, slug: 'module-16-ai-implementation', title: 'AI Assisted Implementation At Repository Scale',
    sections: ['16.1:Multi-File Code Generation', '16.2:Impact Analysis and Patch Review', '16.3:Building a Repository-Scale Change'],
    outline: 'Code generation for multi-file changes. Impact analysis: change propagation in dependency graph. Patch review. Failure patterns. Tools: Claude Code SDK, GitHub API, pytest, tree-sitter. Recipe: multi-file change in real OSS repo with impact analysis.' },
  { num: 17, slug: 'module-17-multi-agent-teams', title: 'Multi-Agent Software Teams',
    sections: ['17.1:Agent Roles and Workflows', '17.2:Coordination and Human Gates', '17.3:Building a Software Agent Team'],
    outline: 'PM, architect, developer, tester, reviewer agent roles. Workflow graphs: sequential, parallel, conditional. Shared state, message passing. Debate patterns. Human approval gates. Tools: OpenAI Agents SDK, LangGraph, AutoGen, CrewAI. Recipe: multi-agent team from issue to PR.' },
  { num: 18, slug: 'module-18-ai-testing', title: 'AI Assisted Testing And QA',
    sections: ['18.1:Test Generation Strategies', '18.2:Property-Based Testing and Mutation', '18.3:Building an Invariant Discovery System'],
    outline: 'Unit, integration, property, E2E testing. Test generation from specs/code/failures. Property-based testing. Mutation testing. Coverage metrics: statement, branch, MC/DC. Tools: pytest, Hypothesis, mutmut, Playwright. Recipe: infer behavioral invariants, generate property tests, measure mutation score.' },
  { num: 19, slug: 'module-19-ai-debugging', title: 'AI Assisted Debugging',
    sections: ['19.1:Hypothesis-Driven Debugging', '19.2:Self-Debugging Agents', '19.3:Building a Debugging Pipeline'],
    outline: 'Failure analysis. Root cause from traces/logs. Delta debugging: binary search over change sets. Fault localization: Ochiai coefficient. Self-debugging agents. Tools: pytest, structlog, OpenTelemetry, debugpy. Recipe: plant bug, collect traces, agent generates hypotheses ranked by Ochiai, patches and verifies.' },
  { num: 20, slug: 'module-20-software-security', title: 'AI For Software Security',
    sections: ['20.1:Threat Modeling', '20.2:AI-Assisted Security Review', '20.3:Building a Security Review Pipeline'],
    outline: 'STRIDE, attack trees. Secure SDLC. Vulnerability discovery: SAST, fuzzing, symbolic execution. AI red teaming. Secure coding agents: sandboxing, output validation. Tools: Semgrep, Bandit, CodeQL, atheris. Recipe: AI security review of FastAPI service with threat model and regression test.' },
  { num: 21, slug: 'module-21-devops', title: 'AI For DevOps And Platform Engineering',
    sections: ['21.1:CI/CD as Discovery', '21.2:Observability and Incident Analysis', '21.3:Building an Agent-Assisted Pipeline'],
    outline: 'CI/CD pipelines. Observability: metrics, logs, traces, profiles. IaC. Incident analysis. SRE golden signals. Tools: GitHub Actions, Docker, Terraform, OpenTelemetry, Grafana. Recipe: agent-assisted CI pipeline + synthetic incident postmortem.' },
  { num: 22, slug: 'module-22-mlops-llmops', title: 'MLOps, LLMOps, And AgentOps',
    sections: ['22.1:Model Lifecycle Management', '22.2:LLMOps and AgentOps', '22.3:Building a Lifecycle Dashboard'],
    outline: 'Data pipelines, feature stores. Model lifecycle. LLMOps: prompt versioning, evaluation, cost. AgentOps: trace logging, tool monitoring. Governance: model cards. Distribution shift: MMD, PSI. Tools: MLflow, DVC, W&B, LangSmith, Arize Phoenix. Recipe: complete lifecycle tracking dashboard.' },
  { num: 23, slug: 'module-23-evaluating-agents', title: 'Evaluating AI Coding Agents',
    sections: ['23.1:SWE-bench and Task Suites', '23.2:Validity and Contamination', '23.3:Building an Agent Benchmark'],
    outline: 'SWE-bench task construction. Repo task suites. Human review. Benchmark leakage/contamination. Cost, latency, reliability. Bootstrap confidence intervals. Wilcoxon signed-rank. Tools: SWE-bench, pytest, GitHub Actions. Recipe: build 5-issue internal benchmark, evaluate two agent workflows, report with CIs.' },
  { num: 24, slug: 'module-24-autonomous-software', title: 'Autonomous Software Organizations',
    sections: ['24.1:SWE Agents and Capabilities', '24.2:Autonomous Factory Architecture', '24.3:Building a Supervised Autonomous Loop'],
    outline: 'SWE agents. Autonomous software factory. Issue triage, planning, execution without humans. Autonomy ladder. Self-improving development. Reward signal: test pass rate, code quality, user feedback. Tools: Claude Code SDK, OpenAI Agents SDK, LangGraph, GitHub API. Recipe: supervised autonomous loop polling GitHub issues.' }
]

const COMMON_PROMPT = `You are a chapter author for "Building Discovery AI" by Alexander Apartsin & Yehudit Aperstein.
Hands-On AI Science series: graduate depth, hands-on building, plain language, rich illustrations.

CRITICAL RULES:
- NEVER use em dashes or double dashes. Use commas, semicolons, colons, parentheses, or separate sentences.
- Use "book", "part", "chapter", "section", "reader" (never "syllabus", "course", "lecture", "module").
- Every section needs: epigraph, key-insight callout, practical-example callout, code blocks with captions BELOW, What's Next, bibliography, nav footer.
- All HTML links: ../../styles/book.css, ../../vendor/katex/, ../../vendor/prism/
- Every concept: what, why, how, when. Include library shortcuts after from-scratch code.
- Cross-reference other chapters. Discovery Workbench grows from Ch 6 onward.

Read BOOK_CONFIG.md and CONFORMANCE_CHECKLIST.md first.
`

phase('Generate')

const results = await pipeline(
  CHAPTERS,
  async (ch) => {
    const secList = ch.sections.map(s => {
      const parts = s.split(':')
      return `Section ${parts[0]}: ${parts[1]}`
    }).join('\n')

    return agent(`${COMMON_PROMPT}

Write Chapter ${ch.num}: "${ch.title}" in Part ${PART_NUM}: ${PART_TITLE}.
Book root: ${BOOK_ROOT}
Chapter dir: ${BOOK_ROOT}/${PART_DIR}/${ch.slug}/

OUTLINE: ${ch.outline}

SECTIONS:
${secList}

Generate ALL files:
1. Chapter index: ${BOOK_ROOT}/${PART_DIR}/${ch.slug}/index.html (header, epigraph, overview, prereqs, outcomes, section cards, footer)
2. Each section file: section-N.M.html with 2000-4000 words, real Python code, math, callouts, bibliography.

Start by reading ${BOOK_ROOT}/BOOK_CONFIG.md, then write all files.`, {
      label: `ch${ch.num}-${ch.title.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`,
      phase: 'Generate'
    })
  }
)

return { part: 'II', chapters: CHAPTERS.map(c => c.num), completed: results.filter(Boolean).length }
