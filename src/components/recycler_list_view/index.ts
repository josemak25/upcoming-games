import { Dimensions } from 'react-native';
import { LayoutProvider } from 'recyclerlistview';
import applyScale from '../../utils/applyScale';

const { width: PHONE_FULL_WIDTH } = Dimensions.get('window');

export const ViewTypes = {
  GAME_LIST_HEADER: 'GAME_LIST_HEADER',
  GAME_LIST: 'GAME_LIST',
  GAME_PLATFORM: 'GAME_PLATFORM',
  GAME_BOOKMARK: 'GAME_BOOKMARK',
  GAME_SEARCH: 'GAME_SEARCH'
};

export default function layoutProvider() {
  return new LayoutProvider(
    index => (index === 0 ? ViewTypes.GAME_LIST_HEADER : ViewTypes.GAME_LIST),
    (type, dim) => {
      switch (type) {
        case ViewTypes.GAME_LIST:
          dim.width = Math.round(PHONE_FULL_WIDTH);
          dim.height = applyScale(550);
          break;

        case ViewTypes.GAME_LIST_HEADER:
          dim.width = Math.round(PHONE_FULL_WIDTH);
          dim.height = 95;
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
    () => ViewTypes.GAME_PLATFORM,
    (_type, dim) => {
      dim.width = 80;
      dim.height = 70;
    }
  );
}

export function bookmarkLayoutProvider() {
  return new LayoutProvider(
    () => ViewTypes.GAME_BOOKMARK,
    (_type, dim) => {
      dim.width = Math.round(PHONE_FULL_WIDTH);
      dim.height = applyScale(550);
    }
  );
}

export function searchLayoutProvider() {
  const adjustedMargin = Math.round(PHONE_FULL_WIDTH * 1000) / 1000 - 6;
  const columnWidth = adjustedMargin / 3;

  return new LayoutProvider(
    () => ViewTypes.GAME_SEARCH,
    (_type, dim, index) => {
      switch (true) {
        case index % 3 === 0:
          dim.width = 3 * columnWidth;
          dim.height = 300;
          break;

        case index % 2 === 0:
          dim.width = 2 * columnWidth;
          dim.height = 250;
          break;

        default:
          dim.width = columnWidth;
          dim.height = 250;
      }
    }
  );
}
