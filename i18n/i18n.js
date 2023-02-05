import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './traductions/fr'
import en from './traductions/en'

// the translations
// (tip move them in a JSON file and import them)
// or even better, manage them in separated files per language

const resources = {
    en,
    fr
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

export default i18n