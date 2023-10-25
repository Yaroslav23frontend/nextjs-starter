import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");
const config: StorybookConfig = {
  webpackFinal: async (config) => {
    console.log("Before:", config?.resolve?.alias); // Debug line
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.alias) config.resolve.alias = {};
    config.resolve.alias["@"] = path.resolve(__dirname, "../src/");
    console.log("After:", config.resolve.alias); // Debug line
    return config;
  },
  stories: [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: { nextConfigPath: "../next.config.js" },
  },

  docs: {
    autodocs: "tag",
  },
};
export default config;
