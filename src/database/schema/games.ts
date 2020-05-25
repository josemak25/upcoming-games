export const GAME_SCHEMA = 'Games';

const gameSchema = {
  name: GAME_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    summary: 'string',
    url: 'string',
    release_dates: 'Release_dates[]',
    genres: 'Genres[]',
    screenshots: 'Screenshots[]',
    videos: 'Videos[]'
  }
};

export default gameSchema;
