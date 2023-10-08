import { View, Text, Pressable } from "react-native";
import styles from "../styles/style";
import { Shadow } from "../constants/theme";

interface Props {
  word: string;
  phonetic: string;
  meaning: string;
}

const SavedWord = ({ word, phonetic, meaning }: Props) => {
  return (
    <View>
      <View style={styles.recommendedCard}>
        <Text style={styles.welcomeMessage}>{word}</Text>
        {/* <Text style={styles.welcomeMessage}>{phonetic}</Text>
        <Text style={styles.welcomeMessage}>{meaning}</Text> */}
      </View>
    </View>
  );
};

export default SavedWord;
