import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/xandao.dev/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
			isCustomElement: (tag) => {
				return tag.startsWith('wc-')
			}
        }
      }
    })
  ]
})
