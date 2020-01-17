import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider as StoreProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ConnectedRouter } from 'connected-react-router/immutable';
import configureStore, { history } from '../../store';
import {
  deviceScreenSizeTypeChanged, deviceScreenHiddenChanged
} from '../../store/actions/device-actions';
import { checkAllServers } from '../../store/actions/servers-actions';
import { getScreenSizeType } from '../../lib/device-info';
import configureI18n, { handleChangeLocationImmutable } from '../../i18n';
import logger from '../../lib/logger';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


const store = configureStore();
const i18n = configureI18n(store);
store.subscribe(handleChangeLocationImmutable(store, i18n));
store.dispatch(checkAllServers());


class Root extends PureComponent {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }

  handleResize() {
    const newDeviceScreenSizeType = getScreenSizeType();
    const device = store.getState().get('device');
    if (device.getIn(['screen', 'size', 'type']) !== newDeviceScreenSizeType)
      store.dispatch(deviceScreenSizeTypeChanged(newDeviceScreenSizeType));
  }

  handleVisibilityChange() {
    const device = store.getState().get('device');
    const hiddenStatus = document['hidden'];
    if (device.getIn(['screen', 'hidden']) !== hiddenStatus)
      store.dispatch(deviceScreenHiddenChanged(hiddenStatus));
  }

  render() {
    logger.render('Root');
    return (
      <StoreProvider store={store} >
        <I18nextProvider i18n={i18n}>
          <ConnectedRouter history={history}>
            {/*<UI {...this.props}>*/}
            {this.props.children}
            {/*</UI>*/}
          </ConnectedRouter>
        </I18nextProvider>
      </StoreProvider>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node,
}

export default Root;
