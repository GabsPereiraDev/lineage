import { useState } from 'react'
import { Trophy, Crown, Users, Swords, Loader2, ChevronRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { useSheetsData } from '../../context/SheetsContext'

export default function CPS() {
  const { cpGroups, loading } = useSheetsData()
  const [activeCP, setActiveCP] = useState(0)

  const currentCP = cpGroups[activeCP] || null

  return (
    <section id="cps" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Cada CP tem um líder e seus membros — clique para ver a composição">
          <Trophy className="inline-block mr-2 text-amber-400" size={32} />
          Command <span className="text-amber-400">Parties</span>
        </SectionTitle>

        {loading ? (
          <div className="flex items-center justify-center py-16 gap-3">
            <Loader2 className="animate-spin text-amber-400" size={24} />
            <span className="text-white/60 text-sm">Carregando CPs...</span>
          </div>
        ) : cpGroups.length === 0 ? (
          <div className="text-center py-16 text-white/40 text-sm">
            Nenhum dado disponível no momento
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: CP Tabs */}
            <div className="lg:w-72 shrink-0">
              <div className="bg-black/30 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="px-4 py-3 border-b border-white/5">
                  <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
                    {cpGroups.length} CPs
                  </span>
                </div>
                <div className="max-h-[520px] overflow-y-auto custom-scrollbar">
                  {cpGroups.map((cp, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCP(index)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 border-l-2 ${
                        activeCP === index
                          ? 'bg-amber-500/10 border-l-amber-400 text-white'
                          : 'border-l-transparent text-white/50 hover:bg-white/5 hover:text-white/80'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeCP === index
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-white/5 text-white/30'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{cp.organizer || cp.name}</div>
                        <div className="text-[10px] text-white/30">{cp.members.length} membros</div>
                      </div>
                      {activeCP === index && (
                        <ChevronRight size={14} className="text-amber-400 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: CP Details */}
            {currentCP && (
              <div className="flex-1 min-w-0">
                {/* Leader Card */}
                <div className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-5 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/30 to-amber-600/20 border-2 border-amber-500/40 flex items-center justify-center shrink-0">
                      <Crown size={24} className="text-amber-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-amber-400/70 uppercase tracking-wider font-medium mb-0.5">Leader / Organizador</div>
                      <div className="text-xl font-bold text-white truncate">{currentCP.organizer || currentCP.name}</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <Users size={14} className="text-white/40" />
                      <span className="text-sm font-semibold text-white">{currentCP.members.length}</span>
                    </div>
                  </div>
                </div>

                {/* Members Table */}
                <div className="bg-black/30 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                  <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
                    <Swords size={14} className="text-rose-500" />
                    <span className="text-sm font-medium text-white/70">Membros do CP</span>
                  </div>

                  <div className="divide-y divide-white/5">
                    {currentCP.members.map((member, mIndex) => {
                      const isLeader = member.nick.toLowerCase() === (currentCP.organizer || '').toLowerCase()
                      return (
                        <div
                          key={mIndex}
                          className={`flex items-center gap-3 px-5 py-3 transition-colors hover:bg-white/5 ${
                            isLeader ? 'bg-amber-500/5' : ''
                          }`}
                        >
                          {/* Avatar */}
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold ${
                            isLeader
                              ? 'bg-gradient-to-br from-amber-400/30 to-amber-600/20 border-2 border-amber-500/40 text-amber-400'
                              : 'bg-gradient-to-br from-rose-500/20 to-violet-500/20 border border-white/10 text-white/60'
                          }`}>
                            {member.nick.charAt(0).toUpperCase()}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-white truncate">{member.nick}</span>
                              {isLeader && (
                                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
                                  Leader
                                </span>
                              )}
                            </div>
                            {member.classe && (
                              <div className="text-xs text-white/40">{member.classe}</div>
                            )}
                          </div>

                          {/* GS */}
                          {member.gs && (
                            <div className="text-right shrink-0">
                              <div className="text-sm font-semibold text-white">{member.gs.toFixed(2)}</div>
                              <div className="text-[10px] text-white/30">GS</div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  )
}
