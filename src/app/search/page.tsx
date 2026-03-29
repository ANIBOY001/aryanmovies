'use client'

import { useState, useMemo } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import MovieCard from '@/components/MovieCard'
import { allMovies } from '@/data/movies'
import { Movie } from '@/types/movie'

export default function SearchPage() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return allMovies
      .filter((m: Movie) => m.title.toLowerCase().includes(q))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 20)
  }, [query])

  return (
    <div className="min-h-screen bg-background pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-4">Search Movies & TV Shows</h1>
        <p className="text-text-muted text-center mb-8">Search from 200+ movies & shows</p>
        
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type to search movies, TV shows..." 
              className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 pl-14 text-white text-lg focus:outline-none focus:border-primary transition-colors"
              autoFocus
            />
            <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {['Avengers', 'Batman', 'Spider-Man', 'Star Wars', 'Harry Potter', 'Naruto', 'One Piece'].map(term => (
            <button 
              key={term}
              onClick={() => setQuery(term)}
              className="px-4 py-2 bg-surface hover:bg-primary/20 border border-white/10 rounded-full text-sm text-white transition-colors"
            >
              {term}
            </button>
          ))}
        </div>

        {query && (
          <div>
            <p className="text-white mb-4 text-center">
              Found {results.length} results for &quot;{query}&quot;
            </p>
            {results.length > 0 ? (
              <div className="flex flex-wrap gap-4 justify-center">
                {results.map((m) => (
                  <MovieCard key={`${m.mediaType}-${m.id}`} movie={m} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-text-muted text-lg">No results found</p>
                <p className="text-text-muted text-sm mt-2">Try a different search term</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
