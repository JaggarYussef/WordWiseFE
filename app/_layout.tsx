import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Sizes, Colors } from "../constants/theme";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    NSBold: require("../assets/fonts/NunitoSans_bold.ttf"),
    NSMediun: require("../assets/fonts/NunitoSans_medium.ttf"),
    NSLight: require("../assets/fonts/NunitoSans_light.ttf"),
  });

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.secondary },
        headerShadowVisible: false,
        headerTitle: "WordWise",
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "NSBold", fontSize: Sizes.xxLarge },
      }}
    />
  );
};

export default Layout;
