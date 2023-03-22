import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import en from './locales/en.json'
import de from './locales/de.json'

const defaultNS = 'en'
// const languages = {
//   en: english,
//   de: german,
// };
export const languages = {
  en: en,
  de: de,
} as const;

export const i18nextPromise = i18next

// i18next
  // detect user language
  .use(LanguageDetector)
  .use(Backend)
  // init i18next
  .init({
    debug: true,
    fallbackLng: defaultNS,
    resources: {
      en: {

          GREETINGS: 'hello from namespace 1',
        "GENERAL": {
          "NAME": 'hello from namespace 2'
        }
      },
      de: {
        namespace1: {
          key: 'hallo von namespace 1'
        },
        namespace2: {
          key: 'hallo von namespace 2'
        }  
      }
    }
    
  });

export default function (app:any) {
  app.use(I18NextVue, { i18next })
  return app
}