import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2F${size}${path}&output=webp&q=50&n=-1`;
};

// TV Shows Database Part 5 - Sci-Fi & Fantasy (IDs 200301-200600)
export const tvShowsPart5: Movie[] = [
  // Sci-Fi TV Series
  { id: 200301, title: "Battlestar Galactica", poster: getImageUrl("/bsg2004.jpg"), rating: 8.7, release_date: "2004-10-18", mediaType: "tv", slug: "/tv/200301" },
  { id: 200302, title: "Stargate SG-1", poster: getImageUrl("/sg11997.jpg"), rating: 8.4, release_date: "1997-07-27", mediaType: "tv", slug: "/tv/200302" },
  { id: 200303, title: "Stargate Atlantis", poster: getImageUrl("/atlantis2004.jpg"), rating: 8.1, release_date: "2004-07-16", mediaType: "tv", slug: "/tv/200303" },
  { id: 200304, title: "Stargate Universe", poster: getImageUrl("/universe2009.jpg"), rating: 7.5, release_date: "2009-10-02", mediaType: "tv", slug: "/tv/200304" },
  { id: 200305, title: "Farscape", poster: getImageUrl("/farscape1999.jpg"), rating: 8.2, release_date: "1999-03-19", mediaType: "tv", slug: "/tv/200305" },
  { id: 200306, title: "Firefly", poster: getImageUrl("/firefly2002.jpg"), rating: 8.7, release_date: "2002-09-20", mediaType: "tv", slug: "/tv/200306" },
  { id: 200307, title: "Babylon 5", poster: getImageUrl("/babylon51994.jpg"), rating: 8.3, release_date: "1994-01-26", mediaType: "tv", slug: "/tv/200307" },
  { id: 200308, title: "Andromeda", poster: getImageUrl("/andromeda2000.jpg"), rating: 6.9, release_date: "2000-10-02", mediaType: "tv", slug: "/tv/200308" },
  { id: 200309, title: "Eureka", poster: getImageUrl("/eureka2006.jpg"), rating: 7.8, release_date: "2006-07-18", mediaType: "tv", slug: "/tv/200309" },
  { id: 200310, title: "Warehouse 13", poster: getImageUrl("/warehouse132009.jpg"), rating: 7.6, release_date: "2009-07-07", mediaType: "tv", slug: "/tv/200310" },
  { id: 200311, title: "Fringe", poster: getImageUrl("/fringe2008.jpg"), rating: 8.3, release_date: "2008-09-09", mediaType: "tv", slug: "/tv/200311" },
  { id: 200312, title: "Continuum", poster: getImageUrl("/continuum2012.jpg"), rating: 7.7, release_date: "2012-05-27", mediaType: "tv", slug: "/tv/200312" },
  { id: 200313, title: "Defiance", poster: getImageUrl("/defiance2013.jpg"), rating: 6.9, release_date: "2013-04-15", mediaType: "tv", slug: "/tv/200313" },
  { id: 200314, title: "Almost Human", poster: getImageUrl("/almosthuman2013.jpg"), rating: 7.4, release_date: "2013-11-17", mediaType: "tv", slug: "/tv/200314" },
  { id: 200315, title: "Intelligence", poster: getImageUrl("/intelligence2014.jpg"), rating: 7.1, release_date: "2014-01-07", mediaType: "tv", slug: "/tv/200315" },
  { id: 200316, title: "Extant", poster: getImageUrl("/extant2014.jpg"), rating: 6.6, release_date: "2014-07-09", mediaType: "tv", slug: "/tv/200316" },
  { id: 200317, title: "Ascension", poster: getImageUrl("/ascension2014.jpg"), rating: 6.8, release_date: "2014-12-15", mediaType: "tv", slug: "/tv/200317" },
  { id: 200318, title: "12 Monkeys", poster: getImageUrl("/12monkeys2015.jpg"), rating: 7.6, release_date: "2015-01-16", mediaType: "tv", slug: "/tv/200318" },
  { id: 200319, title: "Colony", poster: getImageUrl("/colony2016.jpg"), rating: 7.2, release_date: "2016-01-14", mediaType: "tv", slug: "/tv/200319" },
  { id: 200320, title: "Incorporated", poster: getImageUrl("/incorporated2016.jpg"), rating: 6.9, release_date: "2016-11-30", mediaType: "tv", slug: "/tv/200320" },
  { id: 200321, title: "Counterpart", poster: getImageUrl("/counterpart2017.jpg"), rating: 7.8, release_date: "2017-12-10", mediaType: "tv", slug: "/tv/200321" },
  { id: 200322, title: "Altered Carbon", poster: getImageUrl("/alteredcarbon2018.jpg"), rating: 7.9, release_date: "2018-02-02", mediaType: "tv", slug: "/tv/200322" },
  { id: 200323, title: "Lost in Space", poster: getImageUrl("/lostinspace2018.jpg"), rating: 7.3, release_date: "2018-04-13", mediaType: "tv", slug: "/tv/200323" },
  { id: 200324, title: "Nightflyers", poster: getImageUrl("/nightflyers2018.jpg"), rating: 5.9, release_date: "2018-12-02", mediaType: "tv", slug: "/tv/200324" },
  { id: 200325, title: "The First", poster: getImageUrl("/thefirst2018.jpg"), rating: 6.5, release_date: "2018-09-14", mediaType: "tv", slug: "/tv/200325" },
  { id: 200326, title: "Origin", poster: getImageUrl("/origin2018.jpg"), rating: 6.7, release_date: "2018-11-14", mediaType: "tv", slug: "/tv/200326" },
  { id: 200327, title: "Nightflyers", poster: getImageUrl("/nightflyers2018.jpg"), rating: 5.9, release_date: "2018-12-02", mediaType: "tv", slug: "/tv/200327" },
  { id: 200328, title: "The Twilight Zone 2019", poster: getImageUrl("/twilightzone2019.jpg"), rating: 6.7, release_date: "2019-04-01", mediaType: "tv", slug: "/tv/200328" },
  { id: 200329, title: "Another Life", poster: getImageUrl("/anotherlife2019.jpg"), rating: 5.0, release_date: "2019-07-25", mediaType: "tv", slug: "/tv/200329" },
  { id: 200330, title: "See", poster: getImageUrl("/see2019.jpg"), rating: 7.6, release_date: "2019-11-01", mediaType: "tv", slug: "/tv/200330" },
  { id: 200331, title: "For All Mankind", poster: getImageUrl("/forallmankind2019.jpg"), rating: 7.9, release_date: "2019-11-01", mediaType: "tv", slug: "/tv/200331" },
  { id: 200332, title: "Devs", poster: getImageUrl("/devs2020.jpg"), rating: 7.7, release_date: "2020-03-05", mediaType: "tv", slug: "/tv/200332" },
  { id: 200333, title: "Home Before Dark", poster: getImageUrl("/homebeforedark2020.jpg"), rating: 7.4, release_date: "2020-04-03", mediaType: "tv", slug: "/tv/200333" },
  { id: 200334, title: "Brave New World", poster: getImageUrl("/bravenewworld2020.jpg"), rating: 6.8, release_date: "2020-07-15", mediaType: "tv", slug: "/tv/200334" },
  { id: 200335, title: "Tales from the Loop", poster: getImageUrl("/talesfromloop2020.jpg"), rating: 7.4, release_date: "2020-04-03", mediaType: "tv", slug: "/tv/200335" },
  { id: 200336, title: "The Outsider", poster: getImageUrl("/outsider2020.jpg"), rating: 8.0, release_date: "2020-01-12", mediaType: "tv", slug: "/tv/200336" },
  { id: 200337, title: "Raised by Wolves", poster: getImageUrl("/raisedbywolves2020.jpg"), rating: 7.5, release_date: "2020-09-03", mediaType: "tv", slug: "/tv/200337" },
  { id: 200338, title: "Soulmates", poster: getImageUrl("/soulmates2020.jpg"), rating: 6.4, release_date: "2020-10-05", mediaType: "tv", slug: "/tv/200338" },
  { id: 200339, title: "Next", poster: getImageUrl("/next2020.jpg"), rating: 6.5, release_date: "2020-10-06", mediaType: "tv", slug: "/tv/200339" },
  { id: 200340, title: "The Stand", poster: getImageUrl("/thestand2020.jpg"), rating: 5.6, release_date: "2020-12-17", mediaType: "tv", slug: "/tv/200340" },
  { id: 200341, title: "The Nevers", poster: getImageUrl("/thenevers2021.jpg"), rating: 7.1, release_date: "2021-04-11", mediaType: "tv", slug: "/tv/200341" },
  { id: 200342, title: "Y: The Last Man", poster: getImageUrl("/ylastman2021.jpg"), rating: 6.4, release_date: "2021-09-13", mediaType: "tv", slug: "/tv/200342" },
  { id: 200343, title: "Foundation", poster: getImageUrl("/foundation2021.jpg"), rating: 7.6, release_date: "2021-09-24", mediaType: "tv", slug: "/tv/200343" },
  { id: 200344, title: "Invasion", poster: getImageUrl("/invasion2021.jpg"), rating: 6.2, release_date: "2021-10-22", mediaType: "tv", slug: "/tv/200344" },
  { id: 200345, title: "The Silent Sea", poster: getImageUrl("/silentsea2021.jpg"), rating: 6.9, release_date: "2021-12-24", mediaType: "tv", slug: "/tv/200345" },
  { id: 200346, title: "From", poster: getImageUrl("/from2022.jpg"), rating: 7.7, release_date: "2022-02-20", mediaType: "tv", slug: "/tv/200346" },
  { id: 200347, title: "Outer Range", poster: getImageUrl("/outerrange2022.jpg"), rating: 6.8, release_date: "2022-04-15", mediaType: "tv", slug: "/tv/200347" },
  { id: 200348, title: "Night Sky", poster: getImageUrl("/nightsky2022.jpg"), rating: 6.5, release_date: "2022-05-20", mediaType: "tv", slug: "/tv/200348" },
  { id: 200349, title: "Shining Girls", poster: getImageUrl("/shininggirls2022.jpg"), rating: 7.3, release_date: "2022-04-29", mediaType: "tv", slug: "/tv/200349" },
  { id: 200350, title: "Silo", poster: getImageUrl("/silo2023.jpg"), rating: 7.6, release_date: "2023-05-05", mediaType: "tv", slug: "/tv/200350" },
];

export default tvShowsPart5;
