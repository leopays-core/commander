import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import ReduxDetector, { languageChange } from 'i18next-redux-languagedetector';

import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import XHR from 'i18next-xhr-backend';

import i18nextConfig from './i18next-config';
import i18nLogger from './logger';
import { checkLocalStorage, checkCookies } from '../lib/device-info';

const LngDetector = new LanguageDetector();
LngDetector.addDetector(ReduxDetector);

const caches = ['redux'];
if (checkLocalStorage()) caches.push('localStorage');
if (checkCookies()) caches.push('cookie');



export default function configureI18n(store) {
  const base = `${process.env.PUBLIC_URL}`; //store.app.base;
  const lookupRedux = () => {
    let state = store.getState().get('i18next').toJS();
    return state;
  };
  const cacheUserLanguageRedux = (language) => store.dispatch(languageChange(language));

  i18n
    .use(Backend)
    .use(LngDetector)
    .use(initReactI18next)
    .use(i18nLogger)
    .init({
      backend: {
        // array of existing i18next backends from https://www.i18next.com/plugins-and-utils.html#backends
        backends: [
          LocalStorageBackend, // primary
          XHR                  // fallback
        ],
        // array of options in order of backends above
        backendOptions: [
          {
            prefix: 'locales-', // prefix for stored languages
            expirationTime: 10 * 60 * 1000,  // expiration // 7*24*60*60*1000
            //versions: { ru: 'v0.0.0', en: 'v0.0.0' } // language versions
          }, {
            loadPath: `${base}/static/locales/{{lng}}/{{ns}}.json`, // xhr load path for my own fallback
            addPath: `${base}/static/locales/add/{{lng}}/{{ns}}`,
            //loadPath: `${base}/static/locales/resources.json?lng={{lng}}&ns={{ns}}`,// to adapt to multiLoading
            //allowMultiLoading: true,
          }
        ]
      },

      detection: {
        // order and from where user language should be detected
        // order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        order: [
          'path', 'redux',
        ],

        // keys or params to lookup language from
        // lookupQuerystring: 'lng',
        lookupCookie: 'lng',
        lookupLocalStorage: 'lng',
        lookupFromPathIndex: 0,
        // lookupFromSubdomainIndex: 0,

        lookupRedux: lookupRedux,
        cacheUserLanguageRedux: cacheUserLanguageRedux,

        // cache user language on
        // caches: [ 'localStorage', 'cookie' ],
        caches: caches,
        excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

        // optional expire and domain for set cookie
        cookieMinutes: 365 * 24 * 60,
        // cookieDomain: 'myDomain',

        // optional htmlTag with lang attribute, the default is:
        // htmlTag: document.documentElement
      },

      whitelist: i18nextConfig.whitelist,
      fallbackLng: i18nextConfig.fallbackLng, // use en if detected lng is not available
      // have a common namespace used around the full app
      ns: i18nextConfig.ns,
      defaultNS: i18nextConfig.defaultNS,
      debug: i18nextConfig.debug,
      saveMissing: true,
      //saveMissing: true, // send not translated keys to endpoint
      //keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false, // not needed for react!!
      },

      // react-i18next options
      react: {
        wait: true,
        //defaultTransParent: 'div', // needed for preact
        useSuspense: false
      }
    });

  return i18n;
};
