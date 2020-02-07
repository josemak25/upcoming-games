import React from "react";
import { ImageBackground } from "react-native";

export default function Screenshots({ item }) {
  const imageURI = `https:${item.url.replace("t_thumb", "t_screenshot_huge")}`;

  return (
    <ImageBackground
      source={{ uri: imageURI }}
      style={{ width: "100%", height: "100%" }}
      resizeMode="cover"
    />
  );
}
