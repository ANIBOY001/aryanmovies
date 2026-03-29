import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// Additional Movies Part 2 - Classic Hollywood Films (IDs 101101-101500)
export const additionalMoviesPart2: Movie[] = [
  // 1939 - The Golden Year of Hollywood
  { id: 101101, title: "The Private Lives of Elizabeth and Essex", poster: getImageUrl("/essex1939.jpg"), rating: 7.0, release_date: "1939-09-27", mediaType: "movie", slug: "/movie/101101" },
  { id: 101102, title: "Dark Victory", poster: getImageUrl("/darkvictory1939.jpg"), rating: 7.5, release_date: "1939-04-22", mediaType: "movie", slug: "/movie/101102" },
  { id: 101103, title: "The Old Maid", poster: getImageUrl("/oldmaid1939.jpg"), rating: 7.2, release_date: "1939-08-12", mediaType: "movie", slug: "/movie/101103" },
  { id: 101104, title: "The Rains Came", poster: getImageUrl("/rains1939.jpg"), rating: 6.8, release_date: "1939-09-15", mediaType: "movie", slug: "/movie/101104" },
  { id: 101105, title: "Drums Along the Mohawk", poster: getImageUrl("/drums1939.jpg"), rating: 7.0, release_date: "1939-11-03", mediaType: "movie", slug: "/movie/101105" },
  { id: 101106, title: "Juarez", poster: getImageUrl("/juarez1939.jpg"), rating: 6.9, release_date: "1939-04-25", mediaType: "movie", slug: "/movie/101106" },
  { id: 101107, title: "The Hound of the Baskervilles", poster: getImageUrl("/hound1939.jpg"), rating: 7.2, release_date: "1939-03-31", mediaType: "movie", slug: "/movie/101107" },
  { id: 101108, title: "The Adventures of Sherlock Holmes", poster: getImageUrl("/sherlock1939.jpg"), rating: 7.3, release_date: "1939-09-01", mediaType: "movie", slug: "/movie/101108" },
  { id: 101109, title: "The Tower of London", poster: getImageUrl("/tower1939.jpg"), rating: 6.6, release_date: "1939-11-17", mediaType: "movie", slug: "/movie/101109" },
  { id: 101110, title: "Son of Frankenstein", poster: getImageUrl("/sonfrankenstein1939.jpg"), rating: 7.1, release_date: "1939-01-13", mediaType: "movie", slug: "/movie/101110" },
  { id: 101111, title: "The Phantom Creeps", poster: getImageUrl("/phantomcreeps1939.jpg"), rating: 5.9, release_date: "1939-01-07", mediaType: "movie", slug: "/movie/101111" },
  { id: 101112, title: "The Son of Monte Cristo", poster: getImageUrl("/sonmonte1940.jpg"), rating: 6.7, release_date: "1940-12-05", mediaType: "movie", slug: "/movie/101112" },
  { id: 101113, title: "My Favorite Wife", poster: getImageUrl("/favoritewife1940.jpg"), rating: 7.4, release_date: "1940-05-17", mediaType: "movie", slug: "/movie/101113" },
  { id: 101114, title: "The Philadelphia Story", poster: getImageUrl("/philadelphiastory1940.jpg"), rating: 7.9, release_date: "1940-12-26", mediaType: "movie", slug: "/movie/101114" },
  { id: 101115, title: "His Girl Friday", poster: getImageUrl("/hisgirlfriday1940.jpg"), rating: 7.8, release_date: "1940-02-22", mediaType: "movie", slug: "/movie/101115" },
  { id: 101116, title: "The Grapes of Wrath", poster: getImageUrl("/grapesofwrath1940.jpg"), rating: 8.0, release_date: "1940-03-15", mediaType: "movie", slug: "/movie/101116" },
  { id: 101117, title: "Rebecca", poster: getImageUrl("/rebecca1940.jpg"), rating: 7.9, release_date: "1940-04-12", mediaType: "movie", slug: "/movie/101117" },
  { id: 101118, title: "Pinocchio", poster: getImageUrl("/pinocchio1940.jpg"), rating: 7.5, release_date: "1940-02-23", mediaType: "movie", slug: "/movie/101118" },
  { id: 101119, title: "Fantasia", poster: getImageUrl("/fantasia1940.jpg"), rating: 7.7, release_date: "1940-11-13", mediaType: "movie", slug: "/movie/101119" },
  { id: 101120, title: "The Shop Around the Corner", poster: getImageUrl("/shoparound1940.jpg"), rating: 8.0, release_date: "1940-01-12", mediaType: "movie", slug: "/movie/101120" },
  { id: 101121, title: "The Letter", poster: getImageUrl("/letter1940.jpg"), rating: 7.6, release_date: "1940-11-22", mediaType: "movie", slug: "/movie/101121" },
  { id: 101122, title: "The Sea Hawk", poster: getImageUrl("/seahawk1940.jpg"), rating: 7.5, release_date: "1940-08-10", mediaType: "movie", slug: "/movie/101122" },
  { id: 101123, title: "The Thief of Bagdad", poster: getImageUrl("/thiefbagdad1940.jpg"), rating: 7.5, release_date: "1940-12-25", mediaType: "movie", slug: "/movie/101123" },
  { id: 101124, title: "Foreign Correspondent", poster: getImageUrl("/foreigncorrespondent1940.jpg"), rating: 7.3, release_date: "1940-08-16", mediaType: "movie", slug: "/movie/101124" },
  { id: 101125, title: "Santa Fe Trail", poster: getImageUrl("/santafetrail1940.jpg"), rating: 6.3, release_date: "1940-12-28", mediaType: "movie", slug: "/movie/101125" },
  { id: 101126, title: "Northwest Passage", poster: getImageUrl("/northwest1940.jpg"), rating: 6.9, release_date: "1940-03-07", mediaType: "movie", slug: "/movie/101126" },
  { id: 101127, title: "Boom Town", poster: getImageUrl("/boomtown1940.jpg"), rating: 6.9, release_date: "1940-08-30", mediaType: "movie", slug: "/movie/101127" },
  { id: 101128, title: "The Mark of Zorro", poster: getImageUrl("/zorro1940.jpg"), rating: 7.3, release_date: "1940-11-08", mediaType: "movie", slug: "/movie/101128" },
  { id: 101129, title: "They Drive by Night", poster: getImageUrl("/drivebynight1940.jpg"), rating: 7.1, release_date: "1940-08-03", mediaType: "movie", slug: "/movie/101129" },
  { id: 101130, title: "Torrid Zone", poster: getImageUrl("/torridzone1940.jpg"), rating: 6.5, release_date: "1940-06-15", mediaType: "movie", slug: "/movie/101130" },
  { id: 101131, title: "Virginia City", poster: getImageUrl("/virginiacity1940.jpg"), rating: 6.4, release_date: "1940-03-23", mediaType: "movie", slug: "/movie/101131" },
  { id: 101132, title: "City for Conquest", poster: getImageUrl("/cityconquest1940.jpg"), rating: 6.9, release_date: "1940-09-21", mediaType: "movie", slug: "/movie/101132" },
  { id: 101133, title: "All This, and Heaven Too", poster: getImageUrl("/heaventoo1940.jpg"), rating: 7.2, release_date: "1940-07-13", mediaType: "movie", slug: "/movie/101133" },
  { id: 101134, title: "Edison, the Man", poster: getImageUrl("/edison1940.jpg"), rating: 6.9, release_date: "1940-08-15", mediaType: "movie", slug: "/movie/101134" },
  { id: 101135, title: "Pride and Prejudice", poster: getImageUrl("/prideprejudice1940.jpg"), rating: 7.7, release_date: "1940-07-26", mediaType: "movie", slug: "/movie/101135" },
  { id: 101136, title: "Our Town", poster: getImageUrl("/ourtown1940.jpg"), rating: 7.0, release_date: "1940-08-29", mediaType: "movie", slug: "/movie/101136" },
  { id: 101137, title: "Waterloo Bridge", poster: getImageUrl("/waterloobridge1940.jpg"), rating: 7.3, release_date: "1940-05-17", mediaType: "movie", slug: "/movie/101137" },
  { id: 101138, title: "Gaslight", poster: getImageUrl("/gaslight1944.jpg"), rating: 7.7, release_date: "1944-05-04", mediaType: "movie", slug: "/movie/101138" },
  { id: 101139, title: "National Velvet", poster: getImageUrl("/nationalvelvet1944.jpg"), rating: 7.3, release_date: "1944-12-14", mediaType: "movie", slug: "/movie/101139" },
  { id: 101140, title: "Laura", poster: getImageUrl("/laura1944.jpg"), rating: 7.8, release_date: "1944-10-11", mediaType: "movie", slug: "/movie/101140" },
  { id: 101141, title: "Double Indemnity", poster: getImageUrl("/doubleindemnity1944.jpg"), rating: 8.3, release_date: "1944-07-06", mediaType: "movie", slug: "/movie/101141" },
  { id: 101142, title: "Meet Me in St. Louis", poster: getImageUrl("/stlouis1944.jpg"), rating: 7.5, release_date: "1944-11-28", mediaType: "movie", slug: "/movie/101142" },
  { id: 101143, title: "Arsenic and Old Lace", poster: getImageUrl("/arsenic1944.jpg"), rating: 7.9, release_date: "1944-09-23", mediaType: "movie", slug: "/movie/101143" },
  { id: 101144, title: "Lifeboat", poster: getImageUrl("/lifeboat1944.jpg"), rating: 7.5, release_date: "1944-01-28", mediaType: "movie", slug: "/movie/101144" },
  { id: 101145, title: "The Fighting Sullivans", poster: getImageUrl("/sullivans1944.jpg"), rating: 7.1, release_date: "1944-02-03", mediaType: "movie", slug: "/movie/101145" },
  { id: 101146, title: "Going My Way", poster: getImageUrl("/goingmyway1944.jpg"), rating: 7.0, release_date: "1944-08-16", mediaType: "movie", slug: "/movie/101146" },
  { id: 101147, title: "Since You Went Away", poster: getImageUrl("/sinceyou1944.jpg"), rating: 7.2, release_date: "1944-07-20", mediaType: "movie", slug: "/movie/101147" },
  { id: 101148, title: "The Adventures of Mark Twain", poster: getImageUrl("/marktwain1944.jpg"), rating: 6.8, release_date: "1944-05-06", mediaType: "movie", slug: "/movie/101148" },
  { id: 101149, title: "Mr. Skeffington", poster: getImageUrl("/skeffington1944.jpg"), rating: 7.1, release_date: "1944-05-25", mediaType: "movie", slug: "/movie/101149" },
  { id: 101150, title: "Hollywood Canteen", poster: getImageUrl("/canteen1944.jpg"), rating: 6.3, release_date: "1944-12-31", mediaType: "movie", slug: "/movie/101150" },
];

export default additionalMoviesPart2;
