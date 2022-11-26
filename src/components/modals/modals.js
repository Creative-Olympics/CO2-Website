import { writable, derived } from "svelte/store"

function createModalStore() {
    const _modal = writable(null)

    /**
     * @param {String} message
     * @param {String} type
     */
    function open(content) {
        _modal.set(content)
    }

    const modal = derived(_modal, ($_modal, set) => {
        set($_modal)
    })
    const { subscribe } = modal

    return {
        open,
        subscribe,
        close: () => open(null)
    }
}

export const modal = createModalStore()