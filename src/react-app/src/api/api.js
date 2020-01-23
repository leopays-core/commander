// https://www.jsonrpc.org/specification
import isElectron from '../lib/is-electron';


export default () => {
  if (isElectron()) {
    console.log('api isElectron !--- - -- -- - ');
    const electron = window.require('electron');
    const { ipcRenderer, remote } = electron;
    console.log('electron', electron);
  }
};
