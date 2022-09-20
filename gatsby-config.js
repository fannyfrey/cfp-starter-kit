module.exports = {
  siteMetadata: {
    title: `cfp-starter-kit`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true,
        id: 3163029,
        sv: 6,
      },
    },
  ],
};
