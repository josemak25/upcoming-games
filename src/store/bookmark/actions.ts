import { Dispatch } from 'react';
import database from '../../database';
import { DispatchTypes } from '../types';

import { BOOKMARK_TYPES, BOOKMARK_ACTION_TYPES, BookmarkAction } from './types';
import { GameBookmarkInterface } from '../../constants';
import { BOOKMARK_SCHEMA } from '../../database/schema/bookmarks';

const getBookmarkStarted = (): BookmarkAction => ({
  type: BOOKMARK_TYPES.GET_BOOKMARK_STARTED
});

const getBookmarkSuccess = (payload: any): BookmarkAction => ({
  type: BOOKMARK_TYPES.GET_BOOKMARK_SUCCESS,
  payload
});

const getBookmarkError = (payload: string): BookmarkAction => ({
  type: BOOKMARK_TYPES.GET_BOOKMARK_ERROR,
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

        // go through bookmark data to query for all games with such id
        dispatch(getBookmarkSuccess(bookmarkedGames));
      } catch (error) {
        dispatch(getBookmarkError(error.message));
      }
      break;

    case BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_GAME:
      try {
        // add game bookmarked to database
        setImmediate(() =>
          database.create<GameBookmarkInterface>(payload, BOOKMARK_SCHEMA)
        );
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
