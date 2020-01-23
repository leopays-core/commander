import { device } from '../../constants/action-types';
import { screenSizeTypes, getScreenSizeType } from '../../lib/device-info';


let hiddenStatus;
if (document['hidden']) {
  hiddenStatus = true;
} else {
  hiddenStatus = false;
}

const initialState = {
  screen: {
    hidden: hiddenStatus,
    size: {
      type: getScreenSizeType(),
    },
  },
};

export const deviceReducer = (state = initialState, action) => {
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
        return state.screenhidden, action.payload;
      }
      return state;
    default:
      return state;
  }
}
