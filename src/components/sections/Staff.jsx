import SectionTitle from '../ui/SectionTitle'
import { Crown, Shield } from 'lucide-react'

import Barros from '../../assets/barros.jpeg'
import Coltao from '../../assets/Coltaofoto.jpeg'
import Gregin from '../../assets/gregin.png'

const staffMembers = [
  { name: 'Gregin', role: 'Leader', icon: Crown, color: 'amber', image: Gregin },
  { name: 'TheColte', role: 'Leader', icon: Crown, color: 'amber', image: Coltao },
  { name: 'LLENN', role: 'Marketing', icon: Crown, color: 'amber', image: Barros },
 


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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
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
