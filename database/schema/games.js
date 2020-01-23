// model/schema.js
import { tableSchema } from "@nozbe/watermelondb";

export default games = tableSchema({
  name: "games",
  columns: [
    { name: "game_id", type: "number" },
    { name: "summary", type: "string" },
    { name: "url", type: "string" },
    { name: "release_dates", type: "string" }
  ]
});
