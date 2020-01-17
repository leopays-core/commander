if (process.env.NODE_ENV === 'production') {
  module.exports = require('./UIComputer.prod');
} else {
  module.exports = require('./UIComputer.dev');
}
