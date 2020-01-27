import Realm from "realm";
import dbSchemas from "./schema";
import APP_CONFIG from "../config";

export default class database {
  static realm = null;

  static async connect() {
    try {
      const response = await Realm.open({
        path: "upcomingGames.realm",
        schema: [...dbSchemas],
        schemaVersion: APP_CONFIG.SCHEMA_VERSION
      });
      this.realm = response;
    } catch (error) {
      console.warn(error);
    }
  }

  static async create() {
    try {
      realm.write(() => {
        realm.create("Car", { make: "Honda", model: "Accord", drive: "awd" });
      });
    } catch (error) {
      console.warn(error);
    }
  }

  static close() {
    const { realm } = this;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }
}
