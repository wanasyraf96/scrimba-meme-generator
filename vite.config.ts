import { defineConfig } from "vite";
import alias from "@rollup/plugin-alias";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        { find: "@styles", replacement: "./src/styles" },
        { find: "@components", replacement: "./src/components" },
      ],
    }),
  ],
  server: {
    host: true,
    port: 8000,
    watch: {
      usePolling: true,
    },
  },
});
