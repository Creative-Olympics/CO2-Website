import { getValue } from "firebase/remote-config";
import { getTextENfromFirebase, getTextFRfromFirebase } from "./firebase";
import { get, writable } from "svelte/store";

console.log('I AM HERE');

// register('en', async () => {
//     const firebaseText = await getTextENfromFirebase()
//     const enText = await import('./strings/en');



//     console.log({
//         ...firebaseText,
//         ...enText.default
//     })

//     return {
//         ...firebaseText,
//         ...enText.default
//     }
// });

async function getEnLang() {
    const firebaseText = await getTextENfromFirebase()
    const enText = await import('./strings/en');

    return {
        ...firebaseText,
        ...enText.default
    }
}

async function getFrLang() {
    const firebaseText = await getTextFRfromFirebase()
    const frText = await import('./strings/fr');

    return {
        ...firebaseText,
        ...frText.default
    }
}

/** @type { any } */
export const langagesTexts = writable({});

export const langage = writable('fr');

/** @type {import("svelte/store").Writable<string[]>} */
export const loadedLangages = writable([]);


/**
 * @param {string} lang
 */
export async function loadLangage(lang) {
    console.log('loading langage', lang)
    let data;
    if (lang == 'en') {
        data = await getEnLang();
    }else if(lang == 'fr'){
        data = await getFrLang();
    }
    console.log('getted data', data)

    const tempLangagesTexts = get(langagesTexts);
    tempLangagesTexts[lang] = data;
    langagesTexts.set(tempLangagesTexts)

    const tempLoadedLangages = get(loadedLangages);
    tempLoadedLangages.push(lang)
    loadedLangages.set(tempLoadedLangages);

    _.set(format); // reset for update (in theories)

    console.log('done !')
}

const format = (/** @type {string} */ id) => {

    if (get(loadedLangages).includes(get(langage))) {
        return get(langagesTexts)[get(langage)][id] || id;
    } else {
        loadLangage(get(langage));
    }

    return id
};

export const _ = writable(format)