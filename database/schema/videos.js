export const VIDEO_SCHEMA = "Video";

export default videoSchema = {
  primaryKey: "id",
  name: VIDEO_SCHEMA,
  properties: {
    id: "int",
    name: "string",
    game: "int",
    video_id: "string"
  }
};
