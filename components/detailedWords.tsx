import { View, Text, Pressable, Image } from "react-native";
import styles from "../styles/style";
import axios from "axios";
import { useEffect, useState } from "react";
import icons from "../constants/icons";

interface Props {
  data: string;
}

const DetailedWord = ({ data }: Props) => {
  let word = "";
  let phonetic = "";
  let meaning = "";

  if (data.length !== 0) {
    // const word = data[0].word;
    word = data[0].word;
    phonetic = data[0].phonetics[0].text;
    meaning = data[0].meanings[0].definitions[0].definition;
  }

  const handlePress = () => {
    console.log("thos", {
      word: word,
      phonetic: phonetic,
      meaning: meaning,
    });

    const postRequest = async () => {
      console.log("this is post request");

      try {
        const response = await axios.post("http://localhost:8080/api/words", {
          word: word,
          phonetic: phonetic,
          meaning: meaning,
        });

        console.log("this is reresponse", response);
      } catch (error) {
        console.log("this is error", error);
      }
    };
    postRequest();
  };

  return (
    <View>
      <Pressable onPress={handlePress}>
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
