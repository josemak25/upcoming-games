import { Model } from "@nozbe/watermelondb";
import { field, relation } from "@nozbe/watermelondb/decorators";

export default class Screenshots extends Model {
  static table = "screenshots";

  static associations = {
    games: { type: "belongs_to", key: "game_id" }
  };

  @field("screenshots_id") screenshotsId;
  @field("image_id") imageId;
  @field("height") height;
  @field("width") width;
  @field("url") url;

  @relation("games", "game_id") games;
}
