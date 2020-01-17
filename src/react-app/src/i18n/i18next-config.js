export default {
  language: null,
  languagesList: [
    { key: "en", value: "en", country_сode: 'uk', text: "English" },
    { key: "ru", value: "ru", country_сode: 'ru', text: "Russian/Русский" }
  ],
  fallbackLng: (process.env.NODE_ENV !== "production") ? 'ru' : 'en',
  whitelist: ["en", "ru"],
  ns: [
    'main',
    'menu',
    'footer'
  ],
  defaultNS: 'main', // default namespace (needs no prefix on calling t)
  fallbackNS: 'main',// fallback, can be a string or an array of namespaces
  nsSeparator: true,  // ':'
  keySeparator: true, // '.'
  debug: (process.env.NODE_ENV !== "production") ? true : false,
};
