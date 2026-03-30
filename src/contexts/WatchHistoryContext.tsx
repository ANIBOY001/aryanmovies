'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

export interface WatchHistoryItem {
  id: number
  title: string
  poster: string
  backdrop?: string
  rating: number
  mediaType: 'movie' | 'tv'
  watchedAt: string
  progress: number // 0-100 percentage
  duration?: number // total duration in seconds (if known)
  currentTime?: number // last watched position in seconds
  season?: number
  episode?: number
}

interface WatchHistoryContextType {
  history: WatchHistoryItem[]
  addToHistory: (item: Omit<WatchHistoryItem, 'watchedAt'>) => void
  updateProgress: (id: number, progress: number, currentTime?: number) => void
  removeFromHistory: (id: number) => void
  clearHistory: () => void
  getContinueWatching: () => WatchHistoryItem[]
  isInHistory: (id: number) => boolean
}

const WatchHistoryContext = createContext<WatchHistoryContextType | undefined>(undefined)

const STORAGE_KEY = 'cineby-watch-history'
const MAX_HISTORY_ITEMS = 20

export function WatchHistoryProvider({ children }: { children: React.ReactNode }) {
  const [history, setHistory] = useState<WatchHistoryItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setHistory(parsed)
      }
    } catch (error) {
      console.error('Failed to load watch history:', error)
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage whenever history changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
      } catch (error) {
        console.error('Failed to save watch history:', error)
      }
    }
  }, [history, isLoaded])

  const addToHistory = useCallback((item: Omit<WatchHistoryItem, 'watchedAt'>) => {
    setHistory((prev) => {
      // Remove if already exists (to move to front)
      const filtered = prev.filter((h) => h.id !== item.id)
      
      // Add new item at the beginning
      const newItem: WatchHistoryItem = {
        ...item,
        watchedAt: new Date().toISOString(),
      }
      
      // Keep only MAX_HISTORY_ITEMS
      const newHistory = [newItem, ...filtered].slice(0, MAX_HISTORY_ITEMS)
      
      return newHistory
    })
  }, [])

  const updateProgress = useCallback((id: number, progress: number, currentTime?: number) => {
    setHistory((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            progress: Math.min(100, Math.max(0, progress)),
            currentTime,
            watchedAt: new Date().toISOString(),
          }
        }
        return item
      })
    })
  }, [])

  const removeFromHistory = useCallback((id: number) => {
    setHistory((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const clearHistory = useCallback(() => {
    setHistory([])
  }, [])

  const getContinueWatching = useCallback(() => {
    // Return items that have been started but not finished (progress between 5% and 95%)
    return history.filter((item) => item.progress > 5 && item.progress < 95)
  }, [history])

  const isInHistory = useCallback((id: number) => {
    return history.some((item) => item.id === id)
  }, [history])

  return (
    <WatchHistoryContext.Provider
      value={{
        history,
        addToHistory,
        updateProgress,
        removeFromHistory,
        clearHistory,
        getContinueWatching,
        isInHistory,
      }}
    >
      {children}
    </WatchHistoryContext.Provider>
  )
}

export function useWatchHistory() {
  const context = useContext(WatchHistoryContext)
  if (context === undefined) {
    throw new Error('useWatchHistory must be used within a WatchHistoryProvider')
  }
  return context
}
