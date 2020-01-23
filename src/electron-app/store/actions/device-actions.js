import { device } from '../../constants/action-types';


export const deviceScreenSizeTypeChanged = (screen_size_type) => ({
  type: device.screen.sizeTypeChanged,
  payload: screen_size_type,
});

export const deviceScreenHiddenChanged = (screen_hidden) => ({
  type: device.screen.hiddenChanged,
  payload: screen_hidden,
});
