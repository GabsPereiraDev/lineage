import { useState, useEffect } from 'react'
import { Swords, Target, Zap, Loader2 } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import samuraiVideo from '../../assets/samuraicrow.mp4'
import zgamingLogo from '../../assets/zgamming_clean.png'
import { useSheetsData } from '../../context/SheetsContext'

export default function ServerSection() {
  const { classCounts, members, loading } = useSheetsData()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-02-20T00:00:00')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Converte classCounts em lista ordenada
  const classesList = Object.entries(classCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)

  const totalMembers = members.length
  const maxCount = classesList.length > 0 ? classesList[0].count : 1

  return (
    <section id="server" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
            Servidor atual que estamos jogando e composição
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: Video Container */}
          <div className="w-full max-w-[420px] aspect-[9/16] rounded-[25px] border border-white/10 bg-white/5 overflow-hidden relative shadow-2xl mx-auto lg:mx-0 shrink-0">
            <video
              src={samuraiVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right: Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

            {/* Col 1: Server Info */}
            <div className="flex flex-col gap-3 h-full">
              {/* Server Card */}
              <div className="bg-[#09090bb3] backdrop-blur-md border border-white/10 rounded-[20px] px-5 pt-5 pb-3 shadow-lg">
                <div className="text-xs text-zinc-400 mb-2">Servidor</div>
                <img src={zgamingLogo} alt="ZGaming" className="h-10 object-contain mb-3" />

                <div className="flex items-center gap-2 mb-3 text-[12px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                  <span className="text-zinc-300">New Server: <span className="text-white font-medium">Emerald</span></span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-300">Opening <span className="text-white font-medium">Feb 20</span></span>
                </div>

                {/* Countdown */}
                <div className="grid grid-cols-4 gap-2 text-center bg-white/5 rounded-xl p-2 border border-white/5">
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Days</div>
                    <div className="text-base font-bold text-white">{timeLeft.days}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Hours</div>
                    <div className="text-base font-bold text-white">{timeLeft.hours}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Minutes</div>
                    <div className="text-base font-bold text-white">{timeLeft.minutes}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Seconds</div>
                    <div className="text-base font-bold text-white">{timeLeft.seconds}</div>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-zinc-500">Região: <span className="text-zinc-300">BR</span></div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#09090bb3] backdrop-blur-md border border-white/10 rounded-[20px] px-4 pt-4 pb-2 shadow-lg flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Swords size={14} className="text-rose-500" />
                    <span className="text-[11px] text-zinc-400">Total Membros</span>
                  </div>
                  <div className="text-xl font-bold text-white">{loading ? '...' : totalMembers}</div>
                </div>
                <div className="bg-[#09090bb3] backdrop-blur-md border border-white/10 rounded-[20px] px-4 pt-4 pb-2 shadow-lg flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Target size={14} className="text-rose-500" />
                    <span className="text-[11px] text-zinc-400">Classes Únicas</span>
                  </div>
                  <div className="text-xl font-bold text-white">{loading ? '...' : classesList.length}</div>
                </div>
              </div>

              {/* Tipos Breakdown - Top 4 classes */}
              <div className="bg-[#09090bb3] backdrop-blur-md border border-white/10 rounded-[20px] px-5 pt-5 pb-3 shadow-lg flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={14} className="text-rose-500" />
                  <span className="text-xs font-medium text-zinc-300">Top Classes</span>
                </div>
                {loading ? (
                  <div className="flex items-center justify-center py-4 gap-2">
                    <Loader2 className="animate-spin text-rose-500" size={16} />
                    <span className="text-xs text-white/40">Carregando...</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {classesList.slice(0, 5).map((item) => (
                      <div key={item.name} className="relative bg-white/5 rounded-lg border border-white/5 overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 bg-rose-500/10"
                          style={{ width: `${(item.count / maxCount) * 100}%` }}
                        />
                        <div className="relative px-3 py-1.5 text-xs text-zinc-300 flex justify-between items-center z-10">
                          <span>{item.name}</span>
                          <span className="text-white font-medium">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Col 2: Classes List */}
            <div className="bg-[#09090bb3] backdrop-blur-md border border-white/10 rounded-[25px] overflow-hidden shadow-lg flex flex-col h-full max-h-[746px]">
              <div className="px-5 pt-5 pb-3 border-b border-white/10">
                <h3 className="text-sm font-semibold text-white">Classes na Side</h3>
                <p className="text-[10px] text-white/30 mt-0.5">Sincronizado com a planilha</p>
              </div>
              {loading ? (
                <div className="flex items-center justify-center py-12 gap-2">
                  <Loader2 className="animate-spin text-rose-500" size={20} />
                  <span className="text-sm text-white/40">Carregando...</span>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto px-3 pt-3 pb-1 space-y-1 custom-scrollbar">
                  {classesList.map((item) => (
                    <div key={item.name} className="flex justify-between items-center px-3 py-3 hover:bg-white/5 rounded-lg transition-colors group">
                      <span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">{item.name}</span>
                      <span className="text-xs font-medium text-white">{item.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
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
