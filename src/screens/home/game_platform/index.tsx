import React from 'react';
import { NavigationInterface } from '../../types';
import { useThemeContext } from '../../../theme';
import ResponsiveImage from '../../../libs/responsiveImage';
import Card from '../../../components/card';

import { Container, GamePlatformTitle, ImageClipper } from './styles';

interface GameProp extends NavigationInterface {
  testID?: string;
  id: number;
  abbreviation?: string;
  alternative_name?: string;
  generation?: number;
  name: string;
  platform_logo: {
    id: number;
    alpha_channel: boolean;
    animated: boolean;
    height: number;
    image_id: string;
    url: string;
    width: number;
  };
}

export default function GamePlatform(props: GameProp) {
  const { colors } = useThemeContext();

  const {
    name,
    abbreviation,
    platform_logo: { url },
    navigation
  } = props;

  const handlePlatform = () => {
    navigation.navigate('DetailScreen');
  };

  return (
    <Container>
      <Card
        activeOpacity={0.7}
        onPress={handlePlatform}
        style={{
          width: 65,
          height: 65,
          borderRadius: 65 / 2,
          overflow: 'hidden',
          borderWidth: 2,
          borderColor: colors.ACTION_BG_COLOR,
          justifyContent: 'center'
        }}
      >
        <ImageClipper />
        <ResponsiveImage
          width={55}
          height={55}
          imageUrl={`https:${url.replace('t_thumb', 't_thumb_2x')}`}
          resizeMode="cover"
          style={{ borderRadius: 55 / 2, zIndex: -1, marginTop: 3 }}
          thumbnailBlurRadius={0.01}
        />
      </Card>
      <GamePlatformTitle>
        {name.length > 12 ? abbreviation : name}
      </GamePlatformTitle>
    </Container>
  );
}
