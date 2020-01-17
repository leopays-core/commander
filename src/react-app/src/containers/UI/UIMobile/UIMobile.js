import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
import logger from '../../../lib/logger';


class UIMobile extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //if (this.props.language !== nextProps.language)
    //  return true;
    return false;
  }
  render() {
    logger.render('UIMobile');

    return (
      <Responsive {...this.props}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {this.props.children}
      </Responsive>
    );
  }
}

UIMobile.propTypes = {
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

export default UIMobile;
