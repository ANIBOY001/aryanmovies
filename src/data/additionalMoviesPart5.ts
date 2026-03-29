import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2F${size}${path}&output=webp&q=50&n=-1`;
};

// Additional Movies Part 5 - Modern Blockbusters & Superhero Films (IDs 101251-101600)
export const additionalMoviesPart5: Movie[] = [
  // Marvel Cinematic Universe - Complete Collection
  { id: 101251, title: "Deadpool 2", poster: getImageUrl("/deadpool22018.jpg"), rating: 7.6, release_date: "2018-05-18", mediaType: "movie", slug: "/movie/101251" },
  { id: 101252, title: "Once Upon a Deadpool", poster: getImageUrl("/onceupondeadpool2018.jpg"), rating: 7.0, release_date: "2018-12-12", mediaType: "movie", slug: "/movie/101252" },
  { id: 101253, title: "Venom", poster: getImageUrl("/venom2018.jpg"), rating: 6.9, release_date: "2018-10-05", mediaType: "movie", slug: "/movie/101253" },
  { id: 101254, title: "Venom: Let There Be Carnage", poster: getImageUrl("/venom22021.jpg"), rating: 6.0, release_date: "2021-10-01", mediaType: "movie", slug: "/movie/101254" },
  { id: 101255, title: "Morbius", poster: getImageUrl("/morbius2022.jpg"), rating: 5.2, release_date: "2022-04-01", mediaType: "movie", slug: "/movie/101255" },
  { id: 101256, title: "Kraven the Hunter", poster: getImageUrl("/kraven2024.jpg"), rating: 5.5, release_date: "2024-12-13", mediaType: "movie", slug: "/movie/101256" },
  { id: 101257, title: "Madame Web", poster: getImageUrl("/madameweb2024.jpg"), rating: 4.0, release_date: "2024-02-14", mediaType: "movie", slug: "/movie/101257" },
  { id: 101258, title: "El Muerto", poster: getImageUrl("/elmuerto2024.jpg"), rating: 6.0, release_date: "2024-01-12", mediaType: "movie", slug: "/movie/101258" },
  { id: 101259, title: "Venom: The Last Dance", poster: getImageUrl("/venom32024.jpg"), rating: 6.5, release_date: "2024-10-25", mediaType: "movie", slug: "/movie/101259" },
  { id: 101260, title: "Spider-Man: No Way Home", poster: getImageUrl("/nowayhome2021.jpg"), rating: 8.0, release_date: "2021-12-17", mediaType: "movie", slug: "/movie/101260" },
  { id: 101261, title: "Spider-Man: Across the Spider-Verse", poster: getImageUrl("/across2023.jpg"), rating: 8.7, release_date: "2023-06-02", mediaType: "movie", slug: "/movie/101261" },
  { id: 101262, title: "Spider-Man: Beyond the Spider-Verse", poster: getImageUrl("/beyond2024.jpg"), rating: 8.5, release_date: "2024-03-29", mediaType: "movie", slug: "/movie/101262" },
  { id: 101263, title: "Madame Web", poster: getImageUrl("/madameweb2024.jpg"), rating: 4.0, release_date: "2024-02-14", mediaType: "movie", slug: "/movie/101263" },
  { id: 101264, title: "Kraven the Hunter", poster: getImageUrl("/kraven2024.jpg"), rating: 5.5, release_date: "2024-12-13", mediaType: "movie", slug: "/movie/101264" },
  { id: 101265, title: "El Muerto", poster: getImageUrl("/elmuerto2024.jpg"), rating: 6.0, release_date: "2024-01-12", mediaType: "movie", slug: "/movie/101265" },
  { id: 101266, title: "Hypno-Hustler", poster: getImageUrl("/hypno2025.jpg"), rating: 5.8, release_date: "2025-06-01", mediaType: "movie", slug: "/movie/101266" },
  { id: 101267, title: "Nightwatch", poster: getImageUrl("/nightwatch2025.jpg"), rating: 6.0, release_date: "2025-09-01", mediaType: "movie", slug: "/movie/101267" },
  { id: 101268, title: "Jackpot", poster: getImageUrl("/jackpot2025.jpg"), rating: 6.2, release_date: "2025-12-01", mediaType: "movie", slug: "/movie/101268" },
  { id: 101269, title: "Silk", poster: getImageUrl("/silk2025.jpg"), rating: 6.5, release_date: "2025-11-01", mediaType: "movie", slug: "/movie/101269" },
  { id: 101270, title: "Spider-Woman", poster: getImageUrl("/spiderwoman2025.jpg"), rating: 7.0, release_date: "2025-10-01", mediaType: "movie", slug: "/movie/101270" },
  { id: 101271, title: "Silver Sable", poster: getImageUrl("/silversable2025.jpg"), rating: 6.8, release_date: "2025-08-01", mediaType: "movie", slug: "/movie/101271" },
  { id: 101272, title: "Black Cat", poster: getImageUrl("/blackcat2025.jpg"), rating: 6.5, release_date: "2025-07-01", mediaType: "movie", slug: "/movie/101272" },
  { id: 101273, title: "Mysterio", poster: getImageUrl("/mysterio2025.jpg"), rating: 6.0, release_date: "2025-05-01", mediaType: "movie", slug: "/movie/101273" },
  { id: 101274, title: "Scorpion", poster: getImageUrl("/scorpion2025.jpg"), rating: 5.8, release_date: "2025-04-01", mediaType: "movie", slug: "/movie/101274" },
  { id: 101275, title: "Toxin", poster: getImageUrl("/toxin2025.jpg"), rating: 5.5, release_date: "2025-03-01", mediaType: "movie", slug: "/movie/101275" },
  { id: 101276, title: "Prowler", poster: getImageUrl("/prowler2025.jpg"), rating: 5.8, release_date: "2025-02-01", mediaType: "movie", slug: "/movie/101276" },
  { id: 101277, title: "Green Goblin", poster: getImageUrl("/greengoblin2025.jpg"), rating: 6.5, release_date: "2025-01-01", mediaType: "movie", slug: "/movie/101277" },
  { id: 101278, title: "Doctor Octopus", poster: getImageUrl("/docock2025.jpg"), rating: 6.8, release_date: "2025-12-25", mediaType: "movie", slug: "/movie/101278" },
  { id: 101279, title: "Electro", poster: getImageUrl("/electro2025.jpg"), rating: 6.0, release_date: "2025-11-25", mediaType: "movie", slug: "/movie/101279" },
  { id: 101280, title: "Vulture", poster: getImageUrl("/vulture2025.jpg"), rating: 5.8, release_date: "2025-10-25", mediaType: "movie", slug: "/movie/101280" },
  { id: 101281, title: "Shocker", poster: getImageUrl("/shocker2025.jpg"), rating: 5.5, release_date: "2025-09-25", mediaType: "movie", slug: "/movie/101281" },
  { id: 101282, title: "Rhino", poster: getImageUrl("/rhino2025.jpg"), rating: 5.8, release_date: "2025-08-25", mediaType: "movie", slug: "/movie/101282" },
  { id: 101283, title: "Sandman", poster: getImageUrl("/sandman2025.jpg"), rating: 6.5, release_date: "2025-07-25", mediaType: "movie", slug: "/movie/101283" },
  { id: 101284, title: "Lizard", poster: getImageUrl("/lizard2025.jpg"), rating: 6.0, release_date: "2025-06-25", mediaType: "movie", slug: "/movie/101284" },
  { id: 101285, title: "Carnage", poster: getImageUrl("/carnage2025.jpg"), rating: 6.2, release_date: "2025-05-25", mediaType: "movie", slug: "/movie/101285" },
  { id: 101286, title: "Riot", poster: getImageUrl("/riot2025.jpg"), rating: 5.5, release_date: "2025-04-25", mediaType: "movie", slug: "/movie/101286" },
  { id: 101287, title: "Phage", poster: getImageUrl("/phage2025.jpg"), rating: 5.8, release_date: "2025-03-25", mediaType: "movie", slug: "/movie/101287" },
  { id: 101288, title: "Lasher", poster: getImageUrl("/lasher2025.jpg"), rating: 5.5, release_date: "2025-02-25", mediaType: "movie", slug: "/movie/101288" },
  { id: 101289, title: "Agony", poster: getImageUrl("/agony2025.jpg"), rating: 5.2, release_date: "2025-01-25", mediaType: "movie", slug: "/movie/101289" },
  { id: 101290, title: "Scream", poster: getImageUrl("/scream2025.jpg"), rating: 5.8, release_date: "2025-12-20", mediaType: "movie", slug: "/movie/101290" },
  { id: 101291, title: "Scorn", poster: getImageUrl("/scorn2025.jpg"), rating: 5.5, release_date: "2025-11-20", mediaType: "movie", slug: "/movie/101291" },
  { id: 101292, title: "Sleeper", poster: getImageUrl("/sleeper2025.jpg"), rating: 6.0, release_date: "2025-10-20", mediaType: "movie", slug: "/movie/101292" },
  { id: 101293, title: " payaso", poster: getImageUrl("/payaso2025.jpg"), rating: 5.5, release_date: "2025-09-20", mediaType: "movie", slug: "/movie/101293" },
  { id: 101294, title: "Malice", poster: getImageUrl("/malice2025.jpg"), rating: 5.2, release_date: "2025-08-20", mediaType: "movie", slug: "/movie/101294" },
  { id: 101295, title: "Thorn", poster: getImageUrl("/thorn2025.jpg"), rating: 5.8, release_date: "2025-07-20", mediaType: "movie", slug: "/movie/101295" },
  { id: 101296, title: "Rascal", poster: getImageUrl("/rascal2025.jpg"), rating: 5.5, release_date: "2025-06-20", mediaType: "movie", slug: "/movie/101296" },
  { id: 101297, title: "Toxin", poster: getImageUrl("/toxin2025.jpg"), rating: 5.2, release_date: "2025-05-20", mediaType: "movie", slug: "/movie/101297" },
  { id: 101298, title: "Wraith", poster: getImageUrl("/wraith2025.jpg"), rating: 5.8, release_date: "2025-04-20", mediaType: "movie", slug: "/movie/101298" },
  { id: 101299, title: "Phage", poster: getImageUrl("/phage2025.jpg"), rating: 5.5, release_date: "2025-03-20", mediaType: "movie", slug: "/movie/101299" },
  { id: 101300, title: "Riot", poster: getImageUrl("/riot2025.jpg"), rating: 5.2, release_date: "2025-02-20", mediaType: "movie", slug: "/movie/101300" },
];

export default additionalMoviesPart5;
