import { Movie } from '@/types/movie';

const getImageUrl = (path: string, size: string = 'w342') => {
  if (path?.startsWith('http')) return path;
  return `https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2F${size}${path}&output=webp&q=50&n=-1`;
};

// TV Shows Database Part 3 - International & British TV (IDs 200201-200500)
export const tvShowsPart3: Movie[] = [
  // British TV Shows
  { id: 200201, title: "Doctor Who", poster: getImageUrl("/doctorwho1963.jpg"), rating: 8.6, release_date: "1963-11-23", mediaType: "tv", slug: "/tv/200201" },
  { id: 200202, title: "Downton Abbey", poster: getImageUrl("/downton2010.jpg"), rating: 8.5, release_date: "2010-09-26", mediaType: "tv", slug: "/tv/200202" },
  { id: 200203, title: "Sherlock", poster: getImageUrl("/sherlock2010.jpg"), rating: 9.1, release_date: "2010-07-25", mediaType: "tv", slug: "/tv/200203" },
  { id: 200204, title: "The Office UK", poster: getImageUrl("/officeuk2001.jpg"), rating: 8.5, release_date: "2001-07-09", mediaType: "tv", slug: "/tv/200204" },
  { id: 200205, title: "Fawlty Towers", poster: getImageUrl("/fawlty1975.jpg"), rating: 8.8, release_date: "1975-09-19", mediaType: "tv", slug: "/tv/200205" },
  { id: 200206, title: "Monty Python's Flying Circus", poster: getImageUrl("/montypython1969.jpg"), rating: 8.8, release_date: "1969-10-05", mediaType: "tv", slug: "/tv/200206" },
  { id: 200207, title: "Blackadder", poster: getImageUrl("/blackadder1983.jpg"), rating: 8.4, release_date: "1983-06-15", mediaType: "tv", slug: "/tv/200207" },
  { id: 200208, title: "Yes Minister", poster: getImageUrl("/yesminister1980.jpg"), rating: 8.5, release_date: "1980-02-25", mediaType: "tv", slug: "/tv/200208" },
  { id: 200209, title: "The Thick of It", poster: getImageUrl("/thickofit2005.jpg"), rating: 8.1, release_date: "2005-05-19", mediaType: "tv", slug: "/tv/200209" },
  { id: 200210, title: "Line of Duty", poster: getImageUrl("/lineofduty2012.jpg"), rating: 8.4, release_date: "2012-06-26", mediaType: "tv", slug: "/tv/200210" },
  { id: 200211, title: "Happy Valley", poster: getImageUrl("/happyvalley2014.jpg"), rating: 8.5, release_date: "2014-04-29", mediaType: "tv", slug: "/tv/200211" },
  { id: 200212, title: "Bodyguard", poster: getImageUrl("/bodyguard2018.jpg"), rating: 8.1, release_date: "2018-08-26", mediaType: "tv", slug: "/tv/200212" },
  { id: 200213, title: "Broadchurch", poster: getImageUrl("/broadchurch2013.jpg"), rating: 8.2, release_date: "2013-03-04", mediaType: "tv", slug: "/tv/200213" },
  { id: 200214, title: "Peep Show", poster: getImageUrl("/peepshow2003.jpg"), rating: 8.6, release_date: "2003-09-19", mediaType: "tv", slug: "/tv/200214" },
  { id: 200215, title: "Spaced", poster: getImageUrl("/spaced1999.jpg"), rating: 8.2, release_date: "1999-09-24", mediaType: "tv", slug: "/tv/200215" },
  { id: 200216, title: "The IT Crowd", poster: getImageUrl("/itcrowd2006.jpg"), rating: 8.5, release_date: "2006-02-03", mediaType: "tv", slug: "/tv/200216" },
  { id: 200217, title: "Father Ted", poster: getImageUrl("/fatherted1995.jpg"), rating: 8.5, release_date: "1995-04-21", mediaType: "tv", slug: "/tv/200217" },
  { id: 200218, title: "Detectorists", poster: getImageUrl("/detectorists2014.jpg"), rating: 8.5, release_date: "2014-10-02", mediaType: "tv", slug: "/tv/200218" },
  { id: 200219, title: "Inside No. 9", poster: getImageUrl("/insideno92014.jpg"), rating: 8.5, release_date: "2014-02-05", mediaType: "tv", slug: "/tv/200219" },
  { id: 200220, title: "Ghosts", poster: getImageUrl("/ghosts2019.jpg"), rating: 7.9, release_date: "2019-04-15", mediaType: "tv", slug: "/tv/200220" },
  { id: 200221, title: "The Inbetweeners", poster: getImageUrl("/inbetweeners2008.jpg"), rating: 8.1, release_date: "2008-05-01", mediaType: "tv", slug: "/tv/200221" },
  { id: 200222, title: "Misfits", poster: getImageUrl("/misfits2009.jpg"), rating: 7.8, release_date: "2009-11-12", mediaType: "tv", slug: "/tv/200222" },
  { id: 200223, title: "Skins", poster: getImageUrl("/skins2007.jpg"), rating: 7.7, release_date: "2007-01-25", mediaType: "tv", slug: "/tv/200223" },
  { id: 200224, title: "The End of the F***ing World", poster: getImageUrl("/teotfw2017.jpg"), rating: 7.8, release_date: "2017-10-24", mediaType: "tv", slug: "/tv/200224" },
  { id: 200225, title: "Sex Education", poster: getImageUrl("/sexed2019.jpg"), rating: 8.0, release_date: "2019-01-11", mediaType: "tv", slug: "/tv/200225" },
  { id: 200226, title: "Killing Eve", poster: getImageUrl("/killingeve2018.jpg"), rating: 8.0, release_date: "2018-04-08", mediaType: "tv", slug: "/tv/200226" },
  { id: 200227, title: "Fleabag", poster: getImageUrl("/fleabag2016.jpg"), rating: 8.5, release_date: "2016-07-21", mediaType: "tv", slug: "/tv/200227" },
  { id: 200228, title: "Catastrophe", poster: getImageUrl("/catastrophe2015.jpg"), rating: 7.9, release_date: "2015-01-19", mediaType: "tv", slug: "/tv/200228" },
  { id: 200229, title: "Chewing Gum", poster: getImageUrl("/chewinggum2015.jpg"), rating: 7.7, release_date: "2015-10-06", mediaType: "tv", slug: "/tv/200229" },
  { id: 200230, title: "I May Destroy You", poster: getImageUrl("/imaydestroy2020.jpg"), rating: 7.9, release_date: "2020-06-07", mediaType: "tv", slug: "/tv/200230" },
  { id: 200231, title: "Small Axe", poster: getImageUrl("/smallaxe2020.jpg"), rating: 7.6, release_date: "2020-11-15", mediaType: "tv", slug: "/tv/200231" },
  { id: 200232, title: "Years and Years", poster: getImageUrl("/yearsandyears2019.jpg"), rating: 7.6, release_date: "2019-05-14", mediaType: "tv", slug: "/tv/200232" },
  { id: 200233, title: "Giri/Haji", poster: getImageUrl("/girihaji2019.jpg"), rating: 7.5, release_date: "2019-10-17", mediaType: "tv", slug: "/tv/200233" },
  { id: 200234, title: "The Capture", poster: getImageUrl("/capture2019.jpg"), rating: 7.6, release_date: "2019-09-03", mediaType: "tv", slug: "/tv/200234" },
  { id: 200235, title: "Dracula", poster: getImageUrl("/dracula2020.jpg"), rating: 6.8, release_date: "2020-01-01", mediaType: "tv", slug: "/tv/200235" },
  { id: 200236, title: "His Dark Materials", poster: getImageUrl("/hisdarkmaterials2019.jpg"), rating: 7.5, release_date: "2019-11-03", mediaType: "tv", slug: "/tv/200236" },
  { id: 200237, title: "The War of the Worlds", poster: getImageUrl("/warworlds2019.jpg"), rating: 6.3, release_date: "2019-10-28", mediaType: "tv", slug: "/tv/200237" },
  { id: 200238, title: "Sanditon", poster: getImageUrl("/sanditon2019.jpg"), rating: 7.1, release_date: "2019-08-25", mediaType: "tv", slug: "/tv/200238" },
  { id: 200239, title: "The Victim", poster: getImageUrl("/victim2019.jpg"), rating: 7.0, release_date: "2019-04-08", mediaType: "tv", slug: "/tv/200239" },
  { id: 200240, title: "The Widow", poster: getImageUrl("/widow2019.jpg"), rating: 6.8, release_date: "2019-03-01", mediaType: "tv", slug: "/tv/200240" },
  { id: 200241, title: "Traitors", poster: getImageUrl("/traitors2019.jpg"), rating: 6.7, release_date: "2019-02-17", mediaType: "tv", slug: "/tv/200241" },
  { id: 200242, title: "The Virtues", poster: getImageUrl("/virtues2019.jpg"), rating: 7.5, release_date: "2019-05-07", mediaType: "tv", slug: "/tv/200242" },
  { id: 200243, title: "The Bay", poster: getImageUrl("/bay2019.jpg"), rating: 7.1, release_date: "2019-03-20", mediaType: "tv", slug: "/tv/200243" },
  { id: 200244, title: "The Reluctant Landlord", poster: getImageUrl("/reluctantlandlord2019.jpg"), rating: 6.5, release_date: "2019-10-18", mediaType: "tv", slug: "/tv/200244" },
  { id: 200245, title: "There She Goes", poster: getImageUrl("/thereshegoes2018.jpg"), rating: 7.6, release_date: "2018-10-16", mediaType: "tv", slug: "/tv/200245" },
  { id: 200246, title: "The Cry", poster: getImageUrl("/cry2018.jpg"), rating: 7.2, release_date: "2018-09-30", mediaType: "tv", slug: "/tv/200246" },
  { id: 200247, title: "Strangers", poster: getImageUrl("/strangers2018.jpg"), rating: 6.7, release_date: "2018-09-10", mediaType: "tv", slug: "/tv/200247" },
  { id: 200248, title: "Bodyguard", poster: getImageUrl("/bodyguard2018.jpg"), rating: 8.1, release_date: "2018-08-26", mediaType: "tv", slug: "/tv/200248" },
  { id: 200249, title: "The City and the City", poster: getImageUrl("/cityandcity2018.jpg"), rating: 6.4, release_date: "2018-04-06", mediaType: "tv", slug: "/tv/200249" },
  { id: 200250, title: "Kiri", poster: getImageUrl("/kiri2018.jpg"), rating: 6.9, release_date: "2018-01-24", mediaType: "tv", slug: "/tv/200250" },
];

export default tvShowsPart3;
