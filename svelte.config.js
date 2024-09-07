import adapter from "@sveltejs/adapter-node";
import { sveltePreprocess } from "svelte-preprocess";
import { importAssets } from "svelte-preprocess-import-assets";

const config = {
    extensions: [".svelte", ".md"],
    preprocess:[
        sveltePreprocess({
            postcss: true
        }),
        importAssets()
    ],
    kit: {
        adapter: adapter(),
        files: {
            assets: 'contents'
        }
    }
};

export default config;
