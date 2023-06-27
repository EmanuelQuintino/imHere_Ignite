import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },

  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },

  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    marginTop: 36,
    marginBottom: 42,
  },

  input: {
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 8,
    color: "#fdfcfe",
    padding: 16,
    fontSize: 18,
    flex: 1,
  },

  button: {
    width: 56,
    height: 56,
    backgroundColor: "#31cf67",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
  },

  emptyList: {
    color: "#6b6b6b",
    fontSize: 16,
    textAlign: "center",
    marginTop: "50%"
  },
});