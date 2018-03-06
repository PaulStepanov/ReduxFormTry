import React from 'react';

import { Checkbox } from 'material-ui';

const MyCheckBox = ({
  input: { value, onChange },
  label,
  style,
  meta: { touched, error },
  floatingLabelText,
  menuItems,
  ...custom
}) => (
  <Checkbox
    label={label}
    checked={value === '' ? false : value} // '' default redux form value
    onClick={() => {
      onChange(!value);
    }}
    style={style}
  />
);

export default MyCheckBox;
