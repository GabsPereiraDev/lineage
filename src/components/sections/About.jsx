import { Circle, Swords, Trophy, ChevronDown } from 'lucide-react'
import WarTaG from '../../assets/WarTaG.png'

const values = [
  {
    icon: Circle,
    title: 'Disciplina acima do discurso',
    description: 'Aqui, presença e postura valem mais do que promessa.',
  },
  {
    icon: Swords,
    title: 'Guerra com propósito',
    description: 'Toda noite é uma prova. Toda luta escreve um nome.',
  },
  {
    icon: Trophy,
    title: 'Legado',
    description: 'Vencer é bom. Sustentar é o que separa lenda de sorte.',
  },
]

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,80,255,0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-amber-200/80">Lore oficial de WarTag</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div>
            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              WarTag — O Juramento,
              <br />
              um clã, uma história
            </h2>

            {/* Description */}
            <p className="text-white/50 mb-8 leading-relaxed text-lg">
              Quando os reinos esqueceram seus próprios nomes... nasceu um clã onde a
              história tem poder. WarTag não é apenas um clã. É uma entidade: você entra
              pra assistir... ou entra pra marcar história.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mb-10">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                Ler o Juramento
                <ChevronDown size={16} />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                Ver CPs
                <Swords size={16} />
              </button>
            </div>

            {/* Values cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                    <value.icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="font-semibold text-white text-sm mb-1">{value.title}</div>
                  <div className="text-xs text-white/40 leading-relaxed">{value.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image Card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={WarTaG}
                  alt="WarTag"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote overlay */}
              <div className="p-6">
                <p className="text-white/50 text-sm mb-1">
                  "Na WarTag, não existe sorte."
                </p>
                <p className="text-white font-semibold text-sm">
                  Existe Comprometimento.
                </p>
              </div>
            </div>

            {/* Subtle glow behind card */}
            <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-amber-500/10 via-transparent to-rose-500/10 rounded-[2rem] blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
