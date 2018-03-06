import React from 'react';
import { TextField } from 'material-ui';

const MyTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label} errorText={touched && error} {...input} {...custom} />
);

export default MyTextField;
