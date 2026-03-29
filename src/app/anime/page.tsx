import MovieSection from '@/components/MovieSection'
import { popularMovies } from '@/data/movies'

// Anime movies - using subset of movies that could be anime
const animeMovies = popularMovies.slice(0, 8)
const popularAnime = [
  { id: 45790, title: "JoJo's Bizarre Adventure", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2FogAWwbh3frWtiTyyXrZaVFtqCgp.jpg&output=webp&q=50&n=-1", rating: 8.6, release_date: "2012-10-06", mediaType: "tv", slug: "/tv/45790" },
  { id: 1310418, title: "Wind Breaker", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2F2d9Yq5lfeUeOC09HUVyiYcM5rWz.jpg&output=webp&q=50&n=-1", rating: 8.3, release_date: "2026-04-04", mediaType: "tv", slug: "/tv/1310418" },
  { id: 1258935, title: "Anne Shirley", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2F2kHVx8Vd7ZVrTQOB5qxns8gepw.jpg&output=webp&q=50&n=-1", rating: 8.3, release_date: "2025-04-05", mediaType: "tv", slug: "/tv/1258935" },
  { id: 217072, title: "Sakamoto Days", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2FhmqfYUjVsQ9d4nKKg1u8cPFjmZ.jpg&output=webp&q=50&n=-1", rating: 8.2, release_date: "2025-01-11", mediaType: "tv", slug: "/tv/217072" },
  { id: 3498, title: "Wizards of Waverly Place", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2FspVI8Zns4Ep30zzxcoO7f7nwfck.jpg&output=webp&q=50&n=-1", rating: 8.6, release_date: "2007-10-12", mediaType: "tv", slug: "/tv/3498" },
  { id: 2190, title: "South Park", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2FiiCY2QIGSnmtVkIdjkKA9DsW0p.jpg&output=webp&q=50&n=-1", rating: 8.3, release_date: "1997-08-13", mediaType: "tv", slug: "/tv/2190" },
  { id: 3797, title: "Futurama", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2F6RRgRjtKj8HhPjE6lV3g9iRxzV.jpg&output=webp&q=50&n=-1", rating: 8.4, release_date: "1999-03-28", mediaType: "tv", slug: "/tv/3797" },
  { id: 1433, title: "Death Note", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2F6HkPYWqPCsEhG2yaWvUuD.jpg&output=webp&q=50&n=-1", rating: 8.6, release_date: "2006-10-04", mediaType: "tv", slug: "/tv/1433" },
  { id: 10643, title: "Batman: The Animated Series", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2Fx7Bcm8H3BCp3U1CZ02JtH8qX.jpg&output=webp&q=50&n=-1", rating: 8.5, release_date: "1992-09-05", mediaType: "tv", slug: "/tv/10643" },
  { id: 209867, title: "Pantheon", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2Fs2PP7jzFDKtVMvTCHbEQwUo4JD.jpg&output=webp&q=50&n=-1", rating: 8, release_date: "2022-09-01", mediaType: "tv", slug: "/tv/209867" },
  { id: 129735, title: "Kaiju No. 8", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2F3SV5D51lJmP3D3SfcM1syhB.jpg&output=webp&q=50&n=-1", rating: 8.1, release_date: "2024-04-13", mediaType: "tv", slug: "/tv/129735" },
  { id: 1327903, title: "Witch Watch", poster: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2FduB8wWm2UrdVGcTGxT0EH.jpg&output=webp&q=50&n=-1", rating: 7.9, release_date: "2026-04-06", mediaType: "tv", slug: "/tv/1327903" },
]

export default function AnimePage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-8 space-y-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Anime</h1>
          <p className="text-text-muted">Discover the latest and trending anime series</p>
        </div>
        
        <MovieSection 
          title="Popular Anime" 
          movies={popularAnime as any}
          seeMoreLink="/anime/popular"
        />
        
        <MovieSection 
          title="Anime Movies" 
          movies={animeMovies as any}
          seeMoreLink="/anime/movies"
        />
        
        <MovieSection 
          title="Latest Updates" 
          movies={popularAnime.slice().reverse() as any}
          seeMoreLink="/anime/latest"
        />
      </div>
    </div>
  )
}
