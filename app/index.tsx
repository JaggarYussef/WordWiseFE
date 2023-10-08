import { View, Text, ScrollView, SafeAreaView, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Colors, Shadow, Sizes } from "../constants/theme";
import Search from "../components/search/search";
import { useEffect, useState } from "react";
import styles from "../styles/style";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import SavedWord from "../components/savedWord";
//TODO:
// - Add shadow to themes and styles and not serparately
// - Add types to searchResult in dynamic search page

interface likedWord {
  id: number;
  word: string;
  phonetic: string;
  meaning: string;
}

const Home = () => {
  const [likedWord, setLikedWords] = useState<Array<likedWord>>([]);
  const router = useRouter();

  const fetchLikedWords = async () => {
    setLikedWords([]);
    try {
      const results = await axios.get("http://localhost:8080/api/words");
      setLikedWords(results.data);
    } catch (error) {
      console.log("Error fetching saved words", error);
    }
  };

  useEffect(() => {
    fetchLikedWords();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />

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
        <FlatList
          data={likedWord}
          renderItem={({ item }) => {
            console.log("this is single item,", item.word);
            return (
              <TouchableOpacity
                style={[styles.wordContainer, Shadow.shadowSmall]}
              >
                <SavedWord
                  word={item.word}
                  phonetic={item.phonetic}
                  meaning={item.meaning}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flex: 1 }}
        ></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
