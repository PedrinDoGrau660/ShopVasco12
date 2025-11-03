import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(255,255,255,0.9)",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  tituloEsqueci: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#000",
  },
  textoEsqueci: {
    fontSize: 15,
    lineHeight: 22,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    maxWidth: 400,
  },
  label: {
    alignSelf: "flex-start",
    color: "#000",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 20,
    paddingVertical: 5,
    color: "#000",
  },
  botao: {
    backgroundColor: "#ff004c",
    paddingVertical: 12,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  cancelar: {
    color: "#00aaff",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});