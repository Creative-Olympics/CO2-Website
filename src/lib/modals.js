import { writable, derived } from "svelte/store"

function createModalStore() {
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
        open: (val, content, props={}) => {
            if (val == null) {
                set(content, props)
            } else {
                set(null, {})
                setTimeout(() => set(content, props), 275)
            }
        }
    }
}

export const modal = createModalStore()