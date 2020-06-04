import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import FastImage from 'react-native-fast-image';
import API from '../../libs/api';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';
import { MaterialIcons } from '@expo/vector-icons';
import { searchLayoutProvider } from '../../components/recycler_list_view';
import InputField from '../../components/input';
import hexToRGB from '../../utils/hexToRGB';
import getImageURL from '../../utils/getImageURL';
import Card from '../../components/card';
import boxShadow from '../../utils/boxShadows';
import LoadingGames from '../../components/LoadingGames';
import Platforms from '../../components/platforms';

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
    selectedPlatform: [],
    blueView: false,
    loading: false,
    dataProvider: new DataProvider((r1, r2) => r1.id !== r2.id),
    layoutProvider: searchLayoutProvider()
  });

  const handleSubmit = async () => {
    if (!state.searchWord.length) {
      return setState({ ...state, blueView: false });
    }

    setState({ ...state, loading: true });

    const queryPath = `search "~ *'${state.searchWord}'*"; fields name, screenshots.*; where screenshots >= 1; limit 15;`;

    const response = await API.post(queryPath);
    const searchResults = await response.json();

    setState({
      ...state,
      blueView: false,
      loading: false,
      dataProvider: state.dataProvider.cloneWithRows(searchResults)
    });
  };

  const handleFocus = () => setState({ ...state, blueView: true });

  const handlePlatformSearch = async () => {
    if (!state.selectedPlatform.length) return;

    setState({ ...state, blueView: true, loading: true });

    const queryPath = `fields screenshots.*, platforms; where platforms = (${state.selectedPlatform}) & screenshots >= 1; limit 15; exclude platforms;`;

    const response = await API.post(queryPath);
    const data = await response.json();

    setState({
      ...state,
      blueView: false,
      loading: false,
      dataProvider: state.dataProvider.cloneWithRows([
        ...state.dataProvider.getAllData(),
        ...data
      ])
    });
  };

  const _renderSearchedGame = (_type: string, data: any, index: number) => (
    <Card
      style={{
        flex: 1,
        margin: 3,
        marginTop: index === 0 ? 0 : 3,
        backgroundColor: colors.DARK_BG_COLOR
      }}
    >
      <FastImage
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 3
        }}
        source={{
          uri: getImageURL(data.screenshots),
          priority: FastImage.priority.high
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </Card>
  );

  const _renderFooter = () => state.loading && <LoadingGames />;

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
              onPress={() => {
                if (!state.searchWord) return;
                setState({ ...state, searchWord: '' });
              }}
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

        {!state.dataProvider.getSize() ? (
          <Platforms
            onPress={selectedPlatform =>
              setState({
                ...state,
                selectedPlatform: [
                  ...state.selectedPlatform,
                  ...selectedPlatform
                ]
              })
            }
            handleCancel={setState}
            handleSearch={handlePlatformSearch}
          />
        ) : (
          <RecyclerListView
            style={{
              minHeight: 1,
              minWidth: 1,
              flex: 1,
              width: '100%',
              backgroundColor: colors.WHITE_BG_COLOR
            }}
            contentContainerStyle={{ marginLeft: 2, marginRight: 2 }}
            dataProvider={state.dataProvider}
            layoutProvider={state.layoutProvider}
            rowRenderer={_renderSearchedGame}
            renderFooter={_renderFooter}
            showsVerticalScrollIndicator={false}
            canChangeSize={true}
            renderAheadOffset={4}
            keyExtractor={(game: any) => `${game.id}`}
            // scrollViewProps={{
            //   refreshControl: (
            //     <RefreshControl
            //       refreshing={bookMarkState.isLoading}
            //       onRefresh={onRefresh}
            //       tintColor={colors.ACTION_BG_COLOR}
            //       colors={[colors.ACTION_BG_COLOR]}
            //     />
            //   )
            // }}
          />
        )}

        {state.blueView && (
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="light"
            blurAmount={5}
            reducedTransparencyFallbackColor="white"
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => {
                if (state.loading) return;
                setState({ ...state, blueView: false });
                Keyboard.dismiss();
              }}
            >
              {state.loading ? <LoadingGames /> : null}
            </TouchableOpacity>
          </BlurView>
        )}
      </Container>
    </SafeAreaView>
  );
}
