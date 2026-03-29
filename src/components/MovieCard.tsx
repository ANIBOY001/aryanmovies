import { Movie } from '@/types/movie'
import Link from 'next/link'
import { Play, Plus, Star, ChevronRight } from 'lucide-react'

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  const imageUrl = movie.poster || `https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342${movie.poster_path}&output=webp&q=50&n=-1`

  return (
    <div className="movie-card group flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]">
      <Link href={`/watch/${movie.id}`}>
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-secondary">
          {/* Poster Image */}
          <img
            src={imageUrl}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          {/* Rating Badge */}
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-semibold text-white">{movie.rating.toFixed(1)}</span>
          </div>

          {/* HD Badge */}
          <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-medium text-white">
            HD
          </div>

          {/* Hover Overlay */}
          <div className="movie-overlay flex flex-col justify-end p-3">
            <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {/* Play Button */}
              <button className="w-full bg-primary hover:bg-red-700 text-white py-2 rounded-md flex items-center justify-center gap-2 text-sm font-semibold transition-colors">
                <Play className="w-4 h-4 fill-current" />
                Play
              </button>

              {/* Add to List Button */}
              <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-md flex items-center justify-center gap-2 text-sm font-semibold transition-colors backdrop-blur-sm">
                <Plus className="w-4 h-4" />
                My List
              </button>

              {/* Title */}
              <h3 className="text-sm font-semibold text-white line-clamp-2">
                {movie.title}
              </h3>

              {/* Meta Info */}
              <div className="flex items-center gap-2 text-xs text-white/70">
                <span>{movie.release_date?.substring(0, 4)}</span>
                <span className="w-1 h-1 bg-white/50 rounded-full" />
                <span>{movie.mediaType === 'tv' ? 'TV Series' : 'Movie'}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
