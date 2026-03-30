'use client'

import { useWatchHistory } from '@/contexts/WatchHistoryContext'
import Link from 'next/link'
import { Play, Clock, X } from 'lucide-react'
import Image from 'next/image'

export default function ContinueWatching() {
  const { getContinueWatching, removeFromHistory } = useWatchHistory()
  const continueWatching = getContinueWatching()

  if (continueWatching.length === 0) {
    return null
  }

  const formatTime = (seconds?: number) => {
    if (!seconds) return ''
    const mins = Math.floor(seconds / 60)
    const hrs = Math.floor(mins / 60)
    if (hrs > 0) {
      return `${hrs}h ${mins % 60}m`
    }
    return `${mins}m`
  }

  return (
    <section className="py-8">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary" />
            Continue Watching
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {continueWatching.map((item) => (
            <div key={item.id} className="group relative">
              <Link
                href={`/watch/${item.id}`}
                className="block relative aspect-[2/3] rounded-lg overflow-hidden bg-surface-light"
              >
                {/* Poster Image */}
                <Image
                  src={item.poster}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                  </div>
                </div>

                {/* Progress Badge */}
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium">
                  {Math.round(item.progress)}%
                </div>

                {/* Time Remaining */}
                {item.currentTime && item.duration && (
                  <div className="absolute bottom-3 left-2 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-xs text-white">
                    {formatTime(item.duration - item.currentTime)} left
                  </div>
                )}
              </Link>

              {/* Title */}
              <h3 className="mt-2 text-sm text-white font-medium truncate group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              {/* Remove Button */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  removeFromHistory(item.id)
                }}
                className="absolute top-2 left-2 w-6 h-6 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
              >
                <X className="w-3 h-3 text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
