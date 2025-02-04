import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      external: ['preact', 'radix-ui', '@radix-ui/react-icons', 'classnames']
    }
  }
})
