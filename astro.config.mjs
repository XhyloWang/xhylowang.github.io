import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  // GitHub Pages user site: https://xhylowang.github.io/
  site: process.env.SITE_URL || "https://xhylowang.github.io",
  integrations: [mdx()],
  output: "static"
});
