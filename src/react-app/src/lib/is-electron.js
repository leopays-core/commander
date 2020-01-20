//process.env.NODE_ENV !== 'production'

const isElectron = () => {
  if ('userAgent' in navigator && 'require' in window)
    if (navigator.userAgent.match(/electron/gi))
      return true;
  return false;
}

export default isElectron;
