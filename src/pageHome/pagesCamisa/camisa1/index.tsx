import React from "react";
import { View, Text, Linking, TouchableOpacity, Image, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../../routes/index.routes";
import { FontAwesome } from "@expo/vector-icons";
import ParteDeCima from "../../TopDoApp/top";
import {style} from "./styles"

type HomeRouteProp = RouteProp<StackParamList, "Camisa1">;

type Props = {
  route: HomeRouteProp;
};

export default function Camisa1() {
  return (
   <View style={style.container} >
       <ParteDeCima/>
         <ScrollView style={style.content} showsVerticalScrollIndicator={false}>

   
   
         </ScrollView>
    </View>
  );
}