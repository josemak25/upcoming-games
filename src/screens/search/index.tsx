import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container } from './styles';

interface SearchScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SearchScreen(props: SearchScreenProp) {
  return (
    <Container>
      <Button title="search screen" />
    </Container>
  );
}
