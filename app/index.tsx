import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Colors, Sizes } from "../constants/theme";
import Search from "../components/search/search";
import { useState } from "react";
import styles from "../styles/style";

//TODO:
// - Add shadow to themes and styles and not serparately
// - Add types to searchResult in dynamic search page

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("book");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{}} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: Sizes.medium }}>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
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
