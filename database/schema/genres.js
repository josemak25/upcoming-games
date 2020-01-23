// model/schema.js
import { tableSchema } from "@nozbe/watermelondb";

export default games = tableSchema({
  name: "genres",
  columns: [
    { name: "genre_id", type: "number" },
    { name: "game_id", type: "number", isIndexed: true },
    { name: "name", type: "string" },
    { name: "slug", type: "string" },
    { name: "url", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" }
  ]
});
