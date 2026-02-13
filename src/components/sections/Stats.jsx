import { Users, Shield, Gamepad2, Trophy } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { useSheetsData } from '../../context/SheetsContext'

export default function Stats() {
  const { cpGroups, members, loading } = useSheetsData()

  const organizadores = loading ? '...' : `${cpGroups.length}+`
  const totalMembros = loading ? '...' : `${members.length}+`

  const stats = [
    {
      icon: Users,
      value: organizadores,
      label: 'Organizadores',
      description: 'Prontos pra guerra',
    },
    {
      icon: Shield,
      value: totalMembros,
      label: 'Membros Ativos',
      description: 'Jogadores dedicados',
    },
    {
      icon: Gamepad2,
      value: '10+',
      label: 'Jogos Suportados',
      description: 'MMOs e mais',
    },
    {
      icon: Trophy,
      value: '50+',
      label: 'Eventos',
      description: 'Realizados com sucesso',
    },
  ]

  return (
    <section className="py-20 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="A maior comunidade de jogadores brasileiros e hispanos">
          {loading ? '...' : cpGroups.length}+ organizadores, <span className="text-amber-400">prontos pra guerra</span>
        </SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative p-6 rounded-2xl bg-black/30 border border-white/5 backdrop-blur-sm group hover:border-amber-500/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/15 transition-colors">
                <stat.icon className="w-6 h-6 text-amber-400" />
              </div>

              {/* Value */}
              <div className="text-3xl font-semibold text-white mb-1">{stat.value}</div>

              {/* Label */}
              <div className="text-sm font-medium text-white/80 mb-1">{stat.label}</div>

              {/* Description */}
              <div className="text-xs text-white/50">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
