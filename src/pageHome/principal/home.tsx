import React from "react";
import { View, Text, Linking, TouchableOpacity, Image, ScrollView } from "react-native";
import { style } from "./styles";
import { RouteProp, useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import ParteDeCima from "../../PartesFixas/TopDoApp/top";
import BemVindo from "../../assets/pageBemVindo.png";
import MyCarousel from "../Carousel/CarouselHome";
import CarouselText from "../Carousel/CarouselText";

type HomeRouteProp = RouteProp<StackParamList, "Home">;

type Props = {
  route: HomeRouteProp;
};

export default function Home({ route }: Props) {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  // FUNÇÃO PARA LIDAR COM A PESQUISA NA HOME
  const handleSearch = (searchText: string) => {
    if (searchText.trim()) {
      // Define para qual linha navegar baseado no termo de pesquisa
      const termo = searchText.toLowerCase().trim();
      
      // Verifica se o termo se relaciona mais com linha feminina
      const termosFemininos = [
        'feminino', 'feminina', 'mulher', 'mulheres', 'menina', 'meninas',
        'blusa', 'vestido', 'saia', 'feminina'
      ];
      
      // Verifica se o termo se relaciona mais com conjuntos
      const termosConjuntos = [
        'conjunto', 'kit', 'combo', 'pack', 'conjuntos', 'kits'
      ];
      
      // Verifica se o termo se relaciona com linha masculina (padrão)
      const termosMasculinos = [
        'masculino', 'masculina', 'homem', 'homens', 'menino', 'meninos',
        'camisa', 'camiseta', 'short', 'bermuda', 'calça', 'jaqueta', 'moletom'
      ];

      // Decide para qual linha navegar
      if (termosFemininos.some(termoF => termo.includes(termoF))) {
        // Navega para Linha Feminina com o termo de pesquisa
        navigation.navigate('LinhaFeminina', { 
          searchTerm: searchText 
        });
      } else if (termosConjuntos.some(termoC => termo.includes(termoC))) {
        // Navega para Conjunto com o termo de pesquisa
        navigation.navigate('Conjunto', { 
          searchTerm: searchText 
        });
      } else {
        // Padrão: navega para Linha Masculina com o termo de pesquisa
        navigation.navigate('LinhaMasculina', { 
          searchTerm: searchText 
        });
      }
    }
  };

  return (
    <View style={style.container}>
      {/* ParteDeCima com barra de pesquisa que navega para as linhas */}
      <ParteDeCima  />
      
      <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
        <View style={style.imageBemVindo}>
          <Image source={BemVindo} style={style.bannerImage} resizeMode="contain" />
        </View>

        <View style={style.containerTexto}>
          <CarouselText/>
        </View>

        <View style={style.carousel}>
          <MyCarousel />
        </View>

      </ScrollView>
    </View>
  );
}