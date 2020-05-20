import React, { useEffect } from 'react';
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
        <Router />
      </ThemeProvider>
    </StoreProvider>
  );
}
