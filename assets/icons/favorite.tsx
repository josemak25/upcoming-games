import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './types';

export default function Favorite(props: IconProps) {
  return (
    <Svg width="55%" height="55%" viewBox="0 0 19 19" {...props}>
      <G data-name="2X">
        <G data-name="Icons">
          <G data-name="Group 114">
            <G data-name="Color/Fill">
              <Path
                d="M13.479 2.586q.831 4.99-3.328 6.423T7.922 15.43l1.795 1.789 7.711-7.869a5.479 5.479 0 00-1.693-6.283q-1.912-1.473-2.256-.481z"
                fill={props.fillColor}
              />
              <G data-name="Group 111">
                <G data-name="Group 110">
                  <Path
                    data-name="Rectangle 22"
                    fill="none"
                    d="M0 0h19v19H0z"
                  />
                </G>
              </G>
            </G>
            <G data-name="Color/Stroke">
              <Path
                data-name="Mask"
                d="M15.928 9.754a3.918 3.918 0 000-5.4 3.593 3.593 0 00-5.208 0L9.693 5.419l-.991-1.03a3.584 3.584 0 00-5.2 0 3.907 3.907 0 000 5.386l6.191 6.418zm-7.397 7.565l-6.19-6.418a5.527 5.527 0 010-7.635 5.2 5.2 0 017.352-.175 5.211 5.211 0 017.4.142 5.537 5.537 0 010 7.645l-6.21 6.436a1.646 1.646 0 01-2.354 0z"
                fill={props.fillColor}
              />
              <G data-name="Group 113">
                <G data-name="Group 112">
                  <Path
                    data-name="Rectangle 23"
                    fill="none"
                    d="M0 0h19v19H0z"
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
