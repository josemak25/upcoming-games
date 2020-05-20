import React from 'react';
import boxShadow from '../../utils/boxShadows';

import { Container, ButtonText } from './styles';

type ButtonProps = {
  buttonStyle?: {};
  textStyle?: {};
  testID?: string;
  title: string;
  onPress?(): void;
  activeOpacity?: number;
};

export default function Button(props: ButtonProps) {
  const { title, buttonStyle, textStyle, activeOpacity } = props;

  return (
    <Container
      activeOpacity={activeOpacity | 0.4}
      style={[
        boxShadow({
          elevation: 3,
          shadowColor: 'rgba(101, 119, 134, 0.25)',
          width: 1,
          height: 3,
          shadowRadius: 8
        }),
        buttonStyle
      ]}
      {...props}
    >
      <ButtonText style={textStyle}>{title}</ButtonText>
    </Container>
  );
}
