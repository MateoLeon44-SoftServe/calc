import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

export default {
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "https://mateoleon44-softserve.github.io/calc",
};
