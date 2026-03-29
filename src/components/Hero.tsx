import Link from 'next/link'
import { Play, Info } from 'lucide-react'

const featuredContent = {
  id: 1232497,
  title: "Send Help",
  overview: "A gripping thriller that will keep you on the edge of your seat. When a group of friends finds themselves stranded in an isolated location, they must fight for survival against unimaginable odds.",
  backdrop: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw1280%2FgCmfeKmEAZBP5gcXpiqb0gii9rS.jpg&output=webp&q=65&n=-1",
  rating: 7.1,
  year: "2026",
  genre: "Horror / Thriller",
  duration: "1h 42m"
}

export default function Hero() {
  return (
    <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${featuredContent.backdrop})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 pb-16 md:pb-24 w-full max-w-5xl">
          <div className="animate-slide-up space-y-4 md:space-y-6">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow">
              {featuredContent.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm md:text-base text-white/90">
              <span className="text-green-400 font-semibold">{featuredContent.rating.toFixed(1)} Rating</span>
              <span>{featuredContent.year}</span>
              <span>{featuredContent.duration}</span>
              <span className="px-2 py-0.5 bg-white/20 rounded text-xs">HD</span>
            </div>

            {/* Overview */}
            <p className="text-base md:text-lg text-white/80 max-w-2xl line-clamp-3">
              {featuredContent.overview}
            </p>

            {/* Genre Tags */}
            <div className="flex flex-wrap gap-2">
              {featuredContent.genre.split(' / ').map((g) => (
                <span 
                  key={g}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                href={`/watch/${featuredContent.id}`}
                className="btn-primary"
              >
                <Play className="w-5 h-5 fill-current" />
                Play Now
              </Link>
              <button className="btn-secondary">
                <Info className="w-5 h-5" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
