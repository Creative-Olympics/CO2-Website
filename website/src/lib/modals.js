import { writable, derived, get } from "svelte/store"

function createModalStore() {
    /** @type {import("svelte/store").Writable<{content: any, props: any}|null>} */
    const _modal = writable(null)

    const modal2 = derived(_modal, ($_modal, set) => {
        set($_modal)
    })
    const { subscribe } = modal2

    /**
     * @param {any} content
     * @param {any} props
     */
    function set(content, props) {
        _modal.set({ content: content, props: props })
    }

    return {
        set,
        subscribe,
        close: () => set(null, {}),
        open: (/** @type any */ content, props = {}) => {
            if (get(_modal) == null || get(_modal)?.content == null) {
                set(content, props)
            } else {
                set(null, {})
                setTimeout(() => set(content, props), 275)
            }
        }
    }
}

// // export const modal = createModalStore()

// function createModalStore() {
// 	/** @type {import("svelte/store").Writable<{content: any, props: any}|null>} */
// 	const {update, subscribe} = writable(null)

// 	return {
// 		subscribe,
// 		init: (/** @type HTMLDialogElement|null */ e) => _modalEl.set(e),
// 		close: () => console.log("TODO"),
// 		open: (/** @type any */ content, /** @type any */ props = {}) => {
// 			if (get(modal) == null || get(modal).content == null) {
// 				set(this,content, props)
// 				update(_ => {return content, props});
// 			} else {
// 				set(null, {})
// 				setTimeout(() => set(content, props), 275)
// 			}
// 		}
// 	}
// }

export const modal = createModalStore()