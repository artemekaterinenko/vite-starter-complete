import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ar from '@/i18n/locales/ar'
import en from '@/i18n/locales/en'
import { useLanguageStore } from '@/stores'

const resources = { ar, en }

useLanguageStore.subscribe(state => i18n.changeLanguage(state.language))

i18n.use(initReactI18next).init({
  resources,
  lng: useLanguageStore.getState().language ?? 'en',
  fallbackLng: 'en'
})

export { i18n }
