import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import database from './database';
import Router from './router';
import { StoreProvider } from './store';
import ThemeProvider from './theme';

export default function AppRouter() {
  useEffect(() => {
    (async () => await database.connect())();
    return database.close();
  }, []);

  return (
    <StoreProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
