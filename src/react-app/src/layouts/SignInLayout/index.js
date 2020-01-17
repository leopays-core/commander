if (process.env.NODE_ENV === 'production') {
  module.exports = require('./SignInLayout.prod');
} else {
  module.exports = require('./SignInLayout.dev');
}
