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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import Fundo from "../../assets/dvd.jpg";
import { StackParamList } from "../../routes/index.routes";

export default function Register() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaconfirme, setSenhaConfirme] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const handleRegister = async () => {
    if (!email || !senha || !senhaconfirme || !usuario) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "Digite um email válido!");
      return;
    }

    if (senha !== senhaconfirme) {
      Alert.alert("Erro", "Senhas não conferem!");
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres!");
      return;
    }

    setLoading(true);

    try {
      // Simula uma requisição de registro
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Salva os dados no AsyncStorage
      const userData = {
        usuario,
        email,
        senha, // Em app real, isso deveria ser criptografado
      };
      
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      
      // Navega para Home passando os parâmetros
      navigation.navigate("Home", { 
        email: email,
        usuario: usuario 
      });
      
    } catch (error) {
      console.error("Erro no cadastro:", error);
      Alert.alert("Erro", "Erro ao realizar cadastro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground source={Fundo} style={style.container} blurRadius={4}>
      <View style={style.overlay}>
        <Image source={Logo} style={style.logo} />

        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#ddd"
          style={style.input}
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
          autoCorrect={false}
          editable={!loading}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#ddd"
          style={style.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          editable={!loading}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#ddd"
          style={style.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          autoCapitalize="none"
          editable={!loading}
        />

        <TextInput
          placeholder="Confirme a Senha"
          placeholderTextColor="#ddd"
          style={style.input}
          secureTextEntry
          value={senhaconfirme}
          onChangeText={setSenhaConfirme}
          autoCapitalize="none"
          editable={!loading}
        />

        <TouchableOpacity 
          style={[
            style.botao, 
            loading && { opacity: 0.7 } // Fallback se botaoDisabled não existir
          ]} 
          onPress={handleRegister}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={style.textoBotao}>Cadastrar</Text>
          )}
        </TouchableOpacity>

        {/* Botão para voltar ao Login */}
        <TouchableOpacity 
          style={style.link}
          onPress={() => navigation.navigate("Login")}
          disabled={loading}
        >
          <Text style={style.textoLink}>Já tem conta? Faça login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}