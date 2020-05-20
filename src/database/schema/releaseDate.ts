export const RELEASE_DATE_SCHEMA = 'ReleaseDate';

const ReleaseDateSchema = {
  primaryKey: 'id',
  name: RELEASE_DATE_SCHEMA,
  properties: {
    id: 'int',
    category: 'int',
    created_at: 'int',
    date: 'int',
    game: 'int',
    human: 'string',
    m: 'int',
    platform: 'int',
    region: 'int',
    updated_at: 'int',
    y: 'int'
  }
};

export default ReleaseDateSchema;
