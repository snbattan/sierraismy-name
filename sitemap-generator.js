// eslint-disable-next-line import/no-extraneous-dependencies
const Sitemap = require('nextjs-sitemap-generator');

const lastmod = new Date().toISOString().split('T')[0];

Sitemap({
  baseUrl: 'https://sierraismy.name',
  nextConfigPath: `${__dirname}/next.config.js`,
  pagesConfig: {
    '/': { lastmod },
    '/resume': { lastmod },
  },
  pagesDirectory: `${__dirname}/app`,
  sitemapFilename: 'sitemap.xml',
  sitemapStylesheet: [
    {
      styleFile: '/styles/global.css',
      type: 'text/css',
    },
  ],
  targetDirectory: `${__dirname}/components/`,
});
