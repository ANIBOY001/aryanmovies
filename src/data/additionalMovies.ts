import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2F${size}${path}&output=webp&q=50&n=-1`;
};

// Additional movies database - Batch 14+ (movies 101082+)
export const additionalMovies: Movie[] = [
  // Classic Hollywood (1930s-1950s) - 500 movies
  { id: 101082, title: "The Wizard of Oz", poster: getImageUrl("/wizard1939.jpg"), rating: 8.1, release_date: "1939-08-25", mediaType: "movie", slug: "/movie/101082" },
  { id: 101083, title: "Gone with the Wind", poster: getImageUrl("/gonewind1939.jpg"), rating: 8.2, release_date: "1939-12-15", mediaType: "movie", slug: "/movie/101083" },
  { id: 101084, title: "Mr. Smith Goes to Washington", poster: getImageUrl("/mrsmith1939.jpg"), rating: 8.1, release_date: "1939-10-19", mediaType: "movie", slug: "/movie/101084" },
  { id: 101085, title: "Stagecoach", poster: getImageUrl("/stagecoach1939.jpg"), rating: 7.8, release_date: "1939-03-03", mediaType: "movie", slug: "/movie/101085" },
  { id: 101086, title: "Only Angels Have Wings", poster: getImageUrl("/angels1939.jpg"), rating: 7.6, release_date: "1939-05-12", mediaType: "movie", slug: "/movie/101086" },
  { id: 101087, title: "Young Mr. Lincoln", poster: getImageUrl("/lincoln1939.jpg"), rating: 7.5, release_date: "1939-06-09", mediaType: "movie", slug: "/movie/101087" },
  { id: 101088, title: "The Rules of the Game", poster: getImageUrl("/rulesgame1939.jpg"), rating: 8.0, release_date: "1939-07-08", mediaType: "movie", slug: "/movie/101088" },
  { id: 101089, title: "Daybreak", poster: getImageUrl("/daybreak1939.jpg"), rating: 7.4, release_date: "1939-06-09", mediaType: "movie", slug: "/movie/101089" },
  { id: 101090, title: "Destry Rides Again", poster: getImageUrl("/destry1939.jpg"), rating: 7.5, release_date: "1939-12-29", mediaType: "movie", slug: "/movie/101090" },
  { id: 101091, title: "Gunga Din", poster: getImageUrl("/gungadin1939.jpg"), rating: 7.4, release_date: "1939-02-24", mediaType: "movie", slug: "/movie/101091" },
  { id: 101092, title: "Ninotchka", poster: getImageUrl("/ninotchka1939.jpg"), rating: 7.8, release_date: "1939-11-09", mediaType: "movie", slug: "/movie/101092" },
  { id: 101093, title: "Goodbye, Mr. Chips", poster: getImageUrl("/chips1939.jpg"), rating: 7.7, release_date: "1939-05-15", mediaType: "movie", slug: "/movie/101093" },
  { id: 101094, title: "The Women", poster: getImageUrl("/women1939.jpg"), rating: 7.6, release_date: "1939-09-01", mediaType: "movie", slug: "/movie/101094" },
  { id: 101095, title: "Babes in Arms", poster: getImageUrl("/babesarms1939.jpg"), rating: 6.8, release_date: "1939-10-20", mediaType: "movie", slug: "/movie/101095" },
  { id: 101096, title: "The Hunchback of Notre Dame", poster: getImageUrl("/hunchback1939.jpg"), rating: 7.1, release_date: "1939-12-29", mediaType: "movie", slug: "/movie/101096" },
  { id: 101097, title: "Intermezzo: A Love Story", poster: getImageUrl("/intermezzo1939.jpg"), rating: 6.9, release_date: "1939-09-15", mediaType: "movie", slug: "/movie/101097" },
  { id: 101098, title: "Made for Each Other", poster: getImageUrl("/madeforeach1939.jpg"), rating: 6.3, release_date: "1939-02-10", mediaType: "movie", slug: "/movie/101098" },
  { id: 101099, title: "The Little Princess", poster: getImageUrl("/littleprincess1939.jpg"), rating: 7.2, release_date: "1939-03-10", mediaType: "movie", slug: "/movie/101099" },
  { id: 101100, title: "Wuthering Heights", poster: getImageUrl("/wuthering1939.jpg"), rating: 7.5, release_date: "1939-04-13", mediaType: "movie", slug: "/movie/101100" },
];

export default additionalMovies;
