// https://reacttraining.com/react-router/web/example/route-config
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
class RouteWithSubRoutes extends PureComponent {
  render() {
    return (
      <Route
        path={this.props.path}
        exact={this.props.exact}
        render={(props) => (
          // pass the sub-routes down to keep nesting
          <this.props.component {...props} routes={this.props.routes} />
        )}
      />
    );
  }
}

RouteWithSubRoutes.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func.isRequired,//PropTypes.element.isRequired,
  exact: PropTypes.bool,
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

export default RouteWithSubRoutes;
