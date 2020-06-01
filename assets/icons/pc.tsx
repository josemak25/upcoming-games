import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './types';

function PcIcon(props: IconProps) {
  return (
    <Svg width="10%" height="50%" viewBox="0 0 272.943 171.738" {...props}>
      <G data-name="Group 246">
        <G data-name="Group 245">
          <Path
            data-name="Path 155"
            d="M263.123 9.919h-52.478a9.82 9.82 0 00-9.82 9.82v10.274h72.118V19.739a9.82 9.82 0 00-9.82-9.82z"
            fill={props.fillColor}
          />
        </G>
      </G>
      <G data-name="Group 248">
        <G data-name="Group 247">
          <Path
            data-name="Path 156"
            d="M263.808 60.844h-62.983v84.861a9.82 9.82 0 009.82 9.82h52.478a9.82 9.82 0 009.82-9.82V60.844h-9.135zm-26.856 39.142a6.394 6.394 0 11-6.394 6.394 6.394 6.394 0 016.395-6.394zm15.849 30.51h-31.743a4.567 4.567 0 110-9.135h31.743a4.567 4.567 0 110 9.135z"
            fill={props.fillColor}
          />
        </G>
      </G>
      <G data-name="Group 250">
        <G data-name="Group 249">
          <Path
            data-name="Path 157"
            d="M268.376 39.15h-67.551v12.56h72.118V39.15z"
            fill={props.fillColor}
          />
        </G>
      </G>
      <G data-name="Group 252">
        <G data-name="Group 251">
          <Path
            data-name="Path 158"
            d="M182.145.008H10.413A10.048 10.048 0 000 9.599v106.145a10.048 10.048 0 0010.413 9.591h171.732a10.048 10.048 0 0010.413-9.591V9.599A10.048 10.048 0 00182.145.008z"
            fill={props.fillColor}
          />
        </G>
      </G>
      <G data-name="Group 254">
        <G data-name="Group 253">
          <Path
            data-name="Path 159"
            d="M136.471 162.605h-14.25v-27.907a4.567 4.567 0 00-4.567-4.567H74.679a4.567 4.567 0 00-4.567 4.567v27.907H56.086a4.567 4.567 0 000 9.135h80.385a4.567 4.567 0 100-9.135z"
            fill={props.fillColor}
          />
        </G>
      </G>
    </Svg>
  );
}

export default PcIcon;
