/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Rissa Cafe`,
    description: `Catering business that specializes in homemade treats and drinks.`,
    author: `Jacob Petersen`,
    siteUrl: `https://rissaslittlecafecatering.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `cafe`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Playfair Display:400,700", "Raleway:400,700"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rissa-cafe`,
        short_name: `cafe`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/logo.svg`,
      },
    },
  ],
};
