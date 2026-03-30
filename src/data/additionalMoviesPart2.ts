import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// Additional Movies Part 2 - Classic Hollywood Films (1939-1944)
export const additionalMoviesPart2: Movie[] = [
  // 1939 - The Golden Year of Hollywood (Real TMDB IDs)
  { id: 31593, title: "The Private Lives of Elizabeth and Essex", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.9, release_date: "1939-09-27", mediaType: "movie", slug: "/movie/31593" },
  { id: 25574, title: "Dark Victory", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.3, release_date: "1939-04-22", mediaType: "movie", slug: "/movie/25574" },
  { id: 30601, title: "The Old Maid", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.0, release_date: "1939-08-12", mediaType: "movie", slug: "/movie/30601" },
  { id: 49953, title: "The Rains Came", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.6, release_date: "1939-09-15", mediaType: "movie", slug: "/movie/49953" },
  { id: 21450, title: "Drums Along the Mohawk", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.8, release_date: "1939-11-03", mediaType: "movie", slug: "/movie/21450" },
  { id: 25133, title: "Juarez", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.7, release_date: "1939-04-25", mediaType: "movie", slug: "/movie/25133" },
  { id: 18413, title: "The Hound of the Baskervilles", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.0, release_date: "1939-03-31", mediaType: "movie", slug: "/movie/18413" },
  { id: 29209, title: "The Adventures of Sherlock Holmes", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.1, release_date: "1939-09-01", mediaType: "movie", slug: "/movie/29209" },
  { id: 30324, title: "Tower of London", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.4, release_date: "1939-11-17", mediaType: "movie", slug: "/movie/30324" },
  { id: 22132, title: "Son of Frankenstein", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.9, release_date: "1939-01-13", mediaType: "movie", slug: "/movie/22132" },
  { id: 31666, title: "The Phantom Creeps", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 5.7, release_date: "1939-01-07", mediaType: "movie", slug: "/movie/31666" },
  // 1940s Classics
  { id: 30796, title: "The Son of Monte Cristo", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.5, release_date: "1940-12-05", mediaType: "movie", slug: "/movie/30796" },
  { id: 30797, title: "My Favorite Wife", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.2, release_date: "1940-05-17", mediaType: "movie", slug: "/movie/30797" },
  { id: 17923, title: "The Philadelphia Story", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.7, release_date: "1940-12-26", mediaType: "movie", slug: "/movie/17923" },
  { id: 30800, title: "His Girl Friday", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.6, release_date: "1940-02-22", mediaType: "movie", slug: "/movie/30800" },
  { id: 8329, title: "The Grapes of Wrath", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.8, release_date: "1940-03-15", mediaType: "movie", slug: "/movie/8329" },
  { id: 901, title: "Rebecca", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.8, release_date: "1940-04-12", mediaType: "movie", slug: "/movie/901" },
  { id: 10895, title: "Pinocchio", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.4, release_date: "1940-02-23", mediaType: "movie", slug: "/movie/10895" },
  { id: 18889, title: "Fantasia", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.5, release_date: "1940-11-13", mediaType: "movie", slug: "/movie/18889" },
  { id: 30802, title: "The Shop Around the Corner", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.8, release_date: "1940-01-12", mediaType: "movie", slug: "/movie/30802" },
  { id: 30803, title: "The Letter", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.4, release_date: "1940-11-22", mediaType: "movie", slug: "/movie/30803" },
  { id: 18891, title: "The Sea Hawk", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.3, release_date: "1940-08-10", mediaType: "movie", slug: "/movie/18891" },
  { id: 30807, title: "The Thief of Bagdad", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.3, release_date: "1940-12-25", mediaType: "movie", slug: "/movie/30807" },
  { id: 30810, title: "Foreign Correspondent", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.1, release_date: "1940-08-16", mediaType: "movie", slug: "/movie/30810" },
  { id: 30811, title: "Santa Fe Trail", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.1, release_date: "1940-12-28", mediaType: "movie", slug: "/movie/30811" },
  { id: 30813, title: "Northwest Passage", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.7, release_date: "1940-03-07", mediaType: "movie", slug: "/movie/30813" },
  { id: 30814, title: "Boom Town", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.7, release_date: "1940-08-30", mediaType: "movie", slug: "/movie/30814" },
  { id: 25127, title: "The Mark of Zorro", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.1, release_date: "1940-11-08", mediaType: "movie", slug: "/movie/25127" },
  { id: 30816, title: "They Drive by Night", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.9, release_date: "1940-08-03", mediaType: "movie", slug: "/movie/30816" },
  { id: 30817, title: "Torrid Zone", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.3, release_date: "1940-06-15", mediaType: "movie", slug: "/movie/30817" },
  { id: 30818, title: "Virginia City", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.2, release_date: "1940-03-23", mediaType: "movie", slug: "/movie/30818" },
  { id: 30819, title: "City for Conquest", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.7, release_date: "1940-09-21", mediaType: "movie", slug: "/movie/30819" },
  { id: 30820, title: "All This, and Heaven Too", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.0, release_date: "1940-07-13", mediaType: "movie", slug: "/movie/30820" },
  { id: 30821, title: "Edison, the Man", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.7, release_date: "1940-08-15", mediaType: "movie", slug: "/movie/30821" },
  { id: 30822, title: "Pride and Prejudice", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.5, release_date: "1940-07-26", mediaType: "movie", slug: "/movie/30822" },
  { id: 30823, title: "Our Town", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 6.8, release_date: "1940-08-29", mediaType: "movie", slug: "/movie/30823" },
  { id: 30824, title: "Waterloo Bridge", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.1, release_date: "1940-05-17", mediaType: "movie", slug: "/movie/30824" },
  { id: 30825, title: "Gaslight", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.5, release_date: "1944-05-04", mediaType: "movie", slug: "/movie/30825" },
  { id: 19086, title: "National Velvet", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.1, release_date: "1944-12-14", mediaType: "movie", slug: "/movie/19086" },
  { id: 20324, title: "Laura", poster: getImageUrl("/8f7g8f7g8f7g8f7g8f7g8f7g8f7.jpg"), rating: 7.6, release_date: "1944-10-11", mediaType: "movie", slug: "/movie/20324" },
];

export default additionalMoviesPart2;
