import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
//import mlURL from 'multi-languages-url';
import LoadingApp from '../../components/LoadingApp';
import logger from '../../lib/logger';
import UI from '../../containers/UI';

import { Header, Segment, Icon, Table, Container } from 'semantic-ui-react';


const TableOfServers = (props) => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Сеть</Table.HeaderCell>
        <Table.HeaderCell>Статус</Table.HeaderCell>
        <Table.HeaderCell>Сервер</Table.HeaderCell>
        <Table.HeaderCell>Ссылки</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {//<List link horizontal inverted celled>
        Object.keys(props.servers).map((key) => {
          const item = props.servers[key];
          const color = (item.error === null) ? "green" : "red";
          return (
            <Table.Row key={key}>
              <Table.Cell collapsing >
                <a>{
                  item.server.network_title
                  /* props.networks[item.server.chain_id]
                  ? props.networks[item.server.chain_id].name
                  : ""//"Unknown" */
                }</a>
              </Table.Cell>
              <Table.Cell collapsing >
                <Icon name='circle' color={color} />
              </Table.Cell>
              <Table.Cell>
                {item.server.title} {/*item.info && '(блок: ' + item.info.head_block_num + ')'*/}
              </Table.Cell>
              <Table.Cell collapsing >
                {
                  <a target="_blank" rel="noopener noreferrer"
                    href={
                      'https://local.bloks.io/' +
                      `?nodeUrl=${encodeURIComponent(item.server.nodeUrl)}` +
                      `&hyperionUrl=${encodeURIComponent(item.server.hyperionUrl)}` +
                      `&coreSymbol=${encodeURIComponent(item.server.coreSymbol)}` +
                      `&corePrecision=${encodeURIComponent(item.server.corePrecision)}` +
                      `&systemDomain=${encodeURIComponent(item.server.systemDomain)}`
                    }
                  >Открыть Explorer</a>
                }
              </Table.Cell>
            </Table.Row>
          );
        })
      }
    </Table.Body>
  </Table>
);

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
          <Container style={{ paddingTop: '7em', paddingBottom: '1em', minHeight: '100vh' }}>
            <Header as='h1'>{t('menu:Explorer')}</Header>
            <Segment textAlign='left'>
              Для открытия эксплорера блоков выберите сервер и нажмите ссылку "Открыть Explorer".
            </Segment>
            <TableOfServers servers={this.props.servers} />
            <Segment textAlign='left'>
              * Используется внешний сервис предоставляемый ресурсом <a className="App-link" target="_blank" rel="noopener noreferrer" href="https://bloks.io/"
              >bloks.io</a>
            </Segment>
          </Container>
        </UI >
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
    servers: state.servers.servers,
    networks: state.servers.networks,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default ExplorerPageLayout;
