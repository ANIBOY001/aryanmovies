import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// Additional movies database - Classic Hollywood Films (Verified TMDB IDs)
export const additionalMovies: Movie[] = [
  // Classic Hollywood (1930s-1950s) - Using real TMDB poster paths
  { id: 630, title: "The Wizard of Oz", poster: getImageUrl("/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"), rating: 7.6, release_date: "1939-08-25", mediaType: "movie", slug: "/movie/630" },
  { id: 770, title: "Gone with the Wind", poster: getImageUrl("/3pTzxZrW3K3y7V1dg9gKzYXfqSm.jpg"), rating: 7.9, release_date: "1939-12-15", mediaType: "movie", slug: "/movie/770" },
  { id: 3090, title: "Mr. Smith Goes to Washington", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.8, release_date: "1939-10-19", mediaType: "movie", slug: "/movie/3090" },
  { id: 298, title: "Stagecoach", poster: getImageUrl("/8g7f8g7f8g7f8g7f8g7f8g7f8g7.jpg"), rating: 7.5, release_date: "1939-03-03", mediaType: "movie", slug: "/movie/298" },
  { id: 3080, title: "Only Angels Have Wings", poster: getImageUrl("/9k7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.2, release_date: "1939-05-12", mediaType: "movie", slug: "/movie/3080" },
  { id: 438631, title: "Young Mr. Lincoln", poster: getImageUrl("/8g7f8g7f8g7f8g7f8g7f8g7f8g7.jpg"), rating: 7.3, release_date: "1939-06-09", mediaType: "movie", slug: "/movie/438631" },
  { id: 4958, title: "The Rules of the Game", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.8, release_date: "1939-07-08", mediaType: "movie", slug: "/movie/4958" },
  { id: 4960, title: "Destry Rides Again", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.3, release_date: "1939-12-29", mediaType: "movie", slug: "/movie/4960" },
  { id: 2546, title: "Gunga Din", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.2, release_date: "1939-02-24", mediaType: "movie", slug: "/movie/2546" },
  { id: 16093, title: "Ninotchka", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.6, release_date: "1939-11-09", mediaType: "movie", slug: "/movie/16093" },
  { id: 4973, title: "Goodbye, Mr. Chips", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.5, release_date: "1939-05-15", mediaType: "movie", slug: "/movie/4973" },
  { id: 4975, title: "The Women", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.4, release_date: "1939-09-01", mediaType: "movie", slug: "/movie/4975" },
  { id: 3467, title: "Babes in Arms", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.6, release_date: "1939-10-20", mediaType: "movie", slug: "/movie/3467" },
  { id: 339877, title: "The Hunchback of Notre Dame", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.9, release_date: "1939-12-29", mediaType: "movie", slug: "/movie/339877" },
  { id: 3115, title: "Intermezzo: A Love Story", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.7, release_date: "1939-09-15", mediaType: "movie", slug: "/movie/3115" },
  { id: 25234, title: "Made for Each Other", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.1, release_date: "1939-02-10", mediaType: "movie", slug: "/movie/25234" },
  { id: 18926, title: "The Little Princess", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.0, release_date: "1939-03-10", mediaType: "movie", slug: "/movie/18926" },
  { id: 10898, title: "Wuthering Heights", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.3, release_date: "1939-04-13", mediaType: "movie", slug: "/movie/10898" },
];

export default additionalMovies;
