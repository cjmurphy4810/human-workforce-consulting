import { Code, ExternalLink, Image as ImageIcon } from 'lucide-react'
import type { Demo } from '@/types'

const statusConfig = {
  live: { label: 'Live', className: 'bg-emerald-950 text-emerald-400 border border-emerald-800' },
  beta: { label: 'Beta', className: 'bg-amber-950 text-amber-400 border border-amber-800' },
  coming_soon: { label: 'Coming Soon', className: 'bg-slate-800 text-slate-400 border border-slate-700' },
}

interface DemoCardProps {
  demo: Demo
}

export default function DemoCard({ demo }: DemoCardProps) {
  const badge = statusConfig[demo.status]

  return (
    <div className="flex flex-col bg-slate-800 border border-slate-700 rounded-xl p-6 hover:shadow-xl hover:border-slate-600 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badge.className}`}>
          {badge.label}
        </span>
        {!demo.download_url && demo.github_url && (
          <a
            href={demo.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label={`View ${demo.name} on GitHub`}
          >
            <Code size={18} />
          </a>
        )}
      </div>

      <h3 className="text-white font-semibold text-lg mb-1">{demo.name}</h3>
      <p className="text-slate-400 text-sm mb-3">{demo.tagline}</p>
      <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{demo.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {demo.tech_stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {!demo.download_url && demo.screenshot_url && (
        <a
          href={demo.screenshot_url}
          className="flex items-center justify-center gap-2 w-full py-2.5 mb-2 rounded-lg border border-slate-600 text-slate-200 text-sm font-semibold hover:border-slate-500 hover:bg-slate-700 transition-colors"
        >
          View Screenshots
          <ImageIcon size={14} />
        </a>
      )}

      {demo.status === 'beta' ? (
        <a
          href={`mailto:Info@thehumanworkforce.com?subject=${encodeURIComponent(`Demo Request: ${demo.name}`)}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white text-slate-950 text-sm font-semibold hover:bg-slate-100 transition-colors"
        >
          Call for Demo
        </a>
      ) : demo.download_url ? (
        <div className="grid gap-2 sm:grid-cols-2">
          <a
            href={demo.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full min-h-11 px-3 py-2.5 rounded-lg bg-white text-slate-950 text-sm font-semibold hover:bg-slate-100 transition-colors"
          >
            View Demo
            <ExternalLink size={14} />
          </a>
          <a
            href={demo.download_url}
            download
            className="flex items-center justify-center gap-2 w-full min-h-11 px-3 py-2.5 rounded-lg border border-emerald-700 text-emerald-300 text-center text-sm font-semibold hover:bg-emerald-950 transition-colors"
          >
            Download Install Files and Instructions
          </a>
        </div>
      ) : (
        <a
          href={demo.live_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white text-slate-950 text-sm font-semibold hover:bg-slate-100 transition-colors"
        >
          Open Demo
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  )
}
