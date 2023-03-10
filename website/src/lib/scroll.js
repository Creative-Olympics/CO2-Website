import { writable } from "svelte/store";

export let scrollInstance = writable(null);
export let showLogo = writable(false);