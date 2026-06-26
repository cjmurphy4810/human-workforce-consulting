interface SectionHeaderProps {
  eyebrow: string
  headline: string
  sub?: string
}

export default function SectionHeader({ eyebrow, headline, sub }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
        {headline}
      </h2>
      {sub && (
        <p className="text-lg text-slate-400 leading-relaxed">{sub}</p>
      )}
    </div>
  )
}
