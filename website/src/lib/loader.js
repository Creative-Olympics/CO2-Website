import { writable } from "svelte/store";

export let loaderReady = writable(false);
export let bannerLoadLevel = writable(0);
export let finishedLoading  = writable(false);