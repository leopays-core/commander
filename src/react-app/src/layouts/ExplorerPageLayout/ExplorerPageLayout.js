import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
//import mlURL from 'multi-languages-url';
import LoadingApp from '../../components/LoadingApp';
import logger from '../../lib/logger';
import UI from '../../containers/UI';

import { Icon, Table, Container } from 'semantic-ui-react';


const TableExampleCelledStriped = () => (
  <div>

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


    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>Git Repository</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name='folder' /> node_modules
        </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell collapsing textAlign='right'>
            10 hours ago
        </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name='folder' /> test
        </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name='file outline' /> package.json
        </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name='file outline' /> Gruntfile.js
        </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)

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
            <title>{t('menu:Explorer')} | {t('main:proName')}</title>
          </Helmet>
          <Container style={{ marginTop: '7em' }} >
            <TableExampleCelledStriped />
          </Container>
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
    language: state.i18next.language,
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default ExplorerPageLayout;
