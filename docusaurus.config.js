module.exports = {
  title: "Hala News",
  tagline: "A application for WordPress website",
  url: "https://noncheat.github.io",
  baseUrl: "/halanews-document/",
  favicon: "img/favicon.ico",
  organizationName: "noncheat", // Usually your GitHub org/user name.
  projectName: "halanews-document", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Hala News",
      logo: {
        alt: "Hala News Logo",
        src: "img/favicon.ico"
      },
      items: [
        { to: "docs/introduction", label: "Docs", position: "right" },
        {
          href: "https://noncheat.com/blog",
          label: "Blog",
          position: "right"
        },
        { to: "docs/contact", label: "Help", position: "right" }
      ]
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Noncheat`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarCollapsible: false,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
