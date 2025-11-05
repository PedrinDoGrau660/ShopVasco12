import React from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import { FontAwesome } from "@expo/vector-icons";

type HomeRouteProp = RouteProp<StackParamList, "Home">;

type Props = {
  route: HomeRouteProp;
};

export default function Home({ route }: Props) {
  const { email, usuario, loginType } = route.params || {};

  return (
    <View style={style.container}>
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

        <TouchableOpacity  onPress={() => Linking.openURL("https://pinterest.com")}>
          <FontAwesome name="pinterest" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => Linking.openURL("https://vk.com")}>
          <FontAwesome name="vk" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://t.me")}>
          <FontAwesome name="telegram" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={style.headersup}>
        <Text style={style.titleright}>Vasco</Text>
      </View>

      <View style={{ marginTop: 120 }}>
        <Text style={style.welcome}>Bem-vindo, {usuario || "Usuário"}!</Text>
        <Text style={style.email}>Email: {email || "Não informado"}</Text>

        {loginType && (
          <View
            style={[
              style.loginTypeBadge,
              loginType === "google" ? style.googleBadge : style.emailBadge,
            ]}
          >
            <Text style={style.loginTypeText}>
              Login via: {loginType === "google" ? "Google" : "Email/Senha"}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
