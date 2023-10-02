import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
    ,
    tsconfigPaths(),
    react({
      exclude: ["**/node_modules/**", "**/vite.config.ts"],
      include: ["./vite.config.ts", "src/**/*.tsx", "src/**/*.ts", "src/**/*.jsx", "src/**/*.js"],
    }),
  ],
});