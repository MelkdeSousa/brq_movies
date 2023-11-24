import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {InputWrapper, StyledInput} from './styles';

export type InputProps = TextInputProps & {
  right?: React.ReactNode;
  left?: React.ReactNode;
};

export const Input = ({right, left, ...props}: InputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <InputWrapper focused={focused}>
      {right}
      <StyledInput
        focused={focused}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {left}
    </InputWrapper>
  );
};
