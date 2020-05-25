export const VIDEO_SCHEMA = 'Videos';

const videoSchema = {
  primaryKey: 'id',
  name: VIDEO_SCHEMA,
  properties: {
    id: 'int',
    name: 'string',
    game: 'int',
    video_id: 'string'
  }
};

export default videoSchema;
