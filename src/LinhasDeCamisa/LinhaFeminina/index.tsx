import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Modal } from "react-native";
import { RouteProp, useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import ParteDeCima from "../../PartesFixas/TopDasLinhas/top";
import ParteDeBaixo from "../../PartesFixas/LowDoApp/index";
import { style } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { camisas, Camisa } from "../../data/camisa"; // IMPORTE DO ARQUIVO ÚNICO

type LinhaFemininaRouteProp = RouteProp<StackParamList, "LinhaFeminina">;

type Props = {
  route: LinhaFemininaRouteProp;
};

export default function LinhaFeminina({ route }: Props) {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const [modalFiltroVisible, setModalFiltroVisible] = useState(false);
  const [classificacaoSelecionada, setClassificacaoSelecionada] = useState("Nome do Produto");
  const [subcategoriaSelecionada, setSubcategoriaSelecionada] = useState("Todas");
  
  // ESTADO PARA PRODUTOS FILTRADOS
  const [produtosFiltrados, setProdutosFiltrados] = useState<Camisa[]>([]);
  const [termoPesquisa, setTermoPesquisa] = useState(route.params?.searchTerm || "");

  const opcoesClassificacao = [
    "Nome do Produto",
    "Menor Preço",
    "Maior Preço"
  ];

  // SUBCATEGORIAS ESPECÍFICAS PARA LINHA FEMININA
  const opcoesSubcategorias = [
    "Todas",
    "VESTIDOS",
    "BLUSAS",
    "SAIAS",
    "INVERNO",
    "CASUAL",
    "LEGGINGS",
    "CONJUNTOS"
  ];

  // FILTRA APENAS PRODUTOS FEMININOS DO ARQUIVO DE DADOS
  const produtosFemininos = camisas.filter(produto => produto.categoria === 'feminina');

  // FUNÇÃO PARA LIDAR COM A PESQUISA
  const handleSearch = (searchText: string) => {
    setTermoPesquisa(searchText);
    
    if (!searchText.trim()) {
      aplicarFiltrosEModal();
      return;
    }

    const filtered = produtosFemininos.filter(produto =>
      produto.nome.toLowerCase().includes(searchText.toLowerCase()) ||
      produto.subcategoria.toLowerCase().includes(searchText.toLowerCase())
    );
    
    const filteredAndSorted = aplicarOrdenacao(filtered);
    setProdutosFiltrados(filteredAndSorted);
  };

  // FUNÇÃO PARA APLICAR FILTROS E ORDENAÇÃO
  const aplicarFiltrosEModal = () => {
    let filtered = produtosFemininos;

    // Filtro por subcategoria
    if (subcategoriaSelecionada !== "Todas") {
      filtered = filtered.filter(produto => 
        produto.subcategoria === subcategoriaSelecionada
      );
    }

    // Filtro por pesquisa
    if (termoPesquisa.trim()) {
      filtered = filtered.filter(produto =>
        produto.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        produto.subcategoria.toLowerCase().includes(termoPesquisa.toLowerCase())
      );
    }

    const filteredAndSorted = aplicarOrdenacao(filtered);
    setProdutosFiltrados(filteredAndSorted);
  };

  // FUNÇÃO PARA APLICAR ORDENAÇÃO
  const aplicarOrdenacao = (produtosParaOrdenar: Camisa[]) => {
    return [...produtosParaOrdenar].sort((a, b) => {
      switch (classificacaoSelecionada) {
        case "Menor Preço":
          return a.preco - b.preco;
        case "Maior Preço":
          return b.preco - a.preco;
        default:
          return a.nome.localeCompare(b.nome);
      }
    });
  };

  // FUNÇÃO ATUALIZADA - Navega para CamisaDetalhes com ID
  const navegarParaProduto = (produtoId: number) => {
    navigation.navigate("CamisaDetalhes", { camisaId: produtoId });
  };

  const aplicarFiltros = () => {
    aplicarFiltrosEModal();
    setModalFiltroVisible(false);
  };

  const limparFiltros = () => {
    setClassificacaoSelecionada("Nome do Produto");
    setSubcategoriaSelecionada("Todas");
    setTermoPesquisa("");
    handleSearch("");
  };

 const formatarPreco = (preco: number | undefined) => {
  if (preco === undefined || preco === null) {
    return "R$ 0,00";
  }
  return `R$ ${preco.toFixed(2).replace('.', ',')}`;
};

  // UseEffects
  useEffect(() => {
  aplicarFiltrosEModal();
}, [classificacaoSelecionada, subcategoriaSelecionada]);

useEffect(() => {
  if (route.params?.searchTerm) {
    handleSearch(route.params.searchTerm);
  }
}, [route.params?.searchTerm]);

  return (
    <View style={style.container}>
      <ParteDeCima onSearch={handleSearch} showSearchBar={true} />
      
      <ScrollView 
        style={style.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.scrollContent}
      >
        {/* TÍTULO ALTERADO PARA LINHA FEMININA */}
        <Text style={style.tituloPagina}>Linha Feminina</Text>

        {/* Botão Filtrar */}
        <View style={style.filtroContainer}>
          <TouchableOpacity 
            style={style.botaoFiltrar}
            onPress={() => setModalFiltroVisible(true)}
          >
            <FontAwesome name="filter" size={16} color="#fff" />
            <Text style={style.textoBotaoFiltrar}>Filtrar</Text>
          </TouchableOpacity>
          
          {termoPesquisa && (
            <View style={style.pesquisaAtivaContainer}>
              <Text style={style.pesquisaAtivaText}>
                Pesquisando por: "{termoPesquisa}"
              </Text>
              <TouchableOpacity 
                onPress={() => handleSearch("")}
                style={style.limparPesquisaButton}
              >
                <FontAwesome name="times" size={14} color="#666" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={style.linhaDivisoria} />

        {/* Mensagem quando não encontra resultados */}
        {produtosFiltrados.length === 0 && (
          <View style={style.noResultsContainer}>
            <FontAwesome name="search" size={40} color="#ccc" />
            <Text style={style.noResultsText}>
              Nenhum produto encontrado para sua pesquisa.
            </Text>
            <Text style={style.noResultsSubText}>
              Tente outros termos ou limpe os filtros.
            </Text>
            <TouchableOpacity 
              style={style.botaoLimparPesquisa}
              onPress={limparFiltros}
            >
              <Text style={style.textoBotaoLimparPesquisa}>Limpar Pesquisa e Filtros</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Lista de produtos FILTRADOS - AGORA DINÂMICA */}
        {produtosFiltrados.map((produto) => (
          <View key={produto.id} style={style.produtoContainer}>
            <View style={style.imagemContainer}>
              <Image 
                source={produto.imagens[0]} // USA A PRIMEIRA IMAGEM DO ARRAY
                style={style.imagemProduto}
                resizeMode="cover"
              />
            </View>

            <View style={style.infoContainer}>
              <Text style={style.tituloProduto}>
                {produto.nome}
              </Text>
              
              <View style={style.precoContainer}>
                <Text style={style.precoOriginal}>
                  {formatarPreco(produto.preco)}
                </Text>

              </View>
              
              <Text style={style.precoParcelado}>
                {produto.descricaoPreco}
              </Text>

              {/* Botão atualizado para navegação dinâmica */}
              <TouchableOpacity 
                style={style.botaoEscolher}
                onPress={() => navegarParaProduto(produto.id)}
              >
                <Text style={style.textoBotao}>Escolher</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        

        <ParteDeBaixo />
      </ScrollView>

      {/* Modal de Filtro */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalFiltroVisible}
        onRequestClose={() => setModalFiltroVisible(false)}
      >
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <View style={style.modalHeader}>
              <Text style={style.modalTitle}>Filtrar Produtos</Text>
              <TouchableOpacity 
                onPress={() => setModalFiltroVisible(false)}
                style={style.botaoFechar}
              >
                <FontAwesome name="close" size={20} color="#000" />
              </TouchableOpacity>
            </View>

            <View style={style.secaoFiltro}>
              <Text style={style.tituloSecao}>Classificar Por</Text>
              {opcoesClassificacao.map((opcao, index) => (
                <TouchableOpacity 
                  key={index}
                  style={[
                    style.opcaoFiltro,
                    classificacaoSelecionada === opcao && style.opcaoSelecionada
                  ]}
                  onPress={() => setClassificacaoSelecionada(opcao)}
                >
                  <Text style={[
                    style.textoOpcao,
                    classificacaoSelecionada === opcao && style.textoOpcaoSelecionada
                  ]}>
                    {opcao}
                  </Text>
                  {classificacaoSelecionada === opcao && (
                    <FontAwesome name="check" size={16} color="#C00000" />
                  )}
                </TouchableOpacity>
              ))}
            </View>

            {/* Subcategorias FEMININAS */}
            <View style={style.secaoFiltro}>
              <Text style={style.tituloSecao}>Subcategorias</Text>
              {opcoesSubcategorias.map((opcao, index) => (
                <TouchableOpacity 
                  key={index}
                  style={[
                    style.opcaoFiltro,
                    subcategoriaSelecionada === opcao && style.opcaoSelecionada
                  ]}
                  onPress={() => setSubcategoriaSelecionada(opcao)}
                >
                  <Text style={[
                    style.textoOpcao,
                    subcategoriaSelecionada === opcao && style.textoOpcaoSelecionada
                  ]}>
                    {opcao}
                  </Text>
                  {subcategoriaSelecionada === opcao && (
                    <FontAwesome name="check" size={16} color="#C00000" />
                  )}
                </TouchableOpacity>
              ))}
            </View>

            <View style={style.botoesAcao}>
              <TouchableOpacity 
                style={style.botaoLimpar}
                onPress={limparFiltros}
              >
                <Text style={style.textoBotaoLimpar}>Limpar Tudo</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={style.botaoAplicar}
                onPress={aplicarFiltros}
              >
                <Text style={style.textoBotaoAplicar}>Aplicar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}