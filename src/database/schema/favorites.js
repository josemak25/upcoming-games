export const FAVORITES_SCHEMA = "favorite";

export default favoriteSchema = {
  primaryKey: "id",
  name: FAVORITES_SCHEMA,
  properties: {
    id: "int",
    game_id: "string",
    created_at: "string",
    updated_at: "string"
  }
};
