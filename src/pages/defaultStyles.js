import { StyleSheet } from 'react-native';

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
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 3,
  },

  formInput: {
    borderRadius: 4,
    borderColor: "#402160",
    color: "#402160",
    backgroundColor: "#FFF",
    fontSize: 16,
    lineHeight: 18,
    paddingLeft: 7,
    paddingVertical: 10,
  },

  actions: {
    flexDirection: "row",
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});