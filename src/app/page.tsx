import Hero from '@/components/Hero'
import MovieSection from '@/components/MovieSection'
import { 
  genreSections, 
  streamingSections, 
  popularMovies, 
  popularTV, 
  topRatedMovies, 
  topRatedTV 
} from '@/data/movies'

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 pb-12 space-y-8">
        {/* Popular Movies */}
        <MovieSection 
          title="What's Popular Today - Movies" 
          movies={popularMovies}
          seeMoreLink="/movies"
        />
        
        {/* Popular TV Shows */}
        <MovieSection 
          title="What's Popular Today - TV Shows" 
          movies={popularTV}
          seeMoreLink="/tv"
        />
        
        {/* Top Rated Movies */}
        <MovieSection 
          title="Top Rated Movies" 
          movies={topRatedMovies}
          seeMoreLink="/movies/top-rated"
        />
        
        {/* Top Rated TV Shows */}
        <MovieSection 
          title="Top Rated TV Shows" 
          movies={topRatedTV}
          seeMoreLink="/tv/top-rated"
        />
        
        {/* Genre Sections */}
        {genreSections.map((section) => (
          <MovieSection 
            key={section.name}
            title={section.title}
            movies={section.movies}
            seeMoreLink={`/genre/${section.name}`}
          />
        ))}
        
        {/* Streaming Service Sections */}
        {streamingSections.map((section) => (
          <MovieSection 
            key={section.name}
            title={section.title}
            movies={section.movies}
            seeMoreLink={`/streaming/${section.name}`}
          />
        ))}
      </div>
    </div>
  )
}
