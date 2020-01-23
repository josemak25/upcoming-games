import { appSchema } from "@nozbe/watermelondb";
import { databaseVersion } from "../../constants";

import gameSchema from "./games";
import genreSchema from "./genres";
import screenshotSchema from "./screenshots";
import videoSchema from "./videos";

export default dbSchema = appSchema({
  version: databaseVersion,
  tables: [gameSchema, genreSchema, screenshotSchema, videoSchema]
});
