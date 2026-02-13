import { Instagram, Youtube } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/clanwartag', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@wartagclan', label: 'YouTube' },
]

const footerLinks = [
  {
    title: 'Comunidade',
    links: [
      { label: 'Discord', href: '#' },
      { label: 'Streamers', href: '#streamers' },
      { label: 'Staff', href: '#staff' },
    ],
  },
  {
    title: 'Jogos',
    links: [
      { label: 'Lineage 2', href: '#' },
      { label: 'Outros Jogos', href: '#' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Contato', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="text-xl font-semibold text-white">
                WarTag<span className="text-rose-500">Side</span>
              </span>
            </a>
            <p className="text-sm text-white/50 mb-4">
              A maior comunidade de jogadores brasileiros e hispanos.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} WarTagSide. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
