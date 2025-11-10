import React, { useState } from "react";
import { View, Text, Linking, TouchableOpacity, Image, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../../routes/index.routes";
import CarouselCamisa from "../../Carousel/CarouselCamisas1";
import ParteDeCima from "../../TopDoApp/top";
import { style } from "./styles"
import { FontAwesome } from "@expo/vector-icons";
import Cores from "../../bolinhas/BolinhasDaCor/index";
import Tamanho from "../../bolinhas/BolinhasDoTamanho/index"

type HomeRouteProp = RouteProp<StackParamList, "Camisa1">;

type Props = {
  route: HomeRouteProp;
};


export default function Camisa1() {
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
          <Text style={style.productTitle} >CAMISA JUVENIL KOMBAT HOME PLAYER 25</Text>
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
        <View></View>
      </ScrollView>
    </View>
  );
}