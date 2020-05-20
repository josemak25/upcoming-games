export const GAME_SCHEMA = 'Game';

const gameSchema = {
  name: GAME_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    summary: 'string',
    url: 'string',
    release_dates: 'ReleaseDate[]',
    genres: 'Genre[]',
    screenshots: 'Screenshot[]',
    videos: 'Video[]'
  }
};

export default gameSchema;
