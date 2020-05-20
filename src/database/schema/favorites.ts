export const FAVORITES_SCHEMA = 'favorite';

const favoriteSchema = {
  primaryKey: 'id',
  name: FAVORITES_SCHEMA,
  properties: {
    id: 'int',
    game_id: 'string',
    created_at: 'string',
    updated_at: 'string'
  }
};

export default favoriteSchema;
