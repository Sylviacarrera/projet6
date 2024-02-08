import { defineConfig } from 'vite'

export default defineConfig({
    // ...
    build: {
        outDir: './docs',
        rollupOptions: {
            input: {
                main: './index.html',
                photographer: './photographer.html',
            }
        }
    }
})