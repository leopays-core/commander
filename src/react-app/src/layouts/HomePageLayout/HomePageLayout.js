import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
//import mlURL from 'multi-languages-url';
import LoadingApp from '../../components/LoadingApp';
import logger from '../../lib/logger';
import reactLogo from '../../react-logo.svg';
import UI from '../../containers/UI';


class HomePageLayout extends PureComponent {

  render() {
    logger.render('HomePageLayout');
    const { t, tReady, language/*, languages, pathname*/ } = this.props;
    //const ml = new mlURL({ languages: languages, pathname: pathname });

    if (tReady)
      return (
        <UI>
          <Helmet>
            <html lang={language} />
            <title>{t('main:proName')}</title>
          </Helmet>
          <header
            style={{ paddingTop: '7em', paddingBottom: '1em', minHeight: '100vh' }}
          >
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

HomePageLayout.propTypes = {
  children: PropTypes.node,
  language: PropTypes.string,
  languages: PropTypes.array,
  pathname: PropTypes.string,
}

export const mapStateToProps = (state) => {
  return {
    language: state.i18next.language,
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default HomePageLayout;
