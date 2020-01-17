import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
import FixedMenuTop from '../../FixedMenuTop';
import Footer from '../../Footer';
import logger from '../../../lib/logger';


class UIDefault extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //if (this.props.language !== nextProps.language)
    //  return true;
    return false;
  }

  render() {
    logger.render('UIDefault');

    return (
      <Responsive {...this.props} >
        <FixedMenuTop />
        {this.props.children}
        <Footer />
      </Responsive>
    );
  }
}

UIDefault.propTypes = {
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

export default UIDefault;
