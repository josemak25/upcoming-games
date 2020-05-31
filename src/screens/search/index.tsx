import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';
import { MaterialIcons } from '@expo/vector-icons';
import Input from '../../components/input';
import hexToRGB from '../../utils/hexToRGB';
import Card from '../../components/card';
import Header from '../../commons/header';

import { Container, SearchCancelIconContainer } from './styles';

interface SearchScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SearchScreen(props: SearchScreenProp) {
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
        paddingTop: 0,
        paddingBottom: 0
      }}
    >
      <Header
        headerLeft={() => (
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
        )}
        title={() => (
          <Input
            placeholder="Search gamestad"
            onChangeText={handleChangeText}
            defaultValue={state.searchFieldValue}
            returnKeyType="search"
            placeholderTextColor={hexToRGB(colors.BLACK_FONT_COLOR, 0.5)}
            inputStyle={{ paddingRight: 45 }}
          >
            <SearchCancelIconContainer
              onPress={() => setState({ ...state, searchFieldValue: '' })}
            >
              <MaterialIcons name="cancel" size={25} />
            </SearchCancelIconContainer>
          </Input>
        )}
      />

      <Container></Container>
    </SafeAreaView>
  );
}
