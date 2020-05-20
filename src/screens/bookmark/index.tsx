import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container } from './styles';

interface BookmarkScreenProp extends NavigationInterface {
  testID?: string;
}

export default function BookmarkScreen(props: BookmarkScreenProp) {
  return (
    <Container>
      <Button title="bookmark screen" />
    </Container>
  );
}
