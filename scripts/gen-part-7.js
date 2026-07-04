export const meta = {
  name: 'gen-part-7',
  description: 'Generate initial content for Part VII: Autonomous Discovery Systems (Ch 53-58)',
  phases: [
    { title: 'Generate', detail: 'Write all 6 chapters with section HTML files' }
  ]
}

const BOOK_ROOT = 'E:/Projects/Books/DiscoveryAI'
const PART_NUM = 'VII'
const PART_TITLE = 'Autonomous Discovery Systems'
const PART_DIR = 'part-7-autonomous-discovery'

const CHAPTERS = [
  { num: 53, slug: 'module-53-ai-scientists', title: 'AI Scientists',
    sections: ['53.1:Automated Research Loops', '53.2:AI Scientist v1 and v2', '53.3:Coscientist and AI Co-Scientist', '53.4:Building a Supervised AI Scientist'],
    outline: 'Automated research: propose, implement, run, evaluate, critique, report. AI Scientist v1 ($15/paper) and v2 (agentic tree search, ICLR 2025 workshop). Coscientist (Nature 2023): LLM + robotics. Google AI Co-Scientist (2025): generation, debate, evolution, proximity agents. FunSearch (Nature 2023). Current limits: ML-domain only. Novelty filter: embedding distance. Tools: Claude Code SDK, OpenAI Agents SDK, LangGraph, MLflow, PaperQA2. Recipe: supervised AI scientist with hypothesis generation, coding, experimentation, review, and human gates.' },
  { num: 54, slug: 'module-54-multi-agent-discovery', title: 'Multi-Agent Discovery Systems',
    sections: ['54.1:Scientific Agent Teams', '54.2:Debate and Peer Review Protocols', '54.3:Building a Research Team with Review'],
    outline: 'Specialized agent roles and coordination. Adversarial critique as quality filter. Peer review simulation. Collective intelligence. Coordination: shared state, voting, auction. Condorcet jury theorem. Game-theoretic equilibria. Tools: LangGraph, OpenAI Agents SDK, AutoGen, CrewAI, DSPy. Recipe: proposer + implementer + experimenter + 2 reviewers + judge, measure review impact on quality.' },
  { num: 55, slug: 'module-55-self-driving-labs', title: 'Self-Driving Laboratories',
    sections: ['55.1:Laboratory Automation Infrastructure', '55.2:Closed-Loop Experimentation', '55.3:Safety and Digital-Physical Interfaces', '55.4:Building a Simulated Self-Driving Lab'],
    outline: 'Lab robotics. Closed-loop: design, execute, observe, update. Atlas, ChemOS 2.0. Coscientist robotics. GNoME -> Berkeley Lab synthesis. AI planners + instruments. Safety: GHS, ChemCrow. SDL loop: planner -> executor -> measurement -> update. Safety constraints as acquisition domain filters. Tools: BoTorch, PyMC, simulated lab APIs, OpenMM, FastAPI. Recipe: simulated SDL for molecular optimization, 20 rounds BO with safety constraints.' },
  { num: 56, slug: 'module-56-evaluating-discovery', title: 'Evaluating Discovery Systems',
    sections: ['56.1:What It Means to Discover', '56.2:Benchmarks for Discovery', '56.3:Validity and Contamination', '56.4:Building a Discovery Evaluation Suite'],
    outline: 'Evaluation: novelty, impact, reproducibility, validity, efficiency. ScienceAgentBench (NeurIPS 2024). DiscoveryBench (2024). MLE-bench (OpenAI 2024). SWE-bench Verified/Live. GPQA Diamond saturation. FrontierMath ceiling. Human evaluation protocols. Construct validity threats. Cost/latency. Cohen kappa, Krippendorff alpha. Power analysis. Tools: custom harnesses, MLflow, scipy, annotation tools. Recipe: evaluation suite for Discovery Workbench with task types, rubrics, gold standard, CI comparison.' },
  { num: 57, slug: 'module-57-responsible-discovery', title: 'Responsible Discovery AI',
    sections: ['57.1:Safety in Autonomous Research', '57.2:Scientific Integrity and Publication Ethics', '57.3:Governance and Accountability', '57.4:Building a Governance Layer'],
    outline: 'Safety in autonomous research. Dual-use risks. Scientific integrity: authorship, plagiarism, fabrication. Alignment with human values. Governance: approval workflows, audit trails. Publication ethics. Regulatory frameworks. Risk register. Governance workflow: proposal -> safety -> ethics -> approval -> execution -> audit. Risk-adjusted expected value. Tools: structured checklists, red-team templates, approval systems, audit schemas. Recipe: governance layer for Discovery Workbench with risk assessment, dual-use screening, approval gate, audit log.' },
  { num: 58, slug: 'module-58-future-directions', title: 'Future Directions',
    sections: ['58.1:Autonomous Innovation', '58.2:Human-AI Co-Discovery', '58.3:Open Problems and What the Field Needs'],
    outline: 'Autonomous innovation and the innovation economy. Human-AI co-discovery frontier. AI research organizations and governance. Open problems in Discovery AI. Scientific institutions in the agent era. What the field needs: benchmarks, theory, infrastructure, norms. Discovery as socio-technical infrastructure.' }
]

const PROMPT = `You are a chapter author for "Building Discovery AI" by Alexander Apartsin & Yehudit Aperstein.
Hands-On AI Science series: graduate depth, hands-on building, plain language.
RULES: No em dashes. book/part/chapter/section/reader. Every section: epigraph, key-insight, practical-example, code with captions BELOW, What's Next, bibliography, nav footer. Links: ../../styles/book.css. what/why/how/when. Library shortcuts. Cross-references. Discovery Workbench integration.
Read BOOK_CONFIG.md first.
`

phase('Generate')

const results = await pipeline(
  CHAPTERS,
  async (ch) => {
    const secList = ch.sections.map(s => { const p = s.split(':'); return `Section ${p[0]}: ${p[1]}` }).join('\n')
    return agent(`${PROMPT}

Write Chapter ${ch.num}: "${ch.title}" in Part ${PART_NUM}: ${PART_TITLE}.
Book root: ${BOOK_ROOT}
Chapter dir: ${BOOK_ROOT}/${PART_DIR}/${ch.slug}/

OUTLINE: ${ch.outline}

SECTIONS:
${secList}

Generate ALL files: index.html + each section-N.M.html (2000-4000 words, real Python, math, callouts, bibliography).
Read ${BOOK_ROOT}/BOOK_CONFIG.md first.`, {
      label: `ch${ch.num}-${ch.title.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`,
      phase: 'Generate'
    })
  }
)

return { part: 'VII', completed: results.filter(Boolean).length }
