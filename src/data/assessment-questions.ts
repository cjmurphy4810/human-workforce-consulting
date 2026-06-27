export interface AssessmentOption {
  text: string
  score: number // 0, 33, 67, or 100
  interpretation: string
}

export interface AssessmentQuestion {
  id: number
  question: string
  categories: CategoryKey[]
  options: AssessmentOption[]
}

export type CategoryKey =
  | 'governance'
  | 'risk'
  | 'workforce'
  | 'data'
  | 'human_oversight'
  | 'automation'
  | 'implementation'

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  governance: 'AI Governance',
  risk: 'Risk Management',
  workforce: 'Workforce Readiness',
  data: 'Data Readiness',
  human_oversight: 'Human Oversight',
  automation: 'Automation Readiness',
  implementation: 'Implementation Readiness',
}

export const QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    question:
      'How does your organization validate AI-generated content before it informs decisions or external communications?',
    categories: ['human_oversight', 'governance'],
    options: [
      {
        text: 'AI output is generally used as-is — there is no formal review step in place.',
        score: 0,
        interpretation:
          'High exposure. Without a validation checkpoint, AI errors reach leadership or customers unchecked.',
      },
      {
        text: 'Reviews happen informally, but there is no consistent process or clear accountability.',
        score: 33,
        interpretation:
          'Moderate exposure. Ad-hoc review creates inconsistency, especially under deadline pressure.',
      },
      {
        text: 'A review checkpoint exists but is sometimes bypassed when timelines are tight.',
        score: 67,
        interpretation:
          'Developing. The intent is there but enforcement breaks down under the conditions that matter most.',
      },
      {
        text: 'Every AI output is verified before it carries a human name or reaches an external audience.',
        score: 100,
        interpretation:
          'Strong discipline. Human accountability is built into your AI output lifecycle.',
      },
    ],
  },
  {
    id: 2,
    question: "Which best describes your organization's current AI implementation status?",
    categories: ['implementation', 'governance'],
    options: [
      {
        text: 'We have a vision and interest, but no active pilots or production systems running yet.',
        score: 0,
        interpretation:
          'Early stage. Strategy exists but implementation has not started — early delays compound.',
      },
      {
        text: 'We have pilots underway, but most have not successfully moved into production workflows.',
        score: 33,
        interpretation:
          'Common pattern. Most organizations get stuck here — pilots succeed, but scaling fails.',
      },
      {
        text: 'We have production AI systems, but measuring ROI against specific outcomes is inconsistent.',
        score: 67,
        interpretation:
          'Good progress. Deployment exists but without clear measurement, optimization is limited.',
      },
      {
        text: 'We have deployed AI systems with clear ownership, measured outcomes, and governance in place.',
        score: 100,
        interpretation:
          'Mature posture. AI is managed as a business asset, not a technology experiment.',
      },
    ],
  },
  {
    id: 3,
    question:
      'How would you describe the data and platform infrastructure your AI initiatives depend on?',
    categories: ['data', 'implementation'],
    options: [
      {
        text: 'Data is siloed, inconsistent, or unstructured — foundational challenges remain unresolved.',
        score: 0,
        interpretation:
          'Significant blocker. AI cannot perform reliably without trustworthy, integrated data foundations.',
      },
      {
        text: 'Core platforms exist but data quality and integration are inconsistent across systems.',
        score: 33,
        interpretation:
          'Partial readiness. Some AI use cases can proceed, but enterprise rollout will hit data walls.',
      },
      {
        text: 'We have trusted platforms for most workflows, but gaps remain in specific areas.',
        score: 67,
        interpretation:
          'Near-ready. Targeted data remediation would unlock the next tier of AI implementation.',
      },
      {
        text: 'Core data platforms are well-integrated, trusted, and ready to support AI at scale.',
        score: 100,
        interpretation:
          'Strong foundation. Infrastructure is positioned to support reliable, scalable AI deployment.',
      },
    ],
  },
  {
    id: 4,
    question:
      "How does your organization's AI governance keep pace with the speed of AI adoption?",
    categories: ['governance', 'risk'],
    options: [
      {
        text: 'Deployment is outpacing governance — AI tools are adopted without formal process review.',
        score: 0,
        interpretation:
          'Critical gap. Velocity without governance creates compounding compliance and operational risk.',
      },
      {
        text: "There's awareness of the gap, but governance frameworks are informal or still being built.",
        score: 33,
        interpretation:
          'Transitional. Awareness is the first step, but informal frameworks fail during incidents.',
      },
      {
        text: 'Governance frameworks exist but struggle to keep pace with the rate of AI adoption.',
        score: 67,
        interpretation:
          'Under pressure. The structure is there — the challenge is operationalizing it consistently.',
      },
      {
        text: 'Governance and deployment move in sync — oversight is built into the adoption lifecycle.',
        score: 100,
        interpretation:
          'Mature posture. AI adoption and institutional oversight move together, reducing unmanaged exposure.',
      },
    ],
  },
  {
    id: 5,
    question:
      'Who is accountable for AI-related risks that span multiple departments or business units?',
    categories: ['risk', 'governance'],
    options: [
      {
        text: 'No clear owner — cross-functional AI risks fall through the gaps between teams.',
        score: 0,
        interpretation:
          'Orphaned risk. The most dangerous exposures often live exactly where accountability breaks down.',
      },
      {
        text: 'Individual teams manage their own AI risks; cumulative enterprise exposure is not assessed.',
        score: 33,
        interpretation:
          'Siloed accountability. Local ownership is a start, but cross-functional risk accumulates invisibly.',
      },
      {
        text: 'We have informal coordination, but enterprise-level AI risk ownership is not formalized.',
        score: 67,
        interpretation:
          'Emerging structure. Coordination exists but without formal ownership, critical gaps persist.',
      },
      {
        text: 'A designated function or executive has clear, enterprise-wide accountability for AI risk.',
        score: 100,
        interpretation:
          'Clear ownership. Enterprise AI risk is managed as a first-class operational concern.',
      },
    ],
  },
  {
    id: 6,
    question:
      'When AI security requirements conflict with deployment speed, how does your organization respond?',
    categories: ['governance', 'risk'],
    options: [
      {
        text: 'Speed typically wins — security constraints are regularly relaxed to meet delivery timelines.',
        score: 0,
        interpretation:
          'High exposure. Velocity over security is a pattern that creates significant downstream liability.',
      },
      {
        text: 'This is handled case-by-case with no consistent policy when conflicts arise.',
        score: 33,
        interpretation:
          'Inconsistent. Ad-hoc decisions under pressure tend to favor speed over protection.',
      },
      {
        text: "Leadership acknowledges the tension, but security decisions are often delegated to technical teams.",
        score: 67,
        interpretation:
          "Partial accountability. Technical teams shouldn't bear security tradeoff decisions alone.",
      },
      {
        text: 'Senior leadership actively defends security requirements even when they slow deployment.',
        score: 100,
        interpretation:
          'First-order priority. Security is protected at the leadership level — not traded away under pressure.',
      },
    ],
  },
  {
    id: 7,
    question:
      "How is AI currently positioned within your organization's decision-making workflows?",
    categories: ['automation', 'human_oversight'],
    options: [
      {
        text: "We don't have a consistent model — AI usage and oversight levels vary widely by team.",
        score: 0,
        interpretation:
          'Unstructured. Inconsistent oversight models create unpredictable risk across workflows.',
      },
      {
        text: 'AI produces summaries or reports; humans review everything before any action is taken.',
        score: 33,
        interpretation:
          'Human-first posture. Low automation risk, but significant efficiency potential remains untapped.',
      },
      {
        text: 'AI flags issues or makes recommendations, but all decision authority remains with humans.',
        score: 67,
        interpretation:
          'Transitional. Good oversight discipline — the next step is defining where AI can act within guardrails.',
      },
      {
        text: 'AI executes actions within defined workflows, with human audit capability and escalation paths.',
        score: 100,
        interpretation:
          'Agentic maturity. AI operates downstream of the decision — acting within parameters, with oversight built in.',
      },
    ],
  },
  {
    id: 8,
    question: "How specific and measurable are your organization's AI success metrics?",
    categories: ['governance', 'implementation'],
    options: [
      {
        text: "We describe AI value in general terms — efficiency, innovation — with no defined outcome targets.",
        score: 0,
        interpretation:
          'Misaligned. Without specific targets, AI investment cannot be evaluated or optimized.',
      },
      {
        text: "We have general goals, but they aren't tied to measurable workflow or business outcomes.",
        score: 33,
        interpretation:
          'Directional but unmeasurable. Strategy needs grounding in operational metrics to drive ROI.',
      },
      {
        text: 'Some initiatives have specific targets, but measurement is inconsistent across the organization.',
        score: 67,
        interpretation:
          'Developing. Where measurement exists, it drives accountability — the challenge is scaling it.',
      },
      {
        text: 'AI initiatives are tied to specific, measurable outcomes — for example, reducing processing time by 30%.',
        score: 100,
        interpretation:
          'Business-aligned. Specific metrics signal that AI strategy is tied to real operational value.',
      },
    ],
  },
  {
    id: 9,
    question:
      "How clearly has your organization defined the role of human judgment in AI-assisted workflows?",
    categories: ['human_oversight', 'workforce'],
    options: [
      {
        text: 'Human roles in AI workflows are not explicitly defined — AI handles tasks with minimal oversight policy.',
        score: 0,
        interpretation:
          'Undefined accountability. Without clear human roles, AI decisions go unowned when they go wrong.',
      },
      {
        text: 'Humans review AI output, but accountability for AI-driven decisions remains unclear.',
        score: 33,
        interpretation:
          'Review without ownership. The gap between reviewing output and being accountable for it creates risk.',
      },
      {
        text: 'Human roles are partially defined, but gaps remain — especially for edge cases and exceptions.',
        score: 67,
        interpretation:
          'Partial structure. The common path is covered, but exception handling reveals where gaps live.',
      },
      {
        text: 'Clear policies define where humans remain accountable — especially for ethical and high-stakes decisions.',
        score: 100,
        interpretation:
          'Strong framework. Human accountability is built into your AI operating model, not assumed.',
      },
    ],
  },
  {
    id: 10,
    question:
      'When does your organization verify AI-generated outputs before they are acted on?',
    categories: ['human_oversight', 'governance'],
    options: [
      {
        text: 'Reactively — we address errors after they are reported by users or customers.',
        score: 0,
        interpretation:
          'Reactive posture. Errors reach stakeholders before detection — reputational and operational risk is high.',
      },
      {
        text: 'Periodically, but not systematically before outputs are used in decision-making.',
        score: 33,
        interpretation:
          'Inconsistent. Periodic review misses the gap between review cycles when errors accumulate.',
      },
      {
        text: 'We have verification steps, but they are sometimes bypassed under operational pressure.',
        score: 67,
        interpretation:
          'Conditional compliance. The process exists but breaks down under the conditions that matter most.',
      },
      {
        text: "Before any AI output reaches an external audience or carries a human decision-maker's name.",
        score: 100,
        interpretation:
          'Proactive discipline. Verification is a non-negotiable gate — not an optional step.',
      },
    ],
  },
  {
    id: 11,
    question:
      'How does your organization monitor AI systems for bias, behavioral drift, or decision logic integrity?',
    categories: ['risk', 'governance'],
    options: [
      {
        text: "We don't have active monitoring — AI systems run without systematic behavioral audits.",
        score: 0,
        interpretation:
          'Blind spot. Unmonitored AI systems can develop drift or bias that compounds invisibly over time.',
      },
      {
        text: 'We rely on user-reported issues rather than proactive monitoring of AI behavior.',
        score: 33,
        interpretation:
          'Reactive only. By the time users report it, the damage from corrupted decision logic may be done.',
      },
      {
        text: 'Some monitoring exists, but it focuses on system uptime rather than decision quality or bias.',
        score: 67,
        interpretation:
          "Technical monitoring without behavioral insight. Uptime doesn't measure whether decisions are trustworthy.",
      },
      {
        text: 'We actively audit AI decision logic, bias, and configuration integrity on a defined schedule.',
        score: 100,
        interpretation:
          'Proactive governance. Regular audits catch drift and manipulation before they affect outcomes.',
      },
    ],
  },
  {
    id: 12,
    question:
      "What best describes your organization's primary approach to integrating AI into the workforce?",
    categories: ['workforce', 'automation'],
    options: [
      {
        text: 'AI is primarily being evaluated to replace human roles — substitution is the default strategy.',
        score: 0,
        interpretation:
          'High risk. Substitution strategies often fail on edge cases and reduce the human expertise needed to catch AI errors.',
      },
      {
        text: "We're still determining whether AI should replace or augment human workflows.",
        score: 33,
        interpretation:
          "Undecided posture. The longer this remains unresolved, the harder it becomes to govern AI deployment effectively.",
      },
      {
        text: 'We aim to augment human work, but planning for edge cases and complex judgment scenarios is incomplete.',
        score: 67,
        interpretation:
          'Correct direction, incomplete execution. The augmentation intent is right — the gap is in exception handling.',
      },
      {
        text: 'AI is explicitly designed to amplify human capability, with clear human ownership of complex decisions.',
        score: 100,
        interpretation:
          'Human-centered AI strategy. This approach builds sustainable advantage without sacrificing accountability.',
      },
    ],
  },
]

// Category → question indices (0-based)
export const CATEGORY_QUESTIONS: Record<CategoryKey, number[]> = {
  governance: [0, 1, 3, 4, 5, 7, 9, 10],
  risk: [3, 4, 5, 10],
  human_oversight: [0, 6, 8, 9],
  implementation: [1, 2, 7],
  data: [2],
  automation: [6, 11],
  workforce: [8, 11],
}

export type Tier = 'discovery' | 'sprint' | 'advanced'

export interface TierConfig {
  label: string
  range: string
  service: string
  colorClass: string
  bgClass: string
  description: string
  cta: string
}

export const TIER_CONFIG: Record<Tier, TierConfig> = {
  discovery: {
    label: 'Discovery Mode',
    range: '0–39',
    service: 'Workforce Risk Assessment',
    colorClass: 'text-amber-400',
    bgClass: 'bg-amber-400/10 border border-amber-400/30',
    description:
      "Your organization is in the early stages of AI readiness. Before building or scaling AI systems, it's critical to identify your current AI exposure, surface process gaps, assess governance weaknesses, understand workforce impact, and map operational risk. The Workforce Risk Assessment establishes the baseline your leadership needs to make confident, defensible AI decisions.",
    cta: "Before investing further in AI implementation, your organization needs a clear picture of where it stands — what's working, what's exposed, and where the governance gaps are. That's exactly what the Workforce Risk Assessment delivers.",
  },
  sprint: {
    label: 'Implementation Ready',
    range: '40–69',
    service: 'AI Implementation Sprint',
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-400/10 border border-blue-400/30',
    description:
      "Your organization has enough strategic clarity to implement one defined, AI-enabled workflow safely. The AI Implementation Sprint moves you from concept to production in 6 weeks — with a working system, governance structure, and measurable outcome built in. This is the engagement that turns your pilots into operational reality.",
    cta: "You have the vision and some of the infrastructure. What you need now is a focused engagement that takes one workflow all the way from scoping to deployment — with governance, measurement, and human oversight built in from day one.",
  },
  advanced: {
    label: 'Scale Mode',
    range: '70–100',
    service: 'Advanced Plus',
    colorClass: 'text-emerald-400',
    bgClass: 'bg-emerald-400/10 border border-emerald-400/30',
    description:
      'Your organization has the foundational maturity to scale AI across workflows. The Advanced Plus engagement provides an embedded AI implementation partner — with dedicated capacity, quarterly strategy alignment, governance design, auditability frameworks, human oversight operating models, and full-stack delivery support.',
    cta: "You're ready to move from individual AI systems to an AI-enabled organization. That transition requires stronger governance, auditability, cross-functional oversight models, and executive advisory support — the full scope of what Advanced Plus delivers.",
  },
}

export function calculateResults(answers: Record<number, number>) {
  const scores = QUESTIONS.map((_, i) => answers[i] ?? 0)
  const overall = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)

  const categoryScores: Record<CategoryKey, number> = {} as Record<CategoryKey, number>
  for (const [cat, indices] of Object.entries(CATEGORY_QUESTIONS) as [CategoryKey, number[]][]) {
    const catScores = indices.map((i) => answers[i] ?? 0)
    categoryScores[cat] = Math.round(catScores.reduce((a, b) => a + b, 0) / catScores.length)
  }

  const sorted = (Object.entries(categoryScores) as [CategoryKey, number][]).sort(
    ([, a], [, b]) => b - a
  )
  const strengths = sorted.slice(0, 3).map(([k]) => k)
  const risks = sorted.slice(-3).map(([k]) => k)

  const tier: Tier = overall < 40 ? 'discovery' : overall < 70 ? 'sprint' : 'advanced'

  return { overall, categoryScores, strengths, risks, tier }
}
