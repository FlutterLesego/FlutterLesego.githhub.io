import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            { displayName: true, fileName: false, ssr: false, pure: true },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@icons": "/src/icons",
      "@sections": "/src/sections",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
      "@theme": "/src/theme",
      "@utilities": "/src/utilities",
    },
  },
});
