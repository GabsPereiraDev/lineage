import { useState } from 'react'
import { Menu, X, ArrowRight, Youtube, Facebook, Instagram, Twitch } from 'lucide-react'
import Button from '../ui/Button'
import sentenceWord from '../../assets/sentenceWord.png'
import sentenceLogo from '../../assets/sentenceLogo.jpg'

const DiscordIcon = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1892.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.1023.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
  </svg>
)

const navLinks = [
  { label: 'Streamers', href: '#streamers' },
  { label: 'Servidor', href: '#server' },
  { label: 'Recrutamento', href: '#recruitment' },
  { label: 'Wiki', href: '#wiki' },
  { label: 'Storyline', href: '#storylines' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#09090bb3] backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <img src={sentenceLogo} alt="Logo" className="relative h-12 w-12 rounded-xl object-cover shadow-2xl" />
              </div>
              <div className="flex flex-col">
                <img src={sentenceWord} alt="SentenceSide" className="h-8 w-auto object-contain object-left mb-[-4px]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium leading-none">Lineage 2 Side</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Icons & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-3 mr-2">
                <a href="#" className="flex items-center justify-center w-11 h-11 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 group">
                  <DiscordIcon size={22} className="group-hover:animate-pulse" />
                </a>
                <a href="#" className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-[#d946ef] via-[#ec4899] to-[#fbbf24] text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-200">
                  <Instagram size={22} className="stroke-[2.5]" />
                </a>
                <a href="#" className="flex items-center justify-center w-11 h-11 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-200">
                  <Facebook size={22} className="fill-current stroke-none" />
                </a>
                <a href="#" className="flex items-center justify-center w-11 h-11 bg-[#FF0000] hover:bg-[#D90000] text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-200">
                  <Youtube size={22} className="stroke-[2.5]" />
                </a>
                <a href="#" className="flex items-center justify-center w-11 h-11 bg-[#9146FF] hover:bg-[#7D2DFF] text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-200">
                  <Twitch size={22} className="stroke-[2.5]" />
                </a>
              </div>

              {/* Play Button */}
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/95 bg-[#f43f5ee6] border border-white/10 rounded-xl shadow-[0_0_25px_rgba(255,0,80,0.35)] hover:scale-105 transition-all duration-200">
                Jogar na Side
                <ArrowRight size={14} />
              </button>
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
                  className="flex items-center gap-2 py-3 text-base font-medium text-white/60 hover:text-white transition-colors border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 flex flex-col gap-6">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <a href="#" className="flex items-center justify-center w-11 h-11 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-2xl shadow-lg transition-all duration-200">
                    <DiscordIcon size={22} />
                  </a>
                  <a href="#" className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-[#d946ef] via-[#ec4899] to-[#fbbf24] text-white rounded-2xl shadow-lg transition-all duration-200">
                    <Instagram size={22} className="stroke-[2.5]" />
                  </a>
                  <a href="#" className="flex items-center justify-center w-11 h-11 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-2xl shadow-lg transition-all duration-200">
                    <Facebook size={22} className="fill-current stroke-none" />
                  </a>
                  <a href="#" className="flex items-center justify-center w-11 h-11 bg-[#FF0000] hover:bg-[#D90000] text-white rounded-2xl shadow-lg transition-all duration-200">
                    <Youtube size={22} className="stroke-[2.5]" />
                  </a>
                  <a href="#" className="flex items-center justify-center w-11 h-11 bg-[#9146FF] hover:bg-[#7D2DFF] text-white rounded-2xl shadow-lg transition-all duration-200">
                    <Twitch size={22} className="stroke-[2.5]" />
                  </a>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-white/95 bg-[#f43f5ee6] border border-white/10 rounded-xl shadow-[0_0_25px_rgba(255,0,80,0.35)] transition-all duration-200">
                  Jogar na Side
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
