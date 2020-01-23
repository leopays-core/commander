import { i18next } from '../../constants/action-types';
import { fromJS } from 'immutable';
import i18nextConfig from '../../i18n/i18next-config';


const initialState = fromJS({
  language: null,
  whitelist: [],
  fallbackLng: null,
  ns: [],
  defaultNS: null,
  debug: false,
})
  .mergeDeep(fromJS(i18nextConfig));

export const i18nextReducer = (state = initialState, action) => {
  switch (action.type) {
    case i18next.language.changed:
      if (action.payload !== state.get('language')) {
        return state.set('language', action.payload);
      }
      return state;
    default:
      return state;
  }
}
