/*
 **************************************************************
 ************************* BOOKMARK TYPES *********************
 **************************************************************
 */

import { GameBookmarkInterface } from '../../constants';
import { GameInterface } from '../game/types';

// BOOKMARK TYPES
export enum BOOKMARK_TYPES {
  GET_BOOKMARK_STARTED = 'GET_BOOKMARK_STARTED',
  GET_BOOKMARK_SUCCESS = 'GET_BOOKMARK_SUCCESS',
  GET_BOOKMARK_ERROR = 'GET_BOOKMARK_ERROR',
  ADD_BOOKMARK_GAME = 'ADD_BOOKMARK_GAME',
  ADD_ALL_CHECKED_BOOKMARK = 'ADD_ALL_CHECKED_BOOKMARK',
  REMOVE_BOOKMARK_GAME = 'REMOVE_BOOKMARK_GAME'
}

// BOOKMARK ACTION TYPES
export enum BOOKMARK_ACTION_TYPES {
  ADD_BOOKMARK_GAME = 'ADD_BOOKMARK_GAME',
  REMOVE_BOOKMARK_GAME = 'REMOVE_BOOKMARK_GAME',
  LOAD_BOOKMARK_GAMES = 'LOAD_BOOKMARK_GAMES',
  LOAD_CHECKED_BOOKMARKS = 'LOAD_CHECKED_BOOKMARKS'
}

// TYPESCRIPT TYPES
export type BookmarkInitialState = {
  isLoading: boolean;
  error?: string | null;
  bookmarks: GameBookmarkInterface[];
  checkedBookmarks: { [key: string]: string };
};

export type BookmarkAction =
  | { type: BOOKMARK_TYPES.GET_BOOKMARK_STARTED }
  | {
      type: BOOKMARK_TYPES.GET_BOOKMARK_SUCCESS;
      payload: GameInterface[];
    }
  | { type: BOOKMARK_TYPES.GET_BOOKMARK_ERROR; payload: string }
  | { type: BOOKMARK_TYPES.ADD_BOOKMARK_GAME; payload: string }
  | { type: BOOKMARK_TYPES.ADD_ALL_CHECKED_BOOKMARK; payload: object }
  | { type: BOOKMARK_TYPES.REMOVE_BOOKMARK_GAME; payload: string };
