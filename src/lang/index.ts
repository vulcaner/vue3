import { createI18n } from "vue-i18n"


// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
    en: {
        message: {
            home: '{index}HOME',
            about: "{index}ABOUT",
            element: "ELEMENT-UI"
        }
    },
    zh: {
        message: {
            home: '{index}主页',
            about: "{index}关于",
            element: "element-plus"
        }
    }
}

// 2. Create i18n instance with options
const i18n = createI18n({
    legacy: false,
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})


export default i18n;