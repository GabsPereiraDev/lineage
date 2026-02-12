import { Scroll, Calendar, Trophy, Users, Swords, Flag } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const timeline = [
  {
    year: '2018',
    title: 'O Início',
    description: 'A WarTag Side é fundada por um grupo de amigos apaixonados por MMOs.',
    icon: Flag,
    color: 'rose',
  },
  {
    year: '2019',
    title: 'Primeira Conquista',
    description: 'Conquistamos nosso primeiro castelo em siege, marcando nossa presença no servidor.',
    icon: Trophy,
    color: 'amber',
  },
  {
    year: '2020',
    title: 'Expansão BR/Hispano',
    description: 'Abrimos as portas para a comunidade hispana, unindo Brasil e países latinos.',
    icon: Users,
    color: 'violet',
  },
  {
    year: '2022',
    title: 'Dominação Total',
    description: 'Alcançamos o posto de aliança #1 do servidor após épicas batalhas.',
    icon: Swords,
    color: 'emerald',
  },
  {
    year: '2024',
    title: 'Nova Era',
    description: 'Lançamos nosso próprio servidor e expandimos para novos jogos.',
    icon: Flag,
    color: 'rose',
  },
]

const colorClasses = {
  rose: {
    bg: 'bg-rose-500',
    border: 'border-rose-500',
    text: 'text-rose-400',
    glow: 'shadow-[0_0_20px_rgba(255,0,90,0.3)]',
  },
  amber: {
    bg: 'bg-amber-500',
    border: 'border-amber-500',
    text: 'text-amber-400',
    glow: 'shadow-[0_0_20px_rgba(245,158,11,0.3)]',
  },
  violet: {
    bg: 'bg-violet-500',
    border: 'border-violet-500',
    text: 'text-violet-400',
    glow: 'shadow-[0_0_20px_rgba(139,92,246,0.3)]',
  },
  emerald: {
    bg: 'bg-emerald-500',
    border: 'border-emerald-500',
    text: 'text-emerald-400',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
  },
}

export default function Storylines() {
  return (
    <section id="storylines" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,90,0.05),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="A jornada épica da nossa comunidade através dos anos">
          <Scroll className="inline-block mr-2 text-rose-400" size={32} />
          Nossa <span className="text-rose-400">História</span>
        </SectionTitle>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/50 via-violet-500/50 to-emerald-500/50" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((event, index) => {
              const colors = colorClasses[event.color]
              const isEven = index % 2 === 0

              return (
                <div
                  key={event.year}
                  className={`relative flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}>
                    <div
                      className={`inline-block p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:${colors.border}/30 transition-all duration-300`}
                    >
                      <div className={`text-sm font-medium ${colors.text} mb-1`}>
                        <Calendar size={14} className="inline mr-1" />
                        {event.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                      <p className="text-white/60 text-sm">{event.description}</p>
                    </div>
                  </div>

                  {/* Icon - center on desktop, left on mobile */}
                  <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full ${colors.bg} ${colors.glow} flex items-center justify-center z-10`}>
                    <event.icon size={20} className="text-white" />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block flex-1" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Future */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500/10 to-violet-500/10 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-white/80">E a história continua...</span>
            <span className="text-white/50">Faça parte dela!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
