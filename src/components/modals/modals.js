import { writable, derived } from "svelte/store"

function createModalStore() {
    const _modal = writable(null)

    const modal2 = derived(_modal, ($_modal, set) => {
        set($_modal)
    })
    const { subscribe } = modal2

    /**
     * @param {String} message
     * @param {String} type
     */
     function set(content) {
        _modal.set(content)
    }

    return {
        set,
        subscribe,
        close: () => set(null),
        open: (val, content) => {
            console.log(val)
            if (val == null) {
                set(content)
            }else{
                set(null)
                setTimeout(() => set(content), 275)
            }
        }
    }
}

export const modal = createModalStore()