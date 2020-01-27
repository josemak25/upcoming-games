import NetInfo from "@react-native-community/netinfo";
import database from "../database";
import fetchGames from "../utils/fetchGames";

import {
  FETCH_GAMES_STARTED,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR,
  FETCH_CACHED_GAMES
} from "./types";

const addGamesStarted = () => ({ type: FETCH_GAMES_STARTED });

const addGamesSuccess = games => ({
  type: FETCH_GAMES_SUCCESS,
  payload: games
});

const addCachedGames = cachedGames => ({
  type: FETCH_CACHED_GAMES,
  payload: cachedGames
});

const addGamesFailure = error => ({
  type: FETCH_GAMES_ERROR,
  payload: error
});

export default getGames = () => {
  return dispatch => {
    dispatch(addGamesStarted());

    // To unsubscribe to these update, just use:
    // unsubscribe();
    try {
      const unsubscribe = NetInfo.addEventListener(async state => {
        if (!state.isConnected && !state.isInternetReachable) {
          const cachedGames = await database.getCachedGames();
          dispatch(addCachedGames(cachedGames));
        }

        const response = await fetchGames();
        const games = await response.json();

        // add games to database for caching
        //   setImmediate(() => games.forEach(database.create));
        dispatch(addGamesSuccess(games));
      });
    } catch (error) {
      dispatch(addGamesFailure(error.message));
    }
  };
};
