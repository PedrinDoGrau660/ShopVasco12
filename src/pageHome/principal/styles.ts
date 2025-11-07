import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
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
  top: 40,
  left: 0,
  right: 0,
  backgroundColor: "#000",
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderBottomWidth: 3,
  borderBottomColor: "#C00000",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
  elevation: 10,
  pointerEvents: "box-none",
  overflow: "visible", // 👈 ESSENCIAL
  flexDirection: "row",
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
 imageBemVindo: {
    width: "100%",
    alignItems: "center",
    marginTop: 5,
  },

  bannerImage: {
    width: "90%",
    height: 310, // 👈 mantém o tamanho grande
  },
  Logo:  {
        width: 35,
    height: 35,
    
  }
});

