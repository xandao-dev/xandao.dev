import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
	  lib: {
		entry: './src/main.ts',
		name: 'lib',
		fileName: format => `index.${format}.js`
	  },
	  rollupOptions: {
		// Do not include vue in the bundle
		// external: ['vue'],
		output: {
		  globals: {
			vue: 'Vue'
		  }
		}
	  }
	},
	plugins: [vue({
		customElement: true,
	})]
  })