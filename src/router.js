import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { customHeaderStyle } from "./constants";

import Screens from "./screens";

const AppNavigator = createStackNavigator(
  {
    // Home Route
    HomeScreen: { screen: Screens.HomeScreen },

    // Detail Route
    DetailScreen: { screen: Screens.DetailScreen }
  },

  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerStyle: customHeaderStyle
    }
  }
);

export default AppRoutes = createAppContainer(AppNavigator);
