import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// Additional Movies Part 6 - Horror & Thriller Films (IDs 101301-101700)
export const additionalMoviesPart6: Movie[] = [
  // Classic Horror Films
  { id: 101301, title: "The Cabinet of Dr. Caligari", poster: getImageUrl("/caligari1920.jpg"), rating: 8.0, release_date: "1920-02-27", mediaType: "movie", slug: "/movie/101301" },
  { id: 101302, title: "Nosferatu", poster: getImageUrl("/nosferatu1922.jpg"), rating: 7.9, release_date: "1922-03-04", mediaType: "movie", slug: "/movie/101302" },
  { id: 101303, title: "The Phantom of the Opera", poster: getImageUrl("/phantom1925.jpg"), rating: 7.6, release_date: "1925-09-06", mediaType: "movie", slug: "/movie/101303" },
  { id: 101304, title: "Dracula", poster: getImageUrl("/dracula1931.jpg"), rating: 7.5, release_date: "1931-02-14", mediaType: "movie", slug: "/movie/101304" },
  { id: 101305, title: "Frankenstein", poster: getImageUrl("/frankenstein1931.jpg"), rating: 7.8, release_date: "1931-11-21", mediaType: "movie", slug: "/movie/101305" },
  { id: 101306, title: "The Mummy", poster: getImageUrl("/mummy1932.jpg"), rating: 7.1, release_date: "1932-12-22", mediaType: "movie", slug: "/movie/101306" },
  { id: 101307, title: "The Invisible Man", poster: getImageUrl("/invisible1933.jpg"), rating: 7.7, release_date: "1933-11-13", mediaType: "movie", slug: "/movie/101307" },
  { id: 101308, title: "Bride of Frankenstein", poster: getImageUrl("/bride1935.jpg"), rating: 7.8, release_date: "1935-04-22", mediaType: "movie", slug: "/movie/101308" },
  { id: 101309, title: "Dracula's Daughter", poster: getImageUrl("/draculadaughter1936.jpg"), rating: 6.3, release_date: "1936-03-11", mediaType: "movie", slug: "/movie/101309" },
  { id: 101310, title: "Son of Frankenstein", poster: getImageUrl("/sonfrankenstein1939.jpg"), rating: 7.1, release_date: "1939-01-13", mediaType: "movie", slug: "/movie/101310" },
  { id: 101311, title: "The Wolf Man", poster: getImageUrl("/wolfman1941.jpg"), rating: 7.3, release_date: "1941-12-12", mediaType: "movie", slug: "/movie/101311" },
  { id: 101312, title: "Cat People", poster: getImageUrl("/catpeople1942.jpg"), rating: 7.3, release_date: "1942-12-25", mediaType: "movie", slug: "/movie/101312" },
  { id: 101313, title: "I Walked with a Zombie", poster: getImageUrl("/zombie1943.jpg"), rating: 7.2, release_date: "1943-04-21", mediaType: "movie", slug: "/movie/101313" },
  { id: 101314, title: "The Body Snatcher", poster: getImageUrl("/bodysnatcher1945.jpg"), rating: 7.2, release_date: "1945-05-25", mediaType: "movie", slug: "/movie/101314" },
  { id: 101315, title: "Dead of Night", poster: getImageUrl("/deadofnight1945.jpg"), rating: 7.6, release_date: "1945-09-09", mediaType: "movie", slug: "/movie/101315" },
  { id: 101316, title: "The Spiral Staircase", poster: getImageUrl("/spiral1946.jpg"), rating: 7.4, release_date: "1946-02-06", mediaType: "movie", slug: "/movie/101316" },
  { id: 101317, title: "The Killers", poster: getImageUrl("/killers1946.jpg"), rating: 7.8, release_date: "1946-08-30", mediaType: "movie", slug: "/movie/101317" },
  { id: 101318, title: "The Third Man", poster: getImageUrl("/thirdman1949.jpg"), rating: 8.1, release_date: "1949-09-02", mediaType: "movie", slug: "/movie/101318" },
  { id: 101319, title: "Sunset Boulevard", poster: getImageUrl("/sunset1950.jpg"), rating: 8.4, release_date: "1950-08-10", mediaType: "movie", slug: "/movie/101319" },
  { id: 101320, title: "In a Lonely Place", poster: getImageUrl("/lonelyplace1950.jpg"), rating: 7.9, release_date: "1950-05-17", mediaType: "movie", slug: "/movie/101320" },
  { id: 101321, title: "Strangers on a Train", poster: getImageUrl("/strangers1951.jpg"), rating: 7.9, release_date: "1951-06-30", mediaType: "movie", slug: "/movie/101321" },
  { id: 101322, title: "Dial M for Murder", poster: getImageUrl("/dialm1954.jpg"), rating: 8.2, release_date: "1954-05-29", mediaType: "movie", slug: "/movie/101322" },
  { id: 101323, title: "Rear Window", poster: getImageUrl("/rearwindow1954.jpg"), rating: 8.5, release_date: "1954-08-01", mediaType: "movie", slug: "/movie/101323" },
  { id: 101324, title: "To Catch a Thief", poster: getImageUrl("/tocatchathief1955.jpg"), rating: 7.4, release_date: "1955-08-05", mediaType: "movie", slug: "/movie/101324" },
  { id: 101325, title: "The Trouble with Harry", poster: getImageUrl("/troubleharry1955.jpg"), rating: 7.0, release_date: "1955-09-30", mediaType: "movie", slug: "/movie/101325" },
  { id: 101326, title: "The Man Who Knew Too Much", poster: getImageUrl("/manknewtoomuch1956.jpg"), rating: 7.4, release_date: "1956-05-16", mediaType: "movie", slug: "/movie/101326" },
  { id: 101327, title: "The Wrong Man", poster: getImageUrl("/wrongman1956.jpg"), rating: 7.4, release_date: "1956-12-23", mediaType: "movie", slug: "/movie/101327" },
  { id: 101328, title: "Vertigo", poster: getImageUrl("/vertigo1958.jpg"), rating: 8.3, release_date: "1958-05-09", mediaType: "movie", slug: "/movie/101328" },
  { id: 101329, title: "North by Northwest", poster: getImageUrl("/northbynorthwest1959.jpg"), rating: 8.3, release_date: "1959-07-17", mediaType: "movie", slug: "/movie/101329" },
  { id: 101330, title: "Psycho", poster: getImageUrl("/psycho1960.jpg"), rating: 8.5, release_date: "1960-09-08", mediaType: "movie", slug: "/movie/101330" },
  { id: 101331, title: "The Birds", poster: getImageUrl("/birds1963.jpg"), rating: 7.6, release_date: "1963-03-29", mediaType: "movie", slug: "/movie/101331" },
  { id: 101332, title: "Marnie", poster: getImageUrl("/marnie1964.jpg"), rating: 7.0, release_date: "1964-07-22", mediaType: "movie", slug: "/movie/101332" },
  { id: 101333, title: "Torn Curtain", poster: getImageUrl("/torn1966.jpg"), rating: 6.7, release_date: "1966-07-14", mediaType: "movie", slug: "/movie/101333" },
  { id: 101334, title: "Topaz", poster: getImageUrl("/topaz1969.jpg"), rating: 6.2, release_date: "1969-12-19", mediaType: "movie", slug: "/movie/101334" },
  { id: 101335, title: "Frenzy", poster: getImageUrl("/frenzy1972.jpg"), rating: 7.1, release_date: "1972-06-21", mediaType: "movie", slug: "/movie/101335" },
  { id: 101336, title: "Family Plot", poster: getImageUrl("/familyplot1976.jpg"), rating: 6.8, release_date: "1976-04-09", mediaType: "movie", slug: "/movie/101336" },
  { id: 101337, title: "The Texas Chain Saw Massacre", poster: getImageUrl("/chainsaw1974.jpg"), rating: 7.4, release_date: "1974-10-11", mediaType: "movie", slug: "/movie/101337" },
  { id: 101338, title: "Halloween", poster: getImageUrl("/halloween1978.jpg"), rating: 7.7, release_date: "1978-10-27", mediaType: "movie", slug: "/movie/101338" },
  { id: 101339, title: "Friday the 13th", poster: getImageUrl("/friday13th1980.jpg"), rating: 6.4, release_date: "1980-05-09", mediaType: "movie", slug: "/movie/101339" },
  { id: 101340, title: "A Nightmare on Elm Street", poster: getImageUrl("/elmstreet1984.jpg"), rating: 7.4, release_date: "1984-11-16", mediaType: "movie", slug: "/movie/101340" },
  { id: 101341, title: "The Evil Dead", poster: getImageUrl("/evildead1981.jpg"), rating: 7.4, release_date: "1981-09-10", mediaType: "movie", slug: "/movie/101341" },
  { id: 101342, title: "Evil Dead II", poster: getImageUrl("/evildead21987.jpg"), rating: 7.7, release_date: "1987-03-13", mediaType: "movie", slug: "/movie/101342" },
  { id: 101343, title: "Army of Darkness", poster: getImageUrl("/armydarkness1992.jpg"), rating: 7.5, release_date: "1992-10-09", mediaType: "movie", slug: "/movie/101343" },
  { id: 101344, title: "The Shining", poster: getImageUrl("/shining1980.jpg"), rating: 8.4, release_date: "1980-05-23", mediaType: "movie", slug: "/movie/101344" },
  { id: 101345, title: "Carrie", poster: getImageUrl("/carrie1976.jpg"), rating: 7.3, release_date: "1976-11-03", mediaType: "movie", slug: "/movie/101345" },
  { id: 101346, title: "The Omen", poster: getImageUrl("/omen1976.jpg"), rating: 7.5, release_date: "1976-06-25", mediaType: "movie", slug: "/movie/101346" },
  { id: 101347, title: "Rosemary's Baby", poster: getImageUrl("/rosemary1968.jpg"), rating: 7.9, release_date: "1968-06-12", mediaType: "movie", slug: "/movie/101347" },
  { id: 101348, title: "Don't Look Now", poster: getImageUrl("/dontlooknow1973.jpg"), rating: 7.1, release_date: "1973-12-09", mediaType: "movie", slug: "/movie/101348" },
  { id: 101349, title: "The Wicker Man", poster: getImageUrl("/wickerman1973.jpg"), rating: 7.5, release_date: "1973-12-10", mediaType: "movie", slug: "/movie/101349" },
  { id: 101350, title: "Suspiria", poster: getImageUrl("/suspiria1977.jpg"), rating: 7.3, release_date: "1977-02-01", mediaType: "movie", slug: "/movie/101350" },
];

export default additionalMoviesPart6;
