if (process.env.NODE_ENV === 'production') {
  module.exports = require('./UIDefault.prod');
} else {
  module.exports = require('./UIDefault.dev');
}
