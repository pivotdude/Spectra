import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
    // VitePWA({
    //   registerType: "autoUpdate"
    // })
  ],
  resolve: {
    alias: {
      "@": resolve("src/")
    }
  }
});
