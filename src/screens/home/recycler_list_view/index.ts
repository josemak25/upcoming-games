import { Dimensions } from 'react-native';
import applyScale from '../../../utils/applyScale';
import { LayoutProvider } from 'recyclerlistview';

const { width: PHONE_FULL_WIDTH } = Dimensions.get('window');

export const ViewTypes = {
  GAME_LIST_HEADER: 'GAME_LIST_HEADER',
  GAME_LIST: 'GAME_LIST'
};

export default function layoutProvider() {
  return new LayoutProvider(
    index => (index === 0 ? ViewTypes.GAME_LIST_HEADER : ViewTypes.GAME_LIST),
    (type, dim) => {
      switch (type) {
        case ViewTypes.GAME_LIST:
          dim.width = PHONE_FULL_WIDTH;
          dim.height = applyScale(550);
          break;

        case ViewTypes.GAME_LIST_HEADER:
          dim.width = PHONE_FULL_WIDTH;
          dim.height = applyScale(100);
          break;

        default:
          dim.width = 0;
          dim.height = 0;
      }
    }
  );
}

export function headerLayoutProvider() {
  return new LayoutProvider(
    () => 'GAME_PLATFORM',
    (_type, dim) => {
      dim.width = 80;
      dim.height = 70;
    }
  );
}
