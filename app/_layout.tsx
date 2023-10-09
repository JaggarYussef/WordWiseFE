import { Stack } from "expo-router";
import * as Font from "expo-font";
import { Sizes, Colors } from "../constants/theme";

const Layout = () => {
  const loadFonts = async () => {
    await Font.loadAsync({
      NSBold: require("../assets/fonts/NunitoSans_bold.ttf"),
      NSMedium: require("../assets/fonts/NunitoSans_medium.ttf"),
      NSLight: require("../assets/fonts/NunitoSans_light.ttf"),
    });
  };
  loadFonts();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.secondary },
        headerShadowVisible: false,
        headerTitle: "WordWise",
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "NSBold", fontSize: Sizes.xxLarge },
      }}
    ></Stack>
  );
};

export default Layout;
