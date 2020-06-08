import Realm from 'realm';
import dbSchemas from './schema';
import APP_CONFIG from '../config';

const DATA_BASE_ENCRYPTION_KEY = new Int8Array(64);

export default class database {
  static realm: null | Realm = null;

  static async connect() {
    try {
      const response = await Realm.open({
        schema: [...dbSchemas],
        schemaVersion: APP_CONFIG.SCHEMA_VERSION
        // encryptionKey: DATA_BASE_ENCRYPTION_KEY
      });
      this.realm = response;
    } catch (error) {
      console.warn(error);
    }
  }

  static async create<T>(games: T[], WRITE_SCHEMA: string) {
    const { realm } = this;
    try {
      realm.write(() => {
        games.forEach(game => realm.create<T>(WRITE_SCHEMA, game));
      });
    } catch (error) {
      console.warn(error);
    }
  }

  static delete(data: Realm.Object) {
    const { realm } = this;
    realm.write(() => realm.delete(data));
  }

  static retrieveDatabaseData(RETRIEVABLE_SCHEMA: string) {
    const { realm } = this;
    return realm.objects(RETRIEVABLE_SCHEMA);
  }

  static close() {
    const { realm } = this;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }
}
