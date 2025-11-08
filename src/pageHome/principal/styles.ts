import { StyleSheet } from "react-native"; 

export const style = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: "#000000ff", 
  }, 
  socialContainer: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    alignItems: "center", 
    backgroundColor: "#000000ff", 
    paddingVertical: 12, 
    borderBottomWidth: 2, 
    borderBottomColor: "#C00000", 
    zIndex: 30,
    elevation: 30,
  }, 
  headersup: { 
    flexDirection: "row", 
    backgroundColor: "#000", 
    paddingVertical: 15, 
    paddingHorizontal: 20, 
    borderBottomWidth: 3, 
    borderBottomColor: "#C00000", 
    alignItems: "center", 
    justifyContent: "center", 
    zIndex: 10,
    elevation: 10,
  }, 
  content: {
    flex: 1,
    marginTop: 5, // Ajuste conforme necessário
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
  }, 
  bannerImage: { 
    width: "110%", 
    height: 100, 
  }, 
  carousel: { 
    width: "100%", 
    alignItems: "center", 
    marginTop: 10, 
    marginBottom: 20, // Adicionado para espaçamento
  }, 
  Logo: { 
    width: 35, 
    height: 35, 
  }, 
  containerTexto: {
  padding: 20,
  backgroundColor: '#000000ff',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
textoNegrito: {
  fontWeight: 'bold',
},

}); 