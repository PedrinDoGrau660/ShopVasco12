import React from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import { FontAwesome } from "@expo/vector-icons";
import Hamburguer from "../hamburguer/hamburguer";

type HomeRouteProp = RouteProp<StackParamList, "Home">;

type Props = {
  route: HomeRouteProp;
};

export default function Home({ route }: Props) {
  const { email, usuario, loginType } = route.params || {};

  return (
    <View style={style.container}>
      {/* HEADER COM HAMBURGUER E TÍTULO */}
      <View style={style.headersup}>
        {/* Hamburguer posicionado à esquerda */}
        <Hamburguer />
        
        {/* Título Vasco centralizado */}
        <Text style={style.titleright}>Vasco</Text>
      </View>
      
      {/* 🔝 ÍCONES SOCIAIS */}
      <View style={style.socialContainer}>
        <TouchableOpacity onPress={() => Linking.openURL("https://facebook.com")}>
          <FontAwesome name="facebook" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com")}>
          <FontAwesome name="twitter" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://instagram.com")}>
          <FontAwesome name="instagram" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://pinterest.com")}>
          <FontAwesome name="pinterest" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://vk.com")}>
          <FontAwesome name="vk" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://t.me")}>
          <FontAwesome name="telegram" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      
    </View>
  );
}