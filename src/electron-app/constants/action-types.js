const auth = {
  signIn: {
    request: '@@auth/SIGN_IN_REQUEST',
    success: '@@auth/SIGN_IN_SUCCESS',
    failure: '@@auth/SIGN_IN_FAILURE',
  },
  signUp: {
    request: '@@auth/SIGN_UP_REQUEST',
    success: '@@auth/SIGN_UP_SUCCESS',
    failure: '@@auth/SIGN_UP_FAILURE',
  },
  signOut: {
    request: '@@auth/SIGN_OUT_REQUEST',
    success: '@@auth/SIGN_OUT_SUCCESS',
    failure: '@@auth/SIGN_OUT_FAILURE',
  },
};
module.exports.auth = auth;

const user = {
};
module.exports.user = user;

const device = {
  screen: {
    sizeChanged: '@@i18next/SCREEN_SIZE_CHANGED',
    sizeTypeChanged: '@@i18next/SCREEN_SIZE_TYPE_CHANGED',
    hiddenChanged: '@@i18next/SCREEN_HIDDEN_CHANGED',
  },
};
module.exports.device = device;

const i18next = {
  language: {
    changed: '@@i18next/LANGUAGE_CHANGE',// ?! '@@i18next/LANGUAGE_CHANGED'
  },
};
module.exports.i18next = i18next;

const servers = {
  server: {
    error: '@@servers/SERVER_ERROR',
    update: '@@servers/SERVER_UPDATE',
  },
};
module.exports.servers = servers;

module.exports = {
  user,
  device,
  i18next,
  servers,
};
