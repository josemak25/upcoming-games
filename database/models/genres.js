import { Model } from "@nozbe/watermelondb";
import { field, relation } from "@nozbe/watermelondb/decorators";

export default class Genre extends Model {
  static table = "genres";

  static associations = {
    games: { type: "belongs_to", key: "game_id" }
  };

  @field("genre_id") genreId;
  @field("name") name;
  @field("slug") slug;
  @field("url") url;
  @field("created_at") createdAt;
  @field("updated_at") updatedAt;

  @relation("games", "game_id") games;
}
