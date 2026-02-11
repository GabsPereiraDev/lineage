import { useState, useEffect } from 'react'
import { Swords, Target, Zap } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import samuraiVideo from '../../assets/samuraicrow.mp4'
import zgamingLogo from '../../assets/zgamming_clean.png'


const classesList = [
  { name: 'DD', count: 3 },
  { name: 'Sps', count: 2 },
  { name: 'Gk', count: 2 },
  { name: 'Acher', count: 1 },
  { name: 'duvida ainda', count: 1 },
  { name: 'Sagitarius', count: 1 },
  { name: 'Healer', count: 1 },
  { name: 'storm', count: 1 },
  { name: 'Mago / Archer', count: 1 },
  { name: 'Tanker', count: 1 },
  { name: 'Suporte', count: 1 },
  { name: 'DK', count: 1 },
  { name: 'SE EE', count: 1 },
  { name: 'Tanker Elf', count: 1 },
  { name: 'Espelsinger', count: 1 },
  { name: 'Soutaker', count: 1 },
  { name: 'Tank/bs', count: 1 },
  { name: 'Necro', count: 1 },
  { name: 'Blade Dancer', count: 1 },
  { name: 'Shilen Templar', count: 1 },
  { name: 'Warlord', count: 1 },
  { name: 'Arkero', count: 1 },
  { name: 'SE', count: 1 },
  { name: 'SS', count: 1 },
  { name: 'TITAN', count: 1 },
  { name: 'HEAL', count: 1 },
  { name: 'WL', count: 1 },
]

export default function ServerSection() {
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
                    <span className="text-[11px] text-zinc-400">DD Melee</span>
                  </div>
                  <div className="text-xl font-bold text-white">23</div>
                </div>
                <div className="bg-[#09090bb3] backdrop-blur-md border border-white/10 rounded-[20px] px-4 pt-4 pb-2 shadow-lg flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Target size={14} className="text-rose-500" />
                    <span className="text-[11px] text-zinc-400">Total Range</span>
                  </div>
                  <div className="text-xl font-bold text-white">25</div>
                </div>
              </div>

              {/* Tipos Breakdown */}
              <div className="bg-[#09090bb3] backdrop-blur-md border border-white/10 rounded-[20px] px-5 pt-5 pb-3 shadow-lg flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={14} className="text-rose-500" />
                  <span className="text-xs font-medium text-zinc-300">Tipos</span>
                </div>
                <div className="space-y-2">
                  <div className="relative bg-white/5 rounded-lg border border-white/5 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-rose-500/10" style={{ width: '45%' }}></div>
                    <div className="relative px-3 py-1.5 text-xs text-zinc-300 flex justify-between items-center z-10">
                      <span>DD Melee</span>
                      <span className="text-white font-medium">23</span>
                    </div>
                  </div>
                  <div className="relative bg-white/5 rounded-lg border border-white/5 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-rose-500/10" style={{ width: '31%' }}></div>
                    <div className="relative px-3 py-1.5 text-xs text-zinc-300 flex justify-between items-center z-10">
                      <span>DD Remote Range</span>
                      <span className="text-white font-medium">16</span>
                    </div>
                  </div>
                  <div className="relative bg-white/5 rounded-lg border border-white/5 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-rose-500/10" style={{ width: '18%' }}></div>
                    <div className="relative px-3 py-1.5 text-xs text-zinc-300 flex justify-between items-center z-10">
                      <span>Mago Remote Range (Nuker)</span>
                      <span className="text-white font-medium">9</span>
                    </div>
                  </div>
                  <div className="relative bg-white/5 rounded-lg border border-white/5 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-rose-500/10" style={{ width: '6%' }}></div>
                    <div className="relative px-3 py-1.5 text-xs text-zinc-300 flex justify-between items-center z-10">
                      <span>Suporte</span>
                      <span className="text-white font-medium">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2: Classes List */}
            <div className="bg-[#09090bb3] backdrop-blur-md border border-white/10 rounded-[25px] overflow-hidden shadow-lg flex flex-col h-full max-h-[746px]">
              <div className="px-5 pt-5 pb-3 border-b border-white/10">
                <h3 className="text-sm font-semibold text-white">Classes na Side</h3>
              </div>
              <div className="flex-1 overflow-y-auto px-3 pt-3 pb-1 space-y-1 custom-scrollbar">
                {classesList.map((item, index) => (
                  <div key={index} className="flex justify-between items-center px-3 py-3 hover:bg-white/5 rounded-lg transition-colors group">
                    <span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">{item.name}</span>
                    <span className="text-xs font-medium text-white">{item.count}</span>
                  </div>
                ))}
              </div>
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
