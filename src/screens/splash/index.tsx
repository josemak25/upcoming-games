import React, { useEffect } from 'react';
import { Container, ImageBackground, Logo } from './styles';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.navigate('HomeScreen'), 2000);
  }, []);

  return (
    <Container>
      <ImageBackground
        source={require('../../../assets/splash.png')}
        fadeDuration={0}
        resizeMode="contain"
      >
        <Logo source={require('../../../assets/icon.png')} />
      </ImageBackground>
    </Container>
  );
}
