import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { screenSizeTypes } from '../../lib/device-info';
import LoadingApp from '../../components/LoadingApp';
import logger from '../../lib/logger';


const UIDefault = Loadable({
  loader: () => import('./UIDefault'),
  loading: LoadingApp,
});
/*
const UIMobile = Loadable({
  loader: () => import('./UIMobile'),
  loading: LoadingApp,
});
const UITablet = Loadable({
  loader: () => import('./UITablet'),
  loading: LoadingApp,
});
const UIComputer = Loadable({
  loader: () => import('./UIComputer'),
  loading: LoadingApp,
});
const UILargeScreen = Loadable({
  loader: () => import('./UILargeScreen'),
  loading: LoadingApp,
});
const UIWideScreen = Loadable({
  loader: () => import('./UIWideScreen'),
  loading: LoadingApp,
});
*/
/*
static onlyMobile = { minWidth: 320, maxWidth: 767 }
static onlyTablet = { minWidth: 768, maxWidth: 991 }
static onlyComputer = { minWidth: 992 }//maxWidth: 1199
static onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 }
static onlyWidescreen = { minWidth: 1920 }
*/
class UI extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.screen_size_type !== nextProps.screen_size_type)
      return true;
    return false;
  }

  render() {
    logger.render('UI');
    //const { screen_size_type } = this.props;

    return (<UIDefault {...this.props} children={this.props.children} />);
    /*
    if (screen_size_type === 'mobile')
      return (<UIMobile {...this.props} children={this.props.children} />);
    else if (screen_size_type === 'tablet')
      return (<UITablet {...this.props} children={this.props.children} />);
    else if (screen_size_type === 'computer')
      return (<UIComputer {...this.props} children={this.props.children} />);
    else if (screen_size_type === 'largeScreen')
      return (<UILargeScreen {...this.props} children={this.props.children} />);
    else if (screen_size_type === 'wideScreen')
      return (<UIWideScreen {...this.props} children={this.props.children} />);
    else
      return null;
    */
  }
}

UI.propTypes = {
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

export default UI;
