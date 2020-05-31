import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import { Dimensions } from 'react-native';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';
import { gradientAppIconLink } from '../../constants';
import Card from '../../components/card';
import SearchPlatforms from './platforms';
import boxShadow from '../../utils/boxShadows';
import applyScale from '../../utils/applyScale';

import { Container, HeaderText, HeaderTextContent } from './styles';
import { ContainerHeader } from '../search/styles';

interface ProfileSetupProp extends NavigationInterface {
  testID?: string;
}

export default function ProfileSetup(props: ProfileSetupProp) {
  const { colors } = useThemeContext();

  const {
    store: { userState }
  } = useStoreContext();

  const [state, setState] = useState({ searchFieldValue: '' });

  const handleChangeText = (searchWord: string) => {
    console.log(searchWord);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.WHITE_BG_COLOR,
        paddingBottom: 0
      }}
    >
      <Container>
        <ContainerHeader
          style={[
            boxShadow({
              elevation: 3,
              shadowColor: colors.BLACK_FONT_COLOR,
              shadowOpacity: 0.06
            })
          ]}
        >
          <Card style={{ width: 40, height: 40 }}>
            <FastImage
              style={{
                width: 40,
                height: 40,
                borderRadius: 45,
                borderWidth: 2,
                borderColor: colors.ACTION_BG_COLOR
              }}
              source={{
                uri: `${userState.user.avatar}`,
                priority: FastImage.priority.normal
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Card>

          <FastImage
            style={{
              width: 40,
              height: 40,
              left: applyScale(Math.floor(Dimensions.get('screen').width / 3))
            }}
            source={{
              uri: gradientAppIconLink,
              priority: FastImage.priority.high
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </ContainerHeader>

        <HeaderText>game profile setup</HeaderText>
        <HeaderTextContent>
          Select your favourite game platform and {'\n'} we’d help you set up
          your profile, by {'\n'} receiving feeds and updates for your {'\n'}
          specific selected platform.
        </HeaderTextContent>
        <SearchPlatforms onPress={handleChangeText} />
      </Container>
    </SafeAreaView>
  );
}
