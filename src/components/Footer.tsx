import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-semibold text-sm">The Human Workforce</p>
          <p className="text-slate-500 text-xs mt-1">
            © {new Date().getFullYear()} The Human Workforce. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm text-slate-500">
          <Link href="/demos" className="hover:text-slate-300 transition-colors">Demos</Link>
          <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link>
          <Link href="/pricing" className="hover:text-slate-300 transition-colors">Pricing</Link>
          <a
            href="mailto:cj@thehumanworkforce.com"
            className="hover:text-slate-300 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
