import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

const SILENT = Boolean(process.env.SILENT) ?? false;

export default {
  plugins: [vue()],
  root: process.cwd(),
  publicDir: "publicDir",
  logLevel: SILENT ? "error" : "info",
  chunkSizeWarningLimit: 500,
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: "esnext",
  base: "https://mateoleon44-softserve.github.io/calc",
};
