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
linhasContainer: {
  padding: 20,
  backgroundColor: '#f8f8f8',
  marginTop: 20,
  borderRadius: 10,
  marginHorizontal: 15,
},

linhasTitulo: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  marginBottom: 15,
},

linhasBotoes: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
},

botaoLinha: {
  flex: 1,
  minWidth: '30%',
  paddingVertical: 12,
  paddingHorizontal: 8,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 4,
  marginBottom: 8,
},

botaoMasculina: {
  backgroundColor: '#C00000', // Vermelho do Vasco
},

botaoFeminina: {
  backgroundColor: '#FF6B9E', // Rosa para linha feminina
},

botaoConjunto: {
  backgroundColor: '#4CAF50', // Verde para conjuntos
},

textoBotaoLinha: {
  color: '#fff',
  fontSize: 12,
  fontWeight: 'bold',
  textAlign: 'center',
},

}); 