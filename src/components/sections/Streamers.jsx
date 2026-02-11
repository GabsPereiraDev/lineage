import SectionTitle from '../ui/SectionTitle'
import StreamerCard from '../ui/StreamerCard'

const streamers = [
  {
    name: 'Streamer1',
    role: 'Variety Streamer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    twitch: 'https://twitch.tv',
    youtube: 'https://youtube.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Streamer2',
    role: 'MMO Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    twitch: 'https://twitch.tv',
    youtube: 'https://youtube.com',
  },
  {
    name: 'Streamer3',
    role: 'PvP Master',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    twitch: 'https://twitch.tv',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Streamer4',
    role: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    twitch: 'https://twitch.tv',
    youtube: 'https://youtube.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Streamer5',
    role: 'Raid Leader',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    twitch: 'https://twitch.tv',
  },
]

export default function Streamers() {
  return (
    <section id="streamers" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,90,0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Conheça os streamers que fazem parte da nossa comunidade">
          Nossos <span className="text-rose-500">Streamers</span>
        </SectionTitle>

        {/* Streamers grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {streamers.map((streamer) => (
            <StreamerCard
              key={streamer.name}
              name={streamer.name}
              role={streamer.role}
              image={streamer.image}
              twitch={streamer.twitch}
              youtube={streamer.youtube}
              twitter={streamer.twitter}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-white/50 mb-4">
            Você é streamer e quer fazer parte do time?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
          >
            Entre em contato conosco →
          </a>
        </div>
      </div>
    </section>
  )
}
