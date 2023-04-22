import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'public',
			assets: 'public',
			fallback: null,
			precompress: false
		}),
		alias: {
			'$lib': './src/lib',
			'$cmp': './src/components'
		},
	},
	preprocess: vitePreprocess()
};

export default config;
