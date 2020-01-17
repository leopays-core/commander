import React, { Component } from 'react';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import { screenSizeTypes } from '../../lib/device-info';
import Loading from '../../components/Loading';
import logger from '../../lib/logger';


/*
const FooterMobile = Loadable({
  loader: () => import('./FooterMobile'),
  loading: Loading,
});
const FooterTablet = Loadable({
  loader: () => import('./FooterTablet'),
  loading: Loading,
});*/
const FooterComputer = Loadable({
  loader: () => import('./FooterComputer'),
  loading: Loading,
});
/*
const FooterLargeScreen = Loadable({
  loader: () => import('./FooterLargeScreen'),
  loading: Loading,
});
const FooterWideScreen = Loadable({
  loader: () => import('./FooterWideScreen'),
  loading: Loading,
});*/

/*
static onlyMobile = { minWidth: 320, maxWidth: 767 }
static onlyTablet = { minWidth: 768, maxWidth: 991 }
static onlyComputer = { minWidth: 992 }//maxWidth: 1199
static onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 }
static onlyWidescreen = { minWidth: 1920 }
*/
class Footer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.screen_size_type !== nextProps.screen_size_type)
      return true;
    return false;
  }

  render() {
    logger.render('Footer');
    const { screen_size_type } = this.props;

    return (<FooterComputer children={this.props.children} />);

    /*
    if (screen_size_type === 'mobile')
      return (<FooterMobile children={this.props.children} />);
    else if (screen_size_type === 'tablet')
      return (<FooterTablet children={this.props.children} />);
    else if (screen_size_type === 'computer')
      return (<FooterComputer children={this.props.children} />);
    else if (screen_size_type === 'largeScreen')
      return (<FooterLargeScreen children={this.props.children} />);
    else if (screen_size_type === 'wideScreen')
      return (<FooterWideScreen children={this.props.children} />);
    else
      return null;
    */
  }
}

Footer.propTypes = {
  children: PropTypes.node,
  screen_size_type: PropTypes.oneOf(screenSizeTypes).isRequired,
}

export const mapStateToProps = (state) => {
  return {
    screen_size_type: state.getIn(['device', 'screen', 'size', 'type']),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default Footer;
