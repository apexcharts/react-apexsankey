import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactApexSankey",
      formats: ["es", "cjs"],
      fileName: (format) =>
        `react-apexsankey.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      external: ["react", "react-dom", "react/jsx-runtime", "apexsankey", "@svgdotjs/svg.js"],
      output: {
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          apexsankey: "ApexSankey",
          "@svgdotjs/svg.js": "SVG",
        },
      },
    },
    sourcemap: true,
    minify: false,
  },
});
