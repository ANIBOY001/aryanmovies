import MovieSection from '@/components/MovieSection'
import { popularTV, topRatedTV } from '@/data/movies'

export default function TVShowsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-8 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">TV Shows</h1>
        
        <MovieSection 
          title="Popular TV Shows" 
          movies={popularTV}
          seeMoreLink="/tv/popular"
        />
        
        <MovieSection 
          title="Top Rated TV Shows" 
          movies={topRatedTV}
          seeMoreLink="/tv/top-rated"
        />
      </div>
    </div>
  )
}
