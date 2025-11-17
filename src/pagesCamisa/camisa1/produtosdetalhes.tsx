// pagesCamisa/index.tsx
import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  Linking, 
  TouchableOpacity, 
  Image, 
  ScrollView 
} from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import CarouselCamisa from "../../pageHome/Carousel/CarouselCamisas1";
import ParteDeCima from "../../PartesFixas/TopDoApp/top";
import ParteDeBaixo from "../../PartesFixas/LowDoApp/index";
import { style } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import Cores from "../bolinhas/BolinhasDaCor/index";
import Tamanho from "../bolinhas/BolinhasDoTamanho/index";
import FreteCalculator from "../frete/index";
import { camisas, Camisa } from "../../data/camisaHomen";

type RouteProps = RouteProp<StackParamList, "CamisaDetalhes">;

// Versão SIMPLIFICADA do componente
const ProdutoRelacionado = ({ produto }: { produto: Camisa }) => {
  const navigation = useNavigation<any>();

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
  const { camisaId } = route.params;
  
  const [selectedColor, setSelectedColor] = useState("");

  const camisa = camisas.find(c => c.id === camisaId);

  useEffect(() => {
    if (camisa && camisa.cores.length > 0) {
      setSelectedColor(camisa.cores[0]);
    }
  }, [camisa]);

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

  // VERSÃO SIMPLIFICADA - comente tudo e vá descomentando
  return (
    <View style={style.container}>
      <ParteDeCima />
      <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
        
        {/* 1. Teste apenas o carousel */}
        <CarouselCamisa imagens={camisa.imagens} />
        
        {/* 2. Depois adicione o título */}
        <View style={style.textContainer}>
          <Text style={style.productTitle}>{camisa.nome}</Text>
        </View>
        
        {/* 3. Adicione os botões de novidade/destaque */}
        
        {/* 4. Adicione o preço */}
        <View style={style.textContainer}>
          <Text style={style.productpreço}>R$ {camisa.preco.toFixed(2)}</Text>
          <Text style={style.descriçaoPreco}>{camisa.descricaoPreco}</Text>
        </View>
        
        {/* 5. Adicione cores e tamanhos */}
        <Cores cores={camisa.cores} onColorSelect={handleColorSelect} />
        <Tamanho tamanhos={camisa.tamanhos} />
        
        {/* 6. Adicione o botão comprar */}
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://whatsapp.com")}
            style={style.BotaoCarrinho}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name="shopping-cart" size={16} color="black" />
              <Text style={{ marginLeft: 5 }}>Comprar - {selectedColor}</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        {/* 7. Adicione o frete */}
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }} />
        <FreteCalculator />
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }} />

        {/* 8. Adicione produtos relacionados */}
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