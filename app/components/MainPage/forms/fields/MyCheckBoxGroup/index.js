import React from 'react';
import MyCheckBox from '../MyCheckBox/';
import copy from 'deepcopy';

import { Checkbox } from 'material-ui';

const MyCheckBoxGroup = ({
  input: { value, onChange },
  label,
  checkboxes,
  style,
  meta: { touched, error },
  floatingLabelText,
  menuItems,
  ...custom
}) => (
  <div>
    {checkboxes.map((checkBox, i, arr) => {
      const isChecked = value.indexOf(checkBox.label) !== -1;

      return (
        <Checkbox
          key={i}
          label={checkBox.label}
          checked={isChecked} // '' default redux form value
          onClick={() => {
            if (isChecked) {
              onChange(value.filter(val => val !== checkBox.label));
            } else {
              const newArr = copy(value);
              newArr.push(checkBox.label);
              onChange(newArr);
            }
          }}
          style={style}
        />
      );
    })}
  </div>
);

export default MyCheckBoxGroup;
