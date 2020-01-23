import i18nextConfig from '../../i18n/i18next-config';
import { i18next } from '../../constants/action-types';


const initialState = Object.assign(
  {},
  {
    language: null,
    whitelist: [],
    fallbackLng: null,
    ns: [],
    defaultNS: null,
    debug: false,
  },
  i18nextConfig
);

export const i18nextReducer = (state = initialState, action) => {
  switch (action.type) {
    case i18next.language.changed:
      if (action.payload !== state.language) {
        return Object.assign({}, state, { language: action.payload });
      }
      return state;
    default:
      return state;
  }
}
