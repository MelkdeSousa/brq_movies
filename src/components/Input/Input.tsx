import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';
import { Text } from '../Text';
import { Focusable, InputContainer, InputWrapper, StyledInput } from './styles';

export type InputProps = TextInputProps &
  Omit<Focusable, 'focused'> & {
    right?: React.ReactNode;
    left?: React.ReactNode;
    error?: boolean;
    errorMessage?: string;
  };

export const Input = ({
  right,
  left,
  focusColor,
  unfocused,
  onFocus,
  onBlur,
  error = false,
  errorMessage = '',
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapper>
      <InputContainer
        focused={isFocused}
        focusColor={focusColor}
        unfocused={unfocused}>
        {right}
        <StyledInput
          {...props}
          focused={isFocused}
          onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
        />
        {left}
      </InputContainer>

      {!!error && (
        <Text type="error" size="lg" testID="error-message">
          {errorMessage}
        </Text>
      )}
    </InputWrapper>
  );
};
