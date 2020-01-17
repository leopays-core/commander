import React, { Component } from 'react';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { hot } from 'react-hot-loader';
import { Dropdown } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import logger from '../../lib/logger';


class LanguageToogler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultLanguage: props.defaultLanguage,
      languages: props.languages,
      languagesList: props.languagesList,
      icon: (props.icon !== undefined) ? props.icon : 'dropdown',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.language !== nextProps.language) return true;
    else return false;
  }

  handleChange(e, data) {
    if (data === undefined) {
      data = {
        value: e.target.value
      };
    }

    let newLanguage = this.state.defaultLanguage;
    if (this.state.languages.indexOf(data.value) !== -1) {
      newLanguage = data.value;
    }

    let pathnameArray = this.props.location.pathname.split('/');
    pathnameArray = pathnameArray.filter(elem => elem !== "");
    if (this.state.languages.indexOf(pathnameArray[0]) !== -1) {
      pathnameArray.shift();
    }

    if (newLanguage !== this.props.language) {
      if (newLanguage !== this.state.defaultLanguage) {
        pathnameArray.unshift(newLanguage);
      }
      let newLocation = '/' + pathnameArray.join('/') + this.props.location.search + this.props.location.hash;
      this.props.languageChangeDispatcher(newLocation);
    }
  }

  render() {
    logger.render('LanguageToogler');

    return (
      <Dropdown
        simple
        direction='left'
        options={this.state.languagesList}
        defaultValue={this.props.language}
        onChange={this.handleChange}
        icon={this.state.icon}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.getIn(['i18next', 'language']),
    languages: state.getIn(['i18next', 'whitelist']),
    languagesList: state.getIn(['i18next', 'languagesList']),
    defaultLanguage: state.getIn(['i18next', 'fallbackLng']),
    location: state.getIn(['router', 'location']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    languageChangeDispatcher: (newLocation) => {
      dispatch(push(newLocation));
    },
  };
}

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(
    withImmutablePropsToJS(LanguageToogler)
  )
);
