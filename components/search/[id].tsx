import { View, Text, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { Stack } from "expo-router"; // WHAT DOES STACK DO?
import { Colors, Sizes } from "../../constants/theme";
const WordSearch = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: Colors.secondary },
          headerShadowVisible: false,
          headerTitle: "WordWise",
        }}
      />
    </SafeAreaView>
  );
};

export default WordSearch;
