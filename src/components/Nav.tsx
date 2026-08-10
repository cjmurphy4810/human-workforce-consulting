import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold text-sm tracking-wide">
          The Human Workforce
          <span className="text-slate-500 font-normal"> | Consulting</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/ai-tools-assessment"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            Free Assessment
          </Link>
          <Link
            href="/demos"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            Demos
          </Link>
          <Link
            href="/services"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            Enterprise Consulting
          </Link>
          <Link
            href="/creator-services"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            Creator Services
          </Link>
          <Link
            href="/pricing"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            Pricing
          </Link>
          <a
            href="https://thehumanworkforce.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            About
          </a>
          <a
            href="mailto:info@thehumanworkforce.com?subject=Schedule%20Executive%20Consultation"
            className="px-4 py-2 rounded-lg border border-slate-700 text-white text-sm font-semibold hover:border-slate-500 hover:bg-slate-900 transition-colors"
          >
            Book a Call via Email
          </a>
          <a
            href="tel:+14809198843"
            className="px-4 py-2 rounded-lg border border-slate-700 text-white text-sm font-semibold hover:border-slate-500 hover:bg-slate-900 transition-colors"
          >
            Book a Call via Phone
          </a>
        </div>
      </div>
    </nav>
  )
}
