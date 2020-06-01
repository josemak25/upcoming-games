import React, { useEffect, useState } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import { Container } from './styles';
import AppIcon from '../../../assets/icons/app_icon';
import bookmarkActions from '../../store/bookmark/actions';
import { useStoreContext } from '../../store';
import { BOOKMARK_ACTION_TYPES } from '../../store/bookmark/types';

const AppAnimatedIcon = Animated.createAnimatedComponent(AppIcon);

export default function SplashScreen({ navigation }) {
  const { dispatch } = useStoreContext();

  const [opacity] = useState(new Animated.Value(0));

  const handleLogoTransition = () => {
    Animated.timing(opacity, {
      duration: 2000,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)
    }).start(() => navigation.navigate('SignupScreen'));
  };

  useEffect(() => {
    handleLogoTransition();
    bookmarkActions(dispatch, BOOKMARK_ACTION_TYPES.LOAD_CHECKED_BOOKMARKS);
  }, []);

  return (
    <Container>
      <AppAnimatedIcon width="30%" height="30%" style={{ opacity }} />
    </Container>
  );
}
