import React, { useEffect, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import { RefreshControl, ScrollView, Platform } from 'react-native';
import { NavigationInterface } from '../types';
import { useStoreContext } from '../../store';
import { BOOKMARK_ACTION_TYPES } from '../../store/bookmark/types';
import { bookmarkLayoutProvider } from '../home/recycler_list_view';
import { GameBookmarkInterface } from '../../constants';
import { useThemeContext } from '../../theme';
import bookmarkActions from '../../store/bookmark/actions';
import LoadingGames from '../../components/loadingGames';
import Bookmark from './bookmark_card';

import { Container } from './styles';

interface BookmarkScreenProp extends NavigationInterface {
  testID?: string;
}

export default function BookmarkScreen(props: BookmarkScreenProp) {
  const { colors } = useThemeContext();

  const {
    store: { bookMarkState },
    dispatch
  } = useStoreContext();

  const [state, setState] = React.useState({
    dataProvider: new DataProvider((r1, r2) => r1.id !== r2.id).cloneWithRows(
      bookMarkState.bookmarks
    ),
    layoutProvider: bookmarkLayoutProvider(),
    refreshing: false
  });

  useEffect(() => {
    bookmarkActions(dispatch, BOOKMARK_ACTION_TYPES.LOAD_BOOKMARK_GAMES);
  }, []);

  const onRefresh = useCallback(() => {
    setState({ ...state, refreshing: true });
    setTimeout(() => setState({ ...state, refreshing: false }), 4000);
  }, [state.refreshing]);

  const _renderBookmark = (_type: string, data: GameBookmarkInterface) => (
    <Bookmark {...data} {...props} />
  );

  const _renderFooter = () => bookMarkState.isLoading && <LoadingGames />;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.DARK_BG_COLOR,
        paddingBottom: 0
      }}
    >
      <Container>
        {bookMarkState.isLoading ? (
          <LoadingGames />
        ) : bookMarkState.bookmarks.length ? (
          <RecyclerListView
            style={{ minHeight: 1, minWidth: 1, flex: 1, width: '100%' }}
            contentContainerStyle={{ paddingTop: 10 }}
            dataProvider={state.dataProvider}
            layoutProvider={state.layoutProvider}
            rowRenderer={_renderBookmark}
            renderFooter={_renderFooter}
            showsVerticalScrollIndicator={false}
            canChangeSize={true}
            renderAheadOffset={4}
            keyExtractor={(game: GameBookmarkInterface) => `${game.id}`}
            scrollViewProps={{
              refreshControl: (
                <RefreshControl
                  refreshing={state.refreshing}
                  onRefresh={onRefresh}
                  tintColor={colors.ACTION_BG_COLOR}
                  colors={[
                    colors.ACTION_BG_COLOR,
                    colors.NOTIFICATION_HIGHLIGHT_COLOR,
                    colors.BLACK_FONT_COLOR
                  ]}
                />
              )
            }}
          />
        ) : null}
      </Container>
    </SafeAreaView>
  );
}
