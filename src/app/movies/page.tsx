import MovieSection from '@/components/MovieSection'
import { popularMovies, topRatedMovies } from '@/data/movies'

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-8 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Movies</h1>
        
        <MovieSection 
          title="Popular Movies" 
          movies={popularMovies}
          seeMoreLink="/movies/popular"
        />
        
        <MovieSection 
          title="Top Rated Movies" 
          movies={topRatedMovies}
          seeMoreLink="/movies/top-rated"
        />
      </div>
    </div>
  )
}
