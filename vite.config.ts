import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Default port, you can change it if needed
    host: 'localhost', // Make sure this is set to 'localhost'
  },
});
