// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { db } from "./src/lib/database";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: `https://${db.website}`,
  integrations: [sitemap()],
  image: {
    domains: ["drive.google.com"],
  },
});
