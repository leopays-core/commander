const debug = process.env.NODE_ENV !== 'production'
  ? require('debug')
  : () => () => null;

module.exports = {
  type: 'logger',

  log: (args) => { debug('debug:app:i18n:log')(args.shift(), args) },
  warn: (args) => { debug('debug:app:i18n:warn')(args.shift(), args) },
  error: (args) => { debug('debug:app:i18n:error')(args.shift(), args) },
}
