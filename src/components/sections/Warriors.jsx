import { Shield, Users, Loader2 } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { useSheetsData } from '../../context/SheetsContext'

export default function Warriors() {
  const { cpGroups, loading } = useSheetsData()

  return (
    <section id="warriors" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Conheça os guerreiros que fazem parte da nossa comunidade">
          Guerreiros do <span className="text-rose-500">Side</span>
        </SectionTitle>

        {loading ? (
          <div className="flex items-center justify-center py-12 gap-3">
            <Loader2 className="animate-spin text-rose-500" size={24} />
            <span className="text-white/60 text-sm">Carregando membros...</span>
          </div>
        ) : cpGroups.length === 0 ? (
          <div className="text-center py-12 text-white/40 text-sm">
            Nenhum dado disponível no momento
          </div>
        ) : (
          <div className="space-y-6">
            {cpGroups.map((cp, cpIndex) => (
              <div key={cpIndex}>
                {/* CP Card */}
                <div className="bg-black/30 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                  {/* CP Header - Organizador */}
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-white/[0.02]">
                    <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                      <Shield size={16} className="text-rose-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-white truncate">{cp.organizer || cp.name}</div>
                      <div className="text-[11px] text-white/40">Organizador</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/30">
                      <Users size={13} />
                      <span className="text-xs font-medium">{cp.members.length}</span>
                    </div>
                  </div>

                  {/* Members Grid */}
                  <div className="px-5 py-4">
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                      {cp.members.map((member, mIndex) => (
                        <div key={mIndex} className="group relative flex flex-col items-center gap-1.5">
                          {/* Avatar */}
                          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-rose-500/50 transition-all duration-300 bg-gradient-to-br from-rose-500/20 to-violet-500/20 flex items-center justify-center">
                            <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                              {member.nick.charAt(0).toUpperCase()}
                            </span>
                          </div>

                          {/* Nick */}
                          <span className="text-[10px] text-white/40 group-hover:text-white/70 transition-colors text-center leading-tight truncate w-full">
                            {member.nick}
                          </span>

                          {/* Tooltip on hover */}
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                            <div className="bg-zinc-900 border border-white/10 px-2.5 py-1.5 rounded-lg shadow-xl text-center">
                              <div className="text-xs font-medium text-white">{member.nick}</div>
                              {member.classe && (
                                <div className="text-[10px] text-rose-400">{member.classe}</div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total stats */}
        {!loading && cpGroups.length > 0 && (
          <div className="text-center mt-8">
            <span className="text-xs text-white/30">
              {cpGroups.length} CPs  •  {cpGroups.reduce((sum, cp) => sum + cp.members.length, 0)} membros
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
