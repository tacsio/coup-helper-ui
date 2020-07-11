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

  actionArea: {
    paddingTop: 10,
  },

  actionContainer: {
    flex: 1,
  },

  action: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
