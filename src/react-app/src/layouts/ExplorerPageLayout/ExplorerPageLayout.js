import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
//import mlURL from 'multi-languages-url';
import LoadingApp from '../../components/LoadingApp';
import logger from '../../lib/logger';
import reactLogo from '../../react-logo.svg';
import UI from '../../containers/UI';


class ExplorerPageLayout extends PureComponent {

  render() {
    logger.render('ExplorerPageLayout');
    const { t, tReady, language/*, languages, pathname*/ } = this.props;
    //const ml = new mlURL({ languages: languages, pathname: pathname });

    if (tReady)
      return (
        <UI>
          <Helmet>
            <html lang={language} />
            <title>{t('main:proName')}</title>
          </Helmet>
          <header id="app" className="App-header">
            <img src={reactLogo} className="App-logo" alt="logo" />
            <a className="App-link" target="_blank" rel="noopener noreferrer"
              href="https://bloks.io/"
            >
              Открыть Explorer (https://bloks.io/)
            </a>
            <a className="App-link" target="_blank" rel="noopener noreferrer"
              href={
                'https://local.bloks.io/' +
                `?nodeUrl=${encodeURIComponent('http://localhost:8888')}` +
                `&hyperionUrl=${encodeURIComponent('http://localhost:17555')}` +
                `&coreSymbol=${encodeURIComponent('MLRD')}` +
                `&corePrecision=${encodeURIComponent(4)}` +
                `&systemDomain=${encodeURIComponent('eosio')}`
              }
            >
              Открыть Explorer (https://local.bloks.io/) для узла на localhost:8888
            </a>
            <a className="App-link" target="_blank" rel="noopener noreferrer"
              href={
                'https://local.bloks.io/' +
                `?nodeUrl=${encodeURIComponent('http://testnet.milliard.money:8888')}` +
                `&hyperionUrl=${encodeURIComponent('http://testnet.milliard.money:17555')}` +
                `&coreSymbol=${encodeURIComponent('MLRD')}` +
                `&corePrecision=${encodeURIComponent(4)}` +
                `&systemDomain=${encodeURIComponent('eosio')}`
              }
            >
              Открыть Explorer (https://local.bloks.io/) для узла на testnet.milliard.money
            </a>



          </header>
        </UI>
      );
    else
      return <LoadingApp />;
  }
}

ExplorerPageLayout.propTypes = {
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

export default ExplorerPageLayout;
