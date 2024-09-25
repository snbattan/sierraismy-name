const nextConfig = {
  output: 'export',
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
