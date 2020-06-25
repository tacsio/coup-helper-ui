import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#36C2AA",
    marginBottom: 10, //! TODO apagar
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  selected: {
    backgroundColor: "#402160",
    marginBottom: 10, //! TODO apagar
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
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
