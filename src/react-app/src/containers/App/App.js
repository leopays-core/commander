import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
//import { Trans } from 'react-i18next';
import { Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import mlURL from 'multi-languages-url';
import LoadingApp from '../../components/LoadingApp';
import SwitchWithRoutes from '../../components/SwitchWithRoutes';
import { routes } from './routes';
import logger from '../../lib/logger';
import reactLogo from '../../react-logo.svg';



class App extends PureComponent {
  /*shouldComponentUpdate(nextProps, nextState) {
    /*if (!this.props.tReady && nextProps.tReady && nextProps.language !== null)
      return true;
    else* / if (this.props.language !== nextProps.language)
      return true;
    return false;
    /*if (this.state !== nextState) {
      return true;
    }* /
  }*/

  render() {
    logger.render('App', this.props);

    const { t, tReady, language, languages, pathname } = this.props;
    const ml = new mlURL({ languages: languages, pathname: pathname });

    if (tReady)
      return (
        <div id="app" className="App">
          <Helmet>
            <html lang={language} />
            <title>{t('main:proName')}</title>
          </Helmet>
          <SwitchWithRoutes routes={routes(ml, t)} />
        </div>
      );
    else
      return <LoadingApp />;
  }
}

App.propTypes = {
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

export default App;
