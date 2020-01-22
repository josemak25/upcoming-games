import Reactotron from "reactotron-react-native";

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
