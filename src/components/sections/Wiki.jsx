import { BookOpen, FileText, Shield, Sword, Map, Users, ExternalLink } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const wikiCategories = [
  {
    title: 'Guias para Iniciantes',
    icon: FileText,
    color: 'emerald',
    articles: [
      'Como começar no servidor',
      'Primeiros passos no jogo',
      'Escolhendo sua classe',
      'Interface e controles',
    ],
  },
  {
    title: 'Classes e Builds',
    icon: Sword,
    color: 'rose',
    articles: [
      'Guia de Tank',
      'Guia de DPS',
      'Guia de Healer',
      'Guia de Support',
    ],
  },
  {
    title: 'PvP e Sieges',
    icon: Shield,
    color: 'amber',
    articles: [
      'Estratégias de PvP',
      'Guia de Siege',
      'Formações de grupo',
      'Equipamentos PvP',
    ],
  },
  {
    title: 'Mapas e Locais',
    icon: Map,
    color: 'violet',
    articles: [
      'Mapa do mundo',
      'Dungeons importantes',
      'Locais de farm',
      'Bosses mundiais',
    ],
  },
]

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    hover: 'hover:border-emerald-500/50',
  },
  rose: {
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    text: 'text-rose-400',
    hover: 'hover:border-rose-500/50',
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    hover: 'hover:border-amber-500/50',
  },
  violet: {
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    text: 'text-violet-400',
    hover: 'hover:border-violet-500/50',
  },
}

export default function Wiki() {
  return (
    <section id="wiki" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,80,255,0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Guias, tutoriais e informações para ajudar você em sua jornada">
          <BookOpen className="inline-block mr-2 text-violet-400" size={32} />
          <span className="text-violet-400">Wiki</span> da Comunidade
        </SectionTitle>

        {/* Wiki categories grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {wikiCategories.map((category) => {
            const colors = colorClasses[category.color]
            return (
              <div
                key={category.title}
                className={`rounded-2xl border ${colors.border} ${colors.hover} bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300`}
              >
                {/* Category header */}
                <div className={`p-4 ${colors.bg} border-b ${colors.border} flex items-center gap-3`}>
                  <category.icon className={colors.text} size={24} />
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                {/* Articles list */}
                <div className="p-4">
                  <ul className="space-y-2">
                    {category.articles.map((article) => (
                      <li key={article}>
                        <a
                          href="#"
                          className="flex items-center gap-2 py-2 px-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors group"
                        >
                          <FileText size={14} className="text-white/40 group-hover:text-white/60" />
                          {article}
                          <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View all */}
                <div className="px-4 pb-4">
                  <a
                    href="#"
                    className={`text-sm ${colors.text} hover:underline`}
                  >
                    Ver todos os artigos →
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contributors */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Users size={16} className="text-white/50" />
            <span className="text-sm text-white/60">
              Wiki mantida pela comunidade •{' '}
              <a href="#" className="text-violet-400 hover:underline">
                Contribua
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
