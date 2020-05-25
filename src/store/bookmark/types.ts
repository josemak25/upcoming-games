/*
 **************************************************************
 ************************* GAME TYPES **********************
 **************************************************************
 */

import { GameBookmarkInterface } from '../../constants';

// BOOKMARK TYPES
export enum BOOKMARK_TYPES {
  GET_BOOKMARK_STARTED = 'GET_BOOKMARK_STARTED',
  GET_BOOKMARK_SUCCESS = 'GET_BOOKMARK_SUCCESS',
  GET_BOOKMARK_ERROR = 'GET_BOOKMARK_ERROR'
}

// BOOKMARK ACTION TYPES
export enum BOOKMARK_ACTION_TYPES {
  ADD_BOOKMARK_GAME = 'ADD_BOOKMARK_GAME',
  REMOVE_BOOKMARK_GAME = 'REMOVE_BOOKMARK_GAME',
  LOAD_BOOKMARK_GAMES = 'LOAD_BOOKMARK_GAMES'
}

// TYPESCRIPT TYPES
export type BookmarkInitialState = {
  isLoading: boolean;
  error?: string | null;
  bookmarks: GameBookmarkInterface[];
};

export type BookmarkAction =
  | { type: BOOKMARK_TYPES.GET_BOOKMARK_STARTED }
  | {
      type: BOOKMARK_TYPES.GET_BOOKMARK_SUCCESS;
      payload: GameBookmarkInterface[];
    }
  | { type: BOOKMARK_TYPES.GET_BOOKMARK_ERROR; payload: string };
