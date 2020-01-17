import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
import logger from '../../../lib/logger';


class UITablet extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //if (this.props.language !== nextProps.language)
    //  return true;
    return false;
  }

  render() {
    logger.render('UITablet');

    return (
      <Responsive {...this.props}
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        {this.props.children}
      </Responsive>
    );
  }
}

UITablet.propTypes = {
  children: PropTypes.node,
  //language: PropTypes.string,
}

export const mapStateToProps = (state) => {
  return {
    //language: state.getIn(['i18next', 'language']),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default UITablet;
