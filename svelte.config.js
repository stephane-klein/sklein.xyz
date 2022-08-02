import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import postcssNormalize from 'postcss-normalize';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'],
    preprocess:[
        preprocess({
            postcss: {
                plugins: [
                    postcssNormalize(),
                    postcssNested(),
                    autoprefixer()
                ]
            }
        }),
    ],
    kit: {
        adapter: adapter()
    }
};

export default config;
