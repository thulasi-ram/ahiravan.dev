const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Ahiravan's Home`,
    description: `Ahiravan's home, blog and musings.`,
    author: `@ahiravan1`,
    siteUrl: "https://ahiravan.dev",
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/ahiravan1`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/thulasi-ram`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-theme-blog-core`,
      options: {
        basePath: `/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/svgs/`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // `gatsby-theme-style-guide`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ahiravan's Portfolio`,
        short_name: `Ahiravan home and blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        lang: `en`,
        icon: `src/images/favicon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {},
    },
    // {
    //   resolve: "gatsby-plugin-transition-link",
    //   options: {
    //     layout: require.resolve(`./src/components/layout.js`),
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-lodash`,
    //   options: {},
    // },
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-minify-html",
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "ahiravan.dev",
        acl: null,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
