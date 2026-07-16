import Link from 'next/link'
import { ArrowRight, Clock3, FileText, ShieldCheck, Sparkles } from 'lucide-react'
import AiToolsAssessmentLeadForm from '@/components/AiToolsAssessmentLeadForm'

export const metadata = {
  title: 'Free AI Tools Assessment | The Human Workforce Consulting',
  description:
    'A free preliminary AI tools assessment for small businesses that identifies time drains, quick wins, off-the-shelf tools, and a four-day starting plan.',
}

const steps = [
  {
    title: 'Tell us where the work piles up',
    body: 'Use a structured intake to name the tasks you dread, the processes that slow the team down, and the tools you have already tried.',
  },
  {
    title: 'Map pain points to existing tools',
    body: 'We look for 3-7 off-the-shelf AI or software tools before recommending custom automation or bigger implementation work.',
  },
  {
    title: 'Start with quick wins',
    body: 'The report highlights high-impact, low-effort opportunities first, then explains what should wait for a larger project.',
  },
]

const reportIncludes = [
  'Executive summary of the biggest time drains',
  'Effort versus impact matrix',
  'Quick wins mapped from pain point to tool',
  '3-7 recommended tools with cost and setup notes',
  'Four-day implementation plan',
  'Estimated hours saved and financial impact',
  'Major projects that do not fit a quick-win tool',
  'Items that need human review before action',
]

export default function AiToolsAssessmentPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0),rgba(8,13,26,0.9))]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Free AI Tools Assessment
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Find the time drains AI tools can realistically fix first
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Complete a guided business intake and receive a practical report that connects your
              repetitive work to realistic tool recommendations, quick wins, and a four-day starting plan.
            </p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                { icon: Clock3, label: '10-15 minute intake' },
                { icon: ShieldCheck, label: 'Off-the-shelf tools first' },
                { icon: FileText, label: 'Generated report download' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-3">
                  <Icon size={18} className="text-cyan-300" />
                  <span className="text-sm text-slate-300">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#report-access"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-slate-950 transition-colors hover:bg-slate-100"
              >
                Start the Assessment
                <ArrowRight size={18} />
              </a>
              <a
                href="#what-is-included"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-7 py-4 font-semibold text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
              >
                See What It Includes
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Generated output</p>
                <h2 className="mt-1 text-xl font-semibold text-white">AI Tools Assessment Report</h2>
              </div>
              <Sparkles size={22} className="text-cyan-300" />
            </div>
            <div className="space-y-4">
              {reportIncludes.slice(0, 5).map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-slate-950/70 p-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              Recommendations are preliminary and educational. Tool pricing, features, setup effort,
              and fit should be verified before purchase or implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-slate-700 bg-slate-900 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                Step {index + 1}
              </p>
              <h2 className="text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="what-is-included" className="border-y border-slate-800 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              What the report covers
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              A simple report built around implementation, not AI jargon
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              The method is intentionally straightforward: identify the bottleneck, prescribe a
              tool that fits the business, estimate the cost and setup time, then turn the first
              few actions into a short quick-start plan.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reportIncludes.map((item) => (
              <div key={item} className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="report-access" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Self assessment
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Answer the questions and generate your preliminary report
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            The form below follows the assessment framework from the training: discover the
            bottlenecks, review current tools and failed attempts, identify quick wins, then produce
            a downloadable report with recommended tools, setup notes, and a four-day starting plan.
          </p>
          <div className="mt-6 rounded-xl border border-amber-300/30 bg-amber-300/10 p-5">
            <h3 className="font-semibold text-amber-100">Before you begin</h3>
            <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
              Do not enter passwords, payment-card data, protected health information, bank-account
              details, confidential client records, trade secrets, or regulated personal information.
            </p>
          </div>
        </div>
        <AiToolsAssessmentLeadForm />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white">Prefer a direct conversation?</h2>
        <p className="mt-4 text-slate-400">
          If you already know where work is getting stuck, we can walk through the assessment with
          you, identify the most urgent recommendation, and decide whether it is a do-it-yourself
          quick win or something worth implementing together.
        </p>
        <Link
          href="mailto:info@thehumanworkforce.com?subject=AI%20Tools%20Assessment"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-600 px-7 py-4 font-semibold text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
        >
          Ask About the Assessment
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  )
}
