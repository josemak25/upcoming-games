import { Model } from "@nozbe/watermelondb";
import { field, relation } from "@nozbe/watermelondb/decorators";

export default class Video extends Model {
  static table = "videos";

  static associations = {
    games: { type: "belongs_to", key: "game_id" }
  };

  @field("video_id") videoId;
  @field("video_url_id") videoUrlId;
  @field("name") name;

  @relation("games", "game_id") games;
}
