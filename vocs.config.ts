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
      text: 'Why We Share Masks',
      link: '/why-we-share-masks',
    },
    {
      text: 'Informational Resources',
      collapsed: false,
      items: [
        {
          text: 'General COVID Information',
          link: '/info/general-covid-information',
        },
        {
          text: 'Rapid Antigen Test Information',
          link: '/info/rapid-antigen-tests',
        },
        {
          text: 'Mask Delivery Script',
          link: '/info/mask-delivery',
        },
        {
          text: 'Other Blocs',
          link: '/info/other-blocs',
        },
      ]
    },
    {
      text: 'Calls to Action',
      collapsed: false,
      items: [
        {
          text: 'Fundraising',
          link: '/info/fundraising',
        },
      ]
    }
  ]
})
