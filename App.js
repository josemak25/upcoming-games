import React, { useState } from "react";
import { Image } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import AppRouter from "./router";
import "./config";

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  const cacheImages = images => {
    return images.map(image => {
      return typeof image === "string"
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync();
    });
  };

  const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

  const loadAllAppAssets = async () => {
    const imageAssets = cacheImages([
      require("./assets/images/icon.png"),
      require("./assets/images/splash.png"),
      require("./assets/images/splash_icon.png")
    ]);

    const fontAssets = cacheFonts([
      {
        "notosans-regular": require("./assets/fonts/NotoSans-Regular.ttf")
      },
      {
        "notosans-bold": require("./assets/fonts/NotoSans-Bold.ttf")
      },
      {
        "bungee-bold": require("./assets/fonts/Bungee-Regular.ttf")
      }
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return !isAppReady ? (
    <AppLoading
      startAsync={loadAllAppAssets}
      onFinish={() => setIsAppReady(true)}
      onError={console.warn}
      autoHideSplash={false}
    />
  ) : (
    <AppRouter />
  );
}
