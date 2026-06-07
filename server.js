const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT       = 3000;
const PUBLIC_DIR = __dirname;
const FRAMES_DIR = 'C:\\Users\\HP\\Downloads\\ezgif-new';

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  let filePath;
  if (urlPath.startsWith('/frames/')) {
    filePath = path.join(FRAMES_DIR, urlPath.replace('/frames/', ''));
  } else {
    filePath = path.join(PUBLIC_DIR, urlPath);
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    const ext  = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    let cacheHeader = 'public, max-age=86400';
    if (ext === '.html' || ext === '.css' || ext === '.js') {
      cacheHeader = 'no-store';
    }
    res.writeHead(200, { 'Content-Type': mime, 'Cache-Control': cacheHeader });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('\n🏎️  DRIFT Racing — Scroll Experience');
  console.log(`   ➜  http://localhost:${PORT}\n`);
});
