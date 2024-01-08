import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  plugins: [react()],
  build: {
    // rollupOptions: {
    //   external: ["@reduxjs/toolkit", "react-redux"], // Add this line
    // },
  },
  esbuild: {
    // jsxInject: `import React from 'react';`, // Add this line if needed
  },
  optimizeDeps: {
    include: ["@reduxjs/toolkit"],
  },
  base: "/task-managment-system/",
  ssr: { noExternal: ["@reduxjs/toolkit"] },
});
