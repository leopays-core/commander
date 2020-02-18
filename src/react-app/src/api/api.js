// https://www.jsonrpc.org/specification
import isElectron from '../lib/is-electron';

//createAliasedAction
/*
Check versions
Ensure your versions of docker, docker-compose, and docker-machine 
*/
const isWeb = !isElectron();
let electron = !isWeb ? window.require('electron') : {};
electron.ipcRenderer.on('redux-action', (event, res) => {
  console.log('react-app on redux-action', event); // prints "ping"
  console.log('react-app on redux-action', res); // prints "ping"
});

const DockerInfo = () => {
  if (isElectron()) {
    const { ipcRenderer, remote } = electron;
    console.log('electron', electron);
    let req = []
    ipcRenderer.send('get_docker_info', req);
    return ipcRenderer.on('get_docker_info_reply', (event, res) => {
      console.log(res); // prints "ping"
      return res;
    });
  } else
    return null;
};

export default () => {
  if (isElectron()) {
    const { ipcRenderer, remote } = electron;
    console.log('electron', electron);
    //ipcRenderer.send(channel, ...args);
  } else
    console.log('api Web !--- - -- -- - ');
};

export const Docker = {
  info: DockerInfo,
};

