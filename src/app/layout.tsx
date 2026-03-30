import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { WatchHistoryProvider } from '@/contexts/WatchHistoryContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AryanMovies - Watch Free TV Shows Online, Watch Free Movies Online',
  description: 'Watch Free TV Shows Online, Watch Free Movies Online',
  keywords: 'aryanmovies, watch free movies, free movies to watch online, watch movies online free, free movies streaming, free movies full, free movies download, watch movies hd, movies to watch, plus, ver, assistir, filmes, series, seriados, online, gratis, torrent, legendado, dublados, Series, HD, 720p, 1080p, 4k, cinema',
  openGraph: {
    title: 'AryanMovies',
    description: 'Watch Free TV Shows Online, Watch Free Movies Online',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.aryanmovies.com',
    images: [
      {
        url: 'https://www.aryanmovies.com/seo.png',
        width: 1200,
        height: 630,
        alt: 'AryanMovies - Watch Free Movies and TV Shows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AryanMovies',
    description: 'Watch Free TV Shows Online, Watch Free Movies Online',
    images: ['https://www.aryanmovies.com/seo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WatchHistoryProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </WatchHistoryProvider>
      </body>
    </html>
  )
}
