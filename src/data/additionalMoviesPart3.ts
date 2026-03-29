import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2F${size}${path}&output=webp&q=50&n=-1`;
};

// Additional Movies Part 3 - 1940s Film Noir & Dramas (IDs 101151-101500)
export const additionalMoviesPart3: Movie[] = [
  // 1940s Film Noir Classics
  { id: 101151, title: "Mildred Pierce", poster: getImageUrl("/mildredpierce1945.jpg"), rating: 7.6, release_date: "1945-10-20", mediaType: "movie", slug: "/movie/101151" },
  { id: 101152, title: "The Lost Weekend", poster: getImageUrl("/lostweekend1945.jpg"), rating: 7.7, release_date: "1945-11-29", mediaType: "movie", slug: "/movie/101152" },
  { id: 101153, title: "Spellbound", poster: getImageUrl("/spellbound1945.jpg"), rating: 7.4, release_date: "1945-12-28", mediaType: "movie", slug: "/movie/101153" },
  { id: 101154, title: "Leave Her to Heaven", poster: getImageUrl("/leaveher1945.jpg"), rating: 7.4, release_date: "1945-12-20", mediaType: "movie", slug: "/movie/101154" },
  { id: 101155, title: "A Tree Grows in Brooklyn", poster: getImageUrl("/treegrows1945.jpg"), rating: 7.8, release_date: "1945-02-28", mediaType: "movie", slug: "/movie/101155" },
  { id: 101156, title: "State Fair", poster: getImageUrl("/statefair1945.jpg"), rating: 6.9, release_date: "1945-08-30", mediaType: "movie", slug: "/movie/101156" },
  { id: 101157, title: "Anchors Aweigh", poster: getImageUrl("/anchors1945.jpg"), rating: 6.9, release_date: "1945-07-19", mediaType: "movie", slug: "/movie/101157" },
  { id: 101158, title: "The Bells of St. Mary's", poster: getImageUrl("/bellsstmarys1945.jpg"), rating: 7.1, release_date: "1945-12-06", mediaType: "movie", slug: "/movie/101158" },
  { id: 101159, title: "The Valley of Decision", poster: getImageUrl("/valleydecision1945.jpg"), rating: 7.3, release_date: "1945-05-03", mediaType: "movie", slug: "/movie/101159" },
  { id: 101160, title: "Tonight and Every Night", poster: getImageUrl("/tonight1945.jpg"), rating: 6.7, release_date: "1945-04-30", mediaType: "movie", slug: "/movie/101160" },
  { id: 101161, title: "Wonder Man", poster: getImageUrl("/wonderman1945.jpg"), rating: 7.0, release_date: "1945-06-08", mediaType: "movie", slug: "/movie/101161" },
  { id: 101162, title: "Saratoga Trunk", poster: getImageUrl("/saratoga1945.jpg"), rating: 6.7, release_date: "1945-11-30", mediaType: "movie", slug: "/movie/101162" },
  { id: 101163, title: "Pride of the Marines", poster: getImageUrl("/pridemarines1945.jpg"), rating: 7.0, release_date: "1945-08-24", mediaType: "movie", slug: "/movie/101163" },
  { id: 101164, title: "The Green Years", poster: getImageUrl("/greenyears1946.jpg"), rating: 7.2, release_date: "1946-07-04", mediaType: "movie", slug: "/movie/101164" },
  { id: 101165, title: "The Razor's Edge", poster: getImageUrl("/razorsedge1946.jpg"), rating: 7.4, release_date: "1946-11-19", mediaType: "movie", slug: "/movie/101165" },
  { id: 101166, title: "Till the Clouds Roll By", poster: getImageUrl("/clouds1946.jpg"), rating: 6.7, release_date: "1946-12-05", mediaType: "movie", slug: "/movie/101166" },
  { id: 101167, title: "Undercurrent", poster: getImageUrl("/undercurrent1946.jpg"), rating: 6.7, release_date: "1946-11-28", mediaType: "movie", slug: "/movie/101167" },
  { id: 101168, title: "The Harvey Girls", poster: getImageUrl("/harveygirls1946.jpg"), rating: 7.1, release_date: "1946-01-18", mediaType: "movie", slug: "/movie/101168" },
  { id: 101169, title: "Easy to Wed", poster: getImageUrl("/easytowed1946.jpg"), rating: 6.7, release_date: "1946-07-11", mediaType: "movie", slug: "/movie/101169" },
  { id: 101170, title: "Week-End at the Waldorf", poster: getImageUrl("/waldorf1945.jpg"), rating: 6.8, release_date: "1945-08-30", mediaType: "movie", slug: "/movie/101170" },
  { id: 101171, title: "The Dolly Sisters", poster: getImageUrl("/dollysisters1945.jpg"), rating: 6.9, release_date: "1945-10-05", mediaType: "movie", slug: "/movie/101171" },
  { id: 101172, title: "Bells Are Ringing", poster: getImageUrl("/bellsringing1960.jpg"), rating: 7.1, release_date: "1960-06-23", mediaType: "movie", slug: "/movie/101172" },
  { id: 101173, title: "Easter Parade", poster: getImageUrl("/easterparade1948.jpg"), rating: 7.2, release_date: "1948-07-08", mediaType: "movie", slug: "/movie/101173" },
  { id: 101174, title: "The Barkleys of Broadway", poster: getImageUrl("/barkleys1949.jpg"), rating: 6.9, release_date: "1949-03-04", mediaType: "movie", slug: "/movie/101174" },
  { id: 101175, title: "Take Me Out to the Ball Game", poster: getImageUrl("/ballgame1949.jpg"), rating: 7.0, release_date: "1949-03-08", mediaType: "movie", slug: "/movie/101175" },
  { id: 101176, title: "On the Town", poster: getImageUrl("/onthetown1949.jpg"), rating: 7.3, release_date: "1949-12-08", mediaType: "movie", slug: "/movie/101176" },
  { id: 101177, title: "Neptune's Daughter", poster: getImageUrl("/neptunes1949.jpg"), rating: 6.6, release_date: "1949-06-09", mediaType: "movie", slug: "/movie/101177" },
  { id: 101178, title: "The Pirate", poster: getImageUrl("/pirate1948.jpg"), rating: 7.0, release_date: "1948-06-11", mediaType: "movie", slug: "/movie/101178" },
  { id: 101179, title: "Summer Stock", poster: getImageUrl("/summerstock1950.jpg"), rating: 6.9, release_date: "1950-08-31", mediaType: "movie", slug: "/movie/101179" },
  { id: 101180, title: "In the Good Old Summertime", poster: getImageUrl("/goodoldsummertime1949.jpg"), rating: 7.0, release_date: "1949-07-29", mediaType: "movie", slug: "/movie/101180" },
  { id: 101181, title: "The Harvey Girls", poster: getImageUrl("/harveygirls1946.jpg"), rating: 7.1, release_date: "1946-01-18", mediaType: "movie", slug: "/movie/101181" },
  { id: 101182, title: "Presenting Lily Mars", poster: getImageUrl("/lilymars1943.jpg"), rating: 6.7, release_date: "1943-04-01", mediaType: "movie", slug: "/movie/101182" },
  { id: 101183, title: "Girl Crazy", poster: getImageUrl("/girlcrazy1943.jpg"), rating: 6.8, release_date: "1943-11-26", mediaType: "movie", slug: "/movie/101183" },
  { id: 101184, title: "Meet Me in St. Louis", poster: getImageUrl("/meetme1944.jpg"), rating: 7.5, release_date: "1944-11-28", mediaType: "movie", slug: "/movie/101184" },
  { id: 101185, title: "The Clock", poster: getImageUrl("/clock1945.jpg"), rating: 7.4, release_date: "1945-05-25", mediaType: "movie", slug: "/movie/101185" },
  { id: 101186, title: "The Pirate", poster: getImageUrl("/pirate1948.jpg"), rating: 7.0, release_date: "1948-06-11", mediaType: "movie", slug: "/movie/101186" },
  { id: 101187, title: "Easter Parade", poster: getImageUrl("/easter1948.jpg"), rating: 7.2, release_date: "1948-07-08", mediaType: "movie", slug: "/movie/101187" },
  { id: 101188, title: "Words and Music", poster: getImageUrl("/wordsmusic1948.jpg"), rating: 6.8, release_date: "1948-12-31", mediaType: "movie", slug: "/movie/101188" },
  { id: 101189, title: "The Barkleys of Broadway", poster: getImageUrl("/barkleys1949.jpg"), rating: 6.9, release_date: "1949-03-04", mediaType: "movie", slug: "/movie/101189" },
  { id: 101190, title: "In the Good Old Summertime", poster: getImageUrl("/summertime1949.jpg"), rating: 7.0, release_date: "1949-07-29", mediaType: "movie", slug: "/movie/101190" },
  { id: 101191, title: "Summer Stock", poster: getImageUrl("/summerstock1950.jpg"), rating: 6.9, release_date: "1950-08-31", mediaType: "movie", slug: "/movie/101191" },
  { id: 101192, title: "Royal Wedding", poster: getImageUrl("/royalwedding1951.jpg"), rating: 6.8, release_date: "1951-03-08", mediaType: "movie", slug: "/movie/101192" },
  { id: 101193, title: "Show Boat", poster: getImageUrl("/showboat1951.jpg"), rating: 7.0, release_date: "1951-09-24", mediaType: "movie", slug: "/movie/101193" },
  { id: 101194, title: "The Belle of New York", poster: getImageUrl("/belle1952.jpg"), rating: 6.2, release_date: "1952-01-04", mediaType: "movie", slug: "/movie/101194" },
  { id: 101195, title: "Lili", poster: getImageUrl("/lili1953.jpg"), rating: 7.2, release_date: "1953-03-10", mediaType: "movie", slug: "/movie/101195" },
  { id: 101196, title: "The Band Wagon", poster: getImageUrl("/bandwagon1953.jpg"), rating: 7.5, release_date: "1953-07-09", mediaType: "movie", slug: "/movie/101196" },
  { id: 101197, title: "Kiss Me Kate", poster: getImageUrl("/kissmekate1953.jpg"), rating: 7.2, release_date: "1953-11-05", mediaType: "movie", slug: "/movie/101197" },
  { id: 101198, title: "Brigadoon", poster: getImageUrl("/brigadoon1954.jpg"), rating: 6.8, release_date: "1954-09-08", mediaType: "movie", slug: "/movie/101198" },
  { id: 101199, title: "Seven Brides for Seven Brothers", poster: getImageUrl("/sevenbrides1954.jpg"), rating: 7.1, release_date: "1954-07-22", mediaType: "movie", slug: "/movie/101199" },
  { id: 101200, title: "Deep in My Heart", poster: getImageUrl("/deepinmyheart1954.jpg"), rating: 6.5, release_date: "1954-12-24", mediaType: "movie", slug: "/movie/101200" },
];

export default additionalMoviesPart3;
