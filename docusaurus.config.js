// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Proof of Vibes Docs',
  tagline: 'Get a deep dive into the Vibes Protocol today',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.proofofvibes.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/codingshot/pov-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/codingshot/pov-docs',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Proof of Vibes Docs',
        logo: {
          alt: 'Proof of Vibes Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📍 Start Here',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://app.ProofOfVibes.com',
            label: 'App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Learn more',
            items: [
              {
                label: 'For Council',
                to: '/docs/intro',
              },
              {
                label: 'For Tastemakers',
                to: '/docs/intro',
              },
              {
                label: 'For Vibe Seekers',
                to: '/docs/intro',
              },
              {
                label: 'For Vibees',
                to: '/docs/intro',
              },
              {
                label: 'For Contributors',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://ProofofVibes.com/telegram',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/VibesProof',
              },
              {
                label: 'BOS',
                href: 'https://ProofofVibes.com/telegram',
              },
              {
                label: 'Feedback',
                href: 'https://ProofofVibes.com/feedback',
              },
              {
                label: 'Verify Human',
                href: 'https://ProofofVibes.com/human',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'App',
                href: 'https://app.ProofOfVibes.com',
              },
              {
                label: 'Website',
                href: 'https://ProofOfVibes.com',
              },
              {
                label: 'Apply As A Tastemaker',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ProofOfVibes',
              },
              {
                label: 'VibePaper',
                href: 'https://ProofOfVibes.com/about',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Proof of VIbes`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
