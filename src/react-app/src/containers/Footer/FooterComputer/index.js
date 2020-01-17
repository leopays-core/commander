if (process.env.NODE_ENV === 'production') {
  module.exports = require('./FooterComputer.prod');
} else {
  module.exports = require('./FooterComputer.dev');
}
