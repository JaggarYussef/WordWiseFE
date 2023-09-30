import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Colors, Sizes } from "../constants/theme";
import Search from "../components/search/search";
import { useState } from "react";
const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("book");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: Colors.secondary },
          headerShadowVisible: false,
          headerTitle: "WordWise",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: Sizes.medium }}>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              console.log("clicked");
              console.log("search term ", searchTerm);

              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;