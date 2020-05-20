import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useThemeContext } from '../../theme';

import { Container } from './styles';

export default function LoadingGames() {
  const { colors } = useThemeContext();

  return (
    <Container>
      <ActivityIndicator size="large" color={colors.ACTION_BG_COLOR} />
    </Container>
  );
}
