import { GAME_TYPES, GameAction, GameInitialState } from './types';
import dummyGames from '../../libs/games.json';

export const gameInitialState: GameInitialState = {
  isLoading: false,
  error: null,
  //@ts-ignore remove this when using real data
  games: [...dummyGames]
};

export default function gameReducer(
  state = gameInitialState,
  action: GameAction
) {
  switch (action.type) {
    case GAME_TYPES.GET_GAMES_STARTED: {
      return { ...state, isLoading: true };
    }

    case GAME_TYPES.GET_GAMES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        games: [...state.games, ...action.payload]
      };
    }

    case GAME_TYPES.GET_GAMES_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
}
