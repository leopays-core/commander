// https://www.jsonrpc.org/specification
import isElectron from '../lib/is-electron';


export default () => {
  if (isElectron()) {
    console.log('api isElectron !--- - -- -- - ')
    const { ipcRenderer, remote } = window.require('electron');
    console.log(remote)
  }
};
