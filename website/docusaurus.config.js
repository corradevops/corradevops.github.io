module.exports = {
  title: 'Corradevops',
  tagline: 'Corra Devops Project.',
  url: 'https://corradevops.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'corradevops',
  projectName: 'corradevops.github.io',
  themeConfig: {
    navbar: {
      title: 'Corra Devops',
      logo: {
        alt: 'Corra Devops Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/corradevops/corradevops.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'About',
              to: 'about',
            },
            {
              label: 'Corra',
              href: 'https://corra.com/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/corradevops',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/gocorra',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Corra, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/corradevops/corradevops.github.io/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
