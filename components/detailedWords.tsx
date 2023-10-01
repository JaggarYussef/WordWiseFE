import { View, Text, Pressable, Image } from "react-native";
import styles from "../styles/style";
import axios from "axios";
import { useEffect, useState } from "react";
import icons from "../constants/icons";

interface Props {
  data: string;
}

const DetailedWord = ({ data }: Props) => {
  console.log("this data inside detailed word", data);

  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [meaning, setMeaning] = useState("");
  if (data.length !== 0) {
    // const word = data[0].word;
    setWord(data[0].word);
    setPhonetic(data[0].phonetics[0].text);
    setMeaning(data[0].meanings[0].definitions[0].definition);
  }

  console.log("this word, phonetic, meaning", word, phonetic, meaning);
  return (
    <View>
      <Pressable>
        <Image source={icons.heart} resizeMode="contain" />
      </Pressable>
      <View>
        <Text style={styles.wordText}>{word}</Text>
        <Text style={styles.phoneticText}>{phonetic}</Text>
      </View>

      <View>
        <Text style={styles.meaningText}>{meaning}</Text>
      </View>
    </View>
  );
};

export default DetailedWord;
