export const meta = {
  name: 'gen-part-4',
  description: 'Generate initial content for Part IV: Discovery Through Knowledge (Ch 36-41)',
  phases: [
    { title: 'Generate', detail: 'Write all 6 chapters with section HTML files' }
  ]
}

const BOOK_ROOT = 'E:/Projects/Books/DiscoveryAI'
const PART_NUM = 'IV'
const PART_TITLE = 'Discovery Through Knowledge'
const PART_DIR = 'part-4-knowledge'

const CHAPTERS = [
  { num: 36, slug: 'module-36-literature-mining', title: 'Literature Mining',
    sections: ['36.1:Citation Analysis and Bibliometrics', '36.2:Knowledge Extraction from Papers', '36.3:Building a Literature Miner'],
    outline: 'Citation analysis, bibliometrics. Semantic search. Knowledge extraction: entities, relations, claims, evidence. Claim-evidence relations. PageRank for paper influence. Louvain community detection. Tools: OpenAlex, Semantic Scholar, Crossref, arXiv, PyMuPDF, Docling, NetworkX. Recipe: 500+ paper domain miner with topic clustering and gap detection.' },
  { num: 37, slug: 'module-37-rag-discovery', title: 'Retrieval Augmented Discovery Systems',
    sections: ['37.1:RAG Architecture', '37.2:Evidence Grounding and Hallucination Control', '37.3:Building a Research Copilot'],
    outline: 'RAG: retriever, reranker, generator. Research copilots. Long-context vs retrieval tradeoffs. Query planning. PaperQA2. Citation checking. Recall@k, MRR. Faithfulness metric. Tools: Qdrant/pgvector, PaperQA2, cross-encoder rerankers, Anthropic API. Recipe: multi-hop research copilot with query decomposition and faithfulness evaluation.' },
  { num: 38, slug: 'module-38-knowledge-graphs', title: 'Knowledge Graph Discovery',
    sections: ['38.1:Link Prediction and Graph Embeddings', '38.2:GNNs for Knowledge Completion', '38.3:Building a Scientific Knowledge Graph'],
    outline: 'Link prediction. TransE, RotatE, ComplEx. GNN message passing. Scientific relations: causes, inhibits, activates, binds. MRR, Hits@k validity. Tools: Neo4j, NetworkX, PyG, RDFLib, ampligraph. Recipe: KG from paper relations, RotatE link prediction, surface missing links as hypotheses.' },
  { num: 39, slug: 'module-39-hypothesis-generation', title: 'Hypothesis Generation',
    sections: ['39.1:Gap Analysis and Analogical Transfer', '39.2:AI-Generated Hypotheses', '39.3:Building a Hypothesis Generator'],
    outline: 'Gap analysis. Analogical transfer. Scientific creativity. Generation and scoring. Plausibility, novelty, testability. Human-AI refinement. Novelty as embedding distance. Testability as experiment cost. Tools: Anthropic/OpenAI API, Qdrant, NetworkX, PyMC. Recipe: gap-based hypothesis generation with multi-dimensional scoring.' },
  { num: 40, slug: 'module-40-research-agents', title: 'Research Agents',
    sections: ['40.1:Literature, Coding, and Analysis Agents', '40.2:AI Scientists and Coscientist', '40.3:Building a Research Agent Team'],
    outline: 'Literature agents. Coding agents. Analysis agents. Reviewer agents. Coscientist (Nature 2023). ChemCrow. Google AI Co-Scientist. Agent memory: episodic, semantic, procedural. Optimal stopping. Tools: OpenAI Agents SDK, LangGraph, DSPy, MLflow, PaperQA2, ChemCrow. Recipe: multi-agent team modeled on AI Co-Scientist with debate and ranking.' },
  { num: 41, slug: 'module-41-claim-validation', title: 'Scientific Claim Validation',
    sections: ['41.1:Claim Extraction and Evidence Mapping', '41.2:Reproducibility Auditing', '41.3:Building a Claim Validator'],
    outline: 'Claim extraction and structuring. Evidence mapping: claim to artifact to result. Citation checking. Artifact verification. Reproducibility score. Leakage detection. Tools: Crossref, OpenAlex, MLflow, pytest, DVC. Recipe: extract numerical claims, link to MLflow artifacts, verify reproducibility within tolerance.' }
]

const PROMPT = `You are a chapter author for "Building Discovery AI" by Alexander Apartsin & Yehudit Aperstein.
Hands-On AI Science series: graduate depth, hands-on building, plain language.
RULES: No em dashes. book/part/chapter/section/reader. Every section: epigraph, key-insight, practical-example, code with captions BELOW, What's Next, bibliography, nav footer. Links: ../../styles/book.css. what/why/how/when. Library shortcuts. Cross-references.
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

return { part: 'IV', completed: results.filter(Boolean).length }
