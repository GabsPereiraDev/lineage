import { Shield, Sword, Heart, Users } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Lealdade',
    description: 'Protegemos os nossos',
  },
  {
    icon: Sword,
    title: 'Força',
    description: 'Unidos somos invencíveis',
  },
  {
    icon: Heart,
    title: 'Comunidade',
    description: 'Família acima de tudo',
  },
  {
    icon: Users,
    title: 'União',
    description: 'BR e Hispanos juntos',
  },
]

export default function About() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,80,255,0.1),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80"
                alt="Warrior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="text-sm text-white/50 mb-1">Desde</div>
              <div className="text-3xl font-semibold text-white">2018</div>
              <div className="text-sm text-white/50">Construindo história</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              <span className="text-rose-500">SENTENCE</span> — O Juramento
              <br />que nunca quebra
            </h2>

            <p className="text-white/60 mb-6 leading-relaxed">
              Somos mais que uma comunidade de jogadores. Somos uma família
              que transcende fronteiras. Brasileiros e Hispanos unidos por
              uma paixão em comum: a vitória.
            </p>

            <p className="text-white/60 mb-8 leading-relaxed">
              Desde 2018, construímos nossa história em diversos jogos,
              sempre mantendo nossos valores de lealdade, respeito e
              companheirismo.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{value.title}</div>
                    <div className="text-sm text-white/50">{value.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
