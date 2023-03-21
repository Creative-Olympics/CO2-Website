import { writable } from "svelte/store";

/** @type {import("svelte/store").Writable<any>} */
export let scrollInstance = writable(null);

export let showLogo = writable(true);