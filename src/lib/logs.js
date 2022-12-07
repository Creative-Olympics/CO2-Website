import { writable, derived } from "svelte/store"

function createModalStore() {
    const _logs = writable([])

    const logs2 = derived(_logs, ($_logs, set) => {
        set($_logs)
    })
    const { subscribe } = logs2

    function clear() {
        _logs.set([])
    }

    /**
     * @param {any} content
     */
    function add(content) {
        _logs.update((cLogs) => cLogs.concat(content))
    }

    return {
        add,
        subscribe,
        clear
    }
}

export const modal = createModalStore()