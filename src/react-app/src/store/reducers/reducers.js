import { appReducer } from './app-reducer';
import { authReducer } from './auth-reducer';
import { deviceReducer } from './device-reducer';
import { i18nextReducer } from './i18next-reducer';
import { serversReducer } from './servers-reducer';


export const reducers = {
  app: appReducer,
  auth: authReducer,
  device: deviceReducer,
  i18next: i18nextReducer,
  servers: serversReducer,
};
