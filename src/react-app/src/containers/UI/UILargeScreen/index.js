if (process.env.NODE_ENV === 'production') {
  module.exports = require('./UILargeScreen.prod');
} else {
  module.exports = require('./UILargeScreen.dev');
}
