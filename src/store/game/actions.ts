import { Dispatch } from 'react';
import { DispatchTypes } from '../types';
import database from '../../database';
import { GAME_SCHEMA } from '../../database/schema/games';

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
  dispatch: Dispatch<DispatchTypes>,
  payload: any | null,
  actionType: string
) {
  // test calling for more post
  dispatch(getGameStarted());

  switch (actionType) {
    case GAME_ACTION_TYPES.LOAD_MORE_GAMES:
      try {
        // make network request here
        // dispatch(getGameSuccess(games));
        // setImmediate(() => database.create<GameInterface>(games, GAME_SCHEMA));
      } catch (error) {
        dispatch(getGameError(error.message));
      }
      break;

    case GAME_ACTION_TYPES.LOAD_CACHED_GAMES:
      try {
        // get all cached games from database
        const cachedGames = database.retrieveDatabaseData(GAME_SCHEMA);
        dispatch(getCachedGames(cachedGames));
      } catch (error) {
        dispatch(getGameError(error.message));
      }
      break;

    default:
      break;
  }
}
