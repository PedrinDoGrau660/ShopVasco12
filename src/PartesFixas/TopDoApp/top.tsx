// ParteDeCima/styletop.tsx
import React from "react";
import { 
  View, 
  Text, 
  Linking, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  TextInput 
} from "react-native";
import { Top } from "./styletop"
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Hamburguer from "../../pageHome/hamburguer/hamburguer";
import Logo from "../../assets/forççaaaaa.png";

type Props = {
  onPerfilPress?: () => void;
};

export default function ParteDeCima({ onPerfilPress }: Props) {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const handlePerfilPress = () => {
    if (onPerfilPress) {
      onPerfilPress();
    } else {
      // Navega para a tela de perfil por padrão
      navigation.navigate('Perfil');
    }
  };

  return (
    <View>
      {/* Container Social */}
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
        <TouchableOpacity onPress={handlePerfilPress}>
          <Ionicons name="person-circle" size={28} color="#ffffffff" />
        </TouchableOpacity>
      </View>

      {/* Header Principal */}
      <View style={Top.headersup}>
        <Hamburguer />
        <Image source={Logo} style={Top.Logo} />
        <Text style={Top.titleright}>Vasco</Text>
        <Image source={Logo} style={Top.Logo} />
      </View>
    </View>
  );
}