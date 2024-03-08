import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import en from '../public/locales/en/en.json';
import es from '../public/locales/es/es.json';
import pt from '../public/locales/pt/pt.json';

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  },
  pt: {
    translation: pt
  }
};

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: "pt",

    keySeparator: false, 

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
