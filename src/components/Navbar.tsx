'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Menu, 
  X, 
  Home, 
  Film, 
  Tv,
  ChevronDown,
  Clapperboard
} from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/movies', label: 'Movies', icon: Film },
  { href: '/tv', label: 'TV Shows', icon: Tv },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* Film Reel Icon */}
            <div className="relative">
              <Clapperboard className="w-10 h-10 text-red-500" strokeWidth={1.5} />
              <div className="absolute inset-0 w-10 h-10 bg-red-500/20 blur-xl rounded-full" />
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-2xl md:text-3xl font-black tracking-tighter"
                  style={{
                    background: 'linear-gradient(180deg, #ff3333 0%, #cc0000 50%, #990000 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 20px rgba(255, 0, 0, 0.5), 0 0 40px rgba(255, 0, 0, 0.3)',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                  }}
                >
                  ARYAN
                </span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter ml-0.5"
                  style={{
                    background: 'linear-gradient(180deg, #ffffff 0%, #e0e0e0 50%, #b0b0b0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                  }}
                >
                  MOVIES
                </span>
              </div>
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
                Watch Free Movies & TV Shows
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link flex items-center gap-1.5"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button - Navigates to search page */}
            <Link 
              href="/search" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-4 py-2 text-sm text-white transition-all"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">Search...</span>
            </Link>

            {/* Browse Dropdown */}
            <div className="hidden md:block relative group">
              <button className="nav-link flex items-center gap-1">
                Browse
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-surface border border-white/10 rounded-lg shadow-xl py-2 min-w-[160px]">
                  <Link href="/movies" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5">Movies</Link>
                  <Link href="/tv" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5">TV Shows</Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
