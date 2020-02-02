import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "../../src/constants";

export default function Search(props) {
  return (
    <Svg width="70%" height="70%" viewBox="0 0 22 22" {...props}>
      <G data-name="Color/Fill">
        <Path
          d="M13.451 4.181q-3.073.984-4.032 4.839c-.957 3.855-2.148 4.347-6.017 2.976a7.162 7.162 0 006.017 3.6c1.811 0 6.5-2.521 5.963-7.313a19.822 19.822 0 00-1.931-4.102z"
          fill={colors.ICON_LIGHT_COLOR}
          fillRule="evenodd"
        />
        <G data-name="Group 18">
          <Path fill="none" d="M0 0h22v22H0z" data-name="Group 17" />
        </G>
      </G>
      <G data-name="Color/Stroke">
        <Path
          d="M14.794 13.506l5.058 5.066a.905.905 0 01-1.28 1.28l-5.056-5.065a7.24 7.24 0 111.279-1.281zm-5.724 1A5.431 5.431 0 103.639 9.07a5.431 5.431 0 005.431 5.431z"
          fill={colors.ICON_DARK_COLOR}
          data-name="Mask"
        />
        <G data-name="Clipped">
          <G data-name="Group">
            <G data-name="Group 20">
              <G data-name="Group 19">
                <Path data-name="Rectangle" fill="none" d="M0 0h22v22H0z" />
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}
