if (process.env.NODE_ENV === 'production') {
  module.exports = require('./NotFoundPageLayout.prod');
} else {
  module.exports = require('./NotFoundPageLayout.dev');
}
