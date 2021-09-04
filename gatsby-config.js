const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
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
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        // prismPreset: `night-owl`,
      },
    },
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {},
        failOnError: true,
        base64Width: 20,
        forceBase64Format: `webp`,
        backgroundColor: `transparent`,

        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
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
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "ahiravan.dev",
        acl: null,
        protocol: "https",
        hostname: "www.ahiravan.dev",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: {
          xs: "(max-width: 320px)",
          sm: "(max-width: 720px)",
          md: "(max-width: 1024px)",
          l: "(max-width: 1536px)",
          portrait: "(orientation: portrait)",
          posts_list_break: "(max-width: 550px)",
        },
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: false,
        custom: [
          {
            name: ["Iosevka Aile Web"],
            file: "/fonts/webfont-iosevka-aile-10.1.1/iosevka-aile.css",
          },
          {
            name: ["Iosevka Etoile Web"],
            file: "/fonts/webfont-iosevka-etoile-10.1.1/iosevka-etoile.css",
          }
        ],
      },
    },
    {
      // why this: https://github.com/jariz/gatsby-plugin-s3/blob/master/recipes/with-cloudfront.md
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: "https://www.ahiravan.dev",
      },
    },
    "gatsby-plugin-minify-html",
    "gatsby-plugin-brotli",
    `gatsby-plugin-perf-budgets`,
    "gatsby-plugin-webpack-bundle-analyser-v2",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
