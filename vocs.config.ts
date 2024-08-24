import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'CLT Mask Bloc',
  iconUrl: '/favicon.ico',
  sidebar: [
    {
      text: 'Home Page',
      link: '/',
    },
    {
      text: 'Why We Share Masks',
      link: '/why-we-share-masks',
    },
    {
      text: 'Media',
      link: '/media',
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
      text: 'How To Guides',
      collapsed: false,
      items: [
        {
          text: 'How To Set Up An Open Collective',
          link: '/how-to-guides/how-to-set-up-an-open-collective',
        },
        {
          text: 'How To Make A Site Like This',
          link: '/how-to-guides/how-to-make-a-site-like-this',
        }
      ]
    },
  ]
})
