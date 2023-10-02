import { writable, derived } from "svelte/store"

const TIMEOUT = 7500

/**
 * @param {Number} [timeout]
 */
function createToastStore(timeout) {
    /** @type {import("svelte/store").Writable<any[]|any>} */
    const _toasts = writable([])

    /**
     * @param {String} message
     * @param {String} type
     * @param {any} content
     * @param {object|null} props
     */
    function send(message, /** @type string|undefined */ type, content = null, props = null) {
        _toasts.update(state => {
            return [...state, { id: id(), type, message, content, props }]
        })
    }

    let timers = []

    const toasts = derived(_toasts, ($_toasts, set) => {
        set($_toasts)
        if ($_toasts.length > 0) {
            const timer = setTimeout(() => {
                _toasts.update(state => {
                    state.shift()
                    return state
                })
            }, TIMEOUT)
            return () => {
                clearTimeout(timer)
            }
        }
    })

    /**
     * @param {any} id
     */
    function remove(id){
        _toasts.update(state => {
            return state.filter((/** @type {{ id: any; }} */ s) => s.id != id);
        })
    }

    const { subscribe } = toasts

    return {
        subscribe,
        send,
        remove,
        default: (/** @type {string} */ msg) => send(msg, undefined),
        error: (/** @type {string} */ msg) => send(msg, "alert-error"),
        warning: (/** @type {string} */ msg) => send(msg, "alert-warning"),
        info: (/** @type {string} */ msg) => send(msg, "alert-info"),
        success: (/** @type {string} */ msg) => send(msg, "alert-success"),
        feedbackError: (/** @type {string} */ origin, /** @type {string} */ msg = "An unknown error occured") => send(msg, "alert-feedbackError", null, { origin: origin })
    }
}

function id() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export const toasts = createToastStore()