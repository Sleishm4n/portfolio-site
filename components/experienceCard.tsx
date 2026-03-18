'use client'

export default function ExperienceCard({ side, period, organisation, role, points }: {
  side: 'left' | 'right'
  period: string
  organisation: string
  role: string
  points: string[]
}) {
  return (
    <div className="group relative font-cinzel border border-white/10 hover:border-white/25 transition-colors duration-500 w-full">

        <span className="absolute top-0 left-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
        <span className="absolute top-0 left-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
        <span className="absolute bottom-0 right-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
        <span className="absolute bottom-0 right-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
        
        <div className="px-5 py-4 sm:px-7 sm:py-6">
            <p className="text-white/40 text-xs tracking-widest mb-1">{period}</p>
            <p className="text-white text-sm sm:text-base font-semibold mb-0.5">{organisation}</p>
            <p className="text-[#6b2ca5] text-xs sm:text-sm mb-3">{role}</p>
            {points.length > 0 && (
            <ul className="space-y-1">
                {points.map((p, i) => (
                <li key={i} className="text-white/50 text-xs font-space-grotesk">{p}</li>
                ))}
            </ul>
            )}
        </div>
    </div>
  )
}