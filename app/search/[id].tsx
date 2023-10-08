import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Colors, Shadow, Sizes } from "../../constants/theme";
import styles from "../../styles/style";
import { useRouter, Stack, useGlobalSearchParams } from "expo-router";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import axios from "axios";
import RecommendedWord from "../../components/search/recomendedWord";
import BottomSheet from "@gorhom/bottom-sheet";
import DetailedWord from "../../components/detailedWords";
import { generateKey } from "../utils/helpers";

//TODO
// WERE PASSSING WORDDETAILS AS OBJECT TO DETAILED WORDS

interface FetchWords {
  word: string;
  score: number;
}

const Word = () => {
  const router = useRouter();
  const params = useGlobalSearchParams();

  const [searchResult, setSearResult] = useState<Array<FetchWords>>([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState<Error | null>(null);
  const [isSheetOpen, setOpenSheet] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordDetails, setWordDetails] = useState([]);

  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [meaning, setMeaning] = useState("");

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "1%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
    // setOpenSheet(true);
    console.log("handleSheetChanges ", index);
  }, []);

  const fetchDetails = async () => {
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`;
      const response = await axios.get(url);
      const responseData = response.data;

      setWordDetails(responseData);
    } catch (error) {
      // Handle error
    }
  };

  const fetchWords = async () => {
    setSearchLoader(true);
    setSearResult([]);
    try {
      const response = await axios.get(
        `https://api.datamuse.com/words?ml=${params.id}&max=10`
      );
      console.log(response.data);
      setSearResult(response.data);
    } catch (error) {
      error instanceof Error ? setSearchError(error) : console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  console.log("wordDetails", wordDetails);

  useEffect(() => {
    fetchWords();
    if (selectedWord) {
      fetchDetails();
    }
  }, [selectedWord]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: Colors.secondary },
          headerShadowVisible: false,
          headerTitle: "Recommended Words",
        }}
      />

      <View style={{ flex: 1, padding: Sizes.medium }}>
        <View style={[styles.showCasedWord, Shadow.shadowSmall]}>
          <Text style={styles.welcomeMessage}>{params.id}</Text>
        </View>

        <FlatList
          data={searchResult}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.tempWordContainer, Shadow.shadowSmall]}
              onLongPress={() => {
                setOpenSheet(true);
                handleSheetChanges(0);

                setSelectedWord(item.word);
              }}
              onPress={() => {
                router.replace(`/search/${item.word}`);
              }}
            >
              <RecommendedWord word={item.word} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => generateKey(item.score)}
          contentContainerStyle={styles.flatListContainer}
          horizontal
        />
      </View>

      <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setOpenSheet(false)}
        >
          <DetailedWord
            word={wordDetails[0]?.word}
            phonetic={wordDetails[0]?.phonetics[0].text}
            meaning={wordDetails[0]?.meanings[0].definitions[0].definition}
          />
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default Word;
