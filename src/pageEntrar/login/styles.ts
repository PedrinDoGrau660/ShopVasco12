import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "#fff",
    fontSize: 16,
  },
  botao: {
    width: "100%",
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  botaoGoogle: {
    width: "100%",
    height: 50,
    backgroundColor: "#DB4437", // Vermelho do Google
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textoBotaoGoogle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textregister: {
    color: "#ddd",  
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
   modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleModal: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: width * 0.85,
    maxHeight: height * 0.7,
    overflow: 'hidden',
  },
  googleHeader: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  googleLogo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4285F4',
    marginBottom: 10,
  },
  googleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#202124',
    marginBottom: 5,
  },
  googleSubtitle: {
    fontSize: 14,
    color: '#5f6368',
  },
  accountsList: {
    maxHeight: 300,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  accountPhoto: {
    fontSize: 24,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    lineHeight: 40,
    marginRight: 15,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#202124',
    marginBottom: 2,
  },
  accountEmail: {
    fontSize: 14,
    color: '#5f6368',
  },
  googleCancelButton: {
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  googleCancelText: {
    fontSize: 16,
    color: '#4285F4',
    fontWeight: '500',
  }
});