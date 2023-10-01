import { Stack } from "expo-router";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Sizes, Colors } from "../constants/theme";
import { useCallback, useEffect } from "react";
import { View } from "react-native";

const Layout = () => {
  const loadFonts = async () => {
    await Font.loadAsync({
      NSBold: require("../assets/fonts/NunitoSans_bold.ttf"),
      NSMedium: require("../assets/fonts/NunitoSans_medium.ttf"),
      NSLight: require("../assets/fonts/NunitoSans_light.ttf"),
    });
  };
  loadFonts();

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.secondary },
        headerShadowVisible: false,
        headerTitle: "WordWise",
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "NSBold", fontSize: Sizes.xxLarge },
      }}
    >
      {/* <View onLayout={}> </View> */}
    </Stack>
  );
};

export default Layout;
