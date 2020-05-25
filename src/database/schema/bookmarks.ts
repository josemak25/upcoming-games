export const BOOKMARK_SCHEMA = 'Bookmarks';

const bookmarkSchema = {
  primaryKey: 'id',
  name: BOOKMARK_SCHEMA,
  properties: {
    id: 'int',
    game_id: 'int',
    created_at: 'int',
    updated_at: 'int'
  }
};

export default bookmarkSchema;
