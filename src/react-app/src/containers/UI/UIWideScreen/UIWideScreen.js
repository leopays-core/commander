import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
import logger from '../../../lib/logger';


class UIWideScreen extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //if (this.props.language !== nextProps.language)
    //  return true;
    return false;
  }

  render() {
    logger.render('UIWideScreen');

    return (
      <Responsive {...this.props}
        minWidth={Responsive.onlyWidescreen.minWidth}
      >
        {this.props.children}
      </Responsive>
    );
  }
}

UIWideScreen.propTypes = {
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

export default UIWideScreen;
