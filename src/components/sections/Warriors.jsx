import SectionTitle from '../ui/SectionTitle'

const warriors = [
  { name: 'Player1', role: 'Tank', image: null },
  { name: 'Player2', role: 'DPS', image: null },
  { name: 'Player3', role: 'Healer', image: null },
  { name: 'Player4', role: 'Support', image: null },
  { name: 'Player5', role: 'Tank', image: null },
  { name: 'Player6', role: 'DPS', image: null },
  { name: 'Player7', role: 'Healer', image: null },
  { name: 'Player8', role: 'Support', image: null },
]

export default function Warriors() {
  return (
    <section id="warriors" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Conheça os guerreiros que fazem parte da nossa comunidade">
          Guerreiros do <span className="text-rose-500">Side</span>
        </SectionTitle>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {warriors.map((warrior, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Avatar */}
              <div className="aspect-square rounded-full overflow-hidden border-2 border-white/10 group-hover:border-rose-500/50 transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-rose-500/20 to-violet-500/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-white/60">
                    {warrior.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Name tooltip on hover */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <div className="bg-black/80 px-2 py-1 rounded text-xs text-white">
                  {warrior.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            Ver todos os guerreiros →
          </a>
        </div>
      </div>
    </section>
  )
}
