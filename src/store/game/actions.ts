import database from '../../database';

import {
  GAME_TYPES,
  GAME_ACTION_TYPES,
  GameAction,
  GameInterface
} from './types';

const getGameStarted = (): GameAction => ({
  type: GAME_TYPES.GET_GAMES_STARTED
});

const getGameSuccess = (payload: GameInterface[]): GameAction => ({
  type: GAME_TYPES.GET_GAMES_SUCCESS,
  payload
});

const getCachedGames = (payload: any): GameAction => ({
  type: GAME_TYPES.GET_GAMES_SUCCESS,
  payload
});

const getGameError = (error: string): GameAction => ({
  type: GAME_TYPES.GET_GAMES_ERROR,
  payload: error
});

export default async function gameActions(
  dispatch: any,
  payload: object,
  actionType: string
) {
  // test calling for more post
  dispatch(getGameStarted());

  switch (actionType) {
    case GAME_ACTION_TYPES.LOAD_MORE_GAMES:
      try {
        // make network request here
        // dispatch(getGameSuccess(games));
        // setImmediate(() => database.create(games));
      } catch (error) {
        dispatch(getGameError(error.message));
      }
      break;

    case GAME_ACTION_TYPES.LOAD_CACHED_GAMES:
      try {
        // get all cached games from database
        const cachedGames = database.getCachedGames();
        dispatch(getCachedGames(cachedGames));
      } catch (error) {
        dispatch(getGameError(error.message));
      }
      break;

    default:
      break;
  }
}
