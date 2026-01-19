/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://amit-web-solution-company-website-n.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/icon.png'], // exclude unnecessary files
  changefreq: 'daily',
  priority: 0.8,
};
