import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { RaisedButton, Divider } from 'material-ui';
import MyCheckBox from '../fields/MyCheckBox/';
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

const defaultState = {
  firstName: 'Mr Ass',
  gender: 'AH-64',
  radioBoxGroup: 'no',
  checkBox2: true
};

const _MainForm = ({ handleSubmit, reset }) => {
  return (
    <form className={style['main-form']} onSubmit={handleSubmit}>
      <div className={style.inputBlock}>
        <label htmlFor="firstName">Name</label>
        <div>
          <Field id="firstName" name="firstName" component={MyTextField} type="Some forms" placeholder="First Name" />
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
        <label htmlFor="radioBoxGroup">RadioBoxGroup</label>
        <div>
          <Field id="checkBox1" name="checkBox1" label="checkbox1" component={MyCheckBox} />
          <Field id="checkBox2" name="checkBox2" label="checkbox2" component={MyCheckBox} />
          <Field id="checkBox3" name="checkBox3" label="checkbox3" component={MyCheckBox} />
        </div>
      </div>

      <Divider />

      <RaisedButton label="Reset" primary onClick={reset} />
      <RaisedButton
        label="Submit"
        secondary
        onClick={() => {
          reset();
          handleSubmit();
        }}
      />
    </form>
  );
};

const MainForm = reduxForm({
  form: 'main-form',
  enableReinitialize: false // allow the form the reinitialize with new "pristine" values every time the initialValues prop changes
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
