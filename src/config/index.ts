import Reactotron from 'reactotron-react-native';

//@ts-ignore
import { SCHEMA_VERSION, DATABASE_URI, API_KEY } from 'react-native-dotenv';

type EnvPropsTypes = {
  SCHEMA_VERSION: number;
  DATABASE_URI: string;
  API_KEY: string;
};

// debugging setup
if (__DEV__) {
  //connect to tron debugger
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  //clean tron memory for possible memory leeks
  tron.clear();

  //attach tron debugger to global
  console.tron = tron;
}

// database and api config
const ENVIRONMENT_VARIABLES: EnvPropsTypes = {
  SCHEMA_VERSION: parseInt(SCHEMA_VERSION),
  DATABASE_URI,
  API_KEY
};

export default ENVIRONMENT_VARIABLES;
