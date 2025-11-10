import React, { useState } from "react";
import { View, Text, Linking, TouchableOpacity, Image, ScrollView, Modal } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import ParteDeCima from "../../PartesFixas/TopDoApp/top";
import ParteDeBaixo from "../../PartesFixas/LowDoApp/index";
import { style } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import calcaImagem from '../../assets/dvd.jpg';
import Numeros from "../../pagesCamisa/bolinhas/BolinhaDeNumero";

type HomeRouteProp = RouteProp<StackParamList, "LinhaMasculina">;

type Props = {
  route: HomeRouteProp;
};

export default function LinhaMasculina() {
  const [modalFiltroVisible, setModalFiltroVisible] = useState(false);
  const [classificacaoSelecionada, setClassificacaoSelecionada] = useState("Nome do Produto");
  const [subcategoriaSelecionada, setSubcategoriaSelecionada] = useState("Escolha");

  const opcoesClassificacao = [
    "Nome do Produto",
    "Menor Preço",
    "Maior Preço",
    "Mais Vendido",
    "Destaque",
    "Lançamento"
  ];

  const opcoesSubcategorias = [
    "Escolha",
    "UNIFORME DE JOGO",
    "INVERNO",
    "CASUAL",
    "SHORTS",
    "MEIÃO",
    "AQUECIMENTO",
    "TREINO",
    "CONCENTRAÇÃO E VIAGEM",
    "SUPPORTER"
  ];

  const produtos = [
    { id: 1, nome: "CALÇA AQUECIMENTO\nCOMISSÃO VASCO 25", preco: "R$ 319,99" },
    { id: 2, nome: "CALÇA AQUECIMENTO\nCOMISSÃO VASCO 25", preco: "R$ 319,99" },
    { id: 3, nome: "CALÇA AQUECIMENTO\nCOMISSÃO VASCO 25", preco: "R$ 319,99" },
    { id: 4, nome: "CALÇA AQUECIMENTO\nCOMISSÃO VASCO 25", preco: "R$ 319,99" },
  ];

  return (
    <View style={style.container}>
      <ParteDeCima />
      <ScrollView 
        style={style.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.scrollContent}
      >
        <Text style={style.tituloPagina}>Linha Masculina</Text>
        
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
        {produtos.map((produto) => (
          <View key={produto.id} style={style.produtoContainer}>
            <View style={style.imagemContainer}>
              <Image 
                source={calcaImagem}
                style={style.imagemProduto}
                resizeMode="cover"
              />
            </View>

            <View style={style.infoContainer}>
              <Text style={style.tituloProduto}>
                {produto.nome}
              </Text>
              
              <Text style={style.precoPrincipal}>{produto.preco}</Text>
              
              <Text style={style.precoParcelado}>
                R$ 303,99 à vista com desconto Pix{"\n"}
                ou 12x de R$ 34,10
              </Text>

              <TouchableOpacity style={style.botaoEscolher}>
                <Text style={style.textoBotao}>Escolher</Text>
              </TouchableOpacity>
            </View>
           
          </View> 
      
        ))}
       <View>    <Numeros />
       
       </View>
        <ParteDeBaixo />
      </ScrollView>

   
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
                onPress={() => {
                  setClassificacaoSelecionada("Nome do Produto");
                  setSubcategoriaSelecionada("Escolha");
                }}
              >
                <Text style={style.textoBotaoLimpar}>Limpar Filtros</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={style.botaoAplicar}
                onPress={() => setModalFiltroVisible(false)}
              >
                <Text style={style.textoBotaoAplicar}>Aplicar Filtros</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}