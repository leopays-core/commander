if (process.env.NODE_ENV === 'production') {
  module.exports = require('./UIWideScreen.prod');
} else {
  module.exports = require('./UIWideScreen.dev');
}
