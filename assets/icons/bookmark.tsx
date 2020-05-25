import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function BookmarkIcon(props: IconProps) {
  const dPath = `${
    !props.isFocused
      ? 'M19.9 23.5a.755.755 0 01-.442-.144L12 17.928l-7.458 5.43a.75.75 0 01-1.192-.607V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15a.749.749 0 01-.75.75zM12 16.25a.74.74 0 01.44.144l6.71 4.883V5.6a.752.752 0 00-.75-.75H5.6a.752.752 0 00-.75.75v15.677l6.71-4.883a.74.74 0 01.44-.144z'
      : 'M19.9 23.5c-.2 0-.3 0-.4-.1L12 17.9l-7.5 5.4c-.2.2-.5.2-.8.1-.2-.1-.4-.4-.4-.7V5.6c0-1.2 1-2.2 2.2-2.2h12.8c1.2 0 2.2 1 2.2 2.2v17.1c0 .3-.2.5-.4.7 0 .1-.1.1-.2.1z'
  }`;

  return (
    <Svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" {...props}>
      <Path
        d={dPath}
        fill={props.fillColor}
        stroke={props.isFocused ? props.fillColor : null}
        strokeWidth={1}
      />
    </Svg>
  );
}
