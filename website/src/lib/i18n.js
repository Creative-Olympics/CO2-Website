import { getValue } from "firebase/remote-config";
import { getTextENfromFirebase } from "./firebase";
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

async function getEnLang(){
    const firebaseText = await getTextENfromFirebase()
    const enText = await import('./strings/en');

    return {
        ...firebaseText,
        ...enText.default
    }
}

/** @type { any } */
export const langagesTexts = writable({});

export const langage = writable('en');

/** @type {import("svelte/store").Writable<string[]>} */
export const loadedLangages = writable([]);


/**
 * @param {string} lang
 */
export async function loadLangage(lang){
    console.log('loading langage', lang)
    //if(lang == 'en'){
        const data = await getEnLang();
        console.log('getted data', data)

        const tempLangagesTexts = get(langagesTexts);
        tempLangagesTexts['en'] = data;
        langagesTexts.set(tempLangagesTexts)

        const tempLoadedLangages = get(loadedLangages);
        tempLoadedLangages.push('en')
        loadedLangages.set(tempLoadedLangages);

        _.set(format); // reset for update;

        console.log('done !')
    //}
}

const format = (/** @type {string} */ id) => {

    if (get(loadedLangages).includes(get(langage))) {
        return get(langagesTexts)[get(langage)][id] || id;
    }else{
        loadLangage(get(langage));
    }

    return id
};

export const _ = writable(format)