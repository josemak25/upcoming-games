import React from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { useThemeContext } from '../../theme';

import { Container } from './styles';

export default function LoadingGames() {
  const { colors } = useThemeContext();

  return (
    <Container>
      <ActivityIndicator
        size={Platform.OS === 'ios' ? 'large' : 45}
        color={colors.ACTION_BG_COLOR}
      />
    </Container>
  );
}
