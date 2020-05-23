import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function LoveIcon(props: IconProps) {
  return (
    <Svg width="25px" height="70%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 21.054C-8 10 6-2 12 5.588 18-2 32 10 12 21.054z"
        stroke={props.fillColor}
        strokeWidth={1.2}
      />
    </Svg>
  );
}
