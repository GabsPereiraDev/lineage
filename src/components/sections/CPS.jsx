import { Trophy, Medal, Crown, Star } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const rankings = [
  { position: 1, name: 'Player1', points: 15420, icon: Crown, color: 'amber' },
  { position: 2, name: 'Player2', points: 14280, icon: Medal, color: 'slate' },
  { position: 3, name: 'Player3', points: 13150, icon: Medal, color: 'orange' },
  { position: 4, name: 'Player4', points: 11890, icon: Star, color: 'white' },
  { position: 5, name: 'Player5', points: 10750, icon: Star, color: 'white' },
]

const colorClasses = {
  amber: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  slate: 'text-slate-300 bg-slate-500/10 border-slate-500/30',
  orange: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
  white: 'text-white/70 bg-white/5 border-white/10',
}

export default function CPS() {
  return (
    <section id="cps" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Sistema de pontos da comunidade - Quanto mais você participa, mais você sobe">
          <Trophy className="inline-block mr-2 text-amber-400" size={32} />
          Ranking <span className="text-amber-400">CPS</span>
        </SectionTitle>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="p-6 rounded-2xl bg-black/30 border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-2">O que é CPS?</h3>
            <p className="text-sm text-white/60">
              CPS (Community Points System) é nosso sistema de pontuação que recompensa
              membros ativos da comunidade.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-black/30 border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-2">Como ganhar pontos?</h3>
            <p className="text-sm text-white/60">
              Participe de eventos, ajude outros membros, seja ativo no Discord
              e nos servidores de jogo.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-black/30 border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-2">Recompensas</h3>
            <p className="text-sm text-white/60">
              Os top jogadores ganham cargos exclusivos, acesso antecipado a eventos
              e reconhecimento na comunidade.
            </p>
          </div>
        </div>

        {/* Ranking table */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <h3 className="text-lg font-semibold text-white">Top 5 - Ranking Mensal</h3>
          </div>

          <div className="divide-y divide-white/5">
            {rankings.map((player) => (
              <div
                key={player.position}
                className={`flex items-center gap-4 p-4 hover:bg-white/5 transition-colors ${
                  player.position === 1 ? 'bg-amber-500/5' : ''
                }`}
              >
                {/* Position */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${colorClasses[player.color]}`}>
                  <player.icon size={18} />
                </div>

                {/* Position number */}
                <div className="w-8 text-center">
                  <span className={`text-lg font-bold ${player.position === 1 ? 'text-amber-400' : 'text-white/60'}`}>
                    #{player.position}
                  </span>
                </div>

                {/* Player info */}
                <div className="flex-1">
                  <div className="font-medium text-white">{player.name}</div>
                </div>

                {/* Points */}
                <div className="text-right">
                  <div className="text-lg font-semibold text-white">{player.points.toLocaleString()}</div>
                  <div className="text-xs text-white/50">pontos</div>
                </div>
              </div>
            ))}
          </div>

          {/* View full ranking */}
          <div className="p-4 border-t border-white/10 text-center">
            <a href="#" className="text-sm text-amber-400 hover:text-amber-300 transition-colors">
              Ver ranking completo →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
