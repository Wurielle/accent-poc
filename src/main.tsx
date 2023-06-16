import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './locales/en/translation.json'
import translationFR from './locales/fr/translation.json'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const locales = {
    en: {
        translation: translationEN,
    },
    fr: {
        translation: translationFR,
    },
}

i18n.use(initReactI18next).init({
    resources: locales,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
})
