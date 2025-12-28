import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    root: 'src',
    publicDir: 'public',

    build: {
        outDir: '../dist',
        emptyOutDir: true,
        manifest: true, // Generate manifest.json for asset mapping
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/scripts/main.js'),
                styles: path.resolve(__dirname, 'src/styles/main.css')
            }
        }
    },

    server: {
        port: 5173,
        strictPort: true,
        origin: 'http://localhost:5173'
    }
});
