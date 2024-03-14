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
          text: 'Why We Share Masks',
          link: '/info/why-we-share-masks',
        },
        {
          text: 'Rapid Antigen Test Information',
          link: '/info/rapid-antigen-tests',
        },
        {
          text: 'Mask Delivery Information',
          link: '/info/mask-delivery',
        },
        {
          text: 'Quarantine Info',
          link: '/info/quarantine-info',
        },
      ]
    },
  ]
})
