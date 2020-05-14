const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Robin Binder - Software Engineer`,
    description: `Check out my work and connect with me.`,
    author: `Robin Binder`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/me-cut-no-bg-512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        whitelist: [
          "fa",
          "svg-inline--fa",
          "fa-info-circle",
          "fa-w-16",
          "fa-lg ",
          "collapse",
          "navbar-collapse",
          "navbar-expand-lg",
        ],
        develop: true,
        content: [
          path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx}"),
          path.join(
            process.cwd(),
            "node_modules/reactstrap/src/!(*.d).{ts,js,jsx,tsx}"
          ),
          path.join(
            process.cwd(),
            "node_modules/@fortawesome/fontawesome-common-types/!(*.d).{ts,js,jsx,tsx}"
          ),
          path.join(
            process.cwd(),
            "node_modules/@fortawesome/fontawesome-svg-core/!(*.d).{ts,js,jsx,tsx}"
          ),
          path.join(
            process.cwd(),
            "node_modules/@fortawesome/free-regular-svg-icons/!(*.d).{ts,js,jsx,tsx}"
          ),
          path.join(
            process.cwd(),
            "node_modules/@fortawesome/react-fontawesome/!(*.d).{ts,js,jsx,tsx}"
          ),
          path.join(
            process.cwd(),
            "node_modules/@fortawesome/free-brands-svg-icons/!(*.d).{ts,js,jsx,tsx}"
          ),
          path.join(
            process.cwd(),
            "node_modules/@fortawesome/free-solid-svg-icons/!(*.d).{ts,js,jsx,tsx}"
          ),
        ],
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
