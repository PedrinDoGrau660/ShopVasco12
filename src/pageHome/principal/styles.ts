import { StyleSheet } from "react-native"; 

export const style = StyleSheet.create({ 
    container: { 
    flex: 1, 
    backgroundColor: "#000000ff", 
  }, 
  content: {
    flex: 1,
    marginTop: 5, // Ajuste conforme necessário
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