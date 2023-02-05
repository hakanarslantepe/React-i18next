import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";

// const resources = {
//   en: {
//     translation: {
//       "Welcome to React": "Welcome to React and react-i18next",
//     },
//   },
//   fr: {
//     translation: {
//       "Welcome to React": "Bienvenue à React et react-i18next",
//     },
//   },
//   tr: {
//     translation: {
//       "Welcome to React": "React ve react-i18next hosgeldiniz ",
//     },
//   },
// };

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .init({
    //resources,
    lng: "tr",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
