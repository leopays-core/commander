//const { appReducer } = require('./app-reducer');
//const { authReducer } = require('./auth-reducer');
const { deviceReducer } = require('./device-reducer');
//const { i18nextReducer } = require('./i18next-reducer');
//const { serversReducer } = require('./servers-reducer');


const reducers = {
  //app: appReducer,
  //auth: authReducer,
  device: deviceReducer,
  //i18next: i18nextReducer,
  //servers: serversReducer,
};
module.exports.reducers = reducers;
