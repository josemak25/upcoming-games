import { Model } from "@nozbe/watermelondb";
import { field, children } from "@nozbe/watermelondb/decorators";

export default class Game extends Model {
  static table = "games";

  static associations = {
    genres: { type: "has_many", foreignKey: "game_id" },
    screenshots: { type: "has_many", foreignKey: "game_id" },
    videos: { type: "has_many", foreignKey: "game_id" }
  };

  @field("game_id") gameId;
  @field("summary") summary;
  @field("url") url;
  @field("release_dates") releaseDates;

  @children("genres") genres;
  @children("screenshots") screenshots;
  @children("videos") videos;
}
