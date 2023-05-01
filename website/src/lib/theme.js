import { get, writable } from 'svelte/store';

export const currentThemeID = writable(0);
export const switchToTheme = (/** @type {number} */ id) => {
    currentThemeID.set(id)
}
export const switchToNextTheme = () => {
    console.log(get(currentThemeID))
    currentThemeID.update((c) => (c + 1) % themeList.length)
}

export const themeList = [
    {   // Automatic
        buttonText: "Switch to Dark Theme",
        buttonIcon: "WeatherNight",
        dark: null
    },
    {   // Dark
        buttonText: "Switch to Light Theme",
        buttonIcon: "WeatherSunny",
        dark: true
    },
    {   // Light
        buttonText: "Switch to Automatic Theme",
        buttonIcon: "AutoMode",
        dark: false
    }
]