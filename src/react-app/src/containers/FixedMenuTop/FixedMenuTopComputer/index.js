if (process.env.NODE_ENV === 'production') {
  module.exports = require('./FixedMenuTopComputer.prod');
} else {
  module.exports = require('./FixedMenuTopComputer.dev');
}
