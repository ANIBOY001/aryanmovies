import { allMovies } from '@/data/movies'
import type { Movie } from '@/types/movie'
import WatchPageClient from './WatchPageClient'

export function generateStaticParams() {
  return allMovies.map((movie) => ({
    id: movie.id.toString(),
  }))
}

export default function WatchPage({ params }: { params: { id: string } }) {
  const movie = allMovies.find((m: Movie) => m.id.toString() === params.id) || allMovies[0]
  return <WatchPageClient movie={movie} />
}
