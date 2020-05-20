import { Dimensions, Platform } from 'react-native';
export const DEVICE = Dimensions.get('window');

type CardItem = { cardSize: number; numOfColumn: number };

const CARD_ITEM: CardItem = { cardSize: 180, numOfColumn: 1 };

switch (Platform.OS) {
  case 'android':
    if (DEVICE.width <= 414) {
      //Android smartphones
      CARD_ITEM.cardSize = DEVICE.width / 2;
      CARD_ITEM.numOfColumn = Math.floor(DEVICE.width / CARD_ITEM.cardSize);
      CARD_ITEM.cardSize = CARD_ITEM.cardSize;
    } else {
      CARD_ITEM.cardSize = DEVICE.width / 2;
      CARD_ITEM.numOfColumn = Math.floor(DEVICE.width / CARD_ITEM.cardSize);
      CARD_ITEM.cardSize = CARD_ITEM.cardSize;
    }
    break;

  case 'ios':
    switch (DEVICE.width) {
      //iPhone4/4S and iPhone5/5S
      //iPhone6/6S
      //iPhone6plus/6Splus
      case 320:
      case 375:
      case 414: {
        CARD_ITEM.cardSize = DEVICE.width / 2;
        CARD_ITEM.numOfColumn = Math.floor(DEVICE.width / CARD_ITEM.cardSize);
        CARD_ITEM.cardSize = CARD_ITEM.cardSize;
      }
      //iPad
      default:
        CARD_ITEM.cardSize = DEVICE.width / 2;
        CARD_ITEM.numOfColumn = Math.floor(DEVICE.width / CARD_ITEM.cardSize);
        CARD_ITEM.cardSize =
          CARD_ITEM.numOfColumn >= 2 ? 400 : CARD_ITEM.cardSize;
    }
    break;
  default:
    CARD_ITEM;
}

export default CARD_ITEM;
