import fs from 'fs';
import { globby } from 'globby';

const addPage = (page) => {
  // remove unneeded segments of the page file path - for example: 'src/app/home/page.tsx' becomes '/home'
  const pathname = page.replace('src/app', '').replace('/page.tsx', '');

  // insert extra logic here to handle specific pages differently if needed
  // for example - fetching dynamic page names from a database or ignoring specific pages
  // ........

  return `<url>
    <loc>${`https://enactussheffield.org${pathname}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>`;
};

const generateSitemap = async () => {
  // get all page paths in the app router
  const pages = await globby(['src/app/**/page.tsx']);

  // generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(addPage).join('\n')}
  </urlset>`;

  // write sitemap file to public folder - will be available at root url - for example: https://example.com/sitemap.xml
  try {
    // Create public directory if it doesn't exist
    if (!fs.existsSync('public')) {
      fs.mkdirSync('public', { recursive: true });
    }
    fs.writeFileSync('public/sitemap.xml', sitemap);
  } catch (error) {
    console.error('Error writing sitemap file:', error);
  }
};

// Use async IIFE to handle top-level await
(async () => {
  await generateSitemap();
})();