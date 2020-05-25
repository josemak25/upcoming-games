import React, { useEffect } from 'react';
import { Container } from './styles';
import AppIcon from '../../../assets/icons/app_icon';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.navigate('HomeScreen'), 2000);
  }, []);

  return (
    <Container>
      <AppIcon />
    </Container>
  );
}
