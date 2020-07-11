import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    justifyContent: "center",
  },
  info: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "bold",
  },

  options: {
    marginTop: 20,
  },

  button: {
    justifyContent: "center",
    paddingVertical: 5,
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 15,
  },

  notSelected: {
    backgroundColor: "#36C2AA",
  },

  selected: {
    backgroundColor: "#402160",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 17,
    paddingVertical: 6,
    paddingHorizontal: 10,
    lineHeight: 19,
  },

  action: {
    alignItems: "center",
    marginVertical: 50,
  },

  actionButton: {
    backgroundColor: "#36C2AA",
    borderRadius: 10,
  },

  disabled: {
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
  },

  actionButtonText: {
    textAlign: "center",
    minWidth: 150,
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 6,
    paddingHorizontal: 10,
    lineHeight: 21,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
