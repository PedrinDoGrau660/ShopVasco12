import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import { style } from "./styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Logo from "../../assets/logo.png";
import Fundo from "../../assets/dvd.jpg";
import { StackParamList } from "../../routes/index.routes";


export default function Esqueceu() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const handleEnviarEmail = () => {
    if (!email) {
      Alert.alert("Erro", "Preencha o campo de email!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Sucesso", "Email de recuperação enviado!");
    }, 2000);
  };

  const handleCancelar = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground source={Fundo} style={style.container} blurRadius={8}>
      <View style={style.overlay}>
        <Image source={Logo} style={style.logo} />

        <Text style={style.tituloEsqueci}>Esqueci minha senha</Text>

        <Text style={style.textoEsqueci}>
          Para redefinir sua senha, informe o usuário ou e-mail cadastrado na
          sua conta e lhe enviaremos um link com as instruções.
        </Text>

        <Text style={style.label}>E-mail ou usuário</Text>

        <TextInput
          placeholder="Digite seu email"
          placeholderTextColor="#aaa"
          style={style.input}
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={style.botao} onPress={handleEnviarEmail}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={style.textoBotao}>PRÓXIMO</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancelar}>
          <Text style={style.cancelar}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}