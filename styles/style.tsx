import { StyleSheet } from "react-native";
import { Sizes, Colors } from "../constants/theme";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: "auto",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  userName: {
    // fontFamily: FONT.regular,
    fontSize: Sizes.large,
    color: Colors.secondary,
  },
  welcomeMessage: {
    fontFamily: "NSLight",
    fontSize: Sizes.xLarge,
    color: Colors.primary,
    marginTop: 2,
  },

  wordContainer: {
    paddingTop: Sizes.xxLarge,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Sizes.large,
    alignSelf: "center",
    backgroundColor: Colors.secondary,
    width: "80%",
    borderRadius: Sizes.medium,
    marginBottom: Sizes.xSmall,
  },

  tempWordContainer: {
    paddingTop: Sizes.xxLarge,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Sizes.large,
    alignSelf: "center",
    backgroundColor: Colors.secondary,
    width: "80%",
    borderRadius: Sizes.medium,
    flexDirection: "column",
    marginBottom: Sizes.xSmall,
  },

  showCasedWord: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Sizes.large,
    alignSelf: "center",
    backgroundColor: Colors.secondary,
    width: "80%",
    borderRadius: Sizes.medium,
    marginBottom: Sizes.xSmall,
  },
  flatListContainer: {
    columnGap: Sizes.medium,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: Sizes.large,
    backgroundColor: Colors.primary,
    width: "100%",
    borderRadius: Sizes.medium,
    marginBottom: Sizes.xxLarge,
  },

  wordText: {
    fontFamily: "NSBold",
    fontSize: Sizes.xLarge,
    color: Colors.primary,
    alignSelf: "right",
  },

  phoneticText: {
    fontFamily: "NSMedium",
    fontSize: Sizes.large,
    color: Colors.primary,
  },

  meaningText: {
    fontFamily: "NSLight",
    fontSize: Sizes.medium,
    color: Colors.primary,
  },

  recommendedCard: {
    flex: 0,
    backgroundColor: Colors.secondary,
    minWidth: 400,
    minHeight: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Sizes.medium,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: Sizes.large,
    alignSelf: "center",
    backgroundColor: Colors.secondary,
    width: "80%",
    height: 200,
    padding: 16,
    borderRadius: Sizes.medium,
  },
  searchWrapper: {
    flexDirection: "row",
    backgroundColor: Colors.lightWhite,
    marginRight: Sizes.small,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "10%",
    borderRadius: Sizes.medium,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: Sizes.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: Sizes.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "100%",
    height: "100%",
    tintColor: Colors.primary,
  },
  tabsContainer: {
    width: "100%",
    marginTop: Sizes.medium,
  },
});

export default styles;
