import { useState } from 'react'
import { Menu, X, ArrowRight, Youtube, Instagram } from 'lucide-react'

import logo from '../../assets/logo.png'

const JOGAR_NA_SIDE_MSG = 'Olá! Estou interessado em jogar na side e gostaria de mais informações. Pode me ajudar?'
const WHATSAPP_URL = `https://wa.me/554498394883?text=${encodeURIComponent(JOGAR_NA_SIDE_MSG)}`

const navLinks = [
  { label: 'Streamers', href: '#streamers' },
  { label: 'Servidor', href: '#server' },
  { label: 'Recrutamento', href: '#recruitment' },
  { label: 'Storyline', href: '#storylines' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#09090bb3] backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-20">
            {/* Logo - esquerda */}
            <a href="#" className="flex items-center shrink-0 group" aria-label="WarTagSide - Início">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <img src={logo} alt="" className="relative h-[4.54rem] w-[4.54rem] rounded-2xl object-cover shadow-2xl" />
              </div>
            </a>

            {/* Desktop: links do menu centralizados */}
            <nav className="hidden lg:flex flex-1 justify-center items-center min-w-0" aria-label="Menu principal">
              <ul className="flex items-center gap-6 xl:gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-white/60 hover:text-white transition-colors whitespace-nowrap"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop: redes sociais + botão CTA - direita */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href="https://instagram.com/clanwartag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-[#d946ef] via-[#ec4899] to-[#fbbf24] text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={22} className="stroke-[2.5]" />
              </a>
              <a
                href="https://youtube.com/@wartagclan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-[#FF0000] hover:bg-[#D90000] text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube size={22} className="stroke-[2.5]" />
              </a>
              <span className="w-px h-6 bg-white/10 mx-1" aria-hidden />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-rose-500 hover:bg-rose-600 border border-rose-500/30 rounded-xl shadow-[0_0_20px_rgba(244,63,94,0.25)] hover:shadow-[0_0_24px_rgba(244,63,94,0.35)] transition-all duration-200 whitespace-nowrap"
              >
                Jogar na Side
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>

            {/* Mobile: botão menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 -m-2 text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-zinc-950/98 backdrop-blur-xl border-t border-white/5">
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex py-3 text-base font-medium text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 pb-2 flex items-center gap-3 border-t border-white/10 mt-3">
                <a href="https://instagram.com/clanwartag" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-[#d946ef] via-[#ec4899] to-[#fbbf24] text-white rounded-2xl shadow-lg transition-all duration-200" aria-label="Instagram">
                  <Instagram size={22} className="stroke-[2.5]" />
                </a>
                <a href="https://youtube.com/@wartagclan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 bg-[#FF0000] hover:bg-[#D90000] text-white rounded-2xl shadow-lg transition-all duration-200" aria-label="YouTube">
                  <Youtube size={22} className="stroke-[2.5]" />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-white bg-rose-500 hover:bg-rose-600 rounded-lg transition-colors">
                  Jogar na Side
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
