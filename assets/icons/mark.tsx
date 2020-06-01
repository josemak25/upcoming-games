import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function BookmarkIcon(props) {
  return (
    <Svg height="35%" viewBox="-58 0 404 404.542" width="66px" {...props}>
      <Path d="M277.527 0H10.27c-5.52 0-10 4.477-10 10v374.527a19.999 19.999 0 0010.855 17.809 19.99 19.99 0 0020.797-1.55l111.976-80.27 111.98 80.265a19.993 19.993 0 0020.79 1.54 20.009 20.009 0 0010.863-17.794V10c0-5.523-4.48-10-10.004-10zm-10 384.523L149.73 300.082a10.002 10.002 0 00-11.652 0l-117.8 84.445V20h247.25zm0 0" />
    </Svg>
  );
}

export default BookmarkIcon;
