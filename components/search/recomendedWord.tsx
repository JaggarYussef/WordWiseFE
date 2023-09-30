import { View, Text, Pressable } from "react-native";
import styles from "../../styles/style";
import { Shadow } from "../../constants/theme";

interface Props {
  word: string;
}

const RecommendedWord = ({ word }: Props) => {
  return (
    <View>
      <View style={styles.recommendedCard}>
        <Text style={styles.welcomeMessage}>{word}</Text>
      </View>
    </View>
  );
};

export default RecommendedWord;
