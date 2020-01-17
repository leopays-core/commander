const debug = process.env.NODE_ENV !== 'production'
  ? require('debug')
  : () => () => null;

export default {
  render: debug('debug:app:render'),
  trace: debug('debug:app:trace'),
  debug: debug('debug:app:debug'),
  info: debug('debug:app:info'),
  warn: debug('debug:app:warn'),
  error: debug('debug:app:error'),
  fatal: debug('debug:app:fatal'),
}
