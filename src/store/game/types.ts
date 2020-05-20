/*
 **************************************************************
 ************************* GAME TYPES **********************
 **************************************************************
 */

import {
  GameReleaseDateInterface,
  GameGenreInterface,
  GameScreenshotInterface,
  GameVideoInterface
} from '../../constants';

// GAME TYPES
export enum GAME_TYPES {
  GET_GAMES_STARTED = 'GET_GAMES_STARTED',
  GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS',
  GET_GAMES_ERROR = 'GET_GAMES_ERROR'
}

// PRODUCT ACTION TYPES
export enum GAME_ACTION_TYPES {
  ADD_FAVORITE_GAME = 'ADD_FAVORITE_GAME',
  REMOVE_FAVORITE_GAME = 'REMOVE_FAVORITE_GAME',
  LOAD_MORE_GAMES = 'LOAD_MORE_GAMES',
  LOAD_CACHED_GAMES = 'GET_CACHED_GAMES'
}

export interface GameInterface {
  id: number;
  name: string;
  summary: string;
  url: string;
  release_dates: GameReleaseDateInterface[];
  genres: GameGenreInterface[];
  screenshots: GameScreenshotInterface[];
  videos: GameVideoInterface[];
}

// TYPESCRIPT TYPES
export type GameInitialState = {
  isLoading: boolean;
  error?: string | null;
  games: GameInterface[];
};

export type GameAction =
  | { type: GAME_TYPES.GET_GAMES_STARTED }
  | { type: GAME_TYPES.GET_GAMES_SUCCESS; payload: GameInterface[] }
  | { type: GAME_TYPES.GET_GAMES_ERROR; payload: string };
