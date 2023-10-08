import { View, Text, Pressable, Image } from "react-native";
import styles from "../styles/style";
import axios from "axios";
import icons from "../constants/icons";
import { PropsWithChildren, useState } from "react";

//TODO
// The DataMuse api doesn't always return valid word therefore it can can cause the dictiionary api
// to return no phonetic and or meaning for that word. This can cause the app to crash.

interface Props {
  word: string;
  phonetic: string;
  meaning: string;
}

const DetailedWord = ({ word, phonetic, meaning }: Props) => {
  console.log("thos", {
    word: word,
    phonetic: phonetic,
    meaning: meaning,
  });
  const handlePress = () => {
    const postRequest = async () => {
      console.log("this is post request");

      try {
        const response = await axios.post(
          "http://localhost:8080/api/words",
          {
            word: word,
            phonetic: phonetic,
            meaning: meaning,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("this is reresponse", response);
      } catch (error) {
        console.log("this is error", error);
      }
    };
    postRequest();
  };

  return (
    <View style={styles.detailedWordContainer}>
      <View style={styles.detailedWordHeader}>
        <Text style={styles.wordText}>{word}</Text>

        <Pressable style={styles.detailedHeartImage} onPress={handlePress}>
          <Image source={icons.heart} resizeMode="contain" />
        </Pressable>
      </View>

      <View>
        <Text style={styles.phoneticText}>{phonetic}</Text>

        <Text style={styles.meaningText}>{meaning}</Text>
      </View>
    </View>
  );
};

export default DetailedWord;
