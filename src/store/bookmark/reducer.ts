import { BOOKMARK_TYPES, BookmarkAction, BookmarkInitialState } from './types';

export const bookmarkInitialState: BookmarkInitialState = {
  isLoading: false,
  error: null,
  bookmarks: []
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
        bookmarks: [...state.bookmarks, ...action.payload]
      };
    }

    case BOOKMARK_TYPES.GET_BOOKMARK_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
}
