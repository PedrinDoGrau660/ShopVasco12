import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000000ff",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#C00000",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 30, // acima de tudo
    elevation: 30, // Android
  },

 headersup: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#C00000",
    alignItems: "center", // Mude de "flex-end" para "center"
    justifyContent: "center",
    zIndex: 10,
    elevation: 10,
},

titleright: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "right",
},

  welcome: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },

  email: {
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },

  loginTypeBadge: {
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 12,
  },

  googleBadge: {
    backgroundColor: "#DB4437",
  },

  emailBadge: {
    backgroundColor: "#1E90FF",
  },

  loginTypeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
