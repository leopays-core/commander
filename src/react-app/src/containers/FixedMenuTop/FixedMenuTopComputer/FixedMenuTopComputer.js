import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Menu } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import mlURL from 'multi-languages-url';
//import UserMenu from '../../../components/UserMenu';
import logger from '../../../lib/logger';
import reactLogo from '../../../react-logo.svg';


class FixedMenuTopComputer extends PureComponent {
  /*shouldComponentUpdate(nextProps, nextState) {
    if (this.props.language !== nextProps.language)
      return true;
    return false;
  }*/

  render() {
    logger.render('FixedMenuTopComputer');

    const { t, /*tReady, language,*/ languages, pathname } = this.props;
    const ml = new mlURL({ languages: languages, pathname: pathname });
    //const fixed = true;

    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to={ml.url('/')} header>
            <Image size='mini' src={reactLogo} className="App-logo" alt="logo" />
            {/*<Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />*/}
            {t('main:proName')}
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={ml.url('/dashboard')} >
            {t('menu:Dashboard')}
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={ml.url('/node')} >
            {t('menu:Node')}
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={ml.url('/bot')} >
            {t('menu:Bot')}
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={ml.url('/wallet')} >
            {t('menu:Wallet')}
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={ml.url('/explorer')} >
            {t('menu:Explorer')}
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={ml.url('/docker')} >
            {t('menu:Docker')}
          </Menu.Item>

          {/*<Menu.Item position='right' fitted='vertically'>
            <UserMenu />
          </Menu.Item>*/}
        </Container>
      </Menu>
    );
  }
}

FixedMenuTopComputer.propTypes = {
  children: PropTypes.node,
  language: PropTypes.string,
  languages: PropTypes.array,
  pathname: PropTypes.string,
}

export const mapStateToProps = (state) => {
  return {
    language: state.getIn(['i18next', 'language']),
    languages: state.getIn(['i18next', 'whitelist']),
    pathname: state.getIn(['router', 'location', 'pathname']),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default FixedMenuTopComputer;
