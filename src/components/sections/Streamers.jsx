import { useState } from 'react'
import StreamerCard from '../ui/StreamerCard'
import StreamerModal from '../ui/StreamerModal'
import STREAMERS from '../../data/streamersData'

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
        <p className="text-white/60 text-base max-w-2xl mb-10">
          Esses são os nossos streamer, sempre com novidades, resenha e muito gameplay. Escolha um e clique no card para acessar o perfil.
        </p>

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

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-white/50 mb-4">
            Você é streamer e quer fazer parte do time?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
          >
            Entre em contato conosco →
          </a>
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
