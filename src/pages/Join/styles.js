import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: "#402160",
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  formLabel: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 21,
    marginBottom: 4,
  },

  formInput: {
    borderRadius: 4,
    borderColor: "#402160",
    color: "#402160",
    backgroundColor: "#FFF",
    fontSize: 14,
    lineHeight: 16,
    paddingLeft: 7,
    paddingVertical: 3,
    marginBottom: 30,
  },

  actions: {
    flexDirection: "row",
    marginBottom: 80,
    justifyContent: "center",
  },
});
