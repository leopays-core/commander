import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
//import mlURL from 'multi-languages-url';
import LoadingApp from '../../components/LoadingApp';
import logger from '../../lib/logger';
import UI from '../../containers/UI';
import api from '../../api';

import { Icon, Table, Container } from 'semantic-ui-react';


const TableExampleCelledStriped = () => {

  api()
  return (
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
  );
}

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
          <Container style={{ marginTop: '7em' }} >
            <TableExampleCelledStriped />
          </Container>
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
