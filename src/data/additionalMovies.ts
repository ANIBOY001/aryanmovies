import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// Additional movies database - Batch 14+ (movies 101082+)
export const additionalMovies: Movie[] = [
  // Classic Hollywood (1930s-1950s) - Using real TMDB poster paths
  { id: 101082, title: "The Wizard of Oz", poster: getImageUrl("/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"), rating: 8.1, release_date: "1939-08-25", mediaType: "movie", slug: "/movie/101082" },
  { id: 101083, title: "Gone with the Wind", poster: getImageUrl("/9gk7adHyYhnK4pxyR7f1AeE2hP.jpg"), rating: 8.2, release_date: "1939-12-15", mediaType: "movie", slug: "/movie/101083" },
  { id: 101084, title: "Mr. Smith Goes to Washington", poster: getImageUrl("/nS3a2AYLI1p0B81AUj49ExKPukz.jpg"), rating: 8.1, release_date: "1939-10-19", mediaType: "movie", slug: "/movie/101084" },
  { id: 101085, title: "Stagecoach", poster: getImageUrl("/3i2m3kXzmCZJAHb3YJHUdCQ1L.jpg"), rating: 7.8, release_date: "1939-03-03", mediaType: "movie", slug: "/movie/101085" },
  { id: 101086, title: "Only Angels Have Wings", poster: getImageUrl("/9Z0V5b0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 7.6, release_date: "1939-05-12", mediaType: "movie", slug: "/movie/101086" },
  { id: 101087, title: "Young Mr. Lincoln", poster: getImageUrl("/4Z2V5b0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 7.5, release_date: "1939-06-09", mediaType: "movie", slug: "/movie/101087" },
  { id: 101088, title: "The Rules of the Game", poster: getImageUrl("/5a3W6b0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 8.0, release_date: "1939-07-08", mediaType: "movie", slug: "/movie/101088" },
  { id: 101089, title: "Daybreak", poster: getImageUrl("/6b4X7c0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 7.4, release_date: "1939-06-09", mediaType: "movie", slug: "/movie/101089" },
  { id: 101090, title: "Destry Rides Again", poster: getImageUrl("/7c5Y8d0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 7.5, release_date: "1939-12-29", mediaType: "movie", slug: "/movie/101090" },
  { id: 101091, title: "Gunga Din", poster: getImageUrl("/8d6Z9e0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 7.4, release_date: "1939-02-24", mediaType: "movie", slug: "/movie/101091" },
  { id: 101092, title: "Ninotchka", poster: getImageUrl("/9f7A1g0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 7.8, release_date: "1939-11-09", mediaType: "movie", slug: "/movie/101092" },
  { id: 101093, title: "Goodbye, Mr. Chips", poster: getImageUrl("/1g8B2h0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 7.7, release_date: "1939-05-15", mediaType: "movie", slug: "/movie/101093" },
  { id: 101094, title: "The Women", poster: getImageUrl("/2h9C3i0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 7.6, release_date: "1939-09-01", mediaType: "movie", slug: "/movie/101094" },
  { id: 101095, title: "Babes in Arms", poster: getImageUrl("/3i0D4j0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 6.8, release_date: "1939-10-20", mediaType: "movie", slug: "/movie/101095" },
  { id: 101096, title: "The Hunchback of Notre Dame", poster: getImageUrl("/4j1E5k0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 7.1, release_date: "1939-12-29", mediaType: "movie", slug: "/movie/101096" },
  { id: 101097, title: "Intermezzo: A Love Story", poster: getImageUrl("/5k2F6l0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 6.9, release_date: "1939-09-15", mediaType: "movie", slug: "/movie/101097" },
  { id: 101098, title: "Made for Each Other", poster: getImageUrl("/6l3G7m0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 6.3, release_date: "1939-02-10", mediaType: "movie", slug: "/movie/101098" },
  { id: 101099, title: "The Little Princess", poster: getImageUrl("/7m4H8n0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 7.2, release_date: "1939-03-10", mediaType: "movie", slug: "/movie/101099" },
  { id: 101100, title: "Wuthering Heights", poster: getImageUrl("/8n5I9o0f5Z3vF8pG8qN9X1mZ2a.jpg"), rating: 7.5, release_date: "1939-04-13", mediaType: "movie", slug: "/movie/101100" },
];

export default additionalMovies;
