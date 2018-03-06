import React, { Component } from 'react';
import { getFormValues } from 'redux-form';
import JSONPretty from 'react-json-pretty';
import { connect } from 'react-redux';

import style from './style.css';

import MainForm from './forms/mainForm';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitValues: {}
    };
  }

  render() {
    return (
      <div className={style.page}>
        <MainForm
          onSubmit={values => {
            this.setState({ submitValues: values });
          }}
        />
        <p>Current values:</p>
        <JSONPretty json={this.props.values} />
        <p>Submitted values:</p>
        <JSONPretty json={this.state.submitValues} />
      </div>
    );
  }
}

export default connect(
  state => ({
    values: getFormValues('main-form')(state)
  }),
  () => {}
)(MainPage);
