if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ExplorerPageLayout.prod');
} else {
  module.exports = require('./ExplorerPageLayout.dev');
}
