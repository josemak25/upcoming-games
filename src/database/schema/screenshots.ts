export const SCREENSHOT_SCHEMA = 'Screenshots';

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
