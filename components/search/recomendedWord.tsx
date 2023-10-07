import { View, Text, Pressable } from "react-native";
import styles from "../../styles/style";
import { Shadow } from "../../constants/theme";

interface Props {
  word: string;
}

const RecommendedWord = ({ word }: Props) => {
  console.log("recommended word is called");

  return (
    <View>
      <View style={styles.recommendedCard}>
        <Text style={styles.welcomeMessage}>{word}</Text>
      </View>
    </View>
  );
};

export default RecommendedWord;
