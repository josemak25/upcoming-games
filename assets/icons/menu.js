import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "../../src/constants";

export default function Menu(props) {
  return (
    <Svg width="35%" height="35%" viewBox="0 0 16 12" {...props}>
      <G
        fill="none"
        stroke={colors.ICON_DARK_COLOR}
        strokeLinecap="round"
        strokeWidth={2}
      >
        <Path data-name="Line 3" d="M1 1h14" />
        <Path data-name="Line 4" d="M1 6h14" />
        <Path data-name="Line 5" d="M1 11h14" />
      </G>
    </Svg>
  );
}
