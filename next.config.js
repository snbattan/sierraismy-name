module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/about': { page: '/about' },
    '/resume': { page: '/resume' },
  }),
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
};
