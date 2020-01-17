if (process.env.NODE_ENV === 'production') {
  module.exports = require('./UIMobile.prod');
} else {
  module.exports = require('./UIMobile.dev');
}
