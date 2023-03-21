import { writable, derived } from "svelte/store"

function createLogsStore() {
    /** @type {import("svelte/store").Writable<object[]>} */
    const _logs = writable([])

    const logs2 = derived(_logs, ($_logs, set) => {
        set($_logs)
    })
    const { subscribe } = logs2

    function clear() {
        _logs.set([])
    }

    /**
     * @param {object} content
     * @param {string} type
     */
    function add(content, type) {
        _logs.update((cLogs) => {
            return cLogs.concat({ content: content, type: type })
        });
    }

    return {
        add,
        subscribe,
        clear
    }
}

export const logs = createLogsStore()