// https://reacttraining.com/react-router/web/example/route-config
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../RouteWithSubRoutes';


class SwitchWithRoutes extends PureComponent {
  render() {
    return (
      <Fragment>
        <Switch>
          {
            this.props.routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))
          }
        </Switch>
      </Fragment>
    );
  }
}

SwitchWithRoutes.propTypes = {
  routes: PropTypes.array,
};

/*
export const mapStateToProps = (state) => {
  return {};
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};
*/

export default SwitchWithRoutes;
