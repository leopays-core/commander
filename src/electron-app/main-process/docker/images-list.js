const { ipcMain } = require('electron');
const docker = require('./docker');


ipcMain.on('get_docker_images_list', (event, args) => {
  docker.listImages((err, data) => {
    if (err)
      event.sender.send('get_docker_images_list_answer_err', err);
    event.sender.send('get_docker_images_list_answer', data);
    /*
    data.forEach( (containerInfo) => {
      console.log('containerInfo', containerInfo)
      //docker.getContainer(containerInfo.Id).stop(cb);
    });
    */
  });
});
