import React from 'react';
import { SelectField, MenuItem } from 'material-ui';

const MySelectField = ({
  input: { value, onChange },
  label,
  meta: { touched, error },
  floatingLabelText,
  menuItems,
  ...custom
}) => (
  <SelectField floatingLabelText={floatingLabelText} value={value} onChange={(event, index, val) => onChange(val)}>
    {menuItems.map(mi => <MenuItem key={mi.value} {...mi} />)}
  </SelectField>
);

export default MySelectField;
