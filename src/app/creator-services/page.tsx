import Link from 'next/link'
import {
  ArrowRight,
  FileText,
  Video,
  Mic2,
  Film,
  Image as ImageIcon,
  Search,
  Share2,
  Newspaper,
  Play,
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import CreatorServicesFaq from '@/components/CreatorServicesFaq'

const AUDIT_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Free%20Channel%20Audit'

export const metadata = {
  title: 'The Human Workforce Creator Services | The Human Workforce Consulting',
  description:
    'A done-for-you AI-powered YouTube and content production service for busy professionals. Scripts, videos, podcasts, Shorts, thumbnails, SEO, and social — reviewed by a human before anything goes live.',
  openGraph: {
    title: 'The Human Workforce Creator Services',
    description:
      'You already have the expertise. We turn it into a YouTube channel — scripts, video, podcast, Shorts, thumbnails, SEO, and social, reviewed by a human before anything publishes.',
    type: 'website',
  },
}

const PAIN_POINTS = [
  'No time to film or edit',
  'Four vendors, four invoices',
  'Inconsistent posting stalls growth',
  'Generic content erodes trust',
]

const STEPS = [
  {
    title: 'You send an idea',
    body: 'A voice note, an email, a Slack or Teams message, a Google Form, a shared doc — whatever is easiest for you.',
  },
  {
    title: 'We build everything around it',
    body: 'AI-first production: script, video, audio, and graphics, built out from that single idea.',
  },
  {
    title: 'You approve it',
    body: 'A quick review, about 10 minutes a week, before anything publishes.',
  },
  {
    title: 'It publishes and compounds',
    body: 'YouTube, Shorts, podcast, social, and blog — all at once.',
  },
]

const DELIVERABLES = [
  { icon: FileText, label: 'Scripts' },
  { icon: Video, label: 'Long-Form YouTube Video' },
  { icon: Mic2, label: 'Podcast Episode' },
  { icon: Film, label: 'Shorts' },
  { icon: ImageIcon, label: 'Thumbnails & Marketing Images' },
  { icon: Search, label: 'SEO (titles, tags, descriptions, chapters)' },
  { icon: Share2, label: 'Social Posts (LinkedIn, Facebook, X)' },
  { icon: Newspaper, label: 'Blog Article & Newsletter' },
]

const ICPS = [
  'Doctors & Dentists',
  'Attorneys',
  'Financial Advisors & CPAs',
  'Real Estate Agents',
  'Insurance Agents',
  'Executive Coaches & Consultants',
  'Authors',
  'Therapists',
  'Founders & Technology Leaders',
  'Local Business Owners',
]

const COST_ROWS = [
  { label: 'Video editor', value: '$1,000+/mo' },
  { label: 'Ghostwriter', value: '$3,000+/mo' },
  { label: 'Social media manager', value: '$500+/mo' },
  { label: 'Podcast producer', value: '$1,500+/episode' },
  { label: 'Thumbnail / SEO specialist', value: '$250+/mo' },
]

const ASSEMBLED_TOTAL = 6250
const OUR_PRICE = 2497

const PRICING_TIERS = [
  {
    name: 'Starter',
    price: '$997',
    setupFee: '$997 one-time onboarding',
    popular: false,
    features: ['2 long-form videos/mo', '8 Shorts/mo', 'Full written repurposing'],
  },
  {
    name: 'Professional',
    price: '$2,497',
    setupFee: '$1,997 one-time onboarding',
    popular: true,
    features: [
      '4 long-form videos/mo',
      '16 Shorts + 2 podcast episodes/mo',
      'Full SEO & social package',
    ],
  },
  {
    name: 'Premium',
    price: '$4,997',
    setupFee: '$2,997 one-time onboarding',
    popular: false,
    features: [
      '8 long-form videos/mo',
      '30 Shorts + 4 podcast episodes/mo',
      'Quarterly strategy review',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    setupFee: 'From $5,000 one-time onboarding',
    popular: false,
    features: [
      'Multiple spokespeople',
      'Multiple shows on one system',
      'Dedicated strategist',
    ],
  },
]

export default function CreatorServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0),rgba(8,13,26,0.9))]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              The Human Workforce Creator Services
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              You Already Have the Expertise. We Turn It Into a YouTube Channel.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Send us your ideas. We handle the scripts, the videos, the podcast, the Shorts,
              the thumbnails, the SEO, and the social posts — reviewed by a human before
              anything goes live. You spend 10 minutes a week. Your channel grows every week.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={AUDIT_EMAIL}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-slate-950 transition-colors hover:bg-slate-100"
              >
                Get Your Free Channel Audit
                <ArrowRight size={18} />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-7 py-4 font-semibold text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
              >
                See Pricing
              </a>
            </div>
          </div>

          {/* Avatar video placeholder */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/40">
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-slate-700 bg-slate-950/70">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 border border-slate-700">
                <Play size={22} className="ml-0.5 text-slate-400" />
              </div>
              <p className="text-sm font-medium text-slate-400">Avatar video coming soon</p>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              A short welcome message walking through how the service works.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="The Problem"
          headline="You Didn't Build Your Career to Become a YouTuber"
          sub="You're a professional, not a video editor, writer, or social manager — but your prospects are researching who to trust on YouTube right now. The old fix is four uncoordinated vendors. AI alone isn't the answer either — nobody wants a business that's obviously letting a bot handle its reputation. This service pairs AI's speed with human review on everything that goes out."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PAIN_POINTS.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 bg-slate-800/50 border border-slate-700/50 rounded-xl px-5 py-4"
            >
              <span className="text-slate-500 font-bold flex-shrink-0">✕</span>
              <span className="text-slate-300 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="How It Works"
            headline="One Idea In. A Full Week of Content Out."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {STEPS.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-700 bg-slate-900 p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  Step {index + 1}
                </p>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="What You Get"
            headline="Everything Your Channel Needs — Every Week"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {DELIVERABLES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-3 bg-slate-800 border border-slate-700 rounded-xl px-5 py-5"
              >
                <Icon size={20} className="text-cyan-300" aria-hidden="true" />
                <span className="text-slate-200 text-sm font-medium leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Who It's For"
            headline="Built for People Whose Time Is Worth More Than Editing"
            sub="If your business runs on trust, and your time doesn't scale — this was built for you."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {ICPS.map((icp) => (
              <div
                key={icp}
                className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-4 text-center justify-center"
              >
                <span className="text-slate-300 text-sm">{icp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling Angle */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
            &ldquo;You don&apos;t need to be a YouTuber. You need to tell the truth about what
            you already know.&rdquo;
          </p>
          <p className="mt-6 text-slate-400 leading-relaxed">
            Every client question, every mistake you watch people make, every way you&apos;d
            explain your work to your own family — that&apos;s a story. We turn ideas into
            stories that show people the skill they already trust you for.
          </p>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="One Service, Not Four Vendors"
            headline="Why AI Changes the Economics of Content"
            sub="Assembling this yourself means hiring a video editor, a ghostwriter, a social media manager, a podcast producer, and a thumbnail/SEO specialist — separately."
          />

          <div className="mt-12 max-w-2xl mx-auto space-y-5">
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-medium text-slate-300">
                  Assembling it yourself (cheapest per role)
                </span>
                <span className="text-sm font-semibold text-slate-300">
                  ${ASSEMBLED_TOTAL.toLocaleString()}+/mo
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-slate-800">
                <div className="h-3 rounded-full bg-slate-500" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-medium text-slate-300">
                  The Human Workforce Creator Services (Professional)
                </span>
                <span className="text-sm font-semibold text-emerald-400">
                  ${OUR_PRICE.toLocaleString()}/mo
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-slate-800">
                <div
                  className="h-3 rounded-full bg-emerald-400"
                  style={{ width: `${Math.round((OUR_PRICE / ASSEMBLED_TOTAL) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3">
            {COST_ROWS.map((row) => (
              <div key={row.label} className="text-center">
                <p className="text-xs text-slate-500">{row.label}</p>
                <p className="text-sm text-slate-300 font-medium mt-1">{row.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-md mx-auto text-center bg-slate-800 border border-slate-700 rounded-2xl px-8 py-10">
            <p className="text-4xl font-bold text-emerald-400">
              ${(ASSEMBLED_TOTAL - OUR_PRICE).toLocaleString()}/month
            </p>
            <p className="mt-2 text-slate-300 font-medium">saved, conservatively</p>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              Compared against the low end of each replaced role, not an agency-average
              figure.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-slate-800 py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Pricing"
            headline="Simple Plans. No Surprises."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl p-6 border ${
                  tier.popular
                    ? 'bg-slate-800 border-cyan-400'
                    : 'bg-slate-800 border-slate-700'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-6 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-300 text-slate-950">
                    Most Popular
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  {tier.price !== 'Custom' && (
                    <span className="text-slate-400 text-sm">/mo</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-6">{tier.setupFee}</p>

                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={AUDIT_EMAIL}
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-white text-slate-950 hover:bg-slate-100'
                      : 'border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="FAQ" headline="Common Questions" />
          <div className="mt-12">
            <CreatorServicesFaq />
          </div>
        </div>
      </section>

      {/* Proof / Case Study */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Proof" headline="Real Results" />
          <div className="mt-12 bg-slate-800/50 border border-dashed border-slate-700 rounded-2xl px-8 py-12 text-center">
            <p className="text-slate-400 font-medium">Case study coming soon</p>
            <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
              We&apos;re onboarding our first clients now. Real results, with real names and
              numbers, will be published here once they&apos;re in.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Your Expertise Deserves an Audience.</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          You already know what to say. We&apos;ll handle the rest.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={AUDIT_EMAIL}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
          >
            Book Your Free Channel Audit
            <ArrowRight size={18} />
          </a>
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:border-slate-400 hover:text-white transition-colors"
          >
            See Pricing
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
