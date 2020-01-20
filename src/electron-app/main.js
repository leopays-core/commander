require('update-electron-app')({
  logger: require('electron-log'),
});

const url = require('url');
const path = require('path');
const glob = require('glob');
const { app, BrowserWindow } = require('electron');
const settings = require('electron-settings');


var test = require('../lib/test');

var Docker = require('dockerode');
var docker = new Docker();
docker.listImages(function (err, containers) {
  console.log('listImages err', err)
  console.log('listImages containers', containers)
  containers.forEach(function (containerInfo) {
    console.log('containerInfo', containerInfo)
    //docker.getContainer(containerInfo.Id).stop(cb);
  });
});

test()

const debug = true; ///--debug/.test(process.argv[2]);

if (process.mas) app.setName('MLRD Commander');
app.setName('MLRD Commander');

let mainWindow = null;

function initialize() {
  makeSingleInstance();

  load();

  function createWindow() {
    const startUrl = process.env.ELECTRON_START_URL || url.format({
      pathname: path.join(__dirname, './index.html'),
      protocol: 'file:',
      slashes: true,
    });

    const windowOptions = {
      width: 680,//1080,
      minWidth: 680,
      height: 840,
      title: app.getName(),
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
      }
    };

    if (process.platform === 'linux')
      windowOptions.icon = path.join(__dirname, '/assets/app-icon/png/512.png');

    mainWindow = new BrowserWindow(windowOptions);
    mainWindow.loadURL(startUrl);

    // Launch fullscreen with DevTools open, usage: npm run debug
    if (debug) {
      mainWindow.webContents.openDevTools();
      mainWindow.maximize();
      require('devtron').install();
    }

    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  }

  app.on('ready', () => {
    createWindow();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
      app.quit();
  });

  app.on('activate', () => {
    if (mainWindow === null)
      createWindow();
  });
}

// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance() {
  if (process.mas) return;

  app.requestSingleInstanceLock();

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized())
        mainWindow.restore();
      mainWindow.focus();
    }
  });
}

// Require each JS file in the main-process dir
function load() {
  const files = glob.sync(path.join(__dirname, 'main-process/**/*.js'));
  files.forEach((file) => { require(file) });
}

initialize();



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function runWebServer() {
  console.log('Web Server запущен');
}