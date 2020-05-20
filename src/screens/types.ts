import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState
} from 'react-navigation';

interface NavigationScreenType
  extends NavigationScreenProp<NavigationState, NavigationParams> {
  replace: (T: string) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

// App Navigation prop types
export interface NavigationInterface {
  navigation: NavigationScreenType;
}
