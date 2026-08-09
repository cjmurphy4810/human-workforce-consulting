import Link from 'next/link'
import Image from 'next/image'
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
  Info,
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import CreatorServicesFaq from '@/components/CreatorServicesFaq'

const AUDIT_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Free%20Channel%20Audit'
const BOOK_START_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Start%20My%20Book'
const BOOK_QUESTION_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Question%20About%20Book%20Publishing'

export const metadata = {
  title:
    'The Human Workforce Creator Services | YouTube, Book Publishing & Website Development',
  description:
    'Turn your expertise into a complete digital presence with The Human Workforce. YouTube production, Amazon book publishing, and professional website development for experts, consultants, founders, and businesses.',
  openGraph: {
    title: 'The Human Workforce Creator Services',
    description:
      'You already have the expertise. We turn it into a YouTube channel, a published book on Amazon, and a professional website — all under one roof.',
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

const BOOK_VALUE_POINTS = [
  'A credential that outlasts a résumé line and travels without you',
  'The strongest form of proof-of-expertise in a sales conversation, a speaking pitch, or a client’s due-diligence search',
  'A permanent, searchable asset under your name on the largest retail platform in the world',
  'A brand extension that compounds — it feeds talks, podcasts, content, and referrals for years',
  'Professional standing: "author of" changes how a room receives you',
]

const BOOK_TIERS = [
  {
    name: 'Publish',
    whoFor: 'You already have a manuscript',
    badge: 'Founding Author Rate',
    highlight: false,
    price: '$499',
    originalPrice: '$997',
    priceNote: 'First 10 authors — then $997, one-time',
    features: [
      'Editorial pass & professional polish',
      'Interior formatting & print-ready layout',
      'Title & cover design drafts to choose from',
      'Full Amazon KDP setup & publishing',
      'Free Amazon-issued ISBN (or +$49 for your own)',
      'Paperback, 150–300 pages',
    ],
  },
  {
    name: 'Create',
    whoFor: 'You have the expertise, not yet the manuscript',
    badge: 'Most Popular',
    highlight: true,
    price: '$2,497',
    originalPrice: null,
    priceNote: 'One-time, per book',
    features: [
      'Everything in Publish',
      '2–3 structured interviews to extract your expertise',
      'Full ghostwriting — idea to professionally structured manuscript',
      'Defined thesis, structure, and chapter outline',
      'eBook edition included',
      'Author bio & Amazon author page support',
    ],
  },
  {
    name: 'Authority',
    whoFor: 'Turn your book into your personal brand',
    badge: null,
    highlight: false,
    price: '$4,997',
    originalPrice: null,
    priceNote: 'One-time, per book',
    features: [
      'Everything in Create',
      '4–6 structured interviews',
      'Hardcover edition included',
      'Premium cover design',
      'Launch strategy & promotional creative',
      'Social content package pulled from your book',
      'Ties directly into Creator Services — YouTube, podcast, Shorts',
    ],
  },
]

const BOOK_TIMELINE = [
  {
    title: 'Intake',
    body: 'Send your manuscript or your idea — we start with a structured intake conversation.',
  },
  {
    title: 'Editorial & Structure',
    body: 'A full editorial pass and interior structuring, so the book reads clean and holds together.',
  },
  {
    title: 'Title & Cover Drafts',
    body: 'You get title and subtitle options, plus cover design drafts, to choose from.',
  },
  {
    title: 'Review & Approval',
    body: 'A handful of review rounds by chat, email, or Google Meet, until you approve the final version.',
  },
  {
    title: 'Live on Amazon',
    body: 'Full upload, metadata, and listing setup — your book goes live, typically 3–6 weeks from the start.',
  },
]

const WEBSITE_LAUNCH_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Website%20Services%20-%20Launch%20Package'
const WEBSITE_BUSINESS_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Website%20Services%20-%20Business%20Package'
const WEBSITE_AUTHORITY_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Website%20Services%20-%20Authority%20Package'
const WEBSITE_CUSTOM_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Website%20Services%20-%20Custom%20Project'
const WEBSITE_CARE_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Website%20Care%20Inquiry'

const WEBSITE_TIERS = [
  {
    name: 'Launch',
    badge: null as string | null,
    highlight: false,
    price: '$499',
    priceNote: 'One-time',
    description:
      'A simple professional presence for individuals or small businesses getting started.',
    features: [
      '1–3 professionally designed pages',
      'Mobile-responsive design',
      'Contact form',
      'Domain connection',
      'SSL setup',
      'Basic on-page SEO',
      'Google Analytics setup',
      'Social media links',
      'One revision round',
    ],
    cta: 'Build My Website',
    email: WEBSITE_LAUNCH_EMAIL,
  },
  {
    name: 'Business',
    badge: 'Most Popular' as string | null,
    highlight: true,
    price: '$997',
    priceNote: 'One-time',
    description:
      'Everything most professionals and small businesses need to establish a credible online presence.',
    features: [
      'Up to 5 professionally designed pages',
      'Custom branding and layout',
      'Home, About, Services, Contact, and supporting pages',
      'Lead capture / contact forms',
      'Blog capability',
      'YouTube and social integration',
      'Basic technical and on-page SEO',
      'Google Analytics setup',
      'Mobile optimization',
      'Domain and SSL configuration',
      'Two revision rounds',
    ],
    cta: 'Build My Website',
    email: WEBSITE_BUSINESS_EMAIL,
  },
  {
    name: 'Authority',
    badge: null as string | null,
    highlight: false,
    price: '$1,497',
    priceNote: 'One-time',
    description:
      'A complete authority platform built around your expertise, content, book, or professional brand.',
    features: [
      'Up to 10 professionally designed pages',
      'Everything in Business',
      'Book or Amazon listing integration',
      'YouTube/video library integration',
      'Resource and download section',
      'Newsletter/email capture',
      'Blog setup',
      'Enhanced SEO structure',
      'Conversion-focused calls to action',
      'Advanced analytics setup',
      'Three revision rounds',
    ],
    cta: 'Build My Authority Site',
    email: WEBSITE_AUTHORITY_EMAIL,
  },
]

const WEBSITE_CARE_TIERS = [
  {
    name: 'Website Care',
    badge: null as string | null,
    highlight: false,
    price: '$49',
    priceNote: '/mo',
    features: [
      'Hosting oversight',
      'Security monitoring',
      'Backups',
      'Uptime monitoring',
      'Software/platform updates where applicable',
    ],
  },
  {
    name: 'Website Plus',
    badge: 'Recommended' as string | null,
    highlight: true,
    price: '$99',
    priceNote: '/mo',
    features: [
      'Everything in Website Care',
      'Minor text and image updates',
      'Basic content changes',
      'Up to 1 hour of website updates per month',
      'Priority support',
    ],
  },
  {
    name: 'Website Growth',
    badge: null as string | null,
    highlight: false,
    price: '$199',
    priceNote: '/mo',
    features: [
      'Everything in Website Plus',
      'Up to 2 hours of content/page updates per month',
      'SEO improvements',
      'Analytics review',
      'Landing-page or campaign updates',
      'Content integration from YouTube, books, or Creator Services',
    ],
  },
]

const WEBSITE_VALUE_POINTS = [
  'One coordinated brand instead of multiple disconnected vendors',
  'Content designed to drive people back to your website',
  'Faster production using AI-assisted workflows with human review',
  'A digital presence that can grow as your business grows',
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              You Already Have the Expertise.
              <span className="block mt-1 md:mt-2">
                We Turn It Into a YouTube Channel, a Published Book, or a Professional Digital
                Presence.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Send us your ideas. We turn them into a YouTube channel — scripts, videos,
              podcast, Shorts, thumbnails, SEO, and social — or a published paperback on
              Amazon in 3–6 weeks. Reviewed by a human before anything goes live. You spend
              minutes, not months.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
                See YouTube Pricing
              </a>
              <a
                href="#book-publishing"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-7 py-4 font-semibold text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
              >
                See Book Pricing
              </a>
              <a
                href="#website-services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-7 py-4 font-semibold text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
              >
                See Website Pricing
              </a>
            </div>
          </div>

          {/* Ad video */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/40">
            <video
              className="aspect-[9/16] w-full max-w-[280px] mx-auto object-cover rounded-xl border border-slate-700 bg-black"
              controls
              preload="metadata"
              poster="/images/creator-services-ad-poster.jpg"
            >
              <source src="/videos/creator-services-ad.mp4" type="video/mp4" />
            </video>
            <p className="mt-4 text-xs leading-relaxed text-slate-500 text-center">
              A message from the Founder of the Human Workforce and one of the partner
              consultants, Zachary Djimas.
            </p>
          </div>
        </div>
      </section>

      {/* Watch: Why YouTube Works */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            eyebrow="Watch"
            headline="Why YouTube Works for Your Business"
            sub="A discussion on YouTube as a marketing channel for professionals — and how Creator Services turns your expertise into content without adding to your week."
          />
          <div className="mt-12 rounded-2xl border border-slate-700 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/40">
            <video
              className="aspect-video w-full rounded-xl border border-slate-700 bg-black"
              controls
              preload="metadata"
              poster="/images/creator-services-intro-poster.jpg"
            >
              <source src="/videos/creator-services-intro.mp4" type="video/mp4" />
            </video>
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

      {/* Book Publishing */}
      <section id="book-publishing" className="border-t border-slate-800 py-24 scroll-mt-16 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="CTADMIN Publishing"
            headline="Publish Your Book on Amazon in 3–6 Weeks"
            sub="CTADMIN Publishing, the book imprint of The Human Workforce, takes your manuscript — or your expertise and a strong idea — to a live, purchasable paperback on Amazon. What you're starting with determines which package fits."
          />

          {/* Narrative */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <p className="text-slate-300 leading-relaxed">
              Most accomplished professionals have a book in them and never publish it. The
              blocker was never the ideas — it&apos;s the machinery: editing, formatting,
              cover design, ISBNs, and Amazon&apos;s publishing platform, plus the sheer
              number of decisions in between. Traditional publishing means querying agents,
              long odds, and timelines measured in years — and giving up control and most of
              the upside. Doing it yourself means learning six unfamiliar disciplines to
              produce something that still looks self-published.
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                What being published actually gets you
              </p>
              <ul className="space-y-2">
                {BOOK_VALUE_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-cyan-300 mt-0.5 flex-shrink-0">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-slate-300 leading-relaxed">
              The effort involved changes a lot depending on where your material starts. A
              finished manuscript mainly needs editing, formatting, and design. An idea needs
              interviews, structure, and a full ghostwritten draft before any of that even
              begins. CTADMIN Publishing runs a tight, systematized pipeline where human
              judgment sits on the decisions that matter — title, structure, cover, voice —
              while AI compresses the mechanical work. That&apos;s how professional book
              production here starts at a fraction of traditional ghostwriting rates, which
              commonly run $20,000–$100,000+ for a fully done-for-you book, scaled to how much
              building your book actually needs.
            </p>
            <p className="text-slate-300 leading-relaxed">
              What you bring determines where you start: a manuscript puts you in Publish;
              expertise and a strong idea, with no manuscript yet, puts you in Create or
              Authority. Either way, your part is the same — join a handful of review
              conversations and approve the final draft, cover, and title. We do the heavy
              lift on the rest.
            </p>
          </div>

          {/* Pricing tiers */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {BOOK_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl p-6 border ${
                  tier.highlight
                    ? 'bg-slate-800 border-cyan-400'
                    : 'bg-slate-800 border-slate-700'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-6 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-300 text-slate-950">
                    {tier.badge}
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  {tier.name}
                </p>
                <p className="text-sm text-slate-400 mb-4">{tier.whoFor}</p>

                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  {tier.originalPrice && (
                    <span className="text-base text-slate-500 line-through">
                      {tier.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-6">{tier.priceNote}</p>

                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={BOOK_START_EMAIL}
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    tier.highlight
                      ? 'bg-white text-slate-950 hover:bg-slate-100'
                      : 'border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white'
                  }`}
                >
                  Start Your Book
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href={BOOK_QUESTION_EMAIL}
              className="inline-flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              Not sure which one fits? Ask a Question
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Pricing disclaimer */}
          <div className="mt-10 max-w-3xl mx-auto flex items-start gap-3 bg-amber-950 border border-amber-800 rounded-xl px-5 py-4">
            <Info size={18} className="text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <p className="text-sm text-amber-100/90 leading-relaxed">
              <span className="font-semibold text-amber-300">A note on final pricing:</span> the
              packages above are starting points, not fixed quotes. Final pricing is agreed
              after a short intake conversation and depends on where your material actually
              stands — a manuscript that&apos;s basically ready to edit and publish is a very
              different project from a set of ideas, notes, or white papers that still need
              structure, a defined audience, and a consistent tone. We&apos;ll tell you exactly
              where you land before you commit to anything.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6 text-center">
              Your First Book, Start to Finish
            </p>
            <div className="grid gap-5 md:grid-cols-5">
              {BOOK_TIMELINE.map((step, index) => (
                <article key={step.title} className="rounded-xl border border-slate-700 bg-slate-900 p-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    Step {index + 1}
                  </p>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.body}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Ownership callout */}
          <div className="mt-12 max-w-2xl mx-auto text-center bg-slate-800 border border-slate-700 rounded-2xl px-8 py-10">
            <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
              You own the book. You own the rights. Amazon pays your royalties directly to you.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              No rights assignment, no revenue share, no back end.
            </p>
          </div>
        </div>
      </section>

      {/* Website Services */}
      <section id="website-services" className="border-t border-slate-800 py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Human Workforce Website Services"
            headline="Don't Have a Website Yet? We Can Solve That Too."
            sub="Your YouTube channel, book, consulting practice, or business needs somewhere to send people. If you don't already have a professional website, we can build that too."
          />

          <div className="mt-8 max-w-2xl mx-auto text-center space-y-4">
            <p className="text-slate-300 leading-relaxed">
              No agency complexity. No months-long development cycle. Just a clean, modern
              website that presents your expertise, connects your content, and gives
              prospective clients a professional place to find you.
            </p>
            <p className="text-cyan-300 font-semibold text-lg">
              Professional websites starting at $499.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Website Services are designed as an affordable extension of our Creator
              Services — especially for professionals who need a credible digital home for
              their content, book, services, or personal brand.
            </p>
          </div>

          {/* Website pricing tiers */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {WEBSITE_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl p-6 border ${
                  tier.highlight
                    ? 'bg-slate-800 border-cyan-400'
                    : 'bg-slate-800 border-slate-700'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-6 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-300 text-slate-950">
                    {tier.badge}
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400 text-sm">{tier.priceNote}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{tier.description}</p>

                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.email}
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    tier.highlight
                      ? 'bg-white text-slate-950 hover:bg-slate-100'
                      : 'border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          {/* Custom website callout */}
          <div className="mt-8 max-w-2xl mx-auto text-center bg-slate-800/50 border border-slate-700/50 rounded-xl px-8 py-8">
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Need e-commerce, client portals, custom applications, advanced integrations, or
              something more complex?
            </p>
            <p className="text-white font-semibold text-lg">Custom Website Development</p>
            <p className="text-slate-400 text-sm mb-5">Starting at $2,497</p>
            <a
              href={WEBSITE_CUSTOM_EMAIL}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-slate-300 text-sm font-semibold hover:border-slate-400 hover:text-white transition-colors"
            >
              Discuss a Custom Website
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Website care / maintenance */}
          <div className="mt-20">
            <SectionHeader
              eyebrow="Website Care"
              headline="Keep It Running Without Thinking About It"
              sub="Once your site is live, we can keep the technical details off your plate too. Choose simple website care or ongoing content and growth support."
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {WEBSITE_CARE_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col rounded-xl p-5 border ${
                    tier.highlight
                      ? 'bg-slate-800 border-cyan-400'
                      : 'bg-slate-800 border-slate-700'
                  }`}
                >
                  {tier.badge && (
                    <span className="absolute -top-3 left-5 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-300 text-slate-950">
                      {tier.badge}
                    </span>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-2xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400 text-sm">{tier.priceNote}</span>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href={WEBSITE_CARE_EMAIL}
                className="inline-flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                Ask About Website Care
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Bundle callout */}
          <div className="mt-16 max-w-2xl mx-auto text-center bg-slate-800 border border-slate-700 rounded-2xl px-8 py-10">
            <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
              Already a Creator Services Client?
            </p>
            <p className="mt-3 text-slate-300">
              Basic Website Care is included at no additional charge for active Professional
              and Premium Creator Services clients.
            </p>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Your website should work with your content, not become another vendor to
              manage. We can connect your site, YouTube channel, book, blog, and social
              content into one coordinated digital presence.
            </p>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              If the client later leaves an eligible Creator Services plan, ongoing Website
              Care can continue under the standard monthly website-care pricing.
            </p>
          </div>

          {/* Positioning / value */}
          <div className="mt-20">
            <SectionHeader
              eyebrow="One Platform"
              headline="One Brand. One System. One Team."
              sub="A website by itself is useful. A website connected to your YouTube channel, published book, thought leadership, social content, and consulting services is far more powerful."
            />
            <p className="mt-8 text-center text-cyan-300 font-semibold">
              Website → Book → YouTube → Shorts → Podcast → Blog → Social → Website
            </p>
            <p className="mt-4 text-center text-slate-300 max-w-xl mx-auto">
              The Human Workforce can help build the complete platform around your expertise.
              You bring the expertise. We build the platform around it.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {WEBSITE_VALUE_POINTS.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 bg-slate-800/50 border border-slate-700/50 rounded-xl px-5 py-4"
                >
                  <span className="text-emerald-400 font-bold flex-shrink-0">→</span>
                  <span className="text-slate-300 text-sm">{point}</span>
                </div>
              ))}
            </div>
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

      {/* Download the Deck */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Take It With You"
            headline="Download the Sales Deck"
            sub="A complete rundown of YouTube Creator Services, CTADMIN Publishing, and Website Services — pricing and all — easy to forward to a partner or decision-maker."
          />
          <a
            href="/downloads/thwf-creator-services-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 block rounded-2xl border border-slate-700 bg-slate-800 overflow-hidden hover:border-slate-500 transition-colors"
          >
            <Image
              src="/images/creator-services-deck-cover.png"
              alt="The Human Workforce Creator Services — download the sales deck PDF"
              width={1376}
              height={768}
              className="w-full h-auto"
            />
            <div className="flex items-center justify-between gap-4 px-6 py-5">
              <span className="text-white font-semibold text-sm md:text-base">
                THWF Creator Services — Sales Deck (PDF)
              </span>
              <span className="inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold flex-shrink-0">
                Download
                <ArrowRight size={16} />
              </span>
            </div>
          </a>
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
