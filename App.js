import React, { useState, useEffect } from "react";
import AppLoading from "./components/AppLoading";
import AppRouter from "./router";
import "./config";

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  return isAppReady ? (
    <AppRouter />
  ) : (
    <AppLoading setIsAppReady={setIsAppReady} />
  );
}
