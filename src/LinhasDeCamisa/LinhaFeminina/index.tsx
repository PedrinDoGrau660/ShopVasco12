import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Modal } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import ParteDeCima from "../../PartesFixas/TopDoApp/top";
import ParteDeBaixo from "../../PartesFixas/LowDoApp/index";
import { style } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import Numeros from "../../pagesCamisa/bolinhas/BolinhaDeNumero";

// Importe as imagens reais dos produtos
import calcaImagem from '../../assets/dvd.jpg'; 
import camisetaImagem from '../../assets/dvd.jpg';
import shortsImagem from '../../assets/dvd.jpg';
import jaquetaImagem from '../../assets/dvd.jpg';
import meiaoImagem from '../../assets/dvd.jpg';
import moletomImagem from '../../assets/dvd.jpg';

type HomeRouteProp = RouteProp<StackParamList, "LinhaFeminina">;

type Props = {
  route: HomeRouteProp;
};

type Produto = {
  id: number;
  nome: string;
  preco: number;
  precoOriginal?: number;
  subcategoria: string;
  imagem: any; // Imagem específica do produto
};

export default function LinhaFeminina() {
  const [modalFiltroVisible, setModalFiltroVisible] = useState(false);
  const [classificacaoSelecionada, setClassificacaoSelecionada] = useState("Nome do Produto");
  const [subcategoriaSelecionada, setSubcategoriaSelecionada] = useState("Todas");

  const opcoesClassificacao = [
    "Nome do Produto",
    "Menor Preço",
    "Maior Preço"
  ];

  const opcoesSubcategorias = [
    "Todas",
    "UNIFORME DE JOGO",
    "INVERNO",
    "CASUAL",
    "SHORTS",
    "MEIÃO",
    "AQUECIMENTO",
    "TREINO"
  ];

  // Dados de produtos com imagens específicas
  const produtos: Produto[] = [
    { 
      id: 1, 
      nome: "CALÇA AQUECIMENTO COMISSÃO VASCO 25", 
      preco: 319.99, 
      precoOriginal: 399.99, 
      subcategoria: "AQUECIMENTO", 
      imagem: calcaImagem 
    },
    { 
      id: 2, 
      nome: "CAMISETA TREINO VASCO 2024", 
      preco: 199.99, 
      subcategoria: "TREINO", 
      imagem: camisetaImagem 
    },
    { 
      id: 3, 
      nome: "SHORTS JOGO VASCO PRINCIPAL", 
      preco: 159.99, 
      subcategoria: "UNIFORME DE JOGO", 
      imagem: shortsImagem 
    },
    { 
      id: 4, 
      nome: "JAQUETA INVERNO VASCO", 
      preco: 279.99, 
      precoOriginal: 349.99, 
      subcategoria: "INVERNO", 
      imagem: jaquetaImagem 
    },
    { 
      id: 5, 
      nome: "MEIÃO OFICIAL VASCO", 
      preco: 49.99, 
      subcategoria: "MEIÃO", 
      imagem: meiaoImagem 
    },
    { 
      id: 6, 
      nome: "MOLETOM CASUAL VASCO", 
      preco: 229.99, 
      subcategoria: "CASUAL", 
      imagem: moletomImagem 
    },
  ];

  // Função para aplicar filtros
  const produtosFiltrados = produtos
    .filter(produto => {
      // Filtro por subcategoria
      if (subcategoriaSelecionada !== "Todas" && produto.subcategoria !== subcategoriaSelecionada) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Ordenação simples
      switch (classificacaoSelecionada) {
        case "Menor Preço":
          return a.preco - b.preco;
        case "Maior Preço":
          return b.preco - a.preco;
        default:
          return a.nome.localeCompare(b.nome);
      }
    });

  const aplicarFiltros = () => {
    setModalFiltroVisible(false);
  };

  const limparFiltros = () => {
    setClassificacaoSelecionada("Nome do Produto");
    setSubcategoriaSelecionada("Todas");
  };

  const formatarPreco = (preco: number) => {
    return `R$ ${preco.toFixed(2).replace('.', ',')}`;
  };

  return (
    <View style={style.container}>
      <ParteDeCima />
      <ScrollView 
        style={style.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.scrollContent}
      >
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
        </View>

        <View style={style.linhaDivisoria} />

        {/* Lista de produtos */}
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

              <TouchableOpacity style={style.botaoEscolher}>
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

      {/* Modal de Filtro Simplificado */}
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

            {/* Subcategorias */}
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
                <Text style={style.textoBotaoLimpar}>Limpar</Text>
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