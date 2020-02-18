const { device } = require('../../constants/action-types');
const { screenSizeTypes, getScreenSizeType } = require('../../lib/device-info');


let hiddenStatus = false;

const initialState = {
  screen: {
    hidden: hiddenStatus,
    size: {
      type: 'computer', // getScreenSizeType(),
    },
  },
};

module.exports.deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case device.screen.sizeTypeChanged:
      if (screenSizeTypes.includes(action.payload)
        && state.screen.size.type !== action.payload) {
        state.screen.size.type = action.payload;
        return state;
      }
      return state;
    case device.screen.hiddenChanged:
      if (state.screen.hidden !== action.payload) {
        return state.screen.hidden, action.payload;
      }
      return state;
    default:
      return state;
  }
}
