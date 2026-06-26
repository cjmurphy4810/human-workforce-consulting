const partners = ['Appian', 'Anthropic', 'AWS', 'Clay']

export default function TrustBar() {
  return (
    <div className="border-y border-slate-800 py-6">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-10 md:gap-16 flex-wrap">
        <p className="text-xs uppercase tracking-widest text-slate-600 w-full text-center md:w-auto">
          Built on
        </p>
        {partners.map((partner) => (
          <span
            key={partner}
            className="text-slate-500 font-semibold text-sm tracking-wide"
          >
            {partner}
          </span>
        ))}
      </div>
    </div>
  )
}
