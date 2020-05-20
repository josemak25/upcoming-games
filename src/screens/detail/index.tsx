import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container } from './styles';

interface DetailScreenProp extends NavigationInterface {
  testID?: string;
}

export default function DetailScreen(props: DetailScreenProp) {
  return (
    <Container>
      <Button title="detail screen" />
    </Container>
  );
}
