import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsPaths(), svgr(), react()],
});
