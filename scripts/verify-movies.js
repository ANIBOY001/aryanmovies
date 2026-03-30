const https = require('https');
const http = require('http');

// Movie IDs from your data - testing a sample
const movieIds = [
  1198994, 1297842, 1115544, 1084242, 1327819, 1168190, 547012, 1266127,
  1290821, 1084187, 1265609, 1236153, 1088434, 634649, 1242898, 24428,
  1159559, 680493, 1367763, 573, 55663, 999136,
  1316092, 226857, 950396, 858024, 1367642, 597, 12405, 1317672,
  83533, 687163, 840464, 875828
];

// TV Show IDs
const tvIds = [
  1402, 1396, 1418, 1399, 71712, 66732, 82856, 60625,
  87739, 1416, 1622, 4057, 2734, 1431, 19885, 131927
];

const SERVERS = {
  vidking: (id) => `https://www.vidking.net/embed/movie/${id}`,
  vidsrc: (id) => `https://vidsrc.cc/v2/embed/movie/${id}`,
  vidlink: (id) => `https://vidlink.pro/movie/${id}`
};

function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { 
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      resolve({
        status: res.statusCode,
        working: res.statusCode >= 200 && res.statusCode < 400
      });
    });
    req.on('error', () => resolve({ status: 0, working: false }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ status: 0, working: false });
    });
  });
}

function checkImage(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { timeout: 5000 }, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function testMovies() {
  console.log('Testing Movies...\n');
  
  for (const id of movieIds.slice(0, 10)) {
    console.log(`Movie ID: ${id}`);
    
    // Check image
    const posterUrl = `https://image.tmdb.org/t/p/w342${getPosterPath(id)}`;
    const imageWorks = await checkImage(posterUrl);
    console.log(`  Image: ${imageWorks ? '✓' : '✗'}`);
    
    // Check servers
    for (const [name, urlFn] of Object.entries(SERVERS)) {
      const result = await checkUrl(urlFn(id));
      console.log(`  ${name}: ${result.working ? '✓' : '✗'} (${result.status})`);
    }
    console.log('');
  }
}

function getPosterPath(id) {
  // Map some known movie IDs to poster paths for testing
  const paths = {
    634649: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg', // Spider-Man
    597: '/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg', // Titanic
    24428: '/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg', // Avengers
  };
  return paths[id] || '/placeholder.jpg';
}

testMovies().catch(console.error);
