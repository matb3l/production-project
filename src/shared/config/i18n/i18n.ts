import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru', // язык по умолчанию
    lng: 'ru', // начальный язык
    preload: ['ru'], // загружается только текущий язык
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // путь к переводам
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true, // включает Suspense для загрузки
    },
  })

export default i18n
