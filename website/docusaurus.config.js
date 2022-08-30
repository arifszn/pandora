// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/palenight');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pandora',
  tagline: 'REST API starter kit powered by Laravel, OpenAPI, Sanctum.',
  url: 'https://arifszn.github.io',
  baseUrl: '/pandora/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  customFields: {
    description:
      'Pandora is a modern, customized, feature-rich API starter kit to kickstart your next REST API backend.',
  },

  // GitHub pages deployment config.
  organizationName: 'arifszn',
  projectName: 'pandora',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/arifszn/pandora/tree/main/website',
        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Pandora',
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/arifszn/pandora',
            position: 'right',
            'aria-label': 'GitHub repository',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/arifszn" target="_blank">Ariful Alam</a>`,
      },
      metadata: [
        {
          name: 'Pandora',
          content: 'REST API starter kit powered by Laravel, OpenAPI, Sanctum.',
        },
      ],
      image: 'img/logo.svg',
      announcementBar: {
        id: 'pandoraAnnouncementBar-1', // Increment on change
        content:
          '⭐️If you like Pandora, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/arifszn/pandora">GitHub</a> ⭐️',
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs',
            to: '/docs/introduction',
          },
        ],
      },
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
};

module.exports = config;
