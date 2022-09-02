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
          editUrl: 'https://github.com/arifszn/pandora/edit/main/website',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'redoc-nested',
            spec: 'https://raw.githubusercontent.com/arifszn/pandora/main/public/openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#5d0fd2',
          primaryColorDark: '#b894d6',
        },
      },
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
        respectPrefersColorScheme: false,
      },
      prism: {
        additionalLanguages: ['php', 'yaml'],
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
