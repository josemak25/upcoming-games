export const SCREENSHOT_SCHEMA = "Screenshot";

export default screenshotSchema = {
  primaryKey: "id",
  name: SCREENSHOT_SCHEMA,
  properties: {
    id: "int",
    image_id: "string",
    game: "int",
    height: "int",
    width: "int",
    url: "string"
  }
};
