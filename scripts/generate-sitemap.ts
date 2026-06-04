import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products } from '../src/data/products';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://rexvelocity.web.app';

// Define static routes
const staticRoutes = [
  '/',
  '/shop',
  '/cart',
  '/formula',
  '/reviews',
  '/locations',
  '/contact',
  '/privacy'
];

// Define dynamic routes based on products
const dynamicRoutes = products.map(product => `/product/${product.id}`);

const allRoutes = [...staticRoutes, ...dynamicRoutes];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    route => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const publicDir = path.resolve(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap.xml to public directory
const sitemapPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`Generated sitemap.xml with ${allRoutes.length} URLs at ${sitemapPath}`);
