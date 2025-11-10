import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { join, resolve, extname, normalize } from 'path';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const ROOT_DIR = resolve('.');
const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

const sanitizePath = (unsafePath) => {
  const normalized = normalize(unsafePath).replace(/^(\.\.(\/|\\|$))+/, '');
  return normalized;
};

const sendDiscordLog = async (payload) => {
  if (!WEBHOOK_URL) {
    console.warn('DISCORD_WEBHOOK_URL non impostato: il log verrà ignorato.');
    return;
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.warn('Errore dal webhook Discord:', response.status, text);
    }
  } catch (error) {
    console.warn('Impossibile contattare Discord:', error.message);
  }
};

const server = createServer(async (req, res) => {
  try {
    if (req.method === 'POST' && req.url === '/api/contact-log') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', async () => {
        try {
          const { type, extra = {} } = body ? JSON.parse(body) : {};

          if (!type || typeof type !== 'string') {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Missing type' }));
            return;
          }

          await sendDiscordLog({
            content: `🔔 (Locale) Evento contatto: **${type}**\n${Object.entries(extra)
              .filter(([, value]) => value)
              .map(([key, value]) => `• ${key}: ${value}`)
              .join('\n')}`,
          });

          res.writeHead(204);
          res.end();
        } catch (error) {
          console.error('Errore API locale:', error);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Errore nel logging locale' }));
        }
      });
      return;
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Metodo non consentito');
      return;
    }

    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = url.pathname;

    if (pathname === '/') {
      pathname = '/index.html';
    }

    const safePath = sanitizePath(pathname);
    const filePath = join(ROOT_DIR, safePath);

    try {
      const fileStat = await stat(filePath);

      if (fileStat.isDirectory()) {
        const indexPath = join(filePath, 'index.html');
        await stat(indexPath); // verifica esistenza
        const file = await readFile(indexPath);
        res.writeHead(200, { 'Content-Type': MIME_TYPES['.html'] });
        res.end(file);
        return;
      }

      const ext = extname(filePath).toLowerCase();
      const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
      const file = await readFile(filePath);

      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(file);
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('File non trovato');
    }
  } catch (error) {
    console.error('Errore server:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Errore interno del server');
  }
});

server.listen(PORT, () => {
  console.log(`Server locale avviato su http://localhost:${PORT}`);
  console.log('Endpoint API locale: POST http://localhost:%d/api/contact-log', PORT);
});

