//import Cookies from 'js-cookie';


export function checkLocalStorage() {
  if (window.localStorage) return true;
  else return false;
}

export function checkCookies() {
  if (navigator.cookieEnabled) return true;
  else return false;
}

/*
static onlyMobile = { minWidth: 320, maxWidth: 767 }
static onlyTablet = { minWidth: 768, maxWidth: 991 }
static onlyComputer = { minWidth: 992 }//maxWidth: 1199
static onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 }
static onlyWidescreen = { minWidth: 1920 }
*/
export const screenSizeTypes = [
  'mobile', //     static onlyMobile = { minWidth: 320, maxWidth: 767 }
  'tablet', //     static onlyTablet = { minWidth: 768, maxWidth: 991 }
  'computer', //   static onlyComputer = { minWidth: 992 }//maxWidth: 1199
  'largeScreen', //static onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 }
  'wideScreen' //  static onlyWidescreen = { minWidth: 1920 }
];

export function getScreenSizeType() {
  const windowWidth = window.innerWidth;
  let screenSizeType = '';

  if (windowWidth < 768) {
    screenSizeType = 'mobile';
  } else if (windowWidth < 992) {
    screenSizeType = 'tablet';
  } else if (windowWidth < 1200) {
    screenSizeType = 'computer';
  } else if (windowWidth < 1920) {
    screenSizeType = 'largeScreen';
  } else if (windowWidth >= 1920) {
    screenSizeType = 'wideScreen';
  }

  return screenSizeType;
}

/*
export function getGeolocation () {
  return navigator.geolocation.getCurrentPosition(function(position) {
    return position;
    /*
    position = {
      coords: {
        accuracy: 141.7660675048828
        altitude: null
        altitudeAccuracy: null
        heading: null
        latitude: 55.98854827880859
        longitude: 92.85841369628906
        speed: null
      },
      timestamp: 1533393640303
    },
    * /
  });
}
*/
/*
export function getDeviceInfo () {
  var device = {
    type: "browser",
    browser_info: {
      screenSizeType: getScreenSizeType(),
      web3: window.Web3 !== undefined ? true : false,
      navigator: {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        deviceMemory: navigator.deviceMemory,
        //geolocation: {},
        hardwareConcurrency: navigator.hardwareConcurrency,
        language: navigator.language,
        languages: navigator.languages,
        maxTouchPoints: navigator.maxTouchPoints,
        platform: navigator.platform,
        product: navigator.product,
        productSub: navigator.productSub,
        userAgent: navigator.userAgent,
        vendor: navigator.vendor,
        vendorSub: navigator.vendorSub,
      },
      screen: {
        availHeight: window.screen.availHeight,
        availLeft: window.screen.availLeft,
        availTop: window.screen.availTop,
        availWidth: window.screen.availWidth,
        colorDepth: window.screen.colorDepth,
        height: window.screen.height,
        pixelDepth: window.screen.pixelDepth,
        width: window.screen.width,
      },
      styleMedia: {
        type: window.styleMedia.type,
      },
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    }
  };
  if (navigator.connection) {
    device.browser_info.connection = {
      downlink: navigator.connection.downlink,
      effectiveType: navigator.connection.effectiveType,
      rtt: navigator.connection.rtt,
    };
  }
  if (window.screen.orientation) {
    device.browser_info.screen.orientation = {
      type: window.screen.orientation.type,
    };
  }

  return device;
}
*/

/*
{
  web3: true,
  navigator: {
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    appVersion: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
    connection: [Object],
    cookieEnabled: true,
    deviceMemory: 4,
    geolocation: {
      coords: {
        accuracy: 141.7660675048828
        altitude: null
        altitudeAccuracy: null
        heading: null
        latitude: 55.98854827880859
        longitude: 92.85841369628906
        speed: null
      },
      timestamp: 1533393640303
    },
    hardwareConcurrency: 4,
    language: 'ru-RU',
    languages: [Array],
    maxTouchPoints: 0,
    platform: 'Win32',
    product: 'Gecko',
    productSub: '20030107',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
    vendor: 'Google Inc.',
    vendorSub: ''
  },
  screen: {
    availHeight: 728,
    availLeft: 0,
    availTop: 0,
    availWidth: 1366,
    colorDepth: 24,
    height: 768,
    orientation: [Object],
    pixelDepth: 24,
    width: 1366
  },
  styleMedia: {
    type: 'screen'
  },
  screenSizeType: 'mobile',
  innerHeight: 640,
  innerWidth: 657,
  outerHeight: 733,
  outerWidth: 1309
}
*/
