const { exec } = require('pkg');

//await exec(['./src/express-app/bin/www', '--target', 'host', '--output', 'app.exe']);
exec(['./src/express-app/bin/www', '--target', 'node12-macos-x64', '--output', 'app.exe']);
