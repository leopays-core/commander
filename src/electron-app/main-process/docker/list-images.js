const { ipcMain } = require('electron');
const docker = require('./docker');


ipcMain.on('get_docker_images_list', (event, filepath) => {
  docker.listImages((err, containers) => {
    if (err)
      event.sender.send('get_docker_images_list_answer_err', err);
    event.sender.send('get_docker_images_list_answer', containers);

    console.log('listImages err', err)
    console.log('listImages containers', containers)
    /*
    containers.forEach(function (containerInfo) {
      console.log('containerInfo', containerInfo)
      //docker.getContainer(containerInfo.Id).stop(cb);
    });
    */
  });
});
