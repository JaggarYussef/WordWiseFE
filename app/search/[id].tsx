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
import { useEffect, useState } from "react";
import axios from "axios";
import RecommendedWord from "../../components/search/recomendedWord";

const Word = () => {
  const router = useRouter();
  const params = useGlobalSearchParams();

  const [searchResult, setSearResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState<Error | null>(null);

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
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: Colors.secondary },
          headerShadowVisible: false,
          headerTitle: "Recommended Words",
        }}
      />

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
    </SafeAreaView>
  );
};

export default Word;
