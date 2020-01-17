if (process.env.NODE_ENV === 'production') {
  module.exports = require('./HomePageLayout.prod');
} else {
  module.exports = require('./HomePageLayout.dev');
}
