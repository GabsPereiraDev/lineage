import { Twitch, Youtube, Twitter } from 'lucide-react'

export default function StreamerCard({ name, role, image, twitch, youtube, twitter }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(255,0,80,0.15)]">
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image || '/images/placeholder-avatar.jpg'}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
        {role && <p className="text-sm text-white/60 mb-3">{role}</p>}

        {/* Social links */}
        <div className="flex gap-2">
          {twitch && (
            <a
              href={twitch}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-purple-600 hover:bg-purple-500 flex items-center justify-center transition-colors"
            >
              <Twitch size={16} />
            </a>
          )}
          {youtube && (
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center transition-colors"
            >
              <Youtube size={16} />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors"
            >
              <Twitter size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
