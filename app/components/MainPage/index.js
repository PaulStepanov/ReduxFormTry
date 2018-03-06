import React, { Component } from 'react';
import JSONPretty from 'react-json-pretty';

import style from './style.css';

import MainForm from './forms/mainForm';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: { }
    };
  }

  render() {
    return (
      <div className={style.page}>
        <MainForm
          onSubmit={values => {
            this.setState({ values });
          }}
        />
        <p>Submitted values:</p>
        <JSONPretty json={this.state.values} />
      </div>
    );
  }
}

export default MainPage;
