import {
  FETCH_GAMES_STARTED,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR,
  FETCH_CACHED_GAMES,
  ADD_FAVORITE_GAME,
  REMOVE_FAVORITE_GAME
} from "./types";

export default function appReducer(state = {}, action = {}) {
  switch (action.type) {
    case FETCH_GAMES_STARTED: {
      return { ...state, isLoading: true };
    }
    case FETCH_GAMES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        games: action.payload
      };
    }
    case FETCH_CACHED_GAMES: {
      return {
        ...state,
        isLoading: false,
        games: action.payload
      };
    }
    case FETCH_GAMES_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case REMOVE_FAVORITE_GAME: {
      const games = state.games.filter(game => game.id !== action.payload);
      return { ...state, games };
    }
    default:
      return state;
  }
}
