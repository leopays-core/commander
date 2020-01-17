import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
import logger from '../../lib/logger';


const maxWidth = 1199;

class UIComputer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //if (this.props.language !== nextProps.language)
    //  return true;
    return false;
  }

  render() {
    logger.render('UIComputer');

    return (
      <Responsive {...this.props}
        minWidth={Responsive.onlyComputer.minWidth}
        maxWidth={maxWidth}
      >
        {this.props.children}
      </Responsive>
    );
  }
}

UIComputer.propTypes = {
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

export default UIComputer;
