import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Colors, Shadow, Sizes } from "../../constants/theme";
import styles from "../../styles/style";
import { useRouter, Stack, useGlobalSearchParams } from "expo-router";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import axios from "axios";
import RecommendedWord from "../../components/search/recomendedWord";
import BottomSheet from "@gorhom/bottom-sheet";
import DetailedWord from "../../components/detailedWords";

const Word = () => {
  const router = useRouter();
  const params = useGlobalSearchParams();

  const [searchResult, setSearResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState<Error | null>(null);
  const [isSheetOpen, setOpenSheet] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordDetails, setWordDetails] = useState([]);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "50%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
    setOpenSheet(true);
    console.log("handleSheetChanges ", index);
  }, []);

  const fetchDetails = async () => {
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`;
      const response = await axios.get(url);
      const responseData = response.data;
      console.log("CALED");

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

  useEffect(() => {
    fetchWords();
    if (selectedWord) {
      fetchDetails();
    }
  }, [selectedWord]);
  console.log("searchResults", searchResult);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: Colors.secondary },
          headerShadowVisible: false,
          headerTitle: "Recommended Words",
        }}
      />

      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: Sizes.medium }}>
            <View style={[styles.showCasedWord, Shadow.shadowSmall]}>
              <Text style={styles.welcomeMessage}>{params.id}</Text>
            </View>

            <FlatList
              data={searchResult}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.wordContainer, Shadow.shadowSmall]}
                  onLongPress={() => {
                    setOpenSheet(true);
                    handleSheetChanges(0);
                    console.log("item", item.word);

                    setSelectedWord(item.word);
                  }}
                  onPress={() => {
                    router.push(`/search/${item.word}`);
                  }}
                >
                  <RecommendedWord word={item.word} />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.score}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setOpenSheet(false)}
        >
          <DetailedWord data={wordDetails} />
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default Word;
