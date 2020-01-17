if (process.env.NODE_ENV === 'production') {
  module.exports = require('./UserMenu.prod');
} else {
  module.exports = require('./UserMenu.dev');
}
