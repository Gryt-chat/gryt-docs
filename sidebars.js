/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: "category",
      label: "Gryt",
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: "Client",
          link: {
            type: 'generated-index',
          },
          items: ['client/introduction/installation',
            {
              type: 'category', label: 'Packages', link: { type: 'generated-index' }, items: [{
                type: 'autogenerated',
                dirName: 'client/packages',
              }]
            }
          ],
        },
        {
          type: 'category',
          label: "Server",
          link: {
            type: 'generated-index',
          },
          items: ['server/introduction/installation',
            {
              type: 'category', label: 'Connectivity', link: { type: 'generated-index' }, items: [{
                type: 'autogenerated',
                dirName: 'server/connectivity',
              }]
            },
            {
              type: 'category', label: 'Packages', link: { type: 'generated-index' }, items: [{
                type: 'autogenerated',
                dirName: 'server/packages',
              }]
            }
          ],
        },
      ]
    }
  ],
}
module.exports = sidebars;