import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  container: {
    flex: 1,
  },

  optionsSection: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#FFF",
    // borderWidth: 1,
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    paddingBottom: 8,
  },

  searchBarContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#FFF",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

});

export default styles;