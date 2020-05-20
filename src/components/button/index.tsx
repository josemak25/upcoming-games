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
      activeOpacity={activeOpacity | 0.5}
      style={[boxShadow({ elevation: 2 }), buttonStyle]}
      {...props}
    >
      <ButtonText style={textStyle}>{title}</ButtonText>
    </Container>
  );
}
