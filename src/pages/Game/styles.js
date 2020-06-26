import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  header: {
    marginTop: 20,
    paddingLeft: 10,
  },

  title: {
    color: "#402160",
    fontSize: 28,
    fontWeight: "bold",
  },

  main: {
    flex: 1,
    paddingHorizontal: 15,
  },

  roundInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  labelRound: {
    fontWeight: "bold",
    fontSize: 21,
    lineHeight: 21,
    color: "#402160",
  },

  playerName: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "bold",
    color: "#402160",
  },

  opponets: {
    paddingTop: 20,
  },

  playerAction: {
    padding: 5,
    marginBottom: 20,
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

  action: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
