// pagesCamisa/index.tsx
import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  Linking, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  Alert 
} from "react-native";
import { RouteProp, useRoute, useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import CarouselCamisa from "../../pageHome/Carousel/CarouselCamisas1";
import ParteDeCima from "../../PartesFixas/TopDoApp/top";
import ParteDeBaixo from "../../PartesFixas/LowDoApp/index";
import { style } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import Cores from "../bolinhas/BolinhasDaCor/index";
import Tamanho from "../bolinhas/BolinhasDoTamanho/index";
import FreteCalculator from "../frete/index";
import { camisas, Camisa } from "../../data/camisa";
import { useCart } from "../../contexts/CartContext"; // IMPORTE O CARRINHO

type RouteProps = RouteProp<StackParamList, "CamisaDetalhes">;

// Versão SIMPLIFICADA do componente
const ProdutoRelacionado = ({ produto }: { produto: Camisa }) => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const handleEscolher = () => {
    navigation.navigate("CamisaDetalhes", { camisaId: produto.id });
  };

  return (
    <View style={style.produtoContainer}>
      <View style={style.imagemContainer}>
        <Image 
          source={produto.imagens[0]}
          style={style.imagemProduto}
          resizeMode="cover"
        />
      </View>

      <View style={style.infoContainer}>
        <Text style={style.tituloProduto}>{produto.nome}</Text>
        <Text style={style.precoPrincipal}>R$ {produto.preco.toFixed(2)}</Text>
        <Text style={style.precoParcelado}>{produto.descricaoPreco}</Text>

        <TouchableOpacity style={style.botaoEscolher} onPress={handleEscolher}>
          <Text style={style.textoBotao}>Escolher</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function CamisaDetalhes() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const { camisaId } = route.params;
  const { addToCart } = useCart(); // USE O CARRINHO
  
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const camisa = camisas.find(c => c.id === camisaId);

  useEffect(() => {
    if (camisa && camisa.cores.length > 0) {
      setSelectedColor(camisa.cores[0]);
    }
    if (camisa && camisa.tamanhos.length > 0) {
      setSelectedSize(camisa.tamanhos[0]);
    }
  }, [camisa]);

  // FUNÇÃO PARA ADICIONAR AO CARRINHO
  const handleAddToCart = () => {
    if (!camisa) return;

    const cartItem = {
      id: camisa.id,
      nome: camisa.nome,
      preco: camisa.preco,
      imagem: camisa.imagens[0],
      cor: selectedColor,
      tamanho: selectedSize
    };

    addToCart(cartItem);
    
    Alert.alert(
      'Produto adicionado!',
      `${camisa.nome} (${selectedColor}) foi adicionado ao carrinho.`,
      [
        { text: 'Continuar Comprando', style: 'cancel' },
        { text: 'Ver Carrinho', onPress: () => navigation.navigate('Carrinho') }
      ]
    );
  };

  // FUNÇÃO PARA COMPRAR DIRETO (VIA WHATSAPP)
  const handleBuyNow = () => {
    if (!camisa) return;

    const mensagem = `Olá! Gostaria de comprar o produto:\n\n${
      `${camisa.nome} - Cor: ${selectedColor} - Tamanho: ${selectedSize} - R$ ${camisa.preco.toFixed(2)}`
    }`;

    Linking.openURL(`https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`);
  };

  if (!camisa) {
    return (
      <View style={style.container}>
        <ParteDeCima />
        <Text>Produto não encontrado</Text>
        <ParteDeBaixo />
      </View>
    );
  }

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <View style={style.container}>
      <ParteDeCima />
      <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
        
        {/* Carousel de imagens */}
        <CarouselCamisa imagens={camisa.imagens} />
        
        {/* Informações do produto */}
        <View style={style.textContainer}>
          <Text style={style.productTitle}>{camisa.nome}</Text>
        </View>
        
        {/* Preço */}
        <View style={style.textContainer}>
          <Text style={style.productpreço}>R$ {camisa.preco.toFixed(2)}</Text>
          <Text style={style.descriçaoPreco}>{camisa.descricaoPreco}</Text>
        </View>
        
        {/* Cores e Tamanhos */}
     <Cores 
  cores={camisa.cores} 
  onColorSelect={handleColorSelect}
/>
        <Tamanho 
          tamanhos={camisa.tamanhos} 
          onSizeSelect={handleSizeSelect}
          selectedSize={selectedSize}
        />
        
        {/* BOTÕES DE AÇÃO ATUALIZADOS */}
        <View style={style.botoesAcaoContainer}>
          {/* Botão Adicionar ao Carrinho */}
          <TouchableOpacity
            onPress={handleAddToCart}
            style={[style.BotaoCarrinho, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#C00000' }]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name="shopping-cart" size={16} color="#C00000" />
              <Text style={{ marginLeft: 5, color: '#C00000' }}>
                Adicionar ao Carrinho
              </Text>
            </View>
          </TouchableOpacity>

          {/* Botão Comprar Agora */}
          
        </View>
        
        {/* Frete */}
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }} />
        <FreteCalculator />
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }} />

        {/* Produtos relacionados */}
        <Text style={style.tituloOutrosProdutos}>Outros Produtos</Text>

        {camisas
          .filter(c => c.id !== camisaId && c.categoria === camisa.categoria)
          .slice(0, 3)
          .map(produto => (
            <ProdutoRelacionado key={produto.id} produto={produto} />
          ))
        }
        
        <ParteDeBaixo />
      </ScrollView>
    </View>
  );
}