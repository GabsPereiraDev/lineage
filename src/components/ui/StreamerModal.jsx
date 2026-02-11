import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

const TWITCH_PARENT = typeof window !== 'undefined' ? window.location.hostname : 'localhost'

export default function StreamerModal({ streamer, onClose }) {
  const overlayRef = useRef(null)
  const isLive = streamer.status === 'live'

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const twitchEmbedUrl = `https://player.twitch.tv/?channel=${encodeURIComponent(streamer.twitchChannel)}&parent=${TWITCH_PARENT}&autoplay=true`

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-[54.6rem] box-border border overflow-y-auto overflow-x-hidden overscroll-contain rounded-[28px] border-[#e5e7eb] bg-[#09090bcc] backdrop-blur-[24px] text-zinc-100 max-h-[85vh]"
        style={{
          WebkitTapHighlightColor: 'transparent',
          boxShadow: '0 40px 140px rgba(0,0,0,.85)',
        }}
      >
        {/* Cabeçalho neon */}
        <div className="relative h-32 md:h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-purple-950/60 to-zinc-900" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${streamer.logoImage})` }}
          />
          <h2
            id="modal-title"
            className="relative flex items-center justify-center h-full text-4xl md:text-5xl font-bold"
            style={{
              color: '#a5b4fc',
              textShadow: '0 0 15px rgba(99, 102, 241, 0.9), 0 0 30px rgba(139, 92, 246, 0.7), 0 0 45px rgba(59, 130, 246, 0.5)',
            }}
          >
            {streamer.name}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Perfil: avatar + nome + role */}
          <div className="flex items-center gap-4">
            <img
              src={streamer.avatar}
              alt={streamer.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white/20 shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{streamer.name}</h3>
              <p className="text-sm text-white/60">{streamer.role}</p>
              {isLive && streamer.viewers != null && (
                <p className="text-sm text-green-400 mt-1">
                  Ao vivo agora • {streamer.viewers} viewers
                </p>
              )}
            </div>
          </div>

          {/* História */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-2">
              História
            </h4>
            <p className="text-white/80 text-sm leading-relaxed">{streamer.story}</p>
          </div>

          {/* Fotos */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-2">
              Fotos
            </h4>
            <div className="flex gap-2 flex-wrap">
              {streamer.photos?.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`Foto ${i + 1}`}
                  className="w-20 h-20 rounded-lg object-cover border border-white/10"
                />
              ))}
            </div>
          </div>

          {/* Canal na Twitch */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-2">
              Canal na Twitch
            </h4>
            <a
              href={`https://www.twitch.tv/${streamer.twitchChannel}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white text-sm font-medium transition-colors mb-3"
            >
              Abrir no Twitch
            </a>
            {isLive && streamer.viewers != null && (
              <p className="text-sm text-white/70 mb-2">
                {streamer.viewers} viewers assistindo agora
              </p>
            )}
            <div className="rounded-xl overflow-hidden bg-black border border-white/10 aspect-video">
              <iframe
                src={twitchEmbedUrl}
                title={`Twitch - ${streamer.name}`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

          {/* Clipes */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-2">
              Clipes
            </h4>
            {streamer.clips?.length > 0 ? (
              <ul className="space-y-2">
                {streamer.clips.map((clip, i) => (
                  <li key={i} className="text-white/70 text-sm">
                    {typeof clip === 'string' ? clip : `Clipe ${i + 1}`}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white/50 text-sm">Nenhum clipe disponível.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
