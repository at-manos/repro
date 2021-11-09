/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
// import { path } from '@tauri-apps/api';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			fallback: 'index.html'
		  }),
		  files: {
			template: 'src/index.html'
		  },
		ssr: false,

	}
};

export default config;
