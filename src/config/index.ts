//@ts-ignore
import { SCHEMA_VERSION, DATABASE_URI, API_KEY } from 'react-native-dotenv';

export type ENV_VARIABLES_TYPES = {
  SCHEMA_VERSION: number;
  DATABASE_URI: string;
  API_KEY: string;
};

// database and api config
const ENVIRONMENT_VARIABLES: ENV_VARIABLES_TYPES = {
  SCHEMA_VERSION: parseInt(SCHEMA_VERSION),
  DATABASE_URI,
  API_KEY
};

export default ENVIRONMENT_VARIABLES;
