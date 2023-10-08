import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";
import { Colors, Shadow } from "../../constants/theme";
import styles from "../../styles/style";
import icons from "../../constants/icons";
import { useRouter } from "expo-router";

//TODO What is the right wya of adding props here>?
interface Props {
  searchTerm: string;
  setSearchTerm(): string; // NOT CORRECT DT
  handleClick(): void;
}

const Search = ({ searchTerm, setSearchTerm, handleClick }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.searchContainer, Shadow.shadowSmall]}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            autoFocus={true}
            onChangeText={(word) => setSearchTerm(word)}
            placeholder="Search for a word"
          />
          <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
            <Image
              resizeMode="contain"
              style={styles.searchBtnImage}
              source={icons.search}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Search;
