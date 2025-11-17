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
  carouselNoticias: { 
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
  marginTop: 25,
  borderRadius: 15,
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
tituloCalendario: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#ffffffff',
  textAlign: 'center',
  marginBottom: 15,
},
tituloNoticias: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#000000ff',
  textAlign: 'center',
  marginBottom: 15,
},
cardNoticia: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  noticiaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  noticiaData: {
    fontSize: 11,
    color: '#888',
  },
  comentariosBadge: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  comentariosText: {
    fontSize: 9,
    color: '#FFF',
    fontWeight: '600',
  },
  noticiaTitulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  noticiaResumo: {
    fontSize: 13,
    color: '#666',
    lineHeight: 16,
  },
  lerMais: {
    fontSize: 11,
    color: '#007AFF',
    fontWeight: '500',
    marginTop: 4,
  },
}); 