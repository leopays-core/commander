import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import Loadable from 'react-loadable';
import LoadingApp from './components/LoadingApp';
import logger from './lib/logger';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = Loadable({
  loader: () => import('./containers/App'),
  loading: LoadingApp,
  //delay: 300, // 0.3 seconds
  //timeout: 10000, // 10 seconds
});


const mountNode = document.createElement('div');
mountNode.id = 'root';
document.body.appendChild(mountNode);

const renderRootContainer = (Component) => {
  logger.render('renderRootContainer started');
  render(
    <Root >
      <Component />
    </Root>,
    mountNode
  );
}
renderRootContainer(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
