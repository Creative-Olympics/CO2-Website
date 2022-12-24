import { writable } from "svelte/store";

export let loaderReady = writable(false);
export let bannerLoaded = writable(false);