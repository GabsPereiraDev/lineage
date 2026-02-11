import { useState } from 'react'
import { Menu, X, Trophy, Twitch, Server, UserPlus, BookOpen, Scroll, Home } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Inicio', href: '#hero', icon: Home },
  { label: 'CPS', href: '#cps', icon: Trophy },
  { label: 'Twitch Streams', href: '#streamers', icon: Twitch },
  { label: 'Servidor', href: '#server', icon: Server },
  { label: 'Recrutamento', href: '#recruitment', icon: UserPlus },
  { label: 'Wiki', href: '#wiki', icon: BookOpen },
  { label: 'Storylines', href: '#storylines', icon: Scroll },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">
                Sentence<span className="text-rose-500">Side</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <link.icon size={16} />
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" className="text-sm py-2">
                Entrar
              </Button>
              <Button variant="primary" className="text-sm py-2">
                Discord
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-zinc-950/95 backdrop-blur-xl border-t border-white/5">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 py-2 text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon size={18} />
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <Button variant="ghost" className="w-full">Entrar</Button>
                <Button variant="primary" className="w-full">Discord</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
