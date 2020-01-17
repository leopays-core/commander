import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  List,
  Segment,
  Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import mlURL from 'multi-languages-url';
import LanguageToogler from '../../../components/LanguageToogler';
import logger from '../../../lib/logger';
import reactLogo from '../../../react-logo.svg';
import isElectron from '../../../lib/is-electron';


class FooterComputer extends PureComponent {
  /*shouldComponentUpdate(nextProps, nextState) {
    if (this.props.language !== nextProps.language)
      return true;
    return false;
  }*/

  render() {
    logger.render('FooterComputer');

    const { t, tReady, languages, pathname } = this.props;
    const ml = new mlURL({ languages: languages, pathname: pathname });

    if (!tReady)
      return null;
    if (isElectron())
      return null;
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>

            <Grid.Row>
              <Grid.Column width={4} textAlign='left'>
                <List link divided horizontal inverted>
                  <List.Item as={Link} to={ml.url('/')}>
                    <Image size='mini' src={reactLogo} className="App-logo" alt="logo" />
                    {t('main:proName')}
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={8} textAlign='center'>
                <Grid.Row>
                  <List link horizontal inverted divided>
                    <List.Item as={Link} to={ml.url('/privacy')}>
                      {t('footer:Privacy Policy')}
                    </List.Item>
                    <List.Item as={Link} to={ml.url('/terms')}>
                      {t('footer:Terms & Conditions')}
                    </List.Item>
                    {/*<List.Item
                      as={'a'} target='_blank' href={`mailto:info@milliard.money`}
                    >
                      {t('footer:Contact')}
                    </List.Item>*/}
                  </List>
                </Grid.Row>
                <Grid.Row>
                  <List link divided horizontal inverted>
                    <List.Item as={'p'}>
                      {
                        t(
                          'footer:Copyright',
                          {
                            year: new Date().getFullYear(),
                            name: t('main:proName')
                          }
                        )
                      }
                    </List.Item>
                  </List>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column width={4} textAlign='right'>
                <LanguageToogler />
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Container>
      </Segment>
    );
  }
}

FooterComputer.propTypes = {
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
    servers: state.getIn(['servers', 'servers']),
    networks: state.getIn(['servers', 'networks']),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default FooterComputer;
