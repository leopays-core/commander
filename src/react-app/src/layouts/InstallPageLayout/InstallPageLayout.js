import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
//import mlURL from 'multi-languages-url';
import LoadingApp from '../../components/LoadingApp';
import logger from '../../lib/logger';
import UI from '../../containers/UI';
import api, { Docker } from '../../api';
import { Header, Button, Loader, Image, Segment } from 'semantic-ui-react';
import isElectron from '../../lib/is-electron';


import { Icon, Table, Container } from 'semantic-ui-react';

/*
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalModalExample = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)
*/

const isWeb = !isElectron();

const TableExampleCelledStriped = () => {
  api();//
  const onClickLink = (url) => {
    if (isWeb)
      window.open(url);
    else
      window.require('electron').shell.openExternal(url);
  }
  console.log(Docker.info())

  return (
    <Fragment>
      <Header as='h2' textAlign='left'>Зависимости</Header>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='1'>Программа</Table.HeaderCell>
            <Table.HeaderCell colSpan='1'>Установлено</Table.HeaderCell>
            <Table.HeaderCell colSpan='1'>Действия</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              {/*<Icon name='folder' /> test*/}
              Docker
            </Table.Cell>
            {/*<Table.Cell collapsing ><Loader active inline size='tiny' /></Table.Cell>*/}
            {/*<Table.Cell collapsing ><Icon name='check circle' color='green' /></Table.Cell>*/}
            {/*<Table.Cell collapsing><Icon name='circle outline' color='red' /></Table.Cell>*/}
            <Table.Cell collapsing ><Loader active inline size='tiny' /></Table.Cell>
            <Table.Cell textAlign='right'>
              <Button size='mini'
                disabled color="green"
              >Установить</Button>
              <Button size='mini' color='blue'
                onClick={() => onClickLink("https://docs.docker.com/install/")}
              >Подробнее</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Docker Compose
          </Table.Cell>
            <Table.Cell><Icon name='circle outline' color='red' /></Table.Cell>
            <Table.Cell textAlign='right'>
              <Button size='mini'
                disabled color="green"
              >Установить</Button>
              <Button size='mini' color='blue'
                onClick={() => onClickLink("https://docs.docker.com/compose/install/")}
              >Подробнее</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Fragment>
  );
}

class InstallPageLayout extends PureComponent {
  render() {
    logger.render('InstallPageLayout');
    const { t, tReady, language/*, languages, pathname*/ } = this.props;
    //const ml = new mlURL({languages: languages, pathname: pathname });

    if (tReady)
      return (
        <UI>
          <Helmet>
            <html lang={language} />
            <title>{t('menu:Install')} | {t('main:proName')}</title>
          </Helmet>
          <Container style={{ marginTop: '7em' }} >
            <Header as='h1'>Установка</Header>
            <TableExampleCelledStriped />
          </Container>
        </UI>
      );
    else
      return <LoadingApp />;
  }
}

InstallPageLayout.propTypes = {
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

export default InstallPageLayout;
