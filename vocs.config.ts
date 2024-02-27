import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'CLT Mask Bloc',
  iconUrl: '/favicon.ico',
  sidebar: [
    {
      text: 'Home Page',
      link: '/home-page',
    },
    {
      text: 'Informational Resources',
      collapsed: false,
      items: [
        {
          text: 'Why we share masks',
          link: '/info/why-we-share-masks',
        },
        {
          text: 'Rapid Antigen Test Information',
          link: '/info/rapid-antigen-tests',
        },
      ]
    },
  ]
})
