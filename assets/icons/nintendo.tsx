import * as React from 'react';
import Svg, { G, Path, Circle, Rect } from 'react-native-svg';
import { IconProps } from './types';

export default function NintendoIcon(props: IconProps) {
  return (
    <Svg width="10%" height="50%" viewBox="0 0 165.944 72.303" {...props}>
      <G transform="translate(142.571)">
        <Path
          data-name="Path 166"
          d="M11.435 72.303H0V.003h11.435a11.938 11.938 0 0111.938 11.935v48.427a11.938 11.938 0 01-11.938 11.938z"
          fill={props.fillColor ? props.fillColor : '#010101'}
        />
        <Circle
          data-name="Ellipse 10"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(8.429 10)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 11"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(13.429 15)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 12"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(3.429 15)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 13"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(8.429 20)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 15"
          cx={2}
          cy={2}
          r={2}
          transform="translate(6.429 49)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 14"
          cx={5.5}
          cy={5.5}
          r={5.5}
          transform="translate(6.429 32)"
          fill="#fff"
        />
      </G>
      <G>
        <Path
          data-name="Path 168"
          d="M11.938 0h11.435v72.3H11.938A11.938 11.938 0 010 60.365V11.938A11.938 11.938 0 0111.938 0z"
          fill={props.fillColor ? props.fillColor : '#010101'}
        />
        <Circle
          data-name="Ellipse 5"
          cx={5.5}
          cy={5.5}
          r={5.5}
          transform="translate(6 12)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 6"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(9 29)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 7"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(14 34)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 8"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(4 34)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 9"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(9 39)"
          fill="#fff"
        />
        <Rect
          data-name="Rectangle 184"
          width={4}
          height={4}
          rx={2}
          transform="translate(14 49)"
          fill="#fff"
        />
      </G>
      <Path
        data-name="Path 167"
        d="M27 71.37V3.044s2.238.094 2.291-2.977c5.7.037 108-.067 108-.067s-.634 3.14 2.291 2.971c-.012 3.323 0 68.533 0 68.533z"
        fill={props.fillColor ? props.fillColor : '#010101'}
      />
      <Path data-name="Rectangle 185" fill="#fff" d="M30 3h106v65H30z" />
    </Svg>
  );
}
