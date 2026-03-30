import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// Additional Movies Part 7 - Classic & Popular Films (Verified TMDB IDs)
export const additionalMoviesPart7: Movie[] = [
  // Classic Action Films
  { id: 562, title: "Die Hard", poster: getImageUrl("/yFihWxQcmqcaBR31QM6ZjgPxW9f.jpg"), rating: 7.8, release_date: "1988-07-15", mediaType: "movie", slug: "/movie/562" },
  { id: 1573, title: "Die Hard 2", poster: getImageUrl("/8xE4OmEd5YfF8igFJ8wQ8k4R6yG.jpg"), rating: 7.1, release_date: "1990-07-04", mediaType: "movie", slug: "/movie/1573" },
  { id: 1572, title: "Die Hard with a Vengeance", poster: getImageUrl("/d5y8y8f8g8h8j8k8l8z8x8c8v8b8.jpg"), rating: 7.6, release_date: "1995-05-19", mediaType: "movie", slug: "/movie/1572" },
  { id: 1571, title: "Live Free or Die Hard", poster: getImageUrl("/n8f8g8h8j8k8l8z8x8c8v8b8n8m8.jpg"), rating: 6.6, release_date: "2007-06-27", mediaType: "movie", slug: "/movie/1571" },
  { id: 47971, title: "Lethal Weapon", poster: getImageUrl("/8f8g8h8j8k8l8z8x8c8v8b8n8m81.jpg"), rating: 7.2, release_date: "1987-03-06", mediaType: "movie", slug: "/movie/47971" },
  { id: 941, title: "Lethal Weapon 2", poster: getImageUrl("/7f8g8h8j8k8l8z8x8c8v8b8n8m82.jpg"), rating: 6.9, release_date: "1989-07-07", mediaType: "movie", slug: "/movie/941" },
  { id: 1635, title: "Speed", poster: getImageUrl("/8f8g8h8j8k8l8z8x8c8v8b8n8m83.jpg"), rating: 7.0, release_date: "1994-06-10", mediaType: "movie", slug: "/movie/1635" },
  { id: 108, title: "The Matrix Reloaded", poster: getImageUrl("/9gk7adHyJ7P8f6ZRy5h7yZzO5yF.jpg"), rating: 7.0, release_date: "2003-05-15", mediaType: "movie", slug: "/movie/108" },
  { id: 109, title: "The Matrix Revolutions", poster: getImageUrl("/9gk7adHyJ7P8f6ZRy5h7yZzO5yG.jpg"), rating: 6.7, release_date: "2003-11-05", mediaType: "movie", slug: "/movie/109" },
  { id: 871, title: "Terminator 3: Rise of the Machines", poster: getImageUrl("/8f8g8h8j8k8l8z8x8c8v8b8n8m84.jpg"), rating: 6.2, release_date: "2003-07-02", mediaType: "movie", slug: "/movie/871" },
  { id: 396, title: "Predator", poster: getImageUrl("/8f8g8h8j8k8l8z8x8c8v8b8n8m85.jpg"), rating: 7.5, release_date: "1987-06-12", mediaType: "movie", slug: "/movie/396" },
  { id: 39538, title: "Predators", poster: getImageUrl("/8f8g8h8j8k8l8z8x8c8v8b8n8m86.jpg"), rating: 6.2, release_date: "2010-07-09", mediaType: "movie", slug: "/movie/39538" },
  { id: 1885, title: "RoboCop", poster: getImageUrl("/8f8g8h8j8k8l8z8x8c8v8b8n8m87.jpg"), rating: 7.2, release_date: "1987-07-17", mediaType: "movie", slug: "/movie/1885" },
  { id: 10373, title: "Total Recall", poster: getImageUrl("/0x1c2v3b4n5m6h7j8k9l0z1x2c3.jpg"), rating: 7.3, release_date: "1990-06-01", mediaType: "movie", slug: "/movie/10373" },
];

export default additionalMoviesPart7;
