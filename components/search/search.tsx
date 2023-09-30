import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";
import { Colors, Shadow } from "../../constants/theme";
import Icons from "../../constants/icons";
import styles from "../../styles/style";
import icons from "../../constants/icons";
import { useRouter } from "expo-router";

const Search = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={[styles.searchContainer, Shadow.shadowSmall]}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value="book"
            onChange={(word) => setSearchTerm(word)}
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
