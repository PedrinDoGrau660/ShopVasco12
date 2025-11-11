import React, { useState } from "react";
import { View, Text, Linking, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import CarouselCamisa from "../../pageHome/Carousel/CarouselCamisas1";
import ParteDeCima from "../../PartesFixas/TopDoApp/top";
import ParteDeBaixo from "../../PartesFixas/LowDoApp/index";
import { style } from "./style"
import { FontAwesome } from "@expo/vector-icons";
import Cores from "../bolinhas/BolinhasDaCor/index";
import Tamanho from "../bolinhas/BolinhasDoTamanho/index"
import FreteCalculator from "../frete/index";
import calcaImagem from '../../assets/dvd.jpg';

type HomeRouteProp = RouteProp<StackParamList, "Camisa2">;

type Props = {
  route: HomeRouteProp;
};


export default function Camisa2() {
  const [selectedColor, setSelectedColor] = useState("Preto");

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
  };

  return (
    <View style={style.container} >
      <ParteDeCima />
      <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
        <CarouselCamisa />
        <View style={style.textContainer}>
          <Text style={style.productTitle} > CAMISETA TREINO VASCO 2024</Text>
        </View>
        <View style={style.BotaoRedondo}>
          <View>
            <Text style={style.BotaoDestaque}>Novidade</Text>
          </View>
          <View>
            <Text style={style.BotaoNovidade}>Destaque</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => Linking.openURL("https://whatsapp.com")}>
              <Text style={style.BotaoDuvidas}>
                <FontAwesome name="whatsapp" size={16} color="#fff" />
                Tire suas duvidas</Text></TouchableOpacity>
          </View>
        </View>
        <View style={style.textContainer}>
          <Text style={style.productpreço} >R$ 379,99 </Text>
          <Text style={style.descriçaoPreco}>R$ 360,99 à vista com desconto Pix - Vindi
            ou 12x de R$ 40,49 com juros Cartão Visa - Vindi</Text>
        </View>
        <Cores />
        <Tamanho />
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://whatsapp.com")}
            style={style.BotaoCarrinho}
          >
            <FontAwesome name="shopping-cart" size={16} color="black" />
            <Text> Comprar</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: '#ccc',  
            borderBottomWidth: 1,       
            marginVertical: 10,        
          }}
        />
         <FreteCalculator />
         <View
          style={{
            borderBottomColor: '#ccc',  
            borderBottomWidth: 1,       
            marginVertical: 10,        
          }}
        />

       <Text style={style.tituloOutrosProdutos}>Outros Produtos</Text>

         <View style={style.produtoContainer}>

      <View style={style.imagemContainer}>
       <Image 
  source={calcaImagem}
  style={style.imagemProduto}
  resizeMode="cover"
/>
      </View>

      <View style={style.infoContainer}>
        <Text style={style.tituloProduto}>
          CALÇA AQUECIMENTO{"\n"}COMISSÃO VASCO 25
        </Text>
        
        <Text style={style.precoPrincipal}>R$ 319,99</Text>
        
        <Text style={style.precoParcelado}>
          R$ 303,99 à vista com desconto Pix{"\n"}
          ou 12x de R$ 34,10
        </Text>

        {/* Botão Escolher */}
        <TouchableOpacity style={style.botaoEscolher}>
          <Text style={style.textoBotao}>Escolher</Text>
        </TouchableOpacity>
      </View>
    </View>

      <View style={style.produtoContainer}>

      <View style={style.imagemContainer}>
       <Image 
  source={calcaImagem}
  style={style.imagemProduto}
  resizeMode="cover"
/>
      </View>

      <View style={style.infoContainer}>
        <Text style={style.tituloProduto}>
          CALÇA AQUECIMENTO{"\n"}COMISSÃO VASCO 25
        </Text>
        
        <Text style={style.precoPrincipal}>R$ 319,99</Text>
        
        <Text style={style.precoParcelado}>
          R$ 303,99 à vista com desconto Pix{"\n"}
          ou 12x de R$ 34,10
        </Text>

        {/* Botão Escolher */}
        <TouchableOpacity style={style.botaoEscolher}>
          <Text style={style.textoBotao}>Escolher</Text>
        </TouchableOpacity>
      </View>
    </View>

      <View style={style.produtoContainer}>

      <View style={style.imagemContainer}>
       <Image 
  source={calcaImagem}
  style={style.imagemProduto}
  resizeMode="cover"
/>
      </View>

      <View style={style.infoContainer}>
        <Text style={style.tituloProduto}>
          CALÇA AQUECIMENTO{"\n"}COMISSÃO VASCO 25
        </Text>
        
        <Text style={style.precoPrincipal}>R$ 319,99</Text>
        
        <Text style={style.precoParcelado}>
          R$ 303,99 à vista com desconto Pix{"\n"}
          ou 12x de R$ 34,10
        </Text>

        {/* Botão Escolher */}
        <TouchableOpacity style={style.botaoEscolher}>
          <Text style={style.textoBotao}>Escolher</Text>
        </TouchableOpacity>
      </View>
    </View>

      <View style={style.produtoContainer}>

      <View style={style.imagemContainer}>
       <Image 
  source={calcaImagem}
  style={style.imagemProduto}
  resizeMode="cover"
/>
      </View>

      <View style={style.infoContainer}>
        <Text style={style.tituloProduto}>
          CALÇA AQUECIMENTO{"\n"}COMISSÃO VASCO 25
        </Text>
        
        <Text style={style.precoPrincipal}>R$ 319,99</Text>
        
        <Text style={style.precoParcelado}>
          R$ 303,99 à vista com desconto Pix{"\n"}
          ou 12x de R$ 34,10
        </Text>

        {/* Botão Escolher */}
        <TouchableOpacity style={style.botaoEscolher}>
          <Text style={style.textoBotao}>Escolher</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    <ParteDeBaixo />
      </ScrollView>
    </View>
  );
}