module.exports = {
  siteMetadata: {
    title: `cfp-starter-kit`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true,
        id: 3179438,
        sv: 6,
      },
    },
  ],
};
