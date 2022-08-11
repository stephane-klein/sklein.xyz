import { sveltekit } from '@sveltejs/kit/vite';
import svelteMd from "vite-plugin-svelte-md";
import { imagetools } from 'vite-imagetools'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
        imagetools(),
        svelteMd(),
        sveltekit()
    ]
};

export default config;
