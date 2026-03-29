export interface Movie {
  id: number
  title: string
  poster?: string
  poster_path?: string
  backdrop?: string
  backdrop_path?: string
  slug?: string
  genre_ids?: number[]
  rating: number
  vote_average?: number
  release_date?: string
  mediaType: 'movie' | 'tv'
  overview?: string
}

export interface GenreSection {
  name: string
  title: string
  movies: Movie[]
}

export interface StreamingSection {
  name: string
  title: string
  movies: Movie[]
}
