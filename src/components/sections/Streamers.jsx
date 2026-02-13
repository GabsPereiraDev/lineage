import { useState } from 'react'
import StreamerCard from '../ui/StreamerCard'
import StreamerModal from '../ui/StreamerModal'
import STREAMERS from '../../data/streamersData'

const STREAMER_WHATSAPP_MSG = 'Olá! Sou streamer e quero fazer parte do time de streamers da Side. Pode me passar mais informações?'
const STREAMER_WHATSAPP_URL = `https://wa.me/5516997425812?text=${encodeURIComponent(STREAMER_WHATSAPP_MSG)}`

export default function Streamers() {
  const [selectedStreamer, setSelectedStreamer] = useState(null)

  return (
    <section id="streamers" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,90,0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho alinhado à esquerda */}
        <p className="text-sm font-medium text-white/60 uppercase tracking-wider mb-1">
          Streamers
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
          Streamers da Side
        </h2>
        <p className="text-white/60 text-base max-w-2xl mb-6">
          Esses são os nossos streamer, sempre com novidades, resenha e muito gameplay. Escolha um e clique no card para acessar o perfil.
        </p>

        {/* Call to action: acima do grid, botão à direita */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <p className="text-white/50 order-2 sm:order-1 sm:mb-0">
            Você é streamer e quer fazer parte do time?
          </p>
          <a
            href={STREAMER_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors order-1 sm:order-2 sm:ml-auto"
          >
            Entre em contato conosco →
          </a>
        </div>

        {/* Grid de cards - 3 colunas no desktop como no print */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {STREAMERS.map((streamer) => (
            <StreamerCard
              key={streamer.id}
              streamer={streamer}
              onClick={() => setSelectedStreamer(streamer)}
            />
          ))}
        </div>
      </div>

      {selectedStreamer && (
        <StreamerModal
          streamer={selectedStreamer}
          onClose={() => setSelectedStreamer(null)}
        />
      )}
    </section>
  )
}
