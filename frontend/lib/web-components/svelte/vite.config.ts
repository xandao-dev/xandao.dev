import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			input: ['./src/components/Counter.svelte', './src/components/Clock.svelte'],
		},
	},
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true,
			},
		}),
	],
});
