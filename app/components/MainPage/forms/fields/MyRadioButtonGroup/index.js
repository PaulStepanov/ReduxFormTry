import React, { PureComponent } from 'react';
import { RadioButtonGroup, RadioButton } from 'material-ui';

export default class MyRadioButtonGroup extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };

    this.handleRadioClick = this.handleRadioClick.bind(this);
  }

  handleRadioClick(value) {
    this.props.input.onChange(value);
  }

  render() {
    const { input: { value: inputVal, onChange, name }, buttonValues, meta: { touched, error }, ...custom } = this.props;

    return (
      <RadioButtonGroup name={name} valueSelected={inputVal}>
        {buttonValues.map(({ value, label, disabled }) => (
          <RadioButton
            key={value}
            value={value}
            label={label}
            onClick={() => {
              this.handleRadioClick(value);
            }}
            disabled={disabled}
          />
        ))}
      </RadioButtonGroup>
    );
  }
}
