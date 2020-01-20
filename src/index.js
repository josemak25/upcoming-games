import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import AppRouter from "./router";
import "./config";

export default function App() {
  const [isFontReady, setFontReady] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "notoSans-bold": require("../assets/fonts/NotoSans-Bold.ttf"),
        "notoSans-regular": require("../assets/fonts/NotoSans-Regular.ttf")
      });
      setFontReady(true);
    };

    loadFont();
  }, [isFontReady]);

  return isFontReady ? <AppRouter /> : null;
}
