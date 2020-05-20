export const SCREENSHOT_SCHEMA = 'Screenshot';

const screenshotSchema = {
  primaryKey: 'id',
  name: SCREENSHOT_SCHEMA,
  properties: {
    id: 'int',
    image_id: 'string',
    game: 'int',
    height: 'int',
    width: 'int',
    url: 'string'
  }
};

export default screenshotSchema;
