import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './types';
import { useThemeContext } from '../../src/theme';

export default function Play(props: IconProps) {
  const { colors } = useThemeContext();

  return (
    <Svg width="50%" height="50%" viewBox="0 0 31.75 39" {...props}>
      <G data-name="play">
        <G data-name="Group 127">
          <Path
            data-name="Path 79"
            d="M29.558 15.064l-22-14.07A5.614 5.614 0 004.663 0C3.018 0 2 1.233 2 3.3v30.407C2 35.769 3.016 37 4.658 37a5.566 5.566 0 002.878-1L29.55 21.934a4.178 4.178 0 002.2-3.436 4.163 4.163 0 00-2.192-3.434z"
            fill={colors.ACTION_BG_COLOR}
          />
        </G>
      </G>
      <G data-name="play">
        <G data-name="Group 127">
          <Path
            data-name="Path 79"
            d="M27.558 17.064l-22-14.07A5.614 5.614 0 002.663 2C1.018 2 0 3.233 0 5.3v30.407C0 37.769 1.016 39 2.658 39a5.566 5.566 0 002.878-1L27.55 23.934a4.178 4.178 0 002.2-3.436 4.163 4.163 0 00-2.192-3.434z"
            fill={colors.NOTIFICATION_HIGHLIGHT_COLOR}
          />
        </G>
      </G>
    </Svg>
  );
}
