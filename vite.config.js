import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["mdb-react-ui-kit"],
    },
  },
  esbuild: {},
  optimizeDeps: {
    include: ["@reduxjs/toolkit"],
  },
  base: "/task-managment-system/",
  ssr: { noExternal: ["@reduxjs/toolkit"] },
});
