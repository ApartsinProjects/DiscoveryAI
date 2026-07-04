export const meta = {
  name: 'gen-part-6',
  description: 'Generate initial content for Part VI: Discovery in Scientific Domains (Ch 48-52)',
  phases: [
    { title: 'Generate', detail: 'Write all 5 chapters with section HTML files' }
  ]
}

const BOOK_ROOT = 'E:/Projects/Books/DiscoveryAI'
const PART_NUM = 'VI'
const PART_TITLE = 'Discovery in Scientific Domains'
const PART_DIR = 'part-6-scientific-domains'

const CHAPTERS = [
  { num: 48, slug: 'module-48-biology-medicine', title: 'Discovery AI For Biology And Medicine',
    sections: ['48.1:Drug Discovery Pipeline', '48.2:Protein Structure and Design', '48.3:Single-Cell Genomics', '48.4:Clinical AI', '48.5:Building a Protein Design Pipeline'],
    outline: 'Drug discovery: target ID, hit finding, lead optimization. AlphaFold2/3, ESMFold. RFDiffusion, FrameDiff, FoldFlow. ProteinMPNN, LigandMPNN. scVI, scANVI, scGPT, Geneformer. Clinical AI: risk prediction, trial design. Cox proportional hazards. Tools: AlphaFold3, ESMFold, RFDiffusion, ProteinMPNN, scVI, BioPython, RDKit. Recipe: full protein design pipeline: RFDiffusion scaffolds -> ProteinMPNN -> ESMFold filtering -> docking ranking.' },
  { num: 49, slug: 'module-49-chemistry-materials', title: 'Discovery AI For Chemistry And Materials',
    sections: ['49.1:Molecular Generation and Drug Design', '49.2:Protein-Ligand Cofolding', '49.3:Materials Design and Universal Force Fields', '49.4:Building a Drug Discovery Campaign'],
    outline: 'De novo molecular generation, scaffold hopping. EDM equivariant diffusion. DiffSBDD, DiffDock-L. Boltz-1, Chai-1. Retrosynthesis. Crystal/material design. MACE universal force fields. Autonomous chemistry labs. ChemCrow. Synthesizability. Tools: RDKit, DeepChem, EDM, DiffSBDD, Boltz-1, Chai-1, MACE-MP-0, CHGNet, MatterGen, REINVENT, AiZynthFinder, ChemCrow. Recipe: closed-loop drug discovery with DiffSBDD + Boltz-1 + BO + provenance.' },
  { num: 50, slug: 'module-50-physics-engineering', title: 'Discovery AI For Physics And Engineering',
    sections: ['50.1:Symbolic Regression for Physics', '50.2:Physics-Informed Learning', '50.3:Neural Operators for PDEs', '50.4:Building a Physics Discovery Pipeline'],
    outline: 'Symbolic regression with dimensional constraints. PINNs for inverse problems. Neural operators: FNO. Engineering optimization. Simulation-based inference. Noether theorem as prior. Universal approximation for nonlinear operators. Tools: PySR, SymPy, JAX, DeepXDE, NeuralOperator, BoTorch. Recipe: PySR law discovery + PINN inverse problem + comparison with neural baseline on extrapolation.' },
  { num: 51, slug: 'module-51-climate-earth', title: 'Discovery AI For Climate And Earth Science',
    sections: ['51.1:AI Weather Prediction', '51.2:Climate Emulation and Downscaling', '51.3:Extreme Events and Attribution', '51.4:Building a Regional Weather Model'],
    outline: 'Pangu-Weather, GraphCast, FourCastNet, NeuralGCM. Foundation models for earth observation. Climate emulation, downscaling. Extreme event detection/attribution. Carbon accounting. Physics constraints: conservation laws. Spectral energy cascade. Optimal fingerprinting. Tools: PyTorch, JAX, xarray, Zarr, pangeo, earthengine-api, WeatherBench2. Recipe: fine-tune GraphCast on regional downscaling, evaluate vs ERA5 with WeatherBench2.' },
  { num: 52, slug: 'module-52-social-economic', title: 'Discovery AI For Social And Economic Systems',
    sections: ['52.1:Network Analysis and Market Discovery', '52.2:Causal Inference in Social Data', '52.3:Policy Simulation', '52.4:Building a Policy Impact Analyzer'],
    outline: 'Market discovery. Social influence, diffusion. Agent-based economics. Causal inference in observational data. Policy simulation, counterfactuals. Ethical constraints. Difference-in-differences. Network interference: SUTVA violation. Tools: NetworkX, DoWhy, EconML, Mesa, statsmodels, pysal. Recipe: heterogeneous treatment effect with exposure mapping + agent-based policy simulation.' }
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

return { part: 'VI', completed: results.filter(Boolean).length }
