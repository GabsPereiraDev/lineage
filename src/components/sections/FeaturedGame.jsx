import { Play, ExternalLink } from 'lucide-react'
import Button from '../ui/Button'

export default function FeaturedGame() {
  return (
    <section id="games" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="text-sm text-white/50 mb-4 uppercase tracking-wider">
          Servidor atual que estamos jogando e a companhia
        </div>

        {/* Game card */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80"
              alt="Lineage 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          </div>

          {/* Content */}
          <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 min-h-[400px]">
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-emerald-300">Servidor Ativo</span>
              </div>

              {/* Game title */}
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
                Lineage 2
              </h2>

              {/* Description */}
              <p className="text-white/60 mb-6 max-w-md">
                Junte-se a nossa aliança no Lineage 2. Participe de sieges,
                eventos exclusivos e conquiste o servidor ao nosso lado.
              </p>

              {/* Stats */}
              <div className="flex gap-6 mb-8">
                <div>
                  <div className="text-2xl font-semibold text-white">150+</div>
                  <div className="text-sm text-white/50">Membros no Clan</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">#1</div>
                  <div className="text-sm text-white/50">Ranking Servidor</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">
                  <Play size={18} />
                  Como Entrar
                </Button>
                <Button variant="secondary">
                  <ExternalLink size={18} />
                  Ver Servidor
                </Button>
              </div>
            </div>

            {/* Right side - could add character image or game screenshot */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-9xl font-bold text-white/5">L2</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
