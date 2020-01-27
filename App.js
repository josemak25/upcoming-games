import React, { useState, useEffect } from "react";
import AppLoading from "./components/AppLoading";
import AppRouter from "./router";
import database from "./database";
import "./config";

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    (async () => await database.connect())();
    return () => database.close();
  }, []);

  return isAppReady ? (
    <AppRouter />
  ) : (
    <AppLoading setIsAppReady={setIsAppReady} />
  );
}
