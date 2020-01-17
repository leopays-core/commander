import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { push } from 'connected-react-router/immutable';
import mlURL from 'multi-languages-url';
import UserMenuTrigger from '../UserMenuTrigger';
import logger from '../../lib/logger';


const options = (t) => ([
  { key: 'settings', value: 'settings', text: t('menu:Settings').toUpperCase(), icon: 'settings' },
  { key: 'sign-out', value: 'sign-out', text: t('menu:Log out').toUpperCase(), icon: 'sign out' },
]);
const optionsUnloginned = (t) => ([
  { key: 'sign-in', value: 'sign-in', text: t('menu:Log In').toUpperCase(), icon: 'sign in' },
  { key: 'sign-up', value: 'sign-up', text: t('menu:Get Started').toUpperCase(), icon: 'signup' },
]);


class UserMenu extends PureComponent {
  constructor(props) {
    super(props);

    this._dropdownOnChange = this._dropdownOnChange.bind(this);
  }

  _dropdownOnChange(event, data) {
    const ml = new mlURL({
      languages: this.props.languages,
      pathname: this.props.pathname,
    });

    switch (data.value) {
      case 'sign-in':
        //проверка токенов
        this.props.routerPush(ml.url(`/my/login`));
        break;
      case 'sign-up':
        this.props.routerPush(ml.url(`/my/register`));
        break;
      case 'settings':
        this.props.routerPush(ml.url(`/my/settings`));
        break;
      case 'sign-out':
        this.props.routerPush(ml.url(`/my/logout`));
        break;
      default:
        break;
    }

  }

  render() {
    logger.render('UserMenu', this.props);
    const { t, tReady } = this.props;

    if (tReady) {
      return (
        <Dropdown
          simple
          direction='left'
          trigger={<UserMenuTrigger />}
          options={this.props.auth.loginned ? options(t) : optionsUnloginned(t)}
          onChange={this._dropdownOnChange}
          //pointing='top left'
          icon={'dropdown'}
        />
      );
    } else
      return null;
  }
}

UserMenu.propTypes = {
  language: PropTypes.string,
  languages: PropTypes.array,
  pathname: PropTypes.string,
  auth: PropTypes.shape({
    loginned: PropTypes.bool,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatar_src: PropTypes.string
    }),
  }).isRequired,
}

export const mapStateToProps = (state) => {
  return {
    language: state.getIn(['i18next', 'language']),
    languages: state.getIn(['i18next', 'whitelist']),
    pathname: state.getIn(['router', 'location', 'pathname']),
    auth: state.getIn(['auth']),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    routerPush: (path) => dispatch(push(path)),
  };
};

export default UserMenu;
