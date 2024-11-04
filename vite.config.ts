import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  server: {
    port: 3000, // Default port, you can change it if needed
    host: 'localhost', // Make sure this is set to 'localhost'
  },
});
