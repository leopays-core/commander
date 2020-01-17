if (process.env.NODE_ENV === 'production') {
  module.exports = require('./FixedMenuTop.prod');
} else {
  module.exports = require('./FixedMenuTop.dev');
}
