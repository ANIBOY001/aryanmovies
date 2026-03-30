'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Maximize, Minimize } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { allMovies } from '@/data/movies'
import MovieCard from '@/components/MovieCard'
import type { Movie } from '@/types/movie'
import { useWatchHistory } from '@/contexts/WatchHistoryContext'

const SERVERS = [
  { name: 'VidKing', url: 'https://www.vidking.net/embed/movie/' },
  { name: 'vidsrc.cc', url: 'https://vidsrc.cc/v2/embed/movie/' },
  { name: 'VidLink', url: 'https://vidlink.pro/movie/' },
]

interface WatchPageClientProps {
  movie: Movie
}

export default function WatchPageClient({ movie }: WatchPageClientProps) {
  const [currentServer, setCurrentServer] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [selectedSeason, setSelectedSeason] = useState(1)
  const [selectedEpisode, setSelectedEpisode] = useState(1)
  const [isTvShow, setIsTvShow] = useState(false)
  const [videoEnabled, setVideoEnabled] = useState(false)
  const [watchStartTime, setWatchStartTime] = useState<number | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const { addToHistory, updateProgress } = useWatchHistory()
  
  // Block redirects and popups globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Override window.open to block popups
      const originalOpen = window.open
      window.open = function(...args: any[]) {
        console.log('Blocked popup attempt')
        return null
      }
      
      // Block clicks on iframe that might be fake
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (target.tagName === 'IFRAME') {
          e.preventDefault()
          e.stopPropagation()
        }
      }
      
      document.addEventListener('click', handleClick, true)
      
      return () => {
        window.open = originalOpen
        document.removeEventListener('click', handleClick, true)
      }
    }
  }, [currentServer])
  
  useEffect(() => {
    if (movie.mediaType === 'tv') {
      setIsTvShow(true)
    }
  }, [movie])

  // Track watch progress
  useEffect(() => {
    if (videoEnabled && !watchStartTime) {
      // Started watching - add to history
      const startTime = Date.now()
      setWatchStartTime(startTime)
      
      addToHistory({
        id: movie.id,
        title: movie.title,
        poster: movie.poster || '',
        backdrop: movie.backdrop || movie.poster,
        rating: movie.rating,
        mediaType: movie.mediaType || 'movie',
        progress: 5, // Just started - 5%
        season: isTvShow ? selectedSeason : undefined,
        episode: isTvShow ? selectedEpisode : undefined,
      })

      // Simulate progress updates every 30 seconds
      const progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const minutes = elapsed / 1000 / 60
        // Assume average movie is 2 hours (120 min), TV episode 45 min
        const totalMinutes = isTvShow ? 45 : 120
        const progress = Math.min(95, Math.round((minutes / totalMinutes) * 100))
        
        updateProgress(movie.id, progress)
      }, 30000) // Update every 30 seconds

      return () => clearInterval(progressInterval)
    }
  }, [videoEnabled, watchStartTime, movie, addToHistory, updateProgress, isTvShow, selectedSeason, selectedEpisode])

  const enableVideo = () => {
    setVideoEnabled(true)
  }

  const getEmbedUrl = () => {
    const server = SERVERS[currentServer]
    let videoUrl: string
    
    // Use imdbId if available, otherwise fall back to id
    const streamingId = movie.imdbId || movie.id
    
    if (server.name === 'VidLink') {
      // VidLink uses direct URLs without /movie/ or /tv/ prefix structure
      if (isTvShow) {
        videoUrl = `https://vidlink.pro/tv/${streamingId}/${selectedSeason}/${selectedEpisode}`
      } else {
        videoUrl = `https://vidlink.pro/movie/${streamingId}`
      }
      return videoUrl
    }
    
    // Other servers use normal embed
    let baseUrl = server.url
    if (isTvShow) {
      baseUrl = baseUrl.replace('/movie/', '/tv/')
      return baseUrl + streamingId + '/' + selectedSeason + '/' + selectedEpisode
    }
    return baseUrl + streamingId
  }

  // Dynamic iframe injection for VidLink (bypasses sandbox detection)
  useEffect(() => {
    if (!videoEnabled || !videoContainerRef.current) return
    
    const server = SERVERS[currentServer]
    const container = videoContainerRef.current
    
    // Clear existing content
    container.innerHTML = ''
    
    // Create iframe dynamically
    const iframe = document.createElement('iframe')
    iframe.src = getEmbedUrl()
    iframe.className = 'w-full h-full'
    iframe.allowFullscreen = true
    iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture')
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('scrolling', 'no')
    
    // Apply sandbox only to non-VidLink servers
    if (server.name !== 'VidLink') {
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin')
    }
    
    iframe.style.pointerEvents = 'auto'
    
    container.appendChild(iframe)
    
    return () => {
      container.innerHTML = ''
    }
  }, [videoEnabled, currentServer, movie.id, isTvShow, selectedSeason, selectedEpisode])

  // Aggressive popup blocking for VidLink
  useEffect(() => {
    if (!videoEnabled || SERVERS[currentServer].name !== 'VidLink') return
    
    // Block all window.open attempts
    const blockPopups = () => {
      if (typeof window !== 'undefined') {
        // Override window.open
        window.open = function() {
          console.log('Blocked popup from VidLink')
          return null
        }
        
        // Block location changes
        const originalAssign = window.location.assign
        window.location.assign = function(url: string | URL) {
          console.log('Blocked navigation to:', url)
          return undefined
        }
        
        // Block replace
        const originalReplace = window.location.replace  
        window.location.replace = function(url: string | URL) {
          console.log('Blocked replace to:', url)
          return undefined
        }
      }
    }
    
    // Run immediately and after a delay (in case VidLink scripts load later)
    blockPopups()
    const timer = setTimeout(blockPopups, 1000)
    const timer2 = setTimeout(blockPopups, 3000)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [videoEnabled, currentServer])

  const handleFullscreen = () => {
    const player = document.getElementById('video-player')
    if (!isFullscreen) {
      player?.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <div id="video-player" className={`relative bg-black ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
        <div className="aspect-video w-full relative">
          {/* Click protection overlay - blocks fake clicks until user enables */}
          {!videoEnabled && (
            <div 
              onClick={enableVideo}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 cursor-pointer hover:bg-black/50 transition-colors"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <p className="text-white font-semibold text-lg">Click to Play</p>
                <p className="text-text-muted text-sm mt-2">Protects against popups/ads</p>
              </div>
            </div>
          )}
          <div ref={videoContainerRef} className="w-full h-full relative">
            {/* Click-capturing overlay for VidLink to prevent popups */}
            {videoEnabled && SERVERS[currentServer].name === 'VidLink' && (
              <div 
                className="absolute inset-0 z-5"
                style={{ 
                  pointerEvents: 'none',
                  background: 'transparent'
                }}
              />
            )}
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
          <Link href="/" className="text-white hover:text-primary transition-colors flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={handleFullscreen} className="text-white hover:text-primary transition-colors">
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {!isFullscreen && (
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-8 space-y-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{movie.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted mb-4">
              <span>{movie.release_date?.split('-')[0] || '2024'}</span>
              <span className="w-1 h-1 bg-text-muted rounded-full" />
              <span>{isTvShow ? 'TV Series' : 'Movie'}</span>
              <span className="w-1 h-1 bg-text-muted rounded-full" />
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {movie.rating.toFixed(1)}
              </span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded text-xs">HD</span>
            </div>
            <p className="text-text-muted max-w-3xl">
              Watch {movie.title} online for free. Enjoy high-quality streaming.
            </p>
          </div>

          <div className="bg-surface rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Choose Server</h3>
            <div className="flex flex-wrap gap-3">
              {SERVERS.map((server, i) => (
                <button key={server.name} onClick={() => setCurrentServer(i)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${i === currentServer ? 'bg-primary text-white' : 'bg-background text-text-muted hover:text-white hover:bg-white/10'}`}>
                  {server.name}
                  {i === 0 && <span className="px-1.5 py-0.5 bg-white/20 rounded text-xs">HD</span>}
                </button>
              ))}
            </div>
            <p className="text-text-muted text-xs mt-4">VidKing and vidsrc.cc have anti-popup protection. VidLink works but may show ads - use an ad blocker. Try different servers if one doesn't work.</p>
          </div>

          {isTvShow && (
            <div className="bg-surface rounded-xl p-6">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div>
                  <label className="text-text-muted text-sm mb-1 block">Season</label>
                  <select value={selectedSeason} onChange={(e) => setSelectedSeason(Number(e.target.value))} className="bg-background text-white px-4 py-2 rounded-lg border border-white/10 focus:border-primary focus:outline-none">
                    {[1,2,3,4,5].map(s => <option key={s} value={s}>Season {s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-text-muted text-sm mb-1 block">Episode</label>
                  <select value={selectedEpisode} onChange={(e) => setSelectedEpisode(Number(e.target.value))} className="bg-background text-white px-4 py-2 rounded-lg border border-white/10 focus:border-primary focus:outline-none">
                    {[1,2,3,4,5,6,7,8,9,10].map(e => <option key={e} value={e}>Episode {e}</option>)}
                  </select>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">Episodes - Season {selectedSeason}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[1,2,3,4,5,6,7,8,9,10].map((ep) => (
                  <button key={ep} onClick={() => setSelectedEpisode(ep)} className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${selectedEpisode === ep ? 'bg-primary/20 border border-primary/50' : 'bg-background hover:bg-white/5'}`}>
                    <span className={`text-2xl font-bold ${selectedEpisode === ep ? 'text-primary' : 'text-white/30'}`}>{ep}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium text-sm truncate ${selectedEpisode === ep ? 'text-white' : 'text-text-muted'}`}>Episode {ep}</p>
                      <p className="text-text-muted text-xs">45 min</p>
                    </div>
                    {selectedEpisode === ep && <Play className="w-4 h-4 text-primary flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">You May Also Like</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {allMovies.slice(0, 8).map((m: Movie) => (
                <div key={m.id} className="flex-shrink-0"><MovieCard movie={m} /></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
