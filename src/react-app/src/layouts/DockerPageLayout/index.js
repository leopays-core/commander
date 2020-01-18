if (process.env.NODE_ENV === 'production') {
  module.exports = require('./DockerPageLayout.prod');
} else {
  module.exports = require('./DockerPageLayout.dev');
}
