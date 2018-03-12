import React from 'react';

import { PhotoshopPicker } from 'react-color';

import style from './style.scss';

const MyColorPicker = ({ input: { value, onChange }, label, meta: { touched, error }, colors, ...custom }) => (
  <div className={style.colorPicker}>
    <PhotoshopPicker color={value} onChangeComplete={color => onChange(color.hex)} />
  </div>
);

export default MyColorPicker;
