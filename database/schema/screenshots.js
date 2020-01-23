// model/schema.js
import { tableSchema } from "@nozbe/watermelondb";

export default games = tableSchema({
  name: "screenshots",
  columns: [
    { name: "screenshots_id", type: "number" },
    { name: "game_id", type: "number", isIndexed: true },
    { name: "image_id", type: "string" },
    { name: "height", type: "number" },
    { name: "width", type: "number" },
    { name: "url", type: "string" }
  ]
});
