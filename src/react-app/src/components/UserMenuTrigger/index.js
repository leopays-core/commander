if (process.env.NODE_ENV === 'production') {
  module.exports = require('./UserMenuTrigger.prod');
} else {
  module.exports = require('./UserMenuTrigger.dev');
}
