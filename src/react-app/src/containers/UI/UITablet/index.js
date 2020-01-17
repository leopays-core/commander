if (process.env.NODE_ENV === 'production') {
  module.exports = require('./UITablet.prod');
} else {
  module.exports = require('./UITablet.dev');
}
