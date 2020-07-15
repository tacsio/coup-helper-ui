import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  normal: {
    backgroundColor: "#36C2AA",
  },

  selected: {
    backgroundColor: "#402160",
  },

  terminated: {
    backgroundColor: "#b5b5b5",
  },

  name: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cards: {
    paddingTop: 3,
  },

  cardName: {
    color: "#FFF",
    fontSize: 16,
  },
  coins: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
