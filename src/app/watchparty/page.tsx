'use client'

import { useState } from 'react'
import { Users, Plus, Copy, LogOut, Settings, MessageSquare } from 'lucide-react'
import { popularMovies } from '@/data/movies'
import MovieCard from '@/components/MovieCard'

export default function WatchPartyPage() {
  const [activeTab, setActiveTab] = useState<'create' | 'join'>('create')
  const [roomId, setRoomId] = useState('')
  const [isInRoom, setIsInRoom] = useState(false)

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault()
    setIsInRoom(true)
  }

  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault()
    setIsInRoom(true)
  }

  if (isInRoom) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
          {/* Room Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Movie Night</h1>
              <p className="text-text-muted mt-1">Watching together with friends</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-white/10 rounded-lg text-white transition-colors">
                <Copy className="w-4 h-4" />
                Copy Room ID
              </button>
              <button 
                onClick={() => setIsInRoom(false)}
                className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Leave
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Video Player Area */}
            <div className="lg:col-span-2 space-y-4">
              <div className="aspect-video bg-surface rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-white font-medium">Select a video to watch together</p>
                    <p className="text-text-muted text-sm mt-1">Choose from our collection below</p>
                  </div>
                </div>
              </div>

              {/* Video Selection */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Select Video</h3>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {popularMovies.slice(0, 6).map((movie) => (
                    <div key={movie.id} className="flex-shrink-0 w-32">
                      <MovieCard movie={movie} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Sidebar */}
            <div className="bg-surface rounded-xl p-4 h-[600px] flex flex-col">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-white">Chat</h3>
                </div>
                <span className="text-sm text-text-muted">5 online</span>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                <div className="space-y-1">
                  <span className="text-xs text-primary font-medium">User1</span>
                  <p className="text-sm text-white">Hey everyone! Ready to watch?</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-green-400 font-medium">User2</span>
                  <p className="text-sm text-white">Yeah, let&apos;s start!</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-yellow-400 font-medium">User3</span>
                  <p className="text-sm text-white">This movie looks great 🔥</p>
                </div>
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-background border border-white/10 rounded-lg px-4 py-2 text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary"
                />
                <button className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Watch Party</h1>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Watch movies and TV shows with friends in perfect sync. Create a room or join an existing one.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-md mx-auto">
          <div className="flex bg-surface rounded-lg p-1 mb-8">
            <button
              onClick={() => setActiveTab('create')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'create' 
                  ? 'bg-primary text-white' 
                  : 'text-text-muted hover:text-white'
              }`}
            >
              Create Room
            </button>
            <button
              onClick={() => setActiveTab('join')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'join' 
                  ? 'bg-primary text-white' 
                  : 'text-text-muted hover:text-white'
              }`}
            >
              Join Room
            </button>
          </div>

          {/* Create Room Form */}
          {activeTab === 'create' && (
            <form onSubmit={handleCreateRoom} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Room Name</label>
                <input
                  type="text"
                  placeholder="My Watch Party"
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Video (Optional)</label>
                <select className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary">
                  <option value="">Select a movie to start with...</option>
                  {popularMovies.slice(0, 5).map((movie) => (
                    <option key={movie.id} value={movie.id}>{movie.title}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="private" className="w-4 h-4 rounded border-white/10 bg-surface" />
                <label htmlFor="private" className="text-sm text-text-muted">Make room private</label>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-red-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Create Room
              </button>
            </form>
          )}

          {/* Join Room Form */}
          {activeTab === 'join' && (
            <form onSubmit={handleJoinRoom} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Room ID</label>
                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  placeholder="Enter room ID"
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Password (Optional)</label>
                <input
                  type="password"
                  placeholder="Enter password if required"
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:outline-none focus:border-primary"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Join Room
              </button>
            </form>
          )}
        </div>

        {/* Available Rooms */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Public Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface rounded-xl p-4 hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">Movie Night {i}</h3>
                  <span className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    Live
                  </span>
                </div>
                <p className="text-text-muted text-sm mb-3">Watching: {popularMovies[i]?.title || 'Unknown'}</p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="w-6 h-6 bg-primary/30 rounded-full border-2 border-surface" />
                    ))}
                  </div>
                  <span className="text-xs text-text-muted">+{i + 2} watching</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
