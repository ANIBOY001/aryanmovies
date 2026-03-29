import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2F${size}${path}&output=webp&q=50&n=-1`;
};

// Additional Movies Part 4 - 1950s-1960s Classics (IDs 101201-101600)
export const additionalMoviesPart4: Movie[] = [
  // 1950s Westerns & Epics
  { id: 101201, title: "High Noon", poster: getImageUrl("/highnoon1952.jpg"), rating: 8.0, release_date: "1952-07-24", mediaType: "movie", slug: "/movie/101201" },
  { id: 101202, title: "Shane", poster: getImageUrl("/shane1953.jpg"), rating: 7.6, release_date: "1953-04-23", mediaType: "movie", slug: "/movie/101202" },
  { id: 101203, title: "Rio Bravo", poster: getImageUrl("/riobravo1959.jpg"), rating: 8.0, release_date: "1959-03-18", mediaType: "movie", slug: "/movie/101203" },
  { id: 101204, title: "The Searchers", poster: getImageUrl("/searchers1956.jpg"), rating: 7.9, release_date: "1956-03-13", mediaType: "movie", slug: "/movie/101204" },
  { id: 101205, title: "Cat on a Hot Tin Roof", poster: getImageUrl("/cat1958.jpg"), rating: 7.9, release_date: "1958-08-29", mediaType: "movie", slug: "/movie/101205" },
  { id: 101206, title: "Suddenly, Last Summer", poster: getImageUrl("/suddenly1959.jpg"), rating: 7.4, release_date: "1959-12-22", mediaType: "movie", slug: "/movie/101206" },
  { id: 101207, title: "Sweet Bird of Youth", poster: getImageUrl("/sweetbird1962.jpg"), rating: 7.1, release_date: "1962-03-21", mediaType: "movie", slug: "/movie/101207" },
  { id: 101208, title: "The Night of the Iguana", poster: getImageUrl("/iguana1964.jpg"), rating: 7.2, release_date: "1964-08-06", mediaType: "movie", slug: "/movie/101208" },
  { id: 101209, title: "This Property Is Condemned", poster: getImageUrl("/condemned1966.jpg"), rating: 7.0, release_date: "1966-08-03", mediaType: "movie", slug: "/movie/101209" },
  { id: 101210, title: "Boom!", poster: getImageUrl("/boom1968.jpg"), rating: 5.8, release_date: "1968-05-26", mediaType: "movie", slug: "/movie/101210" },
  { id: 101211, title: "Secret Ceremony", poster: getImageUrl("/secretceremony1968.jpg"), rating: 6.2, release_date: "1968-10-23", mediaType: "movie", slug: "/movie/101211" },
  { id: 101212, title: "Reflections in a Golden Eye", poster: getImageUrl("/reflections1967.jpg"), rating: 6.3, release_date: "1967-10-13", mediaType: "movie", slug: "/movie/101212" },
  { id: 101213, title: "The Comedians", poster: getImageUrl("/comedians1967.jpg"), rating: 6.3, release_date: "1967-02-16", mediaType: "movie", slug: "/movie/101213" },
  { id: 101214, title: "The V.I.P.s", poster: getImageUrl("/vips1963.jpg"), rating: 6.3, release_date: "1963-09-01", mediaType: "movie", slug: "/movie/101214" },
  { id: 101215, title: "The Sandpiper", poster: getImageUrl("/sandpiper1965.jpg"), rating: 6.4, release_date: "1965-06-23", mediaType: "movie", slug: "/movie/101215" },
  { id: 101216, title: "The Only Game in Town", poster: getImageUrl("/onlygame1970.jpg"), rating: 5.8, release_date: "1970-01-21", mediaType: "movie", slug: "/movie/101216" },
  { id: 101217, title: "X, Y and Zee", poster: getImageUrl("/xyzee1972.jpg"), rating: 5.6, release_date: "1972-01-21", mediaType: "movie", slug: "/movie/101217" },
  { id: 101218, title: "Ash Wednesday", poster: getImageUrl("/ashwednesday1973.jpg"), rating: 5.9, release_date: "1973-11-01", mediaType: "movie", slug: "/movie/101218" },
  { id: 101219, title: "The Blue Bird", poster: getImageUrl("/bluebird1976.jpg"), rating: 5.5, release_date: "1976-04-05", mediaType: "movie", slug: "/movie/101219" },
  { id: 101220, title: "A Little Night Music", poster: getImageUrl("/nightmusic1977.jpg"), rating: 5.7, release_date: "1977-09-30", mediaType: "movie", slug: "/movie/101220" },
  { id: 101221, title: "The Mirror Crack'd", poster: getImageUrl("/mirrorcrackd1980.jpg"), rating: 6.2, release_date: "1980-12-19", mediaType: "movie", slug: "/movie/101221" },
  { id: 101222, title: "Malice in Wonderland", poster: getImageUrl("/malice1985.jpg"), rating: 6.5, release_date: "1985-05-12", mediaType: "movie", slug: "/movie/101222" },
  { id: 101223, title: "The Flintstones", poster: getImageUrl("/flintstones1994.jpg"), rating: 4.9, release_date: "1994-05-27", mediaType: "movie", slug: "/movie/101223" },
  { id: 101224, title: "The Shadow", poster: getImageUrl("/shadow1994.jpg"), rating: 5.9, release_date: "1994-07-01", mediaType: "movie", slug: "/movie/101224" },
  { id: 101225, title: "Batman Forever", poster: getImageUrl("/batmanforever1995.jpg"), rating: 5.4, release_date: "1995-06-16", mediaType: "movie", slug: "/movie/101225" },
  { id: 101226, title: "Batman & Robin", poster: getImageUrl("/batmanrobin1997.jpg"), rating: 3.7, release_date: "1997-06-20", mediaType: "movie", slug: "/movie/101226" },
  { id: 101227, title: "Catwoman", poster: getImageUrl("/catwoman2004.jpg"), rating: 3.4, release_date: "2004-07-23", mediaType: "movie", slug: "/movie/101227" },
  { id: 101228, title: "Elektra", poster: getImageUrl("/elektra2005.jpg"), rating: 4.7, release_date: "2005-01-14", mediaType: "movie", slug: "/movie/101228" },
  { id: 101229, title: "Fantastic Four", poster: getImageUrl("/fantasticfour2005.jpg"), rating: 5.7, release_date: "2005-07-08", mediaType: "movie", slug: "/movie/101229" },
  { id: 101230, title: "Fantastic Four: Rise of the Silver Surfer", poster: getImageUrl("/fantastic42007.jpg"), rating: 5.6, release_date: "2007-06-15", mediaType: "movie", slug: "/movie/101230" },
  { id: 101231, title: "Ghost Rider", poster: getImageUrl("/ghostrider2007.jpg"), rating: 5.3, release_date: "2007-02-16", mediaType: "movie", slug: "/movie/101231" },
  { id: 101232, title: "Ghost Rider: Spirit of Vengeance", poster: getImageUrl("/ghostrider22011.jpg"), rating: 4.3, release_date: "2011-12-11", mediaType: "movie", slug: "/movie/101232" },
  { id: 101233, title: "Daredevil", poster: getImageUrl("/daredevil2003.jpg"), rating: 5.3, release_date: "2003-02-14", mediaType: "movie", slug: "/movie/101233" },
  { id: 101234, title: "The Punisher", poster: getImageUrl("/punisher2004.jpg"), rating: 6.4, release_date: "2004-04-16", mediaType: "movie", slug: "/movie/101234" },
  { id: 101235, title: "Punisher: War Zone", poster: getImageUrl("/punisherwar2008.jpg"), rating: 6.0, release_date: "2008-12-05", mediaType: "movie", slug: "/movie/101235" },
  { id: 101236, title: "Blade", poster: getImageUrl("/blade1998.jpg"), rating: 7.1, release_date: "1998-08-21", mediaType: "movie", slug: "/movie/101236" },
  { id: 101237, title: "Blade II", poster: getImageUrl("/blade22002.jpg"), rating: 6.7, release_date: "2002-03-22", mediaType: "movie", slug: "/movie/101237" },
  { id: 101238, title: "Blade: Trinity", poster: getImageUrl("/blade32004.jpg"), rating: 5.9, release_date: "2004-12-08", mediaType: "movie", slug: "/movie/101238" },
  { id: 101239, title: "X-Men", poster: getImageUrl("/xmen2000.jpg"), rating: 7.3, release_date: "2000-07-14", mediaType: "movie", slug: "/movie/101239" },
  { id: 101240, title: "X2", poster: getImageUrl("/x22003.jpg"), rating: 7.4, release_date: "2003-05-02", mediaType: "movie", slug: "/movie/101240" },
  { id: 101241, title: "X-Men: The Last Stand", poster: getImageUrl("/x32006.jpg"), rating: 6.7, release_date: "2006-05-26", mediaType: "movie", slug: "/movie/101241" },
  { id: 101242, title: "X-Men Origins: Wolverine", poster: getImageUrl("/wolverine2009.jpg"), rating: 6.2, release_date: "2009-05-01", mediaType: "movie", slug: "/movie/101242" },
  { id: 101243, title: "X-Men: First Class", poster: getImageUrl("/firstclass2011.jpg"), rating: 7.7, release_date: "2011-06-03", mediaType: "movie", slug: "/movie/101243" },
  { id: 101244, title: "The Wolverine", poster: getImageUrl("/wolverine2013.jpg"), rating: 6.7, release_date: "2013-07-26", mediaType: "movie", slug: "/movie/101244" },
  { id: 101245, title: "X-Men: Days of Future Past", poster: getImageUrl("/daysfuturepast2014.jpg"), rating: 7.9, release_date: "2014-05-23", mediaType: "movie", slug: "/movie/101245" },
  { id: 101246, title: "X-Men: Apocalypse", poster: getImageUrl("/apocalypse2016.jpg"), rating: 7.0, release_date: "2016-05-27", mediaType: "movie", slug: "/movie/101246" },
  { id: 101247, title: "Logan", poster: getImageUrl("/logan2017.jpg"), rating: 8.1, release_date: "2017-03-03", mediaType: "movie", slug: "/movie/101247" },
  { id: 101248, title: "Dark Phoenix", poster: getImageUrl("/darkphoenix2019.jpg"), rating: 5.7, release_date: "2019-06-07", mediaType: "movie", slug: "/movie/101248" },
  { id: 101249, title: "The New Mutants", poster: getImageUrl("/newmutants2020.jpg"), rating: 5.3, release_date: "2020-08-28", mediaType: "movie", slug: "/movie/101249" },
  { id: 101250, title: "Deadpool", poster: getImageUrl("/deadpool2016.jpg"), rating: 8.0, release_date: "2016-02-12", mediaType: "movie", slug: "/movie/101250" },
];

export default additionalMoviesPart4;
