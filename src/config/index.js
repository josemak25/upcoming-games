import Reactotron from "reactotron-react-native";
import { SCHEMA_VERSION, DATABASE_URI, API_KEY } from "react-native-dotenv";

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
export default {
  SCHEMA_VERSION: parseInt(SCHEMA_VERSION),
  DATABASE_URI,
  API_KEY
};
