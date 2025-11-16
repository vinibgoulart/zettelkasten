const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const locales = ['en'];

const localeConfigs = {
  en: {
    label: 'English',
  },
};

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales,
    localeConfigs,
  },
  title: 'blazu',
  tagline: `Thoughts and Blog`,
  url: 'https://blazu.dev',
  baseUrl: '/zettelkasten',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icons/favicon.ico',
  organizationName: 'vinibgoulart',
  projectName: 'zettelkasten',
  onBrokenLinks: 'log',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    require.resolve('./sitePlugin'),
    require.resolve('@cmfcmf/docusaurus-search-local', { language: 'pt-BR' }),
  ],

  themeConfig: {
    navbar: {
      title: 'Home',
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'Contents',
        },
        {
          to: '/docs/tags/',
          position: 'left',
          label: 'Tags',
        },
        {
          href: 'https://github.com/vinibgoulart',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Intro',
              to: '/docs/about',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vinibgoulart',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/vinibgoulart/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
