if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Footer.prod');
} else {
  module.exports = require('./Footer.dev');
}
