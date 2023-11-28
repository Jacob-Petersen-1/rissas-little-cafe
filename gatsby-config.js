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
    title: `Rissa's Little Cafe - Catering with Homegoods`,
    description: `Welcome to Rissa's Little Cafe, where we offer catering with homegoods. Explore our delicious menu and follow us on social media for the latest updates.`,
    author: `Jacob Petersen`,
    siteUrl: `https://rissaslittlecafecatering.netlify.app/`,
    image: `${__dirname}/static/images/defaultImage.jpg`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `carousel`,
        path: `${__dirname}/content/carousel`,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `cafe/`,
      },
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        transformTypes: [`CloudinaryMedia`],
      },
    },

    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Playfair Display:400,700", "Raleway:400,700", "Agbalumo"],
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
