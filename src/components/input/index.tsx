import React, { FunctionComponent } from 'react';

import { Container, TextInput } from './styles';

type InputFieldProps = {
  testID?: string;
  placeholder: string;
  placeholderTextColor: string;
  onChangeText(e: string): void;
  handleFocus?(): void;
  defaultValue: string;
  textContentType?: any;
  keyboardType?: any;
  returnKeyType?: any;
  style?: object;
  inputStyle?: object;
};

const Input: FunctionComponent<InputFieldProps> = props => {
  const { children, ...restProps } = props;

  const {
    textContentType = 'name',
    keyboardType = 'default',
    style,
    inputStyle
  } = restProps;

  return (
    <Container style={style}>
      <TextInput
        {...restProps}
        textContentType={textContentType}
        keyboardType={keyboardType}
        autoCapitalize="none"
        style={inputStyle}
      />

      {children}
    </Container>
  );
};

export default Input;
