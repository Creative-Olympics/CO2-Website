import { writable } from "svelte/store";

export let loaderReady = writable(false);
export let logoLoaded  = writable(false);
export let vidLoaded  = writable(false);
export let finishedLoading  = writable(false);