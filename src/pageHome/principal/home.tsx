import React from "react";
import { View, Text } from "react-native";
import { style } from "./styles";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";

type HomeRouteProp = RouteProp<StackParamList, "Home">;

type Props = {
  route: HomeRouteProp;
};

export default function Home({ route }: Props) {
  const { email, usuario, loginType } = route.params || {};

  return (
    <View style={style.container}>
      <Text style={style.welcome}>
        Bem-vindo, {usuario || "Usuário"}!
      </Text>
      
      <Text style={style.email}>
        Email: {email || "Não informado"}
      </Text>

      {/* Mostra o tipo de login se estiver disponível */}
      {loginType && (
        <View style={[
          style.loginTypeBadge, 
          loginType === 'google' ? style.googleBadge : style.emailBadge
        ]}>
          <Text style={style.loginTypeText}>
            Login via: {loginType === "google" ? "Google" : "Email/Senha"}
          </Text>
        </View>
      )}

      {/* Informações adicionais para demo */}
      <View style={style.demoInfo}>
        <Text style={style.demoTitle}>Demo do Sistema</Text>
        <Text style={style.demoText}>
          • Login tradicional: Email/Senha{'\n'}
          • Login social: Google (simulado){'\n'}
          • Navegação com parâmetros{'\n'}
          • Tipagem TypeScript
        </Text>
      </View>
    </View>
  );
}