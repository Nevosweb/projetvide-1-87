import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Configuration pour GitHub Pages - le nom de ton nouveau repo
  base: mode === 'production' ? '/template-boucherie5/' : '/',
  
  server: {
    host: "::",
    port: 8080,
  },
  
  // Configuration optimisée pour le build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Désactive les sourcemaps en production pour réduire la taille
    rollupOptions: {
      output: {
        // Optimise les chunks pour de meilleures performances
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-slot', '@radix-ui/react-toast'], // shadcn-ui deps
        },
        // Nomme les fichiers pour un meilleur cache
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      }
    },
    // Optimise la taille du bundle
    minify: 'esbuild',
    target: 'esnext',
  },
  
  plugins: [
    react(),
    // Utilise componentTagger seulement en développement
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Optimisations pour les dépendances
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}));