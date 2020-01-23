import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import dbSchema from "./schema";
import dbModels from "./models";

const adapter = new SQLiteAdapter({
  dbName: "upcomingGames",
  schema: dbSchema
});

export default database = new Database({
  adapter,
  modelClasses: dbModels,
  actionsEnabled: true
});
