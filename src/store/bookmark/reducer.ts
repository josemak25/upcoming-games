import { BOOKMARK_TYPES, BookmarkAction, BookmarkInitialState } from './types';

export const bookmarkInitialState: BookmarkInitialState = {
  isLoading: false,
  error: null,
  bookmarks: [],
  checkedBookmarks: {}
};

export default function bookmarkReducer(
  state = bookmarkInitialState,
  action: BookmarkAction
) {
  switch (action.type) {
    case BOOKMARK_TYPES.GET_BOOKMARK_STARTED: {
      return { ...state, isLoading: true };
    }

    case BOOKMARK_TYPES.GET_BOOKMARK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        bookmarks: [...action.payload]
      };
    }

    case BOOKMARK_TYPES.GET_BOOKMARK_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case BOOKMARK_TYPES.ADD_BOOKMARK_GAME: {
      return {
        ...state,
        checkedBookmarks: {
          ...state.checkedBookmarks,
          [action.payload]: action.payload
        }
      };
    }

    case BOOKMARK_TYPES.ADD_ALL_CHECKED_BOOKMARK: {
      return {
        ...state,
        checkedBookmarks: { ...state.checkedBookmarks, ...action.payload }
      };
    }

    case BOOKMARK_TYPES.REMOVE_BOOKMARK_GAME: {
      const { [action.payload]: _, ...rest } = state.checkedBookmarks;
      return { ...state, checkedBookmarks: rest };
    }

    default:
      return state;
  }
}
