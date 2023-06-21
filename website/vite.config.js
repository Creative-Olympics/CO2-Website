import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from '@zerodevx/svelte-img/vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), imagetools(), ViteMinifyPlugin()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			$cmp: path.resolve('src/components')
		}
	},
	build: {
		rollupOptions: {
			output: {
				compact: true
			}
		},
		commonjsOptions: {
			sourceMap: false
		}
	}
});