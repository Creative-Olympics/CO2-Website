import { writable } from "svelte/store";

export let loaderReady = writable(false);
export let logoLoaded  = writable(true);
export let vidLoaded  = writable(true);
export let finishedLoading  = writable(false);