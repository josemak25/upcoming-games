import { StyleSheet } from "react-native";

function createBoxShadowStyle({
  elevation,
  color,
  opacity,
  radius,
  width,
  height
}) {
  return {
    elevation,
    shadowColor: color,
    shadowOffset: {
      width: width || 0,
      height: height || 0.5 * elevation
    },
    shadowOpacity: opacity || 0.4,
    shadowRadius: radius || Math.floor((0.8 * elevation) / 2)
  };
}

export default function boxShadow(properties) {
  const { shadow } = StyleSheet.create({
    shadow: createBoxShadowStyle(properties)
  });
  return shadow;
}
