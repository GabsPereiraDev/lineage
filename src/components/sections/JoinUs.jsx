import { Headphones, ArrowRight } from 'lucide-react'

export default function JoinUs() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-rose-950/20 to-zinc-950" />

      {/* Aurora effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,90,0.15),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-8">
          <Headphones size={16} className="text-rose-400" />
          <span className="text-sm text-white/80">Vagas Abertas</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
          Quer jogar na{' '}
          <span className="bg-gradient-to-r from-rose-500 to-amber-400 bg-clip-text text-transparent">
            WarTag
          </span>
          ?
        </h2>

        {/* Description */}
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
          Estamos sempre em busca de jogadores dedicados que compartilham
          nossos valores. Entre no nosso TeamSpeak e faça parte da família.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#teamspeak" className="inline-flex items-center justify-center gap-2 text-lg px-10 py-5 rounded-full font-medium bg-rose-500/90 hover:bg-rose-500 text-white shadow-[0_0_25px_rgba(255,0,80,0.35)] transition-all duration-300">
            <Headphones size={22} />
            Entrar no TeamSpeak
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Additional info */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-white/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-sm">+500 online agora</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-sm">Suporte 24/7</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="text-sm">Eventos semanais</span>
          </div>
        </div>
      </div>
    </section>
  )
}
