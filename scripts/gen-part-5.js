export const meta = {
  name: 'gen-part-5',
  description: 'Generate initial content for Part V: Discovery Through Simulation and Optimization (Ch 42-47)',
  phases: [
    { title: 'Generate', detail: 'Write all 6 chapters with section HTML files' }
  ]
}

const BOOK_ROOT = 'E:/Projects/Books/DiscoveryAI'
const PART_NUM = 'V'
const PART_TITLE = 'Discovery Through Simulation and Optimization'
const PART_DIR = 'part-5-simulation-optimization'

const CHAPTERS = [
  { num: 42, slug: 'module-42-differentiable-programming', title: 'Differentiable Programming For Discovery',
    sections: ['42.1:Automatic Differentiation', '42.2:JAX Functional Transforms', '42.3:Differentiable Physics and Molecular Dynamics', '42.4:Building a Differentiable Force Field'],
    outline: 'AD: forward, reverse, mixed. JAX: vmap, jit, pmap, grad. Equinox, Flax. Differentiable physics. Adjoint methods. JAX-MD, TorchMD-Net. Reverse-mode as transposed JVPs. Adjoint derivation for ODE-constrained optimization. Tools: JAX, Equinox, Flax, optax, diffrax, JAX-MD. Recipe: LJ force field calibration in JAX with reverse-mode AD.' },
  { num: 43, slug: 'module-43-scientific-simulation', title: 'Scientific Simulation',
    sections: ['43.1:Computational Experiments', '43.2:Stochastic Simulation and Molecular Dynamics', '43.3:Simulator Calibration', '43.4:Building a Calibrated Simulator'],
    outline: 'Agent-based models: Mesa. Gillespie algorithm. MD: OpenMM, MDAnalysis. Synthetic data. ABC: sample from prior, accept if close. ABC-SMC. Tools: scipy, Mesa, SimPy, OpenMM, MDAnalysis, pyABC. Recipe: stochastic biochemical simulator calibrated with ABC-SMC, counterfactual interventions.' },
  { num: 44, slug: 'module-44-world-models', title: 'World Models For Discovery',
    sections: ['44.1:Latent Dynamics Models', '44.2:Counterfactual Reasoning with World Models', '44.3:Building a World Model Planner'],
    outline: 'RSSM, DreamerV3. Transformer world models. Counterfactual reasoning. Model-based planning: rollout-based action selection. ELBO. Horizon-dependent error accumulation. Tools: PyTorch, JAX, gymnasium, stable-baselines3, dreamer-pytorch. Recipe: RSSM world model, 5-step rollout planning, diagnose compound error.' },
  { num: 45, slug: 'module-45-optimization', title: 'Optimization For Discovery',
    sections: ['45.1:Bayesian Optimization', '45.2:Evolutionary and Multi-Objective Methods', '45.3:Reinforcement Learning as Optimization', '45.4:Building a Multi-Objective Optimizer'],
    outline: 'Black-box optimization. BO: GP surrogate, acquisition. CMA-ES. NSGA-III. RL: policy gradient, actor-critic. Pareto frontiers, hypervolume indicator. Expected improvement derivation. CMA-ES as natural gradient. Tools: Optuna, BoTorch, Ray Tune, DEAP, pymoo. Recipe: multi-objective optimization with NSGA-III + BoTorch, hypervolume comparison.' },
  { num: 46, slug: 'module-46-experiment-design', title: 'Automated Experiment Design',
    sections: ['46.1:Active Learning', '46.2:Sequential Experimental Design', '46.3:Building a Closed-Loop Experiment Planner'],
    outline: 'Active learning: query by committee, core-set. Sequential design: information-theoretic criteria. Bandits: Thompson, UCB, contextual. BALD acquisition: MI between output and parameters. VOI. Tools: BoTorch, scikit-learn, PyMC, modAL. Recipe: BALD-based active learning for simulated assay, 10 rounds, compare vs random.' },
  { num: 47, slug: 'module-47-experiment-registries', title: 'Experiment Registries And Scientific Provenance',
    sections: ['47.1:Registry Design and Artifact Versioning', '47.2:Data Lineage and Provenance Standards', '47.3:Building an Experiment Registry'],
    outline: 'Registry design. Artifact versioning: code, data, models, configs. Data lineage. W3C PROV, OpenLineage. Run graph. Artifact DAG with hash verification. Tools: MLflow, DVC, Git, Docker, W&B, DagHub. Recipe: three-stage ML pipeline with full artifact tracing and reproducible regeneration.' }
]

const PROMPT = `You are a chapter author for "Building Discovery AI" by Alexander Apartsin & Yehudit Aperstein.
Hands-On AI Science series: graduate depth, hands-on building, plain language.
RULES: No em dashes. book/part/chapter/section/reader. Every section: epigraph, key-insight, practical-example, code with captions BELOW, What's Next, bibliography, nav footer. Links: ../../styles/book.css. what/why/how/when. Library shortcuts. Cross-references. Discovery Workbench integration from Ch 6 onward.
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

return { part: 'V', completed: results.filter(Boolean).length }
