const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

let plugins = [
  `gatsby-plugin-preact`,
  `gatsby-plugin-theme-ui`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-theme-blog-core`,
    options: {
      basePath: `/blog/`,
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
      path: `${__dirname}/src/images/`,
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
  // `gatsby-transformer-sharp`,
  // `gatsby-plugin-image`,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.md`, `.mdx`],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {},
        },
      ],
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
  // "gatsby-plugin-emotion",
  {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "ahiravan.dev",
      acl: null,
      protocol: "https",
      hostname: "ahiravan.dev",
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [process.env.GA_TRACKING_ID, process.env.GTM_TRACKING_ID],
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
      // mode: "render-blocking",
      enableListener: true,
      preconnect: ["https://fonts.gstatic.com"],
      custom: [
        // {
        //   name: ["Iosevka Aile Web"],
        //   file: "/fonts/webfont-iosevka-aile-10.1.1/iosevka-aile.css",
        // },
        // {
        //   name: ["Iosevka Etoile Web"],
        //   file: "/fonts/webfont-iosevka-etoile-10.1.1/iosevka-etoile.css",
        // },
        // {
        //   name: ["Iosevka Aile Optimized", "Iosevka Etoile Optimized"],
        //   file: "/fonts/iosevka-optimized-10.1.1/font.min.css",
        // },
      ],
      web: [
        // {
        //   name: "Poppins",
        //   file: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap",
        // },
        {
          name: "DM Sans",
          file: "https://fonts.googleapis.com/css2?family=DM+Sans",
        },
        // {
        //   name: "Roboto Mono",
        //   file: "https://fonts.googleapis.com/css2?family=Roboto+Mono",
        // },
        // {
        //   name: "DM Mono",
        //   file: "https://fonts.googleapis.com/css2?family=DM+Mono",
        // },
        {
          name: "JetBrains Mono",
          file: "https://fonts.googleapis.com/css2?family=JetBrains+Mono",
        },
        // {
        //   name: "Karla",
        //   file: "https://fonts.googleapis.com/css2?family=Karla",
        // },
        // {
        //   name: "Outfit",
        //   file: "https://fonts.googleapis.com/css2?family=Outfit",
        // },
        // {
        //   name: "Rokkitt",
        //   file: "https://fonts.googleapis.com/css2?family=Rokkitt",
        // },
        // {
        //   name: "Mulish",
        //   file: "https://fonts.googleapis.com/css2?family=Mulish",
        // },
        // {
        //   name: "Lora",
        //   file: "https://fonts.googleapis.com/css2?family=Lora",
        // },
        // {
        //   name: "Podkova",
        //   file: "https://fonts.googleapis.com/css2?family=Podkova",
        // },
        // {
        //   name: "Space Mono",
        //   file: "https://fonts.googleapis.com/css2?family=Space+Mono",
        // },
        // {
        //   name: "Noto Sans Mono",
        //   file: "https://fonts.googleapis.com/css2?family=Noto+Sans+Mono",
        // },
        // {
        //   name: "Sen",
        //   file: "https://fonts.googleapis.com/css2?family=Sen",
        // },
      ],
    },
  },
  {
    // why this: https://github.com/jariz/gatsby-plugin-s3/blob/master/recipes/with-cloudfront.md
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: "https://ahiravan.dev",
    },
  },
  // "gatsby-plugin-no-sourcemaps",
  // ,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
  // {
  //   resolve: "@sentry/gatsby",
  //   options: {
  //     dsn: process.env.SENTRY_DSN
  //   },
  // },
  "gatsby-plugin-brotli",

  {
    resolve: "gatsby-plugin-zopfli",
    options: {
      extensions: ["css", "html", "js", "svg"],
    },
  },
]

if (!process.env.CI) {
  plugins.push("gatsby-plugin-perf-budgets")
  plugins.push("gatsby-plugin-webpack-bundle-analyser-v2")
}

module.exports = {
  siteMetadata: {
    title: `Ahiravan's Home`,
    description: `Ahiravan's home, blog and musings.`,
    author: `@0x12c_`,
    siteUrl: "https://ahiravan.dev",
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/0x12c_`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/thulasi-ram`,
      },
    ],
  },
  plugins: plugins,
}
