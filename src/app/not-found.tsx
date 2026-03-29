import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Oops... You are lost
        </h2>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you were looking for. To return to AryanMovies homepage click on the button below.
        </p>
        <a 
          href="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Go back home
        </a>
      </div>
    </div>
  )
}
