import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "../../src/constants";

export default function Cancel(props) {
  return (
    <Svg width="80%" height="80%" viewBox="0 0 30 30" {...props}>
      <G data-name="2X">
        <G data-name="Icons">
          <G data-name="Color/Fill">
            <Path
              d="M10.256 9.531a1.237 1.237 0 011.749-1.749l9.894 9.894a1.237 1.237 0 01-1.749 1.749z"
              fill={colors.ICON_LIGHT_COLOR}
            />
            <G data-name="Group 116">
              <G data-name="Group 115">
                <Path data-name="Rectangle 24" fill="none" d="M0 0h30v30H0z" />
              </G>
            </G>
          </G>
          <G data-name="Color/Stroke">
            <G data-name="Group 119">
              <Path
                data-name="Mask"
                d="M14.841 16.59l-4.073 4.073a1.237 1.237 0 01-1.749-1.749l4.073-4.073-4.073-4.072a1.237 1.237 0 111.749-1.749l4.073 4.072 4.072-4.072a1.237 1.237 0 011.749 1.749l-4.072 4.072 4.072 4.073a1.237 1.237 0 01-1.749 1.749z"
                fill={colors.ICON_DARK_COLOR}
              />
              <G data-name="Group 118">
                <G data-name="Group 117">
                  <Path
                    data-name="Rectangle 25"
                    fill="none"
                    d="M0 30V0h30v30z"
                  />
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}
