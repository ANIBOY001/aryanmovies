'use client'

import { useState, useEffect } from 'react'
import { Play, Maximize, Minimize } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { allMovies } from '@/data/movies'
import MovieCard from '@/components/MovieCard'
import type { Movie } from '@/types/movie'

const SERVERS = [
  { name: 'StreamTape', url: 'https://streamtape.com/e/' },
  { name: 'DoodStream', url: 'https://dood.la/e/' },
  { name: 'MixDrop', url: 'https://mixdrop.co/e/' },
  { name: 'VidKing', url: 'https://www.vidking.net/embed/movie/' },
]

export default function WatchPage() {
  const params = useParams()
  const [currentServer, setCurrentServer] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [selectedSeason, setSelectedSeason] = useState(1)
  const [selectedEpisode, setSelectedEpisode] = useState(1)
  const [isTvShow, setIsTvShow] = useState(false)
  
  const movieId = params.id as string
  const movie = allMovies.find((m: Movie) => m.id.toString() === movieId) || allMovies[0]
  
  useEffect(() => {
    if (movie.mediaType === 'tv') {
      setIsTvShow(true)
    }
  }, [movie])

  const getEmbedUrl = () => {
    let baseUrl = SERVERS[currentServer].url
    // Replace 'movie' with 'tv' for TV shows
    if (isTvShow) {
      baseUrl = baseUrl.replace('/movie/', '/tv/')
      return baseUrl + movie.id + '/' + selectedSeason + '/' + selectedEpisode
    }
    return baseUrl + movie.id
  }

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
        <div className="aspect-video w-full">
          <iframe
            src={getEmbedUrl()}
            className="w-full h-full"
            allowFullScreen
            allow="autoplay; fullscreen; picture-in-picture"
            frameBorder="0"
            scrolling="no"
          />
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
              Watch {movie.title} online for free. Enjoy high-quality streaming with multiple server options.
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
            <p className="text-text-muted text-xs mt-4">If one server does not work, try another. Server 1 & 2 have fewer ads. VidKing may have more ads but sometimes better quality.</p>
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
