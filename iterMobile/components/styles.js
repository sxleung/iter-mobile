import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    justifyContent: "center",
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "blue"
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "white"
  }
});
