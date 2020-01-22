import React from "react";
import { Image } from "react-native";
import { AppLoading as ExpoAppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

export default function AppLoading({ setIsAppReady }) {
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
      require("../../assets/images/icon.png"),
      require("../../assets/images/splash.png"),
      require("../../assets/images/splash_icon.png")
    ]);

    const fontAssets = cacheFonts([
      {
        "notosans-regular": require("../../assets/fonts/NotoSans-Regular.ttf")
      },
      {
        "notosans-bold": require("../../assets/fonts/NotoSans-Bold.ttf")
      },
      {
        "bungee-bold": require("../../assets/fonts/Bungee-Regular.ttf")
      }
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return (
    <ExpoAppLoading
      startAsync={loadAllAppAssets}
      onFinish={() => setIsAppReady(true)}
      onError={console.warn}
    />
  );
}
