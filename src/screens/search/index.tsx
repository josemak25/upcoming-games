import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';
import FastImage from 'react-native-fast-image';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';
import { MaterialIcons } from '@expo/vector-icons';
import InputField from '../../components/input';
import hexToRGB from '../../utils/hexToRGB';
import Card from '../../components/card';
import SearchPlatforms from './platforms';
import boxShadow from '../../utils/boxShadows';

import {
  Container,
  SearchCancelIconContainer,
  SearchContainerHeader,
  SearchContainerHeaderText,
  ContainerHeader
} from './styles';

interface SearchScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SearchScreen(props: SearchScreenProp) {
  const { colors } = useThemeContext();

  const {
    store: { userState }
  } = useStoreContext();

  const [state, setState] = useState({
    searchWord: '',
    selectedPlatform: '',
    blueView: false
  });

  const handleSubmit = () => setState({ ...state, blueView: false });

  const handleFocus = () => setState({ ...state, blueView: true });

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
            }),
            { justifyContent: 'space-between' }
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

          <InputField
            placeholder="search gamestad"
            onChangeText={searchWord => setState({ ...state, searchWord })}
            onFocus={handleFocus}
            onSubmitEditing={handleSubmit}
            defaultValue={state.searchWord}
            returnKeyType="search"
            placeholderTextColor={hexToRGB(colors.BLACK_FONT_COLOR, 0.5)}
            style={{ marginRight: 20 }}
            inputStyle={{ paddingRight: 50 }}
          >
            <SearchCancelIconContainer
              onPress={() => setState({ ...state, searchWord: '' })}
            >
              <MaterialIcons name="cancel" size={20} />
            </SearchCancelIconContainer>
          </InputField>
        </ContainerHeader>

        <SearchContainerHeader>
          <SearchContainerHeaderText>
            Search by platform
          </SearchContainerHeaderText>
        </SearchContainerHeader>

        <SearchPlatforms
          onPress={selectedPlatform => setState({ ...state, selectedPlatform })}
        />

        {state.blueView && (
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="light"
            blurAmount={5}
            reducedTransparencyFallbackColor="white"
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                setState({ ...state, blueView: false });
                Keyboard.dismiss();
              }}
            />
          </BlurView>
        )}
      </Container>
    </SafeAreaView>
  );
}
