import { Dispatch } from 'react';
import API from '../../libs/api';
import database from '../../database';
import { DispatchTypes } from '../types';
import { GameInterface } from '../game/types';

import { BOOKMARK_TYPES, BOOKMARK_ACTION_TYPES, BookmarkAction } from './types';
import { GameBookmarkInterface } from '../../constants';
import { BOOKMARK_SCHEMA } from '../../database/schema/bookmarks';

const getBookmarkStarted = (): BookmarkAction => ({
  type: BOOKMARK_TYPES.GET_BOOKMARK_STARTED
});

const getBookmarkSuccess = (payload: GameInterface[]): BookmarkAction => ({
  type: BOOKMARK_TYPES.GET_BOOKMARK_SUCCESS,
  payload
});

const getBookmarkError = (payload: string): BookmarkAction => ({
  type: BOOKMARK_TYPES.GET_BOOKMARK_ERROR,
  payload
});

const addToBookmark = (payload: string): BookmarkAction => ({
  type: BOOKMARK_TYPES.ADD_BOOKMARK_GAME,
  payload
});

const addAllCheckedBookmarks = (payload: object): BookmarkAction => ({
  type: BOOKMARK_TYPES.ADD_ALL_CHECKED_BOOKMARK,
  payload
});

const removeFromBookmark = (payload: string): BookmarkAction => ({
  type: BOOKMARK_TYPES.REMOVE_BOOKMARK_GAME,
  payload
});

export default async function bookmarkActions(
  dispatch: Dispatch<DispatchTypes>,
  actionType: string,
  payload: any = null
) {
  switch (actionType) {
    case BOOKMARK_ACTION_TYPES.LOAD_BOOKMARK_GAMES:
      dispatch(getBookmarkStarted());

      try {
        // make database request here to get all bookmarked games
        const bookmarkedGames = database.retrieveDatabaseData(BOOKMARK_SCHEMA);

        if (!bookmarkedGames.length) return dispatch(getBookmarkSuccess([]));

        // go through bookmark data to query for all games with such id
        const bookmarkedGameIds = bookmarkedGames
          .map(bookmark => bookmark['id'])
          .join(',');

        const QUERY_FIELDS = `fields name, release_dates.*, summary, screenshots.*; where id = (${bookmarkedGameIds}); limit 15;`;

        // fetch all bookmarks details from database
        const response = await API.post(QUERY_FIELDS);

        const games: GameInterface[] = await response.json();

        dispatch(getBookmarkSuccess(games));
      } catch (error) {
        dispatch(getBookmarkError(error.message));
      }
      break;

    case BOOKMARK_ACTION_TYPES.LOAD_CHECKED_BOOKMARKS:
      dispatch(getBookmarkStarted());

      try {
        // make database/internet request here to get all bookmarked games
        const bookmarkedGames = database.retrieveDatabaseData(BOOKMARK_SCHEMA);

        if (!bookmarkedGames.length) return dispatch(getBookmarkSuccess([]));

        // go through bookmark data to query for all games with such id
        const bookmarkedGameIds = bookmarkedGames.reduce((acc, bookmark) => {
          acc[bookmark['game_id']] = bookmark['game_id'];
          return acc;
        }, {});

        dispatch(addAllCheckedBookmarks(bookmarkedGameIds));
      } catch (error) {
        dispatch(getBookmarkError(error.message));
      }
      break;

    case BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_GAME:
      try {
        console.log(payload);

        // add game bookmarked to database
        database.create<GameBookmarkInterface>(payload, BOOKMARK_SCHEMA);

        // add game bookmarked to store
        dispatch(addToBookmark(payload.game_id.toString()));
      } catch (error) {
        dispatch(getBookmarkError(error.message));
      }
      break;

    case BOOKMARK_ACTION_TYPES.REMOVE_BOOKMARK_GAME:
      try {
        // remove game bookmarked to database
        setImmediate(() => {
          const bookmarkedGame = database
            .retrieveDatabaseData(BOOKMARK_SCHEMA)
            .find(bookmark => bookmark['id'] === payload);

          if (!bookmarkedGame) return;

          dispatch(removeFromBookmark(payload.toString()));
          database.delete(bookmarkedGame);
        });
      } catch (error) {
        dispatch(getBookmarkError(error.message));
      }
      break;

    default:
      break;
  }
}
