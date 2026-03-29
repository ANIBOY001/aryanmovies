import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// TV Shows Database Part 4 - Anime & Animation (IDs 200251-200500)
export const tvShowsPart4: Movie[] = [
  // Popular Anime Series
  { id: 200251, title: "Attack on Titan", poster: getImageUrl("/aot2013.jpg"), rating: 9.1, release_date: "2013-04-07", mediaType: "tv", slug: "/tv/200251" },
  { id: 200252, title: "Death Note", poster: getImageUrl("/deathnote2006.jpg"), rating: 9.0, release_date: "2006-10-04", mediaType: "tv", slug: "/tv/200252" },
  { id: 200253, title: "Fullmetal Alchemist: Brotherhood", poster: getImageUrl("/fmab2009.jpg"), rating: 9.1, release_date: "2009-04-05", mediaType: "tv", slug: "/tv/200253" },
  { id: 200254, title: "One Piece", poster: getImageUrl("/onepiece1999.jpg"), rating: 8.8, release_date: "1999-10-20", mediaType: "tv", slug: "/tv/200254" },
  { id: 200255, title: "Demon Slayer", poster: getImageUrl("/demonslayer2019.jpg"), rating: 8.7, release_date: "2019-04-06", mediaType: "tv", slug: "/tv/200255" },
  { id: 200256, title: "Jujutsu Kaisen", poster: getImageUrl("/jjk2020.jpg"), rating: 8.6, release_date: "2020-10-03", mediaType: "tv", slug: "/tv/200256" },
  { id: 200257, title: "Chainsaw Man", poster: getImageUrl("/chainsawman2022.jpg"), rating: 8.4, release_date: "2022-10-12", mediaType: "tv", slug: "/tv/200257" },
  { id: 200258, title: "Spy x Family", poster: getImageUrl("/spyxfamily2022.jpg"), rating: 8.5, release_date: "2022-04-09", mediaType: "tv", slug: "/tv/200258" },
  { id: 200259, title: "My Hero Academia", poster: getImageUrl("/mha2016.jpg"), rating: 7.9, release_date: "2016-04-03", mediaType: "tv", slug: "/tv/200259" },
  { id: 200260, title: "Hunter x Hunter", poster: getImageUrl("/hxh2011.jpg"), rating: 9.0, release_date: "2011-10-02", mediaType: "tv", slug: "/tv/200260" },
  { id: 200261, title: "Steins;Gate", poster: getImageUrl("/steinsgate2011.jpg"), rating: 8.8, release_date: "2011-04-06", mediaType: "tv", slug: "/tv/200261" },
  { id: 200262, title: "Vinland Saga", poster: getImageUrl("/vinlandsaga2019.jpg"), rating: 8.7, release_date: "2019-07-08", mediaType: "tv", slug: "/tv/200262" },
  { id: 200263, title: "Mob Psycho 100", poster: getImageUrl("/mobpsycho2016.jpg"), rating: 8.5, release_date: "2016-07-12", mediaType: "tv", slug: "/tv/200263" },
  { id: 200264, title: "Cowboy Bebop", poster: getImageUrl("/cowboybebop1998.jpg"), rating: 8.9, release_date: "1998-04-03", mediaType: "tv", slug: "/tv/200264" },
  { id: 200265, title: "Neon Genesis Evangelion", poster: getImageUrl("/eva1995.jpg"), rating: 8.5, release_date: "1995-10-04", mediaType: "tv", slug: "/tv/200265" },
  { id: 200266, title: "Code Geass", poster: getImageUrl("/codegeass2006.jpg"), rating: 8.5, release_date: "2006-10-06", mediaType: "tv", slug: "/tv/200266" },
  { id: 200267, title: "Death Parade", poster: getImageUrl("/deathparade2015.jpg"), rating: 7.9, release_date: "2015-01-10", mediaType: "tv", slug: "/tv/200267" },
  { id: 200268, title: "Erased", poster: getImageUrl("/erased2016.jpg"), rating: 8.0, release_date: "2016-01-08", mediaType: "tv", slug: "/tv/200268" },
  { id: 200269, title: "The Promised Neverland", poster: getImageUrl("/promisedneverland2019.jpg"), rating: 7.9, release_date: "2019-01-11", mediaType: "tv", slug: "/tv/200269" },
  { id: 200270, title: "Dr. Stone", poster: getImageUrl("/drstone2019.jpg"), rating: 8.1, release_date: "2019-07-05", mediaType: "tv", slug: "/tv/200270" },
  { id: 200271, title: "Black Clover", poster: getImageUrl("/blackclover2017.jpg"), rating: 8.2, release_date: "2017-10-03", mediaType: "tv", slug: "/tv/200271" },
  { id: 200272, title: "Fire Force", poster: getImageUrl("/fireforce2019.jpg"), rating: 7.7, release_date: "2019-07-06", mediaType: "tv", slug: "/tv/200272" },
  { id: 200273, title: "Food Wars!", poster: getImageUrl("/foodwars2015.jpg"), rating: 7.9, release_date: "2015-04-04", mediaType: "tv", slug: "/tv/200273" },
  { id: 200274, title: "Haikyuu!!", poster: getImageUrl("/haikyuu2014.jpg"), rating: 8.7, release_date: "2014-04-06", mediaType: "tv", slug: "/tv/200274" },
  { id: 200275, title: "Kuroko's Basketball", poster: getImageUrl("/kuroko2012.jpg"), rating: 8.1, release_date: "2012-04-07", mediaType: "tv", slug: "/tv/200275" },
  { id: 200276, title: "Blue Lock", poster: getImageUrl("/bluelock2022.jpg"), rating: 8.1, release_date: "2022-10-09", mediaType: "tv", slug: "/tv/200276" },
  { id: 200277, title: "Solo Leveling", poster: getImageUrl("/sololeveling2024.jpg"), rating: 8.7, release_date: "2024-01-07", mediaType: "tv", slug: "/tv/200277" },
  { id: 200278, title: "Wind Breaker", poster: getImageUrl("/windbreaker2024.jpg"), rating: 7.8, release_date: "2024-04-05", mediaType: "tv", slug: "/tv/200278" },
  { id: 200279, title: "Kaiju No. 8", poster: getImageUrl("/kaiju82024.jpg"), rating: 8.1, release_date: "2024-04-13", mediaType: "tv", slug: "/tv/200279" },
  { id: 200280, title: "Dandadan", poster: getImageUrl("/dandadan2024.jpg"), rating: 8.4, release_date: "2024-10-04", mediaType: "tv", slug: "/tv/200280" },
  { id: 200281, title: "Frieren: Beyond Journey's End", poster: getImageUrl("/frieren2023.jpg"), rating: 8.9, release_date: "2023-09-29", mediaType: "tv", slug: "/tv/200281" },
  { id: 200282, title: "Oshi no Ko", poster: getImageUrl("/oshinoko2023.jpg"), rating: 8.3, release_date: "2023-04-12", mediaType: "tv", slug: "/tv/200282" },
  { id: 200283, title: "Hell's Paradise", poster: getImageUrl("/hellsparadise2023.jpg"), rating: 7.8, release_date: "2023-04-01", mediaType: "tv", slug: "/tv/200283" },
  { id: 200284, title: "Pluto", poster: getImageUrl("/pluto2023.jpg"), rating: 8.2, release_date: "2023-10-26", mediaType: "tv", slug: "/tv/200284" },
  { id: 200285, title: "Trigun Stampede", poster: getImageUrl("/trigun2023.jpg"), rating: 7.8, release_date: "2023-01-07", mediaType: "tv", slug: "/tv/200285" },
  { id: 200286, title: "Cyberpunk: Edgerunners", poster: getImageUrl("/edgerunners2022.jpg"), rating: 8.3, release_date: "2022-09-13", mediaType: "tv", slug: "/tv/200286" },
  { id: 200287, title: "Ranking of Kings", poster: getImageUrl("/rankingkings2021.jpg"), rating: 8.4, release_date: "2021-10-15", mediaType: "tv", slug: "/tv/200287" },
  { id: 200288, title: "Odd Taxi", poster: getImageUrl("/oddtaxi2021.jpg"), rating: 8.1, release_date: "2021-04-06", mediaType: "tv", slug: "/tv/200288" },
  { id: 200289, title: "To Your Eternity", poster: getImageUrl("/toyoureternity2021.jpg"), rating: 8.2, release_date: "2021-04-12", mediaType: "tv", slug: "/tv/200289" },
  { id: 200290, title: "Mushoku Tensei", poster: getImageUrl("/mushoku2021.jpg"), rating: 8.3, release_date: "2021-01-11", mediaType: "tv", slug: "/tv/200290" },
  { id: 200291, title: "Horimiya", poster: getImageUrl("/horimiya2021.jpg"), rating: 8.1, release_date: "2021-01-10", mediaType: "tv", slug: "/tv/200291" },
  { id: 200292, title: "Sk8 the Infinity", poster: getImageUrl("/sk82021.jpg"), rating: 7.7, release_date: "2021-01-10", mediaType: "tv", slug: "/tv/200292" },
  { id: 200293, title: "Wonder Egg Priority", poster: getImageUrl("/wonderegg2021.jpg"), rating: 7.8, release_date: "2021-01-13", mediaType: "tv", slug: "/tv/200293" },
  { id: 200294, title: "86", poster: getImageUrl("/862021.jpg"), rating: 7.9, release_date: "2021-04-11", mediaType: "tv", slug: "/tv/200294" },
  { id: 200295, title: "Vivy: Fluorite Eye's Song", poster: getImageUrl("/vivy2021.jpg"), rating: 8.0, release_date: "2021-04-03", mediaType: "tv", slug: "/tv/200295" },
  { id: 200296, title: "Sono Bisque Doll wa Koi wo Suru", poster: getImageUrl("/bisquedoll2022.jpg"), rating: 7.9, release_date: "2022-01-09", mediaType: "tv", slug: "/tv/200296" },
  { id: 200297, title: "Summertime Rendering", poster: getImageUrl("/summertime2022.jpg"), rating: 8.0, release_date: "2022-04-15", mediaType: "tv", slug: "/tv/200297" },
  { id: 200298, title: "Lycoris Recoil", poster: getImageUrl("/lycoris2022.jpg"), rating: 7.6, release_date: "2022-07-02", mediaType: "tv", slug: "/tv/200298" },
  { id: 200299, title: "Call of the Night", poster: getImageUrl("/callnight2022.jpg"), rating: 7.8, release_date: "2022-07-08", mediaType: "tv", slug: "/tv/200299" },
  { id: 200300, title: "Made in Abyss", poster: getImageUrl("/miab2017.jpg"), rating: 8.4, release_date: "2017-07-07", mediaType: "tv", slug: "/tv/200300" },
];

export default tvShowsPart4;
