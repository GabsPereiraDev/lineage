import SectionTitle from '../ui/SectionTitle'
import { Crown, Shield, Wrench } from 'lucide-react'

const staffMembers = [
  {
    name: 'Admin1',
    role: 'Fundador',
    icon: Crown,
    color: 'amber',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Admin2',
    role: 'Co-Fundador',
    icon: Crown,
    color: 'amber',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  {
    name: 'Mod1',
    role: 'Moderador',
    icon: Shield,
    color: 'violet',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Mod2',
    role: 'Moderador',
    icon: Shield,
    color: 'violet',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  },
  {
    name: 'Support1',
    role: 'Suporte',
    icon: Wrench,
    color: 'emerald',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
]

const colorClasses = {
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    icon: 'bg-amber-500/20',
  },
  violet: {
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    text: 'text-violet-400',
    icon: 'bg-violet-500/20',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    icon: 'bg-emerald-500/20',
  },
}

export default function Staff() {
  return (
    <section id="staff" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Conheça a equipe que mantém nossa comunidade funcionando">
          Staff <span className="text-amber-400">WarTag</span>
        </SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {staffMembers.map((member) => {
            const colors = colorClasses[member.color]
            return (
              <div
                key={member.name}
                className={`group relative overflow-hidden rounded-2xl ${colors.bg} border ${colors.border} transition-all duration-300 hover:scale-[1.02]`}
              >
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* Role badge */}
                  <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full ${colors.icon} mb-2`}>
                    <member.icon size={12} className={colors.text} />
                    <span className={`text-xs ${colors.text}`}>{member.role}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
