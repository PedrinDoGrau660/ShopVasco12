import React from "react";
import { View, Text, Linking, TouchableOpacity, Image, ScrollView } from "react-native";
import { style } from "./styles";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import ParteDeCima from "../TopDoApp/top";
import BemVindo from "../../assets/pageBemVindo.png";
import MyCarousel from "../../pageHome/Carousel/Carousel";
import CarouselText from "../Carousel/CarouselText";

type HomeRouteProp = RouteProp<StackParamList, "Home">;

type Props = {
  route: HomeRouteProp;
};

export default function Home({ route }: Props) {
  return (
<View style={style.container} >
    <ParteDeCima/>
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