import React from 'react';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { RaisedButton, Divider } from 'material-ui';
import MyCheckBox from '../fields/MyCheckBox/';
import MyCheckBoxGroup from '../fields/MyCheckBoxGroup/';
import MyRadioButtonGroup from '../fields/MyRadioButtonGroup/';
import MySelectField from '../fields/MySelectField/';
import MyTextField from '../fields/MyTextField/';

import style from './style.scss';

const genderMenuItemValues = [
  {
    value: 'Male',
    primaryText: 'Male'
  },
  {
    value: 'Female',
    primaryText: 'Female'
  },
  {
    value: 'AH-64',
    primaryText: 'AH 64 Attack helicopter'
  },
  {
    value: null,
    primaryText: ''
  }
];

const radioGroupValues = [
  {
    value: 'yes',
    label: 'yes'
  },
  {
    value: 'no',
    label: 'no'
  },
  {
    value: 'disabled',
    label: 'disabled',
    disabled: true
  }
];

const checkBoxGroupvalues = [
  {
    label: 'checkBox1'
  },
  {
    label: 'checkBox3'
  },
  {
    label: 'checkBox2'
  }
];

const defaultState = {
  firstName: 'Kek',
  gender: 'AH-64',
  radioBoxGroup: 'no',
  checkBoxGroup: ['checkBox1']
};

const _MainForm = ({ handleSubmit, reset, valid }) => {
  return (
    <form className={style['main-form']} onSubmit={handleSubmit}>
      <div className={style.inputBlock}>
        <label htmlFor="firstName">Name</label>
        <div>
          <Field
            id="firstName"
            name="firstName"
            component={MyTextField}
            warn={val => (val.length > 3 ? undefined : 'too short')}
            placeholder="First Name"
          />
        </div>
      </div>
      <Divider />

      <div className={style.inputBlock}>
        <label htmlFor="surname">Surname</label>
        <div>
          <Field id="surname" name="surname" component={MyTextField} type="Some forms" placeholder="Surn name" />
        </div>
      </div>
      <Divider />

      <div className={style.inputBlock}>
        <label htmlFor="textArea">TextArea</label>
        <div>
          <Field
            id="textArea"
            name="textArea"
            component={MyTextField}
            type="Some forms"
            floatingLabelText="MultiLine and FloatingLabel"
            multiLine
            rows={2}
          />
        </div>
      </div>
      <Divider />

      <div className={style.inputBlock}>
        <label htmlFor="select">SelectField</label>
        <div>
          <Field
            id="select"
            name="gender"
            component={MySelectField}
            floatingLabelText="Your gender"
            menuItems={genderMenuItemValues}
          />
        </div>
      </div>
      <Divider />

      <div className={style.radioBoxGroup}>
        <label htmlFor="radioBoxGroup">RadioBoxGroup</label>
        <div>
          <Field
            id="radioBoxGroup"
            name="radioBoxGroup"
            component={MyRadioButtonGroup}
            buttonValues={radioGroupValues}
          />
        </div>
      </div>
      <Divider />

      <div className={style.checkBoxGroup}>
        <label htmlFor="radioBoxGroup">CkechBoxGroup</label>
        <div>
          <Field
            id="checkBoxGroup"
            name="checkBoxGroup"
            component={MyCheckBoxGroup}
            buttonValues={radioGroupValues}
            checkboxes={checkBoxGroupvalues}
          />
        </div>
      </div>
      <Divider />

      <div className={style.emailField}>
        <div>
          <Field className={style.email} name="email" component={MyTextField} floatingLabelText="Email" />
        </div>
      </div>
      <Divider />

      <div className={style.buttonsBlock}>
        <RaisedButton label="Reset" primary={!valid} onClick={reset} />
        <RaisedButton
          label="Submit"
          secondary
          disabled={!valid}
          onClick={() => {
            handleSubmit();
          }}
        />
      </div>
    </form>
  );
};

const validate = values => {
  const emailValidRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  const errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!emailValidRegExp.test(values.email)) {
    errors.email = 'Bad email';
  }

  return errors;
};

const MainForm = reduxForm({
  form: 'main-form',
  validate,
  enableReinitialize: true // allow the form the reinitialize with new "pristine" values every time the initialValues prop changes
})(_MainForm);

const mapStateToProps = (state, ownProps) => {
  const initialValues = ownProps.initialValues ? ownProps.initialValues : defaultState;

  return {
    initialValues: {
      ...defaultState,
      ...initialValues
    }
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
