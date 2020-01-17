import React from 'react';
import logger from '../../lib/logger';
import reactLogo from '../../react-logo.svg';
import './LoadingApp.css';


function LoadingAppOk(props) {
  logger.render('LoadingAppOk');
  return (
    <div id="loading-app" className="LoadingApp">
      <header className="LoadingApp-header">
        <img src={reactLogo} className="LoadingApp-logo" alt="logo" />
        <strong className="LoadingApp-link">
          Loading App...
        </strong>
      </header>
    </div>
  );
}
function LoadingAppError(props) {
  logger.render('LoadingAppError');
  return (
    <div id="loading-app" className="LoadingApp">
      <header className="LoadingApp-header">
        <img src={reactLogo} className="LoadingApp-logo" alt="logo" />
        <div className="LoadingApp-link">
          Error! <button onClick={props.retry}>Retry</button>
        </div>
      </header>
    </div>
  );
}
function LoadingAppTimeOut(props) {
  logger.render('LoadingAppTimeOut');
  return (
    <div id="loading-app" className="LoadingApp">
      <header className="LoadingApp-header">
        <img src={reactLogo} className="LoadingApp-logo" alt="logo" />
        <div className="LoadingApp-link">
          Taking a long time... <button onClick={props.retry}>Retry</button>
        </div>
      </header>
    </div>
  );
}

function LoadingApp(props) {
  logger.render('LoadingApp');
  if (props.error)
    // When the loader has errored
    return (<LoadingAppError {...props} />);
  else if (props.timedOut)
    // When the loader has taken longer than the timeout
    return (<LoadingAppTimeOut {...props} />);
  else if (props.pastDelay)
    // When the loader has taken longer than the delay
    return (<LoadingAppOk {...props} />);
  else
    // When the loader has just started
    return null;

}
/*
error: null,
isLoading: true.
pastDelay: false,
retry: ƒ (),
timedOut: false,
*/

export default LoadingApp;
