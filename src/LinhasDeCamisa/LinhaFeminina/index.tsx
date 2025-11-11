import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Modal } from "react-native";
import { RouteProp, useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import ParteDeCima from "../../PartesFixas/TopDasLinhas/top";
import ParteDeBaixo from "../../PartesFixas/LowDoApp/index";
import { style } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import Numeros from "../../pagesCamisa/bolinhas/BolinhaDeNumero";

// Importe as imagens reais dos produtos femininos
import vestidoImagem from '../../assets/dvd.jpg'; 
import blusaImagem from '../../assets/dvd.jpg';
import saiaImagem from '../../assets/dvd.jpg';
import jaquetaFemininaImagem from '../../assets/dvd.jpg';
import leggingsImagem from '../../assets/dvd.jpg';
import conjuntoFemininoImagem from '../../assets/dvd.jpg';

// Defina as props corretamente
type LinhaFemininaRouteProp = RouteProp<StackParamList, "LinhaFeminina">;

type Props = {
  route: LinhaFemininaRouteProp;
};

type Produto = {
  id: number;
  nome: string;
  preco: number;
  precoOriginal?: number;
  subcategoria: string;
  imagem: any;
  rota: keyof StackParamList;
};

export default function LinhaFeminina({ route }: Props) {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const [modalFiltroVisible, setModalFiltroVisible] = useState(false);
  const [classificacaoSelecionada, setClassificacaoSelecionada] = useState("Nome do Produto");
  const [subcategoriaSelecionada, setSubcategoriaSelecionada] = useState("Todas");
  
  // ESTADO PARA PRODUTOS FILTRADOS (PESQUISA + FILTROS)
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);
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

  // DADOS DE PRODUTOS FEMININOS COM ROTAS ESPECÍFICAS
  const produtos: Produto[] = [
    { 
      id: 1, 
      nome: "VESTIDO OFICIAL VASCO DA GAMA", 
      preco: 289.99, 
      precoOriginal: 349.99, 
      subcategoria: "VESTIDOS", 
      imagem: vestidoImagem,
      rota: "VestidoOficial"
    },
    { 
      id: 2, 
      nome: "BLUSA FEMININA VASCO 2024", 
      preco: 179.99, 
      subcategoria: "BLUSAS", 
      imagem: blusaImagem,
      rota: "BlusaFeminina"
    },
    { 
      id: 3, 
      nome: "SAIA JEANS VASCO", 
      preco: 139.99, 
      subcategoria: "SAIAS", 
      imagem: saiaImagem,
      rota: "SaiaJeans"
    },
    { 
      id: 4, 
      nome: "JAQUETA FEMININA INVERNO VASCO", 
      preco: 329.99, 
      precoOriginal: 399.99, 
      subcategoria: "INVERNO", 
      imagem: jaquetaFemininaImagem,
      rota: "JaquetaFeminina"
    },
    { 
      id: 5, 
      nome: "LEGGINGS TREINO VASCO", 
      preco: 159.99, 
      subcategoria: "LEGGINGS", 
      imagem: leggingsImagem,
      rota: "LeggingsTreino"
    },
  ];

  // FUNÇÃO PARA LIDAR COM A PESQUISA
  const handleSearch = (searchText: string) => {
    setTermoPesquisa(searchText);
    
    if (!searchText.trim()) {
      // Se a pesquisa estiver vazia, aplica apenas os filtros atuais
      aplicarFiltrosEModal();
      return;
    }

    // Filtra os produtos baseado no texto da pesquisa
    const filtered = produtos.filter(produto =>
      produto.nome.toLowerCase().includes(searchText.toLowerCase()) ||
      produto.subcategoria.toLowerCase().includes(searchText.toLowerCase())
    );
    
    // Aplica ordenação nos produtos filtrados
    const filteredAndSorted = aplicarOrdenacao(filtered);
    setProdutosFiltrados(filteredAndSorted);
  };

  // FUNÇÃO PARA APLICAR FILTROS E ORDENAÇÃO
  const aplicarFiltrosEModal = () => {
    let filtered = produtos;

    // Filtro por subcategoria
    if (subcategoriaSelecionada !== "Todas") {
      filtered = filtered.filter(produto => 
        produto.subcategoria === subcategoriaSelecionada
      );
    }

    // Filtro por pesquisa (se houver termo)
    if (termoPesquisa.trim()) {
      filtered = filtered.filter(produto =>
        produto.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        produto.subcategoria.toLowerCase().includes(termoPesquisa.toLowerCase())
      );
    }

    // Aplica ordenação
    const filteredAndSorted = aplicarOrdenacao(filtered);
    setProdutosFiltrados(filteredAndSorted);
  };

  // FUNÇÃO PARA APLICAR ORDENAÇÃO
  const aplicarOrdenacao = (produtosParaOrdenar: Produto[]) => {
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

  // Função para navegar para a página do produto
  const navegarParaProduto = (rota: keyof StackParamList) => {
    navigation.navigate(rota as any);
  };

  const aplicarFiltros = () => {
    aplicarFiltrosEModal();
    setModalFiltroVisible(false);
  };

  const limparFiltros = () => {
    setClassificacaoSelecionada("Nome do Produto");
    setSubcategoriaSelecionada("Todas");
    setTermoPesquisa("");
    // Atualiza ParteDeCima com pesquisa vazia
    handleSearch("");
  };

  const formatarPreco = (preco: number) => {
    return `R$ ${preco.toFixed(2).replace('.', ',')}`;
  };

  // UseEffect para aplicar a pesquisa quando o componente montar ou quando receber parâmetros
  useEffect(() => {
    if (route.params?.searchTerm) {
      handleSearch(route.params.searchTerm);
    } else {
      aplicarFiltrosEModal();
    }
  }, [route.params?.searchTerm]);

  // Inicializa os produtos filtrados quando o componente monta
  useEffect(() => {
    aplicarFiltrosEModal();
  }, []);

  return (
    <View style={style.container}>
      {/* ParteDeCima com barra de pesquisa */}
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
          
          {/* Mostra termo de pesquisa atual */}
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

        {/* Mostra mensagem quando não encontra resultados */}
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

        {/* Lista de produtos FILTRADOS */}
        {produtosFiltrados.map((produto) => (
          <View key={produto.id} style={style.produtoContainer}>
            <View style={style.imagemContainer}>
              <Image 
                source={produto.imagem}
                style={style.imagemProduto}
                resizeMode="cover"
              />
            </View>

            <View style={style.infoContainer}>
              <Text style={style.tituloProduto}>
                {produto.nome}
              </Text>
              
              <View style={style.precoContainer}>
                {produto.precoOriginal && (
                  <Text style={style.precoOriginal}>
                    {formatarPreco(produto.precoOriginal)}
                  </Text>
                )}
                <Text style={style.precoPrincipal}>
                  {formatarPreco(produto.preco)}
                </Text>
              </View>
              
              <Text style={style.precoParcelado}>
                {formatarPreco(produto.preco * 0.95)} à vista com desconto Pix{"\n"}
                ou 12x de {formatarPreco(produto.preco / 12)}
              </Text>

              {/* Botão atualizado com navegação */}
              <TouchableOpacity 
                style={style.botaoEscolher}
                onPress={() => navegarParaProduto(produto.rota)}
              >
                <Text style={style.textoBotao}>Escolher</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        
        <View>
          <Numeros />
        </View>
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
            {/* Header do Modal */}
            <View style={style.modalHeader}>
              <Text style={style.modalTitle}>Filtrar Produtos</Text>
              <TouchableOpacity 
                onPress={() => setModalFiltroVisible(false)}
                style={style.botaoFechar}
              >
                <FontAwesome name="close" size={20} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Classificar Por */}
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

            {/* Botões de Ação */}
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