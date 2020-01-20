import { AppRegistry, Platform } from "react-native";
import App from "./src";

AppRegistry.registerComponent("upcomingGames", () => App);

if (Platform.OS === "web") {
  const rootTag =
    document.getElementById("root") || document.getElementById("main");
  AppRegistry.runApplication("upcomingGames", { rootTag });
}
