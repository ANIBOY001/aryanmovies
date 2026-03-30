'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'

// Featured content using real movie IDs from the database
const featuredContent = [
  {
    id: 1198994,
    title: "Send Help",
    overview: "A gripping thriller that will keep you on the edge of your seat. When a group of friends finds themselves stranded in an isolated location, they must fight for survival against unimaginable odds.",
    backdrop: "https://image.tmdb.org/t/p/w1280/gCmfeKmEAZBP5gcXpiqb0gii9rS.jpg",
    rating: 7.1,
    year: "2026",
    genre: "Horror / Thriller",
    duration: "1h 42m"
  },
  {
    id: 1297842,
    title: "GOAT",
    overview: "A story of friendship, rivalry, and redemption in the world of professional sports. Two athletes push each other to their limits while discovering what truly matters in life.",
    backdrop: "https://image.tmdb.org/t/p/w1280/wfuqMlaExcoYiUEvKfVpUTt1v4u.jpg",
    rating: 7.7,
    year: "2026",
    genre: "Drama / Sport",
    duration: "2h 15m"
  },
  {
    id: 1084242,
    title: "Zootopia 2",
    overview: "Judy Hopps and Nick Wilde return for another adventure in the bustling animal metropolis. This time, they're solving a mystery that threatens to tear the city apart.",
    backdrop: "https://image.tmdb.org/t/p/w1280/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg",
    rating: 7.6,
    year: "2025",
    genre: "Animation / Adventure",
    duration: "1h 48m"
  },
  {
    id: 1290821,
    title: "Shelter",
    overview: "In a post-apocalyptic world, survivors must band together in an underground shelter to protect humanity's last hope while facing threats from both outside and within.",
    backdrop: "https://image.tmdb.org/t/p/w1280/buPFnHZ3xQy6vZEHxbHgL1Pc6CR.jpg",
    rating: 6.7,
    year: "2026",
    genre: "Sci-Fi / Thriller",
    duration: "2h 5m"
  },
  {
    id: 1327819,
    title: "Hoppers",
    overview: "A hilarious animated comedy about a team of elite agents who happen to be frogs. They leap into action to save the world from an evil genius with a dastardly plan.",
    backdrop: "https://image.tmdb.org/t/p/w1280/xjtWQ2CL1mpmMNwuU5HeS4Iuwuu.jpg",
    rating: 7.6,
    year: "2026",
    genre: "Animation / Comedy",
    duration: "1h 35m"
  }
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const current = featuredContent[currentIndex]

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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
