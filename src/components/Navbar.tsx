'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  Search, 
  Menu, 
  X, 
  Home, 
  Film, 
  Tv, 
  Sparkles, 
  Radio, 
  Users,
  ChevronDown,
  Code2
} from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/movies', label: 'Movies', icon: Film },
  { href: '/tv', label: 'TV Shows', icon: Tv },
  { href: '/anime', label: 'Anime', icon: Sparkles },
  { href: '/livestream', label: 'Livestream', icon: Radio },
  { href: '/watchparty', label: 'Watch Party', icon: Users },
  { href: '/api', label: 'API', icon: Code2 },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    } else {
      router.push('/search')
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Aryan<span className="text-primary">Movies</span>
            </span>
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
            {/* Search */}
            <form onSubmit={handleSearch} className={`relative ${isSearchOpen ? 'block' : 'hidden md:block'}`}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className={`bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-all ${
                  isSearchOpen ? 'w-48 md:w-64' : 'w-32 md:w-48'
                }`}
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="w-4 h-4 text-white/50 hover:text-white transition" />
              </button>
            </form>
            
            <button 
              className="md:hidden text-white"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>

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
                  <Link href="/anime" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5">Anime</Link>
                  <div className="border-t border-white/10 my-1" />
                  <Link href="/genre/action" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5">Action</Link>
                  <Link href="/genre/comedy" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5">Comedy</Link>
                  <Link href="/genre/drama" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5">Drama</Link>
                  <Link href="/genre/horror" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5">Horror</Link>
                  <Link href="/genre/scifi" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5">Sci-Fi</Link>
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
