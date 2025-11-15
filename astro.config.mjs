import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://thmsn.dev",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  output: "server",
  adapter: cloudflare(),
  markdown: {
    shikiConfig: {
      wrap: true,

      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
      defaultColor: false,
    },
  },
});
