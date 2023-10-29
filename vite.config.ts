import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        name: 'Mi Aplicación PWA',
        short_name: 'PWA App',
        description: 'Una simple PWA usando Vite',
        theme_color: '#ffffff',
        icons: [
          {
            src: './src/assets/react.svg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/assets/react.svg',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // Configuraciones para workbox (opcional)
      },
    }),
    react()
  ],
})
