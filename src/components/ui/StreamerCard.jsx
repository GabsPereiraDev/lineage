import { ArrowRight } from 'lucide-react'

export default function StreamerCard({ streamer, onClick }) {
  const isLive = streamer.status === 'live'

  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
      className="group relative box-border rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(255,0,80,0.15)] hover:scale-[1.02] cursor-pointer text-left select-none"
      style={{ WebkitTapHighlightColor: 'transparent' }}
      aria-label={`Ver perfil de ${streamer.name}`}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 flex items-center justify-center">
        <img
          src={streamer.image}
          alt={streamer.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay escuro: some no hover do card */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" aria-hidden />

        {/* Overlay top-left: nome, status, role */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-white truncate drop-shadow-md">
              {streamer.name}
            </h3>
            <div className="flex items-center gap-2 flex-wrap mt-1">
              <span
                className={`inline-block w-2 h-2 rounded-full shrink-0 ${
                  isLive ? 'bg-green-500' : 'bg-red-500'
                }`}
                aria-hidden
              />
              {isLive && streamer.viewers != null ? (
                <span className="text-xs text-white/90 drop-shadow-md">
                  Ao vivo agora • {streamer.viewers} viewers
                </span>
              ) : (
                <span className="text-xs text-white/90 drop-shadow-md">Offline</span>
              )}
            </div>
            <p className="text-sm text-white/80 mt-0.5 drop-shadow-md">
              {streamer.role}
            </p>
          </div>
        </div>

        {/* Overlay bottom-left: bio */}
        {streamer.bio && (
          <p className="absolute bottom-14 left-4 right-4 z-10 text-sm text-white/95 line-clamp-2 leading-snug drop-shadow-md bg-black/50 px-3 py-2 rounded-lg">
            {streamer.bio}
          </p>
        )}

        {/* Dica clicável: acende no hover com borda e raios amarelo neon */}
        <div
          className="absolute bottom-4 right-4 z-10 flex items-center gap-1 px-2 py-1 rounded-md bg-black/30 text-white/60 text-xs transition-all duration-200 group-hover:text-white border-2 border-transparent group-hover:border-amber-300 group-hover:shadow-[0_0_3px_1px_rgba(253,224,71,0.9),0_0_7px_3px_rgba(251,191,36,0.6),0_0_12px_5px_rgba(245,158,11,0.4),0_0_18px_7px_rgba(234,179,8,0.25)]"
        >
          <span>Ver perfil</span>
          <ArrowRight size={12} className="arrow-wiggle" aria-hidden />
        </div>
      </div>
    </article>
  )
}
