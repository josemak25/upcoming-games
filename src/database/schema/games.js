export const GAME_SCHEMA = "Game";

export default gameSchema = {
  name: GAME_SCHEMA,
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
    summary: "string",
    url: "string",
    release_dates: "ReleaseDate[]",
    genres: "Genre[]",
    screenshots: "Screenshot[]",
    videos: "Video[]"
  }
};
