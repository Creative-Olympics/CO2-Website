import { writable, derived, get } from "svelte/store"

// function createModalStore() {
//     /** @type {import("svelte/store").Writable<{content: any, props: any}|null>} */
//     const _modal = writable(null)

//     const modal2 = derived(_modal, ($_modal, set) => {
//         set($_modal)
//     })
//     const { subscribe } = modal2

//     /**
//      * @param {any} content
//      * @param {any} props
//      */
//     function set(content, props) {
//         _modal.set({ content: content, props: props })
        
//         document.getElementById("RahNeil_N3:CO:moci2")?.showModal();
//     }

//     return {
//         set,
//         subscribe,
//         close: () => set(null, {}),
//         open: (/** @type any */ val, /** @type any */ content, props = {}) => {
//             if (val == null || val.content == null) {
//                 set(content, props)
//             } else {
//                 set(null, {})
//                 setTimeout(() => set(content, props), 275)
//             }
//         }
//     }
// }

// export const modal = createModalStore()

function createModalStore() {
    /** @type {import("svelte/store").Writable<HTMLDialogElement|null>} */
    const _modalEl = writable(null);

    /** @type {import("svelte/store").Writable<{content: any, props: any}|null>} */
    const _modal = writable(null);

    return {
        init: (/** @type HTMLDialogElement|null */ e) => _modalEl.set(e),
        load: (/** @type any */ m, /** @type any */ content, props = {}) => _modal.set(m),
        show: () => get(_modalEl)?.show(),
        close: () => get(_modalEl)?.close(),
        open: (/** @type any */ m, /** @type any */ content, props = {}) => {_modal.set(m); get(_modalEl)?.show()}
    }
}

export const modal = createModalStore()