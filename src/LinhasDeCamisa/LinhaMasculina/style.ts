import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  tituloPagina: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 20,
  },
  filtroContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  botaoFiltrar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C00000",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    width: "100%",
  },
  textoBotaoFiltrar: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  linhaDivisoria: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  produtoContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
  },
  imagemContainer: {
    marginRight: 15,
  },
  imagemProduto: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  tituloProduto: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 18,
    marginBottom: 8,
  },
  precoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  precoPrincipal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  precoOriginal: {
 fontSize: 18,
    color: '#ffffffff',
  },
  precoParcelado: {
    fontSize: 11,
    color: '#cccccc',
    lineHeight: 14,
    marginBottom: 12,
  },
  botaoEscolher: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBotao: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  // Estilos do Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  botaoFechar: {
    padding: 5,
  },
  secaoFiltro: {
    marginTop: 20,
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  opcaoFiltro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  opcaoSelecionada: {
    backgroundColor: '#f8f8f8',
  },
  textoOpcao: {
    fontSize: 14,
    color: '#666',
  },
  textoOpcaoSelecionada: {
    color: '#C00000',
    fontWeight: 'bold',
  },
  botoesAcao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    gap: 10,
  },
  botaoLimpar: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotaoLimpar: {
    color: '#666',
    fontWeight: 'bold',
  },
  botaoAplicar: {
    flex: 1,
    backgroundColor: '#C00000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  noResultsContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 40,
  marginVertical: 20,
},

noResultsText: {
  fontSize: 18,
  color: '#666',
  textAlign: 'center',
  marginTop: 16,
  fontWeight: 'bold',
},

noResultsSubText: {
  fontSize: 14,
  color: '#999',
  textAlign: 'center',
  marginTop: 8,
},

botaoLimparPesquisa: {
  backgroundColor: '#C00000',
  paddingHorizontal: 20,
  paddingVertical: 12,
  borderRadius: 8,
  marginTop: 16,
},

textoBotaoLimparPesquisa: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
},

pesquisaAtivaContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 16,
  marginLeft: 10,
},

pesquisaAtivaText: {
  fontSize: 12,
  color: '#666',
  marginRight: 8,
},

limparPesquisaButton: {
  padding: 4,
},
  textoBotaoAplicar: {
    color: '#fff',
    fontWeight: 'bold',
  },
});