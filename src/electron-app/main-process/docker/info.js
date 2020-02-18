const { ipcMain } = require('electron');
const docker = require('./docker');


ipcMain.on('get_docker_info', (event, args) => {
  docker.info((err, data) => {
    let request = { jsonrpc: "2.0", method: '', params: {}, id: null };
    let error = { code: 1, message: '', data: {} };
    let response = { jsonrpc: "2.0", result: undefined, error: undefined, id: null };
    if (err)
      response.eroror = err;
    else
      response.result = data;
    event.sender.send('get_docker_info_reply', response);
  });
});
