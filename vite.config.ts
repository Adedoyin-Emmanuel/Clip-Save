import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: 'localhost'
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      plugins: [
        // Add any Rollup plugins here
      ],
    },
    minify: true,
    sourcemap: false,
  }
});


