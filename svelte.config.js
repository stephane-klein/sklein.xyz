import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import importAssets from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'],
    preprocess:[
        preprocess({
            postcss: true
        }),
        importAssets()
    ],
    kit: {
        adapter: adapter(),
        prerender: {
            default: true,
            crawl: true
        }
    }
};

export default config;
