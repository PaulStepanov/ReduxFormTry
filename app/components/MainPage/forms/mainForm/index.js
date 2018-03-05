import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, RaisedButton, SelectField, MenuItem } from 'material-ui';
import { connect } from 'react-redux';

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
    value: 'Transgender',
    primaryText: 'Transgender'
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

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label} errorText={touched && error} {...input} {...custom} />
);

class MySelectField extends PureComponent {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    const { input, label, meta: { touched, error }, floatingLabelText, menuItems, ...custom } = this.props;
    return (
      <div>
        <SelectField floatingLabelText={floatingLabelText} value={input.value}>
          {menuItems.map(mi => <MenuItem key={Math.random() * 1000} {...mi} />)}
        </SelectField>
      </div>
    );
  }
}

const defaultState = {
  firstName: 'Mr Ass',
  gender: 'AH-64'
};

const _MainForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form className={style['main-form']} onSubmit={handleSubmit}>
      <div className={style.inputBlock}>
        <label htmlFor="firstName">Name</label>
        <div>
          <Field
            id="firstName"
            name="firstName"
            component={renderTextField}
            type="Some forms"
            placeholder="First Name"
          />
        </div>
      </div>

      <div className={style.inputBlock}>
        <label htmlFor="surname">Surname</label>
        <div>
          <Field id="surname" name="surname" component={renderTextField} type="Some forms" placeholder="Surn name" />
        </div>
      </div>

      <div className={style.inputBlock}>
        <label htmlFor="textArea">TextArea</label>
        <div>
          <Field
            id="textArea"
            name="textArea"
            component={renderTextField}
            type="Some forms"
            floatingLabelText="MultiLine and FloatingLabel"
            multiLine
            rows={2}
          />
        </div>
      </div>

      <div className={style.inputBlock}>
        <label htmlFor="selectField">TextArea</label>
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

      <RaisedButton label="Reset" primary onClick={reset} />
      <RaisedButton label="Submit" secondary onClick={reset} />
    </form>
  );
};

const MainForm = reduxForm({
  form: 'main-form'
})(_MainForm);

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: ownProps.initialValues ? ownProps.initialValues : defaultState
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
