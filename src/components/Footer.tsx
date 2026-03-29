import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 mt-12">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white tracking-tight">
                Aryan<span className="text-primary">Movies</span>
              </span>
            </Link>
            <p className="text-sm text-text-muted">
              Welcome to AryanMovies - your ultimate destination for movies, TV shows, and anime streaming.
            </p>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-white font-semibold mb-4">Content</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/movies" className="hover:text-white transition-colors">Movies</Link></li>
              <li><Link href="/tv" className="hover:text-white transition-colors">TV Shows</Link></li>
              <li><Link href="/anime" className="hover:text-white transition-colors">Anime</Link></li>
              <li><Link href="/livestream" className="hover:text-white transition-colors">Livestream</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/watchparty" className="hover:text-white transition-colors">Watch Party</Link></li>
              <li><Link href="/history" className="hover:text-white transition-colors">Watch History</Link></li>
              <li><Link href="/watchlist" className="hover:text-white transition-colors">My Watchlist</Link></li>
              <li><Link href="/api" className="hover:text-white transition-colors">API Documentation</Link></li>
            </ul>
          </div>

          {/* Personal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Personal</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/account" className="hover:text-white transition-colors">My Account</Link></li>
              <li><Link href="/settings" className="hover:text-white transition-colors">Settings</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <p className="text-xs text-text-muted text-center">
            This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
          </p>
          <p className="text-xs text-text-muted text-center mt-2">
            &copy; {new Date().getFullYear()} AryanMovies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
