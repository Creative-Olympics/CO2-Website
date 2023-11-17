import { writable, derived, get } from "svelte/store"

function createModalStore() {
	/** @type {import("svelte/store").Writable<{content: any, props: any, queryParamsToClear: any}|null>} */
	const _modal = writable(null)

	const modal2 = derived(_modal, ($_modal, set) => {
		set($_modal)
	})
	const { subscribe } = modal2

	/**
	 * @param {any} content
	 * @param {any} props
     * @param {any} queryParamsToClear
	 */
	function set(content, props, queryParamsToClear) {
		_modal.set({ content: content, props: props, queryParamsToClear })
	}

	return {
		set,
		subscribe,
		close: () => {
			set(null, {}, {});
		},
		open: (/** @type any */ content, props = {}, queryParamsToClear = "") => {
			if (get(_modal) == null || get(_modal)?.content == null) {
				set(content, props, queryParamsToClear);
			} else {
				close();
				setTimeout(() => set(content, props, queryParamsToClear), 275)
			}
		}
	}
}

export const modal = createModalStore()
