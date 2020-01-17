import { fromJS } from 'immutable';
import { device } from '../../constants/action-types';
import { screenSizeTypes, getScreenSizeType } from '../../lib/device-info';


let hiddenStatus;
if (document['hidden']) {
  hiddenStatus = true;
} else {
  hiddenStatus = false;
}

const initialState = fromJS({
  screen: {
    hidden: hiddenStatus,
    size: {
      type: getScreenSizeType(),
    },
  },
});

export const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case device.screen.sizeTypeChanged:
      if (screenSizeTypes.includes(action.payload)
        && state.getIn(['screen', 'size', 'type']) !== action.payload) {
        return state.setIn(['screen', 'size', 'type'], action.payload);
      }
      return state;
    case device.screen.hiddenChanged:
      if (state.getIn(['screen', 'hidden']) !== action.payload) {
        return state.setIn(['screen', 'hidden'], action.payload);
      }
      return state;
    default:
      return state;
  }
}
