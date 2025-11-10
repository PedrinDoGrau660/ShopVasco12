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
    textContainer: {
    marginTop: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "#ffffffff",
      paddingHorizontal: 5,
  },
  BotaoRedondo :{
   flexDirection: "row",
  },
  BotaoDestaque:{
  paddingHorizontal: 10,
  backgroundColor: 'gray',
  borderRadius: 16,
  color: 'white',
  fontSize: 16,
  fontWeight: "bold",
  marginTop: 15,
  marginHorizontal: 5,
  },
  BotaoNovidade: {
  paddingHorizontal: 10,
  backgroundColor: 'white',
  borderRadius: 16,
  color: 'black',
  fontSize: 16,
  fontWeight: "bold",
  marginTop: 15,
  marginHorizontal: 5,
  },
  BotaoDuvidas: {
  paddingHorizontal: 10,
  backgroundColor: 'gray',
  borderRadius: 16,
  color: 'white',
  fontSize: 16,
  marginTop: 15,
  marginHorizontal: 25,
  alignItems: 'center',
  textAlign: 'center',
  },
   productpreço: {
    marginTop: 18,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "left",
    color: "#ffffffff",
      paddingHorizontal: 5,
  },
  descriçaoPreco:{
    marginTop: 5,
    fontSize: 12,
    textAlign: "left",
    color: "#ffffffff",
       paddingHorizontal: 5,
  },
}); 