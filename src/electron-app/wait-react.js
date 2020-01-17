const net = require('net');


const port = process.env.PORT ? parseInt(process.env.PORT) + 100 : 3000;
process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let timeoutID;
let startedElectron = false;
const tryConnection = () => client.connect({ port: port }, () => {
  client.end();
  if (!startedElectron) {
    console.log('starting electron...');
    startedElectron = true;
    const exec = require('child_process').exec;
    const electron = exec('yarn run electron .');
    electron.stdout.on('data', (data) => {
      console.log('electron stdout:', data.toString());
    });
    clearTimeout(timeoutID);
  }
});

tryConnection();

client.on('error', (error) => {
  timeoutID = setTimeout(tryConnection, 1000);
});
