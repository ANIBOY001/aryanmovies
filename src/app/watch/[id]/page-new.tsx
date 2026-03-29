import { allMovies } from '@/data/movies'
import type { Movie } from '@/types/movie'
import WatchPageClient from './WatchPageClient'

// Generate static params for all movies
export function generateStaticParams() {
  return allMovies.map((movie) => ({
    id: movie.id.toString(),
  }))
}

interface PageProps {
  params: { id: string }
}

export default function WatchPage({ params }: PageProps) {
  const movieId = params.id
  const movie = allMovies.find((m: Movie) => m.id.toString() === movieId) || allMovies[0]
  
  return <WatchPageClient movie={movie} />
}
