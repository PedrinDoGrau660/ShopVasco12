// src/screens/Esqueceu/Esqueceu.tsx
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from "../../assets/logo.png";
import Fundo from "../../assets/dvd.jpg";
import { StackParamList } from "../../routes/index.routes";

export default function Esqueceu() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const handleEnviarEmail = async () => {
    if (!email) {
      Alert.alert("Erro", "Preencha o campo de email!");
      return;
    }

    setLoading(true);

    try {
      // Busca os dados do usuário no AsyncStorage
      const userDataString = await AsyncStorage.getItem('userData');
      
      if (!userDataString) {
        Alert.alert("Erro", "Nenhuma conta cadastrada no sistema.");
        setLoading(false);
        return;
      }

      const userData = JSON.parse(userDataString);

      // Verifica se o email existe (ou se o usuário coincide)
      if (userData.email === email || userData.usuario === email) {
        // Simula envio de email de recuperação
        setTimeout(() => {
          setLoading(false);
          Alert.alert(
            "Email Enviado", 
            `Enviamos um link de recuperação para: ${userData.email}`,
            [
              {
                text: "OK",
                onPress: () => navigation.navigate("Login")
              }
            ]
          );
        }, 2000);
      } else {
        setLoading(false);
        Alert.alert(
          "Conta não encontrada", 
          "Nenhuma conta encontrada com este email ou usuário. Verifique os dados ou crie uma nova conta."
        );
      }
      
    } catch (error) {
      console.error("Erro na recuperação:", error);
      setLoading(false);
      Alert.alert("Erro", "Erro ao processar recuperação. Tente novamente.");
    }
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
          placeholder="Digite seu email ou usuário"
          placeholderTextColor="#aaa"
          style={style.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          editable={!loading}
        />

        <TouchableOpacity 
          style={[
            style.botao, 
            loading && { opacity: 0.7 }
          ]} 
          onPress={handleEnviarEmail}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={style.textoBotao}>PRÓXIMO</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancelar} disabled={loading}>
          <Text style={[
            style.cancelar,
            loading && { opacity: 0.7 }
          ]}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}