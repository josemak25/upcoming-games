export const GENRE_SCHEMA = "Genre";

export default genreSchema = {
  primaryKey: "id",
  name: GENRE_SCHEMA,
  properties: {
    id: "int",
    name: "string",
    slug: "string",
    url: "string",
    created_at: "int",
    updated_at: "int"
  }
};
