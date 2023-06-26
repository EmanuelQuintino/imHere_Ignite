import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f1e25",
    width: "100%",
    color: "#fdfcfe",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    marginBottom: 12,
  },
  
  name: {
    color: "#fdfcfe",
    flex: 1,
    fontSize: 18,
  },

  button: {
    width: 56,
    height: 56,
    backgroundColor: "#e23c44",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
  },
});