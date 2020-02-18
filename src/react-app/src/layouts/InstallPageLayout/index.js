if (process.env.NODE_ENV === 'production') {
  module.exports = require('./InstallPageLayout.prod');
} else {
  module.exports = require('./InstallPageLayout.dev');
}
