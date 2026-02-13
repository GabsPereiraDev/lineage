import { Headphones, Users } from 'lucide-react'
import Button from '../ui/Button'
import banner from '../../assets/banner.png'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Banner background - responsivo: preenche e ajusta à viewport */}
      <div className="absolute inset-0 min-w-0 min-h-0">
        <img
          src={banner}
          alt=""
          className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-zinc-950/60" />
      </div>

      {/* Aurora background */}
      <div className="aurora" />

      {/* Grain texture */}
      <div className="grain absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-white/80">+500 jogadores online agora</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight">
          Entre na{' '}
          <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 bg-clip-text text-transparent">
            WarTag
          </span>
          {' '}e jogue com{' '}
          <span className="text-white/90">os melhores</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
          Junte-se a maior comunidade de jogadores. Participe de eventos,
          conheça streamers e faça parte da nossa historia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#teamspeak" className="inline-flex items-center justify-center gap-2 text-base px-8 py-4 rounded-full font-medium bg-rose-500/90 hover:bg-rose-500 text-white shadow-[0_0_25px_rgba(255,0,80,0.35)] transition-all duration-300">
            <Headphones size={20} />
            Entrar no TeamSpeak
          </a>
          <Button variant="secondary" className="text-base px-8 py-4">
            <Users size={20} />
            Conhecer a Comunidade
          </Button>
        </div>

        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-semibold text-white mb-1">17+</div>
            <div className="text-sm text-white/50">Organizadores</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-white mb-1">5K+</div>
            <div className="text-sm text-white/50">Membros</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-white mb-1">24/7</div>
            <div className="text-sm text-white/50">Suporte</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  )
}
