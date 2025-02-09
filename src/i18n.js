import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from './i18n/translations';

function getActualLanguage() {
  try{
    const language = localStorage.getItem('language');
    return language;
  } catch (err) {
    console.log(err);
  }
}

const actualLanguage = getActualLanguage();

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    lng: actualLanguage || 'ptBr',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;