import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "../../src/constants";

export default function Microphone(props) {
  return (
    <Svg width="50%" height="50%" viewBox="0 0 11.788 17" {...props}>
      <G data-name="Group 109">
        <G data-name="Group 108">
          <Path
            data-name="Path 74"
            d="M5.894 11.787a3.283 3.283 0 003.274-3.274V3.274A3.152 3.152 0 008.206.962a3.26 3.26 0 00-4.625 0 3.153 3.153 0 00-.962 2.312v5.239a3.283 3.283 0 003.274 3.274z"
            fill={colors.ICON_LIGHT_COLOR}
          />
          <Path
            data-name="Path 75"
            d="M11.593 6.716a.655.655 0 00-1.115.46v1.31a4.584 4.584 0 01-9.168 0v-1.31a.655.655 0 00-1.31 0v1.31a5.893 5.893 0 005.239 5.852v1.351h-2.62a.655.655 0 000 1.31h6.548a.655.655 0 000-1.31H6.549v-1.351a5.894 5.894 0 005.239-5.852v-1.31a.629.629 0 00-.195-.46z"
            fill={colors.ICON_DARK_COLOR}
          />
        </G>
      </G>
    </Svg>
  );
}
