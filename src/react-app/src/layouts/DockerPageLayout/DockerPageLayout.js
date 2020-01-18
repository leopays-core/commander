import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
//import mlURL from 'multi-languages-url';
import LoadingApp from '../../components/LoadingApp';
import logger from '../../lib/logger';
import reactLogo from '../../react-logo.svg';
import UI from '../../containers/UI';

class DockerPageLayout extends PureComponent {

  render() {
    logger.render('DockerPageLayout');
    const { t, tReady, language/*, languages, pathname*/ } = this.props;
    //const ml = new mlURL({ languages: languages, pathname: pathname });


    if (tReady)
      return (
        <UI>
          <Helmet>
            <html lang={language} />
            <title>{t('menu:Docker')} | {t('main:proName')}</title>
          </Helmet>
          <header id="app" className="App-header">
            <img src={reactLogo} className="App-logo" alt="logo" />
            <p>
              {t('main:welcome')}
            </p>

          </header>
        </UI>
      );
    else
      return <LoadingApp />;
  }
}

DockerPageLayout.propTypes = {
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

export default DockerPageLayout;
