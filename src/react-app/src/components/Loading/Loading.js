import React from 'react';
import logger from '../../lib/logger';


function Loading(props) {
  logger.render('Loading');

  if (props.error)
    // When the loader has errored
    return (<div id="loading" className="Loading">Error! <button onClick={props.retry}>Retry</button></div>);
  else if (props.timedOut)
    // When the loader has taken longer than the timeout
    return (<div id="loading" className="Loading">Taking a long time... <button onClick={props.retry}>Retry</button></div>);
  else if (props.pastDelay)
    // When the loader has taken longer than the delay
    return (<div id="loading" className="Loading">Loading...</div>);
  else
    // When the loader has just started
    return null;
}

export default Loading;
