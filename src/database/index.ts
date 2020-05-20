import Realm from 'realm';
import dbSchemas from './schema';
import APP_CONFIG from '../config';

import { GAME_SCHEMA } from './schema/games';
import { GameInterface } from '../store/game/types';

export default class database {
  static realm: null | Realm = null;

  static async connect() {
    try {
      const response = await Realm.open({
        path: 'upcomingGames.realm',
        schema: [...dbSchemas],
        schemaVersion: APP_CONFIG.SCHEMA_VERSION
      });
      this.realm = response;
    } catch (error) {
      console.warn(error);
    }
  }

  static async create(games: GameInterface[]) {
    const { realm } = this;
    try {
      const cachedGames = this.getCachedGames();
      if (cachedGames.length) return cachedGames;

      realm.write(() => games.forEach(game => realm.create(GAME_SCHEMA, game)));
    } catch (error) {
      console.warn(error);
    }
  }

  static getCachedGames() {
    const { realm } = this;
    return realm.objects(GAME_SCHEMA);
  }

  static close() {
    const { realm } = this;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }
}
