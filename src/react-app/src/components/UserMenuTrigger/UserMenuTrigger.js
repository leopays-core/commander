import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, Icon } from 'semantic-ui-react';
import logger from '../../lib/logger';


class UserMenuTriggerUnloginned extends PureComponent {
  render() {
    logger.render('UserMenuTriggerUnloginned');

    return (
      <span>
        <Icon
          name={this.props.icon ? this.props.icon : 'user'}
        /> {this.props.text ? this.props.text : null}
      </span>
    );
  }
}
UserMenuTriggerUnloginned.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

class UserMenuTriggerLoginned extends PureComponent {
  render() {
    logger.render('UserMenuTriggerLoginned');

    return (
      <span>
        <Image
          avatar
          src={this.props.avatar_src ? this.props.avatar_src : ''}
        /> {this.props.name ? this.props.name : null}
      </span>
    );
  }
}
UserMenuTriggerLoginned.propTypes = {
  name: PropTypes.string.isRequired,
  avatar_src: PropTypes.string.isRequired,
};


class UserMenuTrigger extends PureComponent {
  /*shouldComponentUpdate(nextProps, nextState) {
    if (this.props.language !== nextProps.language)
      return true;
    return false;
  }*/

  render() {
    logger.render('UserMenuTrigger');
    const { t, tReady } = this.props;

    if (tReady) {
      if (this.props.user.loginned)
        return (
          <UserMenuTriggerLoginned
            name={this.props.user.name}
            avatar_src={this.props.user.avatar_src}
          />
        );
      else
        return (
          <UserMenuTriggerUnloginned
            icon='sign in'
            text={t('menu:Log In').toUpperCase()}
          />
        );
    } else
      return null;
  }
}

UserMenuTrigger.propTypes = {
  language: PropTypes.string,
  loginned: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar_src: PropTypes.string
  }).isRequired,
}

export const mapStateToProps = (state) => {
  return {
    language: state.getIn(['i18next', 'language']),
    loginned: state.getIn(['auth', 'loginned']),
    user: state.getIn(['auth', 'user']),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default UserMenuTrigger;
