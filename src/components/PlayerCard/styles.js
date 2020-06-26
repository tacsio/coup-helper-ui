import { StyleSheet } from "react-native";

export default StyleSheet.create({
  playerCard: {
    backgroundColor: "#402160",
    padding: 10,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: "center",
  },
  cardName: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "bold",
    color: "#FFF",
  },

  actionButton: {
    width: "100%",
    backgroundColor: "#FFF",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  actionButtonText: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    color: "#402160",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 18,
  },
});
