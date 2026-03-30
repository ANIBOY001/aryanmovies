'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Play, Info, ChevronLeft, ChevronRight } from 'lucide-react'
import { allMovies } from '@/data/movies'
import type { Movie } from '@/types/movie'

// Function to get random movies from the database
const getRandomMovies = (movies: Movie[], count: number): Movie[] => {
  const shuffled = [...movies].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// Transform Movie type to hero format
const formatMovieForHero = (movie: Movie) => ({
  id: movie.id,
  title: movie.title,
  overview: movie.overview || 'Watch this amazing movie online for free.',
  backdrop: movie.backdrop || movie.poster,
  rating: movie.rating,
  year: movie.release_date?.split('-')[0] || '2024',
  genre: movie.genre || 'Movie',
  duration: '2h 0m'
})

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [featuredContent, setFeaturedContent] = useState(() => {
    const randomMovies = getRandomMovies(allMovies, 5)
    return randomMovies.map(formatMovieForHero)
  })

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredContent.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredContent.length) % featuredContent.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const current = featuredContent[currentIndex]

  return (
    <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      {/* Background Images with transition */}
      {featuredContent.map((content, index) => (
        <div
          key={content.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url(${content.backdrop})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-all opacity-70 hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-all opacity-70 hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60 w-2'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 pb-24 md:pb-32 w-full max-w-5xl">
          <div className="space-y-4 md:space-y-6" key={currentIndex}>
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow animate-slide-up">
              {current.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm md:text-base text-white/90 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-green-400 font-semibold">{current.rating.toFixed(1)} Rating</span>
              <span>{current.year}</span>
              <span>{current.duration}</span>
              <span className="px-2 py-0.5 bg-white/20 rounded text-xs">HD</span>
            </div>

            {/* Overview */}
            <p className="text-base md:text-lg text-white/80 max-w-2xl line-clamp-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {current.overview}
            </p>

            {/* Genre Tags */}
            <div className="flex flex-wrap gap-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {current.genre.split(' / ').map((g) => (
                <span 
                  key={g}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link 
                href={`/watch/${current.id}`}
                className="btn-primary"
              >
                <Play className="w-5 h-5 fill-current" />
                Play Now
              </Link>
              <button className="btn-secondary">
                <Info className="w-5 h-5" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
