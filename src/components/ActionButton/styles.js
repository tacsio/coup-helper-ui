import { StyleSheet } from "react-native";

export default StyleSheet.create({
  actionButton: {
    backgroundColor: "#36C2AA",
    borderRadius: 10,
  },

  disabled: {
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
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

  buttonText: {
    textAlign: "center",
    width: 120,
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 6,
    lineHeight: 21,
  },
});
