import React, { Component } from 'react';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import { screenSizeTypes } from '../../lib/device-info';
import Loading from '../../components/Loading';
import logger from '../../lib/logger';


/*
const FixedMenuTopMobile = Loadable({
  loader: () => import('./FixedMenuTopMobile'),
  loading: Loading,
});
const FixedMenuTopTablet = Loadable({
  loader: () => import('./FixedMenuTopTablet'),
  loading: Loading,
});*/
const FixedMenuTopComputer = Loadable({
  loader: () => import('./FixedMenuTopComputer'),
  loading: Loading,
});
/*
const FixedMenuTopLargeScreen = Loadable({
  loader: () => import('./FixedMenuTopLargeScreen'),
  loading: Loading,
});
const FixedMenuTopWideScreen = Loadable({
  loader: () => import('./FixedMenuTopWideScreen'),
  loading: Loading,
});*/

/*
static onlyMobile = { minWidth: 320, maxWidth: 767 }
static onlyTablet = { minWidth: 768, maxWidth: 991 }
static onlyComputer = { minWidth: 992 }//maxWidth: 1199
static onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 }
static onlyWidescreen = { minWidth: 1920 }
*/
class FixedMenuTop extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.screen_size_type !== nextProps.screen_size_type)
      return true;
    return false;
  }

  render() {
    logger.render('FixedMenuTop');
    const { screen_size_type } = this.props;

    return (<FixedMenuTopComputer children={this.props.children} />);

    /*
    if (screen_size_type === 'mobile')
      return (<FixedMenuTopMobile children={this.props.children} />);
    else if (screen_size_type === 'tablet')
      return (<FixedMenuTopTablet children={this.props.children} />);
    else if (screen_size_type === 'computer')
      return (<FixedMenuTopComputer children={this.props.children} />);
    else if (screen_size_type === 'largeScreen')
      return (<FixedMenuTopLargeScreen children={this.props.children} />);
    else if (screen_size_type === 'wideScreen')
      return (<FixedMenuTopWideScreen children={this.props.children} />);
    else
      return null;
    */
  }
}

FixedMenuTop.propTypes = {
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

export default FixedMenuTop;
