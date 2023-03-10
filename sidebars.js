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
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Client",
          customProps: {
            description: "Everything about the client",
          },
          link: {
            type: "generated-index",
          },
          items: [
            "client/introduction/installation",
            {
              type: "category",
              label: "Packages",
              link: { type: "generated-index" },
              items: [
                {
                  type: "autogenerated",
                  dirName: "client/packages",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Server",
          customProps: {
            description: "Everything about the server",
          },
          link: {
            type: "generated-index",
          },
          items: [
            "server/introduction/setup",
            "server/introduction/configuration",
            {
              type: "category",
              label: "Network",
              customProps: {
                description: "Everything regarding networking",
              },
              link: { type: "generated-index" },
              items: [
                {
                  type: "autogenerated",
                  dirName: "server/connectivity",
                },
              ],
            },
            {
              type: "category",
              label: "Troubleshooting",
              customProps: {
                description: "Facing an issue? Check here!",
              },
              link: { type: "generated-index" },
              items: [
                {
                  type: "autogenerated",
                  dirName: "server/troubleshoot",
                },
              ],
            },
            {
              type: "category",
              label: "Packages",
              link: { type: "generated-index" },
              items: [
                {
                  type: "autogenerated",
                  dirName: "server/packages",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
module.exports = sidebars;
