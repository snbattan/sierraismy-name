const Sitemap = require('nextjs-sitemap-generator');

Sitemap({
  baseUrl: 'https://sierraismy.name',
  nextConfigPath: `${__dirname}/next.config.js`,
  pagesConfig: {
    '/': {
      lastmod: '2021-04-24',
    },
    '/about': {
      lastmod: '2021-04-24',
    },
    '/resume': {
      lastmod: '2021-04-24',
    },
  },
  pagesDirectory: `${__dirname}/pages`,
  sitemapFilename: 'sitemap.xml',
  sitemapStylesheet: [
    {
      styleFile: '/styles/global.css',
      type: 'text/css',
    },
  ],
  targetDirectory: `${__dirname}/public/`,
});
