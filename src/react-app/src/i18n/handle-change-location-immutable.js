const selectI18next = (state) => {
  return state.get('i18next').toJS();
}
const selectPathname = (state) => {
  return state.getIn(['router', 'location', 'pathname']);
}

export default function configureHandler(store, i18n) {

  const changeLng = (currentLanguage = '', nextLanguage = '') => {
    if (currentLanguage !== nextLanguage) {
      i18n.changeLanguage(nextLanguage);
    }
  }

  const handleChangeLocationImmutable = () => {
    const pathname = selectPathname(store.getState());
    const i18next = selectI18next(store.getState());
    const whitelist = i18next.whitelist;
    const language = i18next.language;
    const fallbackLng = i18next.fallbackLng;

    let pathnameArray = pathname.split('/');
    pathnameArray = pathnameArray.filter(elem => elem !== "");

    if (whitelist.includes(pathnameArray[0])) {
      changeLng(language, pathnameArray[0]);
    } else {
      changeLng(language, fallbackLng);
    }
  }

  return handleChangeLocationImmutable;
}
