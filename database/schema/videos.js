import { tableSchema } from "@nozbe/watermelondb";

export default videos = tableSchema({
  name: "videos",
  columns: [
    { name: "video_id", type: "number" },
    { name: "game_id", type: "number", isIndexed: true },
    { name: "name", type: "string" },
    { name: "video_url_id", type: "string" }
  ]
});
