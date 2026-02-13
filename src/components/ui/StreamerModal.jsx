import { useEffect, useRef, useState } from 'react'
import { X, Tv, User, Camera, ExternalLink } from 'lucide-react'

const TWITCH_PARENT = typeof window !== 'undefined' ? window.location.hostname : 'localhost'

const tabs = [
  { id: 'perfil', label: 'Perfil', icon: User },
  { id: 'live', label: 'Live', icon: Tv },
  { id: 'fotos', label: 'Fotos', icon: Camera },
]

export default function StreamerModal({ streamer, onClose }) {
  const overlayRef = useRef(null)
  const [activeTab, setActiveTab] = useState('perfil')
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
        className="relative w-full max-w-[56rem] overflow-hidden rounded-[28px] border border-white/10 bg-[#09090bcc] backdrop-blur-[24px] text-zinc-100 max-h-[90vh] flex flex-col"
        style={{
          WebkitTapHighlightColor: 'transparent',
          boxShadow: '0 40px 140px rgba(0,0,0,.85)',
        }}
      >
        {/* Hero Banner with Photo */}
        <div className="relative h-48 md:h-56 overflow-hidden shrink-0">
          <img
            src={streamer.image}
            alt={streamer.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/50 to-black/20" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-sm border border-white/10"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>

          {/* Live badge */}
          {isLive && (
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-600/90 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-bold text-white uppercase">Ao Vivo</span>
              {streamer.viewers != null && (
                <span className="text-xs text-white/80">• {streamer.viewers}</span>
              )}
            </div>
          )}

          {/* Profile info overlapping banner */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-4 flex items-end gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-[3px] border-[#09090b] shadow-2xl shrink-0 bg-zinc-800">
              <img
                src={streamer.avatar}
                alt={streamer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 pb-1">
              <h3 id="modal-title" className="text-2xl md:text-3xl font-bold text-white truncate drop-shadow-lg">
                {streamer.name}
              </h3>
              <p className="text-sm text-white/60">{streamer.role}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 px-6 shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'border-b-rose-500 text-white'
                  : 'border-b-transparent text-white/40 hover:text-white/70'
              }`}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Perfil Tab */}
          {activeTab === 'perfil' && (
            <div className="space-y-6">
              {/* Bio */}
              {streamer.bio && (
                <div className="bg-white/5 rounded-2xl border border-white/5 p-5">
                  <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Bio</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{streamer.bio}</p>
                </div>
              )}

              {/* Story */}
              <div className="bg-white/5 rounded-2xl border border-white/5 p-5">
                <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">História</h4>
                <p className="text-white/80 text-sm leading-relaxed">{streamer.story}</p>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-white/5 rounded-xl border border-white/5 p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-0.5">
                    {isLive ? (
                      <span className="text-green-400">{streamer.viewers || 0}</span>
                    ) : (
                      <span className="text-white/30">—</span>
                    )}
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">Viewers</div>
                </div>
                <div className="bg-white/5 rounded-xl border border-white/5 p-4 text-center">
                  <div className={`text-sm font-bold uppercase ${isLive ? 'text-green-400' : 'text-red-400'}`}>
                    {isLive ? 'Online' : 'Offline'}
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">Status</div>
                </div>
                <div className="bg-white/5 rounded-xl border border-white/5 p-4 text-center col-span-2 md:col-span-1">
                  <div className="text-sm font-bold text-purple-400 truncate">{streamer.twitchChannel}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">Canal Twitch</div>
                </div>
              </div>

              {/* Twitch Link */}
              <a
                href={`https://www.twitch.tv/${streamer.twitchChannel}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
              >
                <Tv size={18} />
                Visitar canal na Twitch
                <ExternalLink size={14} className="text-white/60" />
              </a>
            </div>
          )}

          {/* Live Tab */}
          {activeTab === 'live' && (
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden bg-black border border-white/10 aspect-video">
                <iframe
                  src={twitchEmbedUrl}
                  title={`Twitch - ${streamer.name}`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  {isLive && streamer.viewers != null ? (
                    <p className="text-sm text-green-400">
                      Ao vivo agora • {streamer.viewers} viewers
                    </p>
                  ) : (
                    <p className="text-sm text-white/40">Canal offline no momento</p>
                  )}
                </div>
                <a
                  href={`https://www.twitch.tv/${streamer.twitchChannel}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Abrir no Twitch <ExternalLink size={12} />
                </a>
              </div>
            </div>
          )}

          {/* Fotos Tab */}
          {activeTab === 'fotos' && (
            <div>
              {streamer.photos && streamer.photos.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {streamer.photos.map((photo, i) => (
                    <div key={i} className="aspect-square rounded-xl overflow-hidden bg-zinc-800 border border-white/5">
                      <img src={photo} alt={`${streamer.name} foto ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  {/* Show main photo as gallery preview */}
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border border-white/10 mb-4">
                    <img src={streamer.image} alt={streamer.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-white/40 text-sm">Mais fotos em breve</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
