import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  clipboard: {
    backgroundColor: "#402160",
    borderRadius: 10,
  },

  clipboardText: {
    color: "#FFF",
    fontFamily: "Roboto",
    paddingHorizontal: 30,
    paddingVertical: 5,
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
  playerRound: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "bold",
  },
  opponets: {
    paddingTop: 20,
  },

  playerAction: {},
  action: {},
});
