import React from "react";
import { View, Text, Linking, TouchableOpacity, Image, ScrollView } from "react-native";
import { Top } from "./styletop"
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import { FontAwesome } from "@expo/vector-icons";
import Hamburguer from "../hamburguer/hamburguer";
import Logo from "../../assets/forççaaaaa.png";

type HomeRouteProp = RouteProp<StackParamList, "Home">;

type Props = {
  route: HomeRouteProp;
};

export default function ParteDeCima(props: { children?: React.ReactNode }) {
  return (
    <View>
      <View style={Top.socialContainer}>
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

      <View style={Top.headersup}>
        <Hamburguer />
        <Image source={Logo} style={Top.Logo} />
        <Text style={Top.titleright}>Vasco</Text>
        <Image source={Logo} style={Top.Logo} />
      </View>
    </View>
  );
}