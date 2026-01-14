import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  base: process.env.GITHUB_ACTIONS ? "/react-apexsankey/" : "/",
  server: {
    port: 3000,
    open: true,
  },
});
