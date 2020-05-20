export const GENRE_SCHEMA = 'Genre';

const genreSchema = {
  name: GENRE_SCHEMA,
  properties: {
    id: 'int',
    name: 'string',
    slug: 'string',
    url: 'string',
    created_at: 'int',
    updated_at: 'int'
  }
};

export default genreSchema;
