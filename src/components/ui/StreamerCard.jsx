import { useState, useRef } from 'react'
import { ChevronDown, Image, Play } from 'lucide-react'

export default function StreamerCard({ streamer, onClick }) {
  const videoRef = useRef(null)
  const [isPreviewOn, setIsPreviewOn] = useState(false)
  const isLive = streamer.status === 'live'

  const handleMouseEnter = () => {
    setIsPreviewOn(true)
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    setIsPreviewOn(false)
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  return (
    <article
      onClick={onClick}
      className="group relative box-border rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(255,0,80,0.15)] cursor-pointer text-left select-none"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Container: vídeo centralizado + todas as infos por cima */}
      <div
        className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Vídeo preenche e fica centralizado */}
        <video
          ref={videoRef}
          src={streamer.cover}
          className="absolute inset-0 w-full h-full object-cover object-center"
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`Preview de ${streamer.name}`}
        />

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
              {isLive ? (
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
          <div className="flex items-center gap-1 text-white/90 text-xs shrink-0 bg-black/40 px-2 py-1 rounded-lg">
            <span>Preview: {isPreviewOn ? 'ON' : 'OFF'}</span>
            <ChevronDown size={14} className="opacity-80" />
          </div>
        </div>

        {/* Overlay bottom-left: bio por cima do vídeo */}
        <p className="absolute bottom-20 left-4 right-4 z-10 text-sm text-white/95 line-clamp-2 leading-snug drop-shadow-md bg-black/50 px-3 py-2 rounded-lg">
          {streamer.bio}
        </p>

        {/* Overlay bottom-center: nome em estilo neon */}
        <div
          className="absolute bottom-10 left-0 right-0 z-10 flex justify-center pointer-events-none"
          style={{
            textShadow: '0 0 12px rgba(59, 130, 246, 0.9), 0 0 24px rgba(139, 92, 246, 0.6)',
          }}
        >
          <span className="text-xl font-bold text-white/95 drop-shadow-lg">
            {streamer.name}
          </span>
        </div>

        {/* Overlay bottom: fotos + clipes */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-4 text-sm text-white/90 drop-shadow-md">
          <span className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-lg">
            <Image size={16} className="opacity-90 shrink-0" />
            {streamer.photosCount} fotos
          </span>
          <span className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-lg">
            <Play size={16} className="opacity-90 shrink-0" />
            {streamer.clipsCount} clipes
          </span>
        </div>
      </div>
    </article>
  )
}
