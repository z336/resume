// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://resume.joncoleman.me/",
  // Instead of generating a random name based on a file deliberately set the css to /css/styles
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".css")) {
              return "css/styles-[hash][extname]";
            }
            return "_astro/[name]-[hash][extname]";
          },
        },
      },
    },
  },
});
