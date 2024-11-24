import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import netlify from "@astrojs/netlify";

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [tailwind(), alpinejs()],
  output: "server",
  adapter: netlify(),
});

