if (process.env.NODE_ENV === 'production') {
  module.exports = require('./UI.prod');
} else {
  module.exports = require('./UI.dev');
}
