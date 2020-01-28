import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { customHeaderStyle } from "./constants";

import Screens from "./screens";

const AppNavigator = createStackNavigator(
  {
    // Splash Route
    SplashScreen: { screen: Screens.SplashScreen },

    // Home Route
    HomeScreen: { screen: Screens.HomeScreen },

    // Detail Route
    DetailScreen: { screen: Screens.DetailScreen }
  },

  {
    initialRouteName: "SplashScreen",
    defaultNavigationOptions: {
      headerStyle: customHeaderStyle
    }
  }
);

export default Routes = createAppContainer(AppNavigator);
