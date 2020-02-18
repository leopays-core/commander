const { ipcMain } = require('electron');
const docker = require('./docker');


ipcMain.on('get_docker_info', (event, args) => {
  docker.version((err, data) => {
    if (err)
      event.sender.send('get_docker_version_answer_err', err);
    event.sender.send('get_docker_version_answer', data);
  });
});
