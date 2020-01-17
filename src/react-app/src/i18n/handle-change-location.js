const selectI18next = (state) => {
  return state.i18next;
}
const selectLocation = (state) => {
  return state.router.location;
}

export default function configureHandler(store, i18n) {

  const changeLng = (currentLanguage = '', nextLanguage = '') => {
    if (currentLanguage !== nextLanguage) {
      i18n.changeLanguage(nextLanguage);
    }
  }

  const handleChangeLocation = () => {
    const location = selectLocation(store.getState());
    const i18next = selectI18next(store.getState());
    let pathnameArray = location.pathname.split('/');
    pathnameArray = pathnameArray.filter(elem => elem !== "");

    if (i18next.whitelist.includes(pathnameArray[0])) {
      changeLng(i18next.language, pathnameArray[0]);
    } else {
      changeLng(i18next.language, i18next.fallbackLng);
    }
  }

  return handleChangeLocation;
}
