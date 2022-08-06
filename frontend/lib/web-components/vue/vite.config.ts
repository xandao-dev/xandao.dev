import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			input: ['./src/components/Clock.vue', './src/components/Message.vue'],
		},
	},
	/*build: {
		lib: {
			entry: './src/main.ts',
			name: 'lib',
			fileName: format => `index.${format}.js`
		  },
	},*/
	plugins: [vue({ customElement: true })],
});
