import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Root from './containers/Root';
import Loadable from 'react-loadable';
import LoadingApp from './components/LoadingApp';
import logger from './lib/logger';
import './index.css';
import * as serviceWorker from './serviceWorker';

import ReactHotLoader, { AppContainer, setConfig } from 'react-hot-loader';
import PatchedReactDOM from '@hot-loader/react-dom';


const App = Loadable({
  loader: () => import('./containers/App'),
  loading: LoadingApp,
  //delay: 300, // 0.3 seconds
  //timeout: 10000, // 10 seconds
});


const mountNode = document.createElement('div');
mountNode.id = 'root';
document.body.appendChild(mountNode);

ReactHotLoader.patch(React, PatchedReactDOM);
setConfig({
  logLevel: 'debug',
  //errorReporter: ErrorBoundary,
  //pureSFC: true,
  //ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  //pureRender: true // RHL will not change render method
});

const renderRootContainer = (Component) => {
  logger.render('renderRootContainer started');
  render(
    <AppContainer>
      <Root >
        <Component />
      </Root>
    </AppContainer>,
    mountNode
  );
}
renderRootContainer(App);

// webpack Hot Module Replacement API
if (module.hot) {
  // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
  // while `hot` would configure HMR for the CURRENT module
  module.hot.accept('./containers/App', () => {
    // restore scroll
    const { scrollLeft, scrollTop } = document.scrollingElement;
    unmountComponentAtNode(mountNode);

    try {
      // if you are using harmony modules ({modules:false})
      //render(App);
      // in all other cases - re-require App manually
      const NextRootContainer = require('./containers/App').default;
      renderRootContainer(NextRootContainer);
      document.scrollingElement.scrollTop = scrollTop;
      document.scrollingElement.scrollLeft = scrollLeft;
    } catch (e) {
      console.error(e);
    }
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
