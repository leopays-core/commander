import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
//import { Trans } from 'react-i18next';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import mlURL from 'multi-languages-url';
import LoadingApp from '../../components/LoadingApp';
import logger from '../../lib/logger';
import reactLogo from '../../react-logo.svg';

import { signIn } from '../../store/actions/auth-actions';


class SignInLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: 'jack@example.com', //'jack@example.com',
      username: 'jack',
      password: 'secret',
    };

    this._onChange = this._onChange.bind(this);
    this._signIn = this._signIn.bind(this);
  }

  _onChange(event, data) {
    console.log('_onChange', data);
    let state = {};
    state[data.name] = data.value;
    console.log('_onChange', state);
    this.setState({ email: data.value });
  }
  _signIn(event, data) {
    console.log('_signIn event, data', event, data);
    this.props.signIn(this.state.username, this.state.password);
  }

  render() {
    logger.render('SignInLayout');
    const { t, tReady, language, languages, pathname } = this.props;
    const ml = new mlURL({ languages: languages, pathname: pathname });

    if (tReady)
      return (
        <Fragment>
          <Helmet>
            <html lang={language} />
            <title>{t('main:proName')}</title>
          </Helmet>
          <div id="app" className="App-header">
            <Grid inverted textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header inverted as='h2' color='teal' textAlign='center'>
                  <Image src={reactLogo} className="App-logo" alt="logo" /> Log In to your account
              </Header>
                <Form inverted size='large' onSubmit={this._signIn}>
                  <Segment inverted stacked>
                    <Form.Input inverted
                      fluid required
                      icon='user'
                      iconPosition='left'
                      placeholder='E-mail address'
                      name='email'
                      type='text'
                      placeholder='E-mail address'
                      onChange={this._onChange}
                      value={this.state.email}
                    />
                    <Form.Input inverted
                      fluid
                      icon='lock'
                      iconPosition='left'
                      name='password'
                      type='text'
                      placeholder='Password'
                      value={this.state.password}
                      onChange={this._onChange}
                    />

                    <Button inverted color='blue' fluid size='large' type='submit'>
                      Login
                  </Button>
                  </Segment>
                </Form>
                <Message onClick={this._signIn}>
                  New to us? <Link to={ml.url('/my/register')}>Register</Link>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        </Fragment>
      );
    else
      return <LoadingApp />;
  }
}

SignInLayout.propTypes = {
  language: PropTypes.string,
  languages: PropTypes.array,
  pathname: PropTypes.string,

  signIn: PropTypes.func,
}

export const mapStateToProps = (state) => {
  return {
    language: state.getIn(['i18next', 'language']),
    languages: state.getIn(['i18next', 'whitelist']),
    pathname: state.getIn(['router', 'location', 'pathname']),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    signIn: signIn(dispatch),//(this.state.username, this.state.password) (username, password)
  };
};

export default SignInLayout;
