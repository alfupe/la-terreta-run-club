import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://yabbadabbadev.github.io',
  base: '/la-terreta-run-club',
  compressHTML: false,
  vite: {
    build: {
      cssCodeSplit: false,
      assetsInlineLimit: 0,
      cssMinify: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.names?.some((name) => name.endsWith('.css'))) {
              return 'assets/styles.css'
            }
            return 'assets/[name][extname]'
          },
        },
      },
    },
  },
})
