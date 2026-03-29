import { NextResponse } from 'next/server'

// Using OMDb API (Open Movie Database) - free tier available
const OMDB_API_KEY = 'aa7c5e6b' // Public demo key (limited usage)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if (!query || query.trim().length < 2) {
    return NextResponse.json({ error: 'Query must be at least 2 characters' }, { status: 400 })
  }

  try {
    // OMDb API search
    const searchUrl = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}&type=movie&page=1`
    
    console.log('OMDb Search:', query)
    
    const response = await fetch(searchUrl)
    const data = await response.json()

    if (data.Response === 'False') {
      console.log('OMDb returned no results:', data.Error)
      return NextResponse.json({ results: [], query })
    }

    // Get detailed info for each result to get ratings
    const detailedResults = await Promise.all(
      (data.Search || []).slice(0, 10).map(async (item: any) => {
        const detailUrl = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${item.imdbID}&plot=short`
        try {
          const detailRes = await fetch(detailUrl)
          const detail = await detailRes.json()
          return {
            id: item.imdbID.replace('tt', ''), // Convert IMDB ID to numeric
            title: item.Title,
            poster: item.Poster !== 'N/A' ? item.Poster : '',
            rating: detail.imdbRating !== 'N/A' ? parseFloat(detail.imdbRating) : 0,
            release_date: item.Year?.length === 4 ? `${item.Year}-01-01` : '',
            mediaType: item.Type === 'series' ? 'tv' : 'movie',
            slug: `/watch/${item.imdbID.replace('tt', '')}`,
          }
        } catch {
          return {
            id: item.imdbID.replace('tt', ''),
            title: item.Title,
            poster: item.Poster !== 'N/A' ? item.Poster : '',
            rating: 0,
            release_date: item.Year?.length === 4 ? `${item.Year}-01-01` : '',
            mediaType: item.Type === 'series' ? 'tv' : 'movie',
            slug: `/watch/${item.imdbID.replace('tt', '')}`,
          }
        }
      })
    )

    const validResults = detailedResults
      .filter(item => item.poster && item.rating > 0)
      .sort((a, b) => b.rating - a.rating)

    console.log(`Found ${validResults.length} results for "${query}"`)

    return NextResponse.json({ results: validResults, query })
  } catch (error) {
    console.error('Search API Error:', error)
    return NextResponse.json({ error: 'Search failed', results: [] }, { status: 500 })
  }
}
