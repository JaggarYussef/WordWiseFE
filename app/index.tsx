import { View, Text, ScrollView, SafeAreaView, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Colors, Shadow, Sizes } from "../constants/theme";
import Search from "../components/search/search";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import styles from "../styles/style";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import SavedWord from "../components/savedWord";
import DetailedWord from "../components/detailedWords";
import BottomSheet from "@gorhom/bottom-sheet";
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
  const router = useRouter();

  const [likedWord, setLikedWords] = useState<Array<likedWord>>([]);
  const [selectWord, setSelectedWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [meaning, setMeaning] = useState("");

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "1%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

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
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.wordContainer, Shadow.shadowSmall]}
              onPress={() => {
                console.log("longpressed");

                handleSheetChanges(0);
                setSelectedWord(item.word);
                setPhonetic(item.phonetic);
                setMeaning(item.meaning);

                console.log("meaning and shit", meaning, phonetic, selectWord);
              }}
            >
              <SavedWord
                word={item.word}
                phonetic={item.phonetic}
                meaning={item.meaning}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flex: 1 }}
        ></FlatList>
      </ScrollView>
      <View>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
        >
          <DetailedWord
            word={selectWord}
            phonetic={phonetic}
            meaning={meaning}
          />
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default Home;
