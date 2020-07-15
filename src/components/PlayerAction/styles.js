import { StyleSheet } from "react-native";

export default StyleSheet.create({
  playerAction: {
    padding: 5,
    marginBottom: 20,
    borderTopWidth: 2,
    borderStyle: "dashed",
    borderTopColor: "#402160",
  },

  playerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ambassadorAction: {
    backgroundColor: "#36C2AA",
    padding: 3,
    borderRadius: 5,
  },

  disabled: {
    backgroundColor: "#E5E5E5",
    padding: 3,
    borderRadius: 5,
  },

  playerCoin: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
  },

  coinAction: {
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  plusAction: {
    backgroundColor: "#36C2AA",
  },

  minusAction: {
    backgroundColor: "#C24044",
  },

  playerCards: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
});
