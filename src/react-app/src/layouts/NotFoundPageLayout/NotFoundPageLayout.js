import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Header, Image } from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import mlURL from 'multi-languages-url';
import logger from '../../lib/logger';
import reactLogo from '../../react-logo.svg';


class NotFoundPageLayout extends PureComponent {

  render() {
    logger.render('NotFoundPageLayout');

    const { t, tReady, language, languages, pathname } = this.props;
    const ml = new mlURL({ languages: languages, pathname: pathname });
    if (!tReady)
      return null;

    return (
      <Fragment>
        <Helmet>
          <html lang={language} />
          <title>{t('main:Not Found') | t('main:proName')}</title>
        </Helmet>
        <header id="app" className="App-header">
          <Dimmer active={true} page>
            <Image src={reactLogo} className="App-logo" alt="logo" />
            <Header as='h1' size='huge' inverted>
              {t('main:Error').toUpperCase()}: 404
              <Header.Subheader>
                {t('main:Not Found')}
              </Header.Subheader>
            </Header>
            <Link
              className="App-link"
              to={ml.url('/')}
            >
              {t('main:Home Page')}
            </Link>

          </Dimmer>
        </header>
      </Fragment>
    );
  }
}

NotFoundPageLayout.propTypes = {
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

export default NotFoundPageLayout;
