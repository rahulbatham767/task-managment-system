import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-redux"], // Add this line
    },
  },
  esbuild: {
    // jsxInject: `import React from 'react';`, // Add this line if needed
  },
});
