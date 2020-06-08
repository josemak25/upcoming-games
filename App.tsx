import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import AppLoading from './src/components/AppLoading';
import AppRouter from './src';
import { signupBackgroundLink } from './src/constants';

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  FastImage.preload([
    { uri: signupBackgroundLink, priority: FastImage.priority.high }
  ]);

  return isAppReady ? (
    <AppRouter />
  ) : (
    <AppLoading setIsAppReady={setIsAppReady} />
  );
}
