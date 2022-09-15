import { writable, derived } from "svelte/store"

const TIMEOUT = 5000

/**
 * @param {Number} [timeout]
 */
function createToastStore(timeout) {
    const _toasts = writable([])

    /**
     * @param {String} message
     * @param {String} type
     */
    function send(message, type) {
        _toasts.update(state => {
            return [...state, { id: id(), type, message }]
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
                clearTimeout(TIMEOUT)
            }
        }
    })
    const { subscribe } = toasts

    return {
        subscribe,
        send,
        default: (/** @type {string} */ msg, /** @type {Number} */) => send(msg, undefined),
        error: (/** @type {string} */ msg, /** @type {Number} */) => send(msg, "alert-error"),
        warning: (/** @type {string} */ msg, /** @type {Number} */) => send(msg, "alert-warning"),
        info: (/** @type {string} */ msg, /** @type {Number} */) => send(msg, "alert-info"),
        success: (/** @type {string} */ msg, /** @type {Number} */) => send(msg, "alert-success"),
    }
}

function id() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export const toasts = createToastStore()