import { createI18n } from 'vue-i18n';
import en from '../src/locales/en.json';
import fi from '../src/locales/fi.json';

function loadLocales() {
    const locales = [{en: en}, {fi: fi}]
    const messages = {}
    locales.forEach(lang => {
        const key = Object.keys(lang)
        messages[key] = lang[key]

    })
    return messages
}

export default createI18n({
    locale: 'fi',
    fallbackLocale: 'en',
    messages: loadLocales()
})