'use client'

import { useRef } from 'react'
import { Movie } from '@/types/movie'
import MovieCard from './MovieCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface MovieSectionProps {
  title: string
  movies: Movie[]
  seeMoreLink?: string
}

export default function MovieSection({ title, movies, seeMoreLink }: MovieSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  if (!movies || movies.length === 0) return null

  return (
    <section className="py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="section-title">
          {title}
        </h2>
        {seeMoreLink && (
          <Link 
            href={seeMoreLink}
            className="text-sm text-white/60 hover:text-white flex items-center gap-1 transition-colors"
          >
            See More
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      <div className="relative group">
        {/* Scroll Left Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </div>
        </button>

        {/* Movies Row */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-2 -mx-4 px-4"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    </section>
  )
}
