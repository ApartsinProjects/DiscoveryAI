export const meta = {
  name: 'gen-part-3',
  description: 'Generate initial content for Part III: Discovery Through Data and Models (Ch 25-35)',
  phases: [
    { title: 'Generate', detail: 'Write all 11 chapters with section HTML files' }
  ]
}

const BOOK_ROOT = 'E:/Projects/Books/DiscoveryAI'
const PART_NUM = 'III'
const PART_TITLE = 'Discovery Through Data and Models'
const PART_DIR = 'part-3-data-models'

const CHAPTERS = [
  { num: 25, slug: 'module-25-exploratory-discovery', title: 'Exploratory Discovery',
    sections: ['25.1:Exploratory Data Analysis as Inquiry', '25.2:Clustering and Dimensionality Reduction', '25.3:From Exploration to Hypothesis', '25.4:Building an Exploration Notebook'],
    outline: 'EDA as scientific inquiry. Clustering: k-means, HDBSCAN, GMM. UMAP: topological data analysis. Cluster stability: silhouette, DBCV. Tools: pandas, Polars, DuckDB, scikit-learn, UMAP, HDBSCAN, Plotly. Recipe: clustering + UMAP + LLM hypothesis generation.' },
  { num: 26, slug: 'module-26-representation-learning', title: 'Representation Learning',
    sections: ['26.1:Self-Supervised Learning', '26.2:Contrastive Objectives', '26.3:Representation Evaluation', '26.4:Building a Domain Embedding Model'],
    outline: 'SSL: masked prediction, contrastive, generative. SimCLR, MoCo, CLIP. NT-Xent loss and MI maximization. Alignment and uniformity. Linear probes. Tools: PyTorch, HF Transformers, sentence-transformers. Recipe: domain-specific contrastive model on scientific abstracts.' },
  { num: 27, slug: 'module-27-foundation-models', title: 'Scientific Foundation Models',
    sections: ['27.1:What Makes a Scientific Foundation Model', '27.2:Protein and Molecular Models', '27.3:Materials and Genomics Models', '27.4:Fine-Tuning with LoRA', '27.5:Building a Protein Property Predictor'],
    outline: 'ESM-2, ESM-3, ProGen2, Uni-Mol2, MolFormer, GNoME, MACE-MP-0, CHGNet, Nucleotide Transformer, DNABERT-2. LoRA: W=W0+BA. Scaling laws. Nobel Prize 2024 (AlphaFold). Tools: ESM, HF, PEFT, MACE. Recipe: fine-tune ESM-2 with LoRA on protein thermostability.' },
  { num: 28, slug: 'module-28-multimodal-scientific-ai', title: 'Multimodal Scientific AI',
    sections: ['28.1:Modality Alignment for Discovery', '28.2:Molecule-Text and Protein-Text Models', '28.3:Scientific Document AI', '28.4:Building a Multimodal Research Assistant'],
    outline: 'Molecule-text: MolT5, MoleculeSTM. Protein-text: ProteinChat, ESM3 multimodal. Scientific vision-language. PaperQA2. InfoNCE loss. Alignment score. Tools: HF, MoleculeSTM, PaperQA2, RDKit. Recipe: multimodal research assistant with literature + molecular search.' },
  { num: 29, slug: 'module-29-reasoning-models', title: 'Reasoning Models For Discovery',
    sections: ['29.1:Chain-of-Thought and Test-Time Compute', '29.2:Process Reward Models and MCTS', '29.3:Formal Mathematical Reasoning', '29.4:Building a Verified Reasoning Pipeline'],
    outline: 'CoT prompting. o1/o3 reasoning. PRMs: step-level scoring. MCTS over reasoning. AlphaGeometry 2, AlphaProof, Gemini Deep Think. FunSearch. Lean4. GPQA Diamond trajectory. Tools: Anthropic API, OpenAI API, Lean4, DeepSeek-Prover. Recipe: mathematical optimization with CoT + PRM + Lean4 sketch.' },
  { num: 30, slug: 'module-30-anomaly-novelty', title: 'Anomaly And Novelty Discovery',
    sections: ['30.1:Outlier vs Novelty Detection', '30.2:Deep Anomaly Detection', '30.3:Drift and Open-World Learning', '30.4:Building an Anomaly Discovery Pipeline'],
    outline: 'LOF, HDBSCAN, KDE. Isolation Forest. Deep: autoencoders, VAEs, normalizing flows. OOD detection. CUSUM drift detection. Errors vs discoveries. Tools: PyOD, HDBSCAN, scikit-learn, river, PyTorch. Recipe: three-method anomaly detection with ground-truth validation.' },
  { num: 31, slug: 'module-31-causal-discovery', title: 'Causal Discovery And Causal Inference',
    sections: ['31.1:Structural Causal Models', '31.2:Causal Discovery Algorithms', '31.3:Treatment Effect Estimation', '31.4:Building a Causal Analysis Pipeline'],
    outline: 'SCM: M=(V,U,F,P_U). PC, FCI, GES, LiNGAM. ATE, ATT, CATE. do-operator. Backdoor criterion. Double ML. E-value sensitivity. Tools: DoWhy, EconML, causal-learn. Recipe: heterogeneous treatment effect with DoWhy refutation tests.' },
  { num: 32, slug: 'module-32-bayesian-discovery', title: 'Bayesian Discovery And Uncertainty',
    sections: ['32.1:The Bayesian Workflow', '32.2:Posterior Inference Methods', '32.3:Model Comparison and Decision Making', '32.4:Building a Bayesian Discovery Model'],
    outline: 'Bayesian models as hypotheses. Priors, likelihoods, posteriors. MCMC, VI, normalizing flows. NUTS geometry. WAIC, LOO-CV. Calibration. Value of information. Tools: PyMC, ArviZ, NumPyro, flowMC. Recipe: two competing hypotheses, PyMC inference, LOO-CV, expected information gain.' },
  { num: 33, slug: 'module-33-scientific-ml', title: 'Scientific Machine Learning',
    sections: ['33.1:Physics-Informed Neural Networks', '33.2:Neural Operators', '33.3:Equivariant Neural Networks', '33.4:Building a Universal Force Field'],
    outline: 'PINNs: residual losses on PDEs. DeepONet, FNO. E(3)/SE(3)/O(3) equivariance. MACE, NequIP, GemNet, EquiformerV2. GNoME, FairChem. Differentiable simulation. Tools: JAX, DeepXDE, NeuralOperator, MACE, torchdiffeq. Recipe: train MACE on molecular dataset, benchmark vs DFT.' },
  { num: 34, slug: 'module-34-generative-models', title: 'Generative Models For Discovery',
    sections: ['34.1:Generative Models as Hypothesis Generators', '34.2:Score-Based Diffusion and Flow Matching', '34.3:Equivariant Generation for 3D Structures', '34.4:Conditional Generation and Evaluation', '34.5:Building a Molecular Generator'],
    outline: 'VAEs, GANs, diffusion, flow matching. Score function. EDM equivariant diffusion. SE(3) equivariance. Protein design: RFDiffusion, FrameDiff, FoldFlow. Boltz-1, Chai-1. REINFORCE. Tools: PyTorch, Diffusers, torchdrug, PyG, RDKit. Recipe: DiffSBDD + multi-property scoring + REINFORCE.' },
  { num: 35, slug: 'module-35-symbolic-regression', title: 'Symbolic Regression And Equation Discovery',
    sections: ['35.1:Equation Discovery from Data', '35.2:Genetic Programming and Neural Guidance', '35.3:Building an Equation Discovery Pipeline'],
    outline: 'Search over expression trees. Genetic programming. Neural-guided SR. Dimensional constraints. Kolmogorov complexity. MDL. Tools: PySR, SymPy, scipy, gplearn. Recipe: PySR with dimensional constraints, recover hidden law, validate with SymPy.' }
]

const PROMPT = `You are a chapter author for "Building Discovery AI" by Alexander Apartsin & Yehudit Aperstein.
Hands-On AI Science series: graduate depth, hands-on building, plain language.

RULES: No em dashes. Use book/part/chapter/section/reader. Every section: epigraph, key-insight, practical-example, code with captions BELOW, What's Next, bibliography, nav footer. Links: ../../styles/book.css. Every concept: what/why/how/when. Library shortcuts. Cross-reference other chapters.
Read BOOK_CONFIG.md and CONFORMANCE_CHECKLIST.md first.
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

Generate ALL files: index.html + each section-N.M.html (2000-4000 words each, real Python, math, callouts, bibliography).
Read ${BOOK_ROOT}/BOOK_CONFIG.md first.`, {
      label: `ch${ch.num}-${ch.title.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`,
      phase: 'Generate'
    })
  }
)

return { part: 'III', completed: results.filter(Boolean).length }
