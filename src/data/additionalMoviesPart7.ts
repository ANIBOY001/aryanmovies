import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2F${size}${path}&output=webp&q=50&n=-1`;
};

// Additional Movies Part 7 - Action & Adventure Films (IDs 101351-101750)
export const additionalMoviesPart7: Movie[] = [
  // Classic Action Films
  { id: 101351, title: "Die Hard", poster: getImageUrl("/diehard1988.jpg"), rating: 8.2, release_date: "1988-07-15", mediaType: "movie", slug: "/movie/101351" },
  { id: 101352, title: "Die Hard 2", poster: getImageUrl("/diehard21990.jpg"), rating: 7.1, release_date: "1990-07-04", mediaType: "movie", slug: "/movie/101352" },
  { id: 101353, title: "Die Hard with a Vengeance", poster: getImageUrl("/diehard31995.jpg"), rating: 7.6, release_date: "1995-05-19", mediaType: "movie", slug: "/movie/101353" },
  { id: 101354, title: "Live Free or Die Hard", poster: getImageUrl("/diehard42007.jpg"), rating: 7.1, release_date: "2007-06-27", mediaType: "movie", slug: "/movie/101354" },
  { id: 101355, title: "A Good Day to Die Hard", poster: getImageUrl("/diehard52013.jpg"), rating: 5.3, release_date: "2013-02-14", mediaType: "movie", slug: "/movie/101355" },
  { id: 101356, title: "Lethal Weapon", poster: getImageUrl("/lethalweapon1987.jpg"), rating: 7.6, release_date: "1987-03-06", mediaType: "movie", slug: "/movie/101356" },
  { id: 101357, title: "Lethal Weapon 2", poster: getImageUrl("/lethalweapon21989.jpg"), rating: 7.2, release_date: "1989-07-07", mediaType: "movie", slug: "/movie/101357" },
  { id: 101358, title: "Lethal Weapon 3", poster: getImageUrl("/lethalweapon31992.jpg"), rating: 6.7, release_date: "1992-05-15", mediaType: "movie", slug: "/movie/101358" },
  { id: 101359, title: "Lethal Weapon 4", poster: getImageUrl("/lethalweapon41998.jpg"), rating: 6.6, release_date: "1998-07-10", mediaType: "movie", slug: "/movie/101359" },
  { id: 101360, title: "Speed", poster: getImageUrl("/speed1994.jpg"), rating: 7.3, release_date: "1994-06-10", mediaType: "movie", slug: "/movie/101360" },
  { id: 101361, title: "Speed 2: Cruise Control", poster: getImageUrl("/speed21997.jpg"), rating: 4.5, release_date: "1997-06-13", mediaType: "movie", slug: "/movie/101361" },
  { id: 101362, title: "Point Break", poster: getImageUrl("/pointbreak1991.jpg"), rating: 7.2, release_date: "1991-07-12", mediaType: "movie", slug: "/movie/101362" },
  { id: 101363, title: "The Matrix", poster: getImageUrl("/matrix1999.jpg"), rating: 8.7, release_date: "1999-03-31", mediaType: "movie", slug: "/movie/101363" },
  { id: 101364, title: "The Matrix Reloaded", poster: getImageUrl("/matrix22003.jpg"), rating: 7.2, release_date: "2003-05-15", mediaType: "movie", slug: "/movie/101364" },
  { id: 101365, title: "The Matrix Revolutions", poster: getImageUrl("/matrix32003.jpg"), rating: 6.8, release_date: "2003-11-05", mediaType: "movie", slug: "/movie/101365" },
  { id: 101366, title: "The Matrix Resurrections", poster: getImageUrl("/matrix42021.jpg"), rating: 5.7, release_date: "2021-12-22", mediaType: "movie", slug: "/movie/101366" },
  { id: 101367, title: "Terminator 2: Judgment Day", poster: getImageUrl("/t21991.jpg"), rating: 8.6, release_date: "1991-07-03", mediaType: "movie", slug: "/movie/101367" },
  { id: 101368, title: "Terminator 3: Rise of the Machines", poster: getImageUrl("/t32003.jpg"), rating: 6.3, release_date: "2003-07-02", mediaType: "movie", slug: "/movie/101368" },
  { id: 101369, title: "Terminator Salvation", poster: getImageUrl("/ts2009.jpg"), rating: 5.9, release_date: "2009-05-21", mediaType: "movie", slug: "/movie/101369" },
  { id: 101370, title: "Terminator Genisys", poster: getImageUrl("/genisys2015.jpg"), rating: 6.3, release_date: "2015-07-01", mediaType: "movie", slug: "/movie/101370" },
  { id: 101371, title: "Terminator: Dark Fate", poster: getImageUrl("/darkfate2019.jpg"), rating: 6.2, release_date: "2019-11-01", mediaType: "movie", slug: "/movie/101371" },
  { id: 101372, title: "Predator", poster: getImageUrl("/predator1987.jpg"), rating: 7.8, release_date: "1987-06-12", mediaType: "movie", slug: "/movie/101372" },
  { id: 101373, title: "Predator 2", poster: getImageUrl("/predator21990.jpg"), rating: 6.3, release_date: "1990-11-21", mediaType: "movie", slug: "/movie/101373" },
  { id: 101374, title: "Predators", poster: getImageUrl("/predators2010.jpg"), rating: 6.4, release_date: "2010-07-09", mediaType: "movie", slug: "/movie/101374" },
  { id: 101375, title: "The Predator", poster: getImageUrl("/predator2018.jpg"), rating: 5.3, release_date: "2018-09-14", mediaType: "movie", slug: "/movie/101375" },
  { id: 101376, title: "Prey", poster: getImageUrl("/prey2022.jpg"), rating: 7.1, release_date: "2022-08-05", mediaType: "movie", slug: "/movie/101376" },
  { id: 101377, title: "Alien vs. Predator", poster: getImageUrl("/avp2004.jpg"), rating: 5.6, release_date: "2004-08-13", mediaType: "movie", slug: "/movie/101377" },
  { id: 101378, title: "Aliens vs. Predator: Requiem", poster: getImageUrl("/avpr2007.jpg"), rating: 4.7, release_date: "2007-12-25", mediaType: "movie", slug: "/movie/101378" },
  { id: 101379, title: "Commando", poster: getImageUrl("/commando1985.jpg"), rating: 6.7, release_date: "1985-10-04", mediaType: "movie", slug: "/movie/101379" },
  { id: 101380, title: "Total Recall", poster: getImageUrl("/totalrecall1990.jpg"), rating: 7.5, release_date: "1990-06-01", mediaType: "movie", slug: "/movie/101380" },
  { id: 101381, title: "RoboCop", poster: getImageUrl("/robocop1987.jpg"), rating: 7.6, release_date: "1987-07-17", mediaType: "movie", slug: "/movie/101381" },
  { id: 101382, title: "RoboCop 2", poster: getImageUrl("/robocop21990.jpg"), rating: 5.8, release_date: "1990-06-22", mediaType: "movie", slug: "/movie/101382" },
  { id: 101383, title: "RoboCop 3", poster: getImageUrl("/robocop31993.jpg"), rating: 4.1, release_date: "1993-11-05", mediaType: "movie", slug: "/movie/101383" },
  { id: 101384, title: "Starship Troopers", poster: getImageUrl("/starshiptroopers1997.jpg"), rating: 7.3, release_date: "1997-11-07", mediaType: "movie", slug: "/movie/101384" },
  { id: 101385, title: "Hollow Man", poster: getImageUrl("/hollowman2000.jpg"), rating: 6.0, release_date: "2000-08-04", mediaType: "movie", slug: "/movie/101385" },
  { id: 101386, title: "Basic Instinct", poster: getImageUrl("/basicinstinct1992.jpg"), rating: 7.0, release_date: "1992-03-20", mediaType: "movie", slug: "/movie/101386" },
  { id: 101387, title: "Sliver", poster: getImageUrl("/sliver1993.jpg"), rating: 5.0, release_date: "1993-05-21", mediaType: "movie", slug: "/movie/101387" },
  { id: 101388, title: "Showgirls", poster: getImageUrl("/showgirls1995.jpg"), rating: 4.8, release_date: "1995-09-22", mediaType: "movie", slug: "/movie/101388" },
  { id: 101389, title: "Starship Troopers", poster: getImageUrl("/starshiptroopers1997.jpg"), rating: 7.3, release_date: "1997-11-07", mediaType: "movie", slug: "/movie/101389" },
  { id: 101390, title: "Hollow Man", poster: getImageUrl("/hollowman2000.jpg"), rating: 6.0, release_date: "2000-08-04", mediaType: "movie", slug: "/movie/101390" },
  { id: 101391, title: "Black Book", poster: getImageUrl("/blackbook2006.jpg"), rating: 7.7, release_date: "2006-09-14", mediaType: "movie", slug: "/movie/101391" },
  { id: 101392, title: "Elle", poster: getImageUrl("/elle2016.jpg"), rating: 7.1, release_date: "2016-09-21", mediaType: "movie", slug: "/movie/101392" },
  { id: 101393, title: "Benedetta", poster: getImageUrl("/benedetta2021.jpg"), rating: 6.7, release_date: "2021-07-09", mediaType: "movie", slug: "/movie/101393" },
  { id: 101394, title: "Tricked", poster: getImageUrl("/tricked2012.jpg"), rating: 6.5, release_date: "2012-09-26", mediaType: "movie", slug: "/movie/101394" },
  { id: 101395, title: "Steekspel", poster: getImageUrl("/steekspel2012.jpg"), rating: 6.0, release_date: "2012-03-08", mediaType: "movie", slug: "/movie/101395" },
  { id: 101396, title: "Gangsterboys", poster: getImageUrl("/gangsterboys2010.jpg"), rating: 4.8, release_date: "2010-02-25", mediaType: "movie", slug: "/movie/101396" },
  { id: 101397, title: "Sint", poster: getImageUrl("/sint2010.jpg"), rating: 5.7, release_date: "2010-11-11", mediaType: "movie", slug: "/movie/101397" },
  { id: 101398, title: "De Vliegende Hollander", poster: getImageUrl("/vliegende1995.jpg"), rating: 6.1, release_date: "1995-02-16", mediaType: "movie", slug: "/movie/101398" },
  { id: 101399, title: "Flodder", poster: getImageUrl("/flodder1986.jpg"), rating: 6.4, release_date: "1986-12-17", mediaType: "movie", slug: "/movie/101399" },
  { id: 101400, title: "De Lift", poster: getImageUrl("/delift1983.jpg"), rating: 6.0, release_date: "1983-05-11", mediaType: "movie", slug: "/movie/101400" },
];

export default additionalMoviesPart7;
