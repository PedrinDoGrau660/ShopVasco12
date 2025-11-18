// src/screens/Login/Login.tsx
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
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import Fundo from "../../assets/dvd.jpg";
import { StackParamList } from "../../routes/index.routes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<any>(null);

  const navigation = useNavigation<NavigationProp<StackParamList>>();

  // Lista de contas Google simuladas
  const googleAccounts = [
    { 
      name: "Ana Silva", 
      email: "ana.silva@gmail.com",
      photo: "👩‍💼",
      id: "1"
    },
    { 
      name: "Carlos Santos", 
      email: "carlos.santos@gmail.com",
      photo: "👨‍💻",
      id: "2"
    },
    { 
      name: "Maria Oliveira", 
      email: "maria.oliveira@gmail.com",
      photo: "👩‍🎓",
      id: "3"
    },
    { 
      name: "João Pereira", 
      email: "joao.pereira@gmail.com",
      photo: "👨‍🏫",
      id: "4"
    },
    { 
      name: "Adicionar outra conta", 
      email: "Usar outra conta",
      photo: "➕",
      id: "add"
    }
  ];

  // Login tradicional - VERIFICA NO ASYNCSTORAGE
  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      // Busca os dados do usuário no AsyncStorage
      const userDataString = await AsyncStorage.getItem('userData');
      
      if (!userDataString) {
        Alert.alert(
          "Conta não encontrada", 
          "Nenhuma conta cadastrada. Por favor, crie uma conta primeiro."
        );
        setLoading(false);
        return;
      }

      const userData = JSON.parse(userDataString);

      // Verifica se o email e senha coincidem
      if (userData.email === email && userData.senha === senha) {
        // Login bem-sucedido
        setTimeout(() => {
          setLoading(false);
          Alert.alert("Sucesso", `Bem-vindo de volta, ${userData.usuario}!`);
          navigation.navigate("Home", { 
            email: userData.email,
            usuario: userData.usuario,
            loginType: "email"
          });
        }, 1000);
      } else {
        setLoading(false);
        Alert.alert(
          "Erro de login", 
          "Email ou senha incorretos. Verifique suas credenciais."
        );
      }
      
    } catch (error) {
      console.error("Erro no login:", error);
      setLoading(false);
      Alert.alert("Erro", "Erro ao fazer login. Tente novamente.");
    }
  };

  // Login com Google - SALVA NO ASYNCSTORAGE
  const handleGoogleLogin = () => {
    setLoadingGoogle(true);
    
    setTimeout(() => {
      setLoadingGoogle(false);
      setShowGoogleModal(true);
    }, 1500);
  };

  // Seleciona uma conta Google
  const selectGoogleAccount = async (account: any) => {
    if (account.id === "add") {
      Alert.alert("Nova Conta", "Funcionalidade de adicionar nova conta");
      return;
    }

    setSelectedAccount(account);
    
    try {
      // Salva a conta Google no AsyncStorage
      const googleUserData = {
        usuario: account.name,
        email: account.email,
        loginType: "google",
        photo: account.photo
      };
      
      await AsyncStorage.setItem('userData', JSON.stringify(googleUserData));
      
      setTimeout(() => {
        setShowGoogleModal(false);
        Alert.alert("Sucesso", `Bem-vindo, ${account.name}!`);
        navigation.navigate("Home", {
          email: account.email,
          usuario: account.name,
          loginType: "google"
        });
      }, 1000);
      
    } catch (error) {
      console.error("Erro ao salvar conta Google:", error);
      Alert.alert("Erro", "Erro ao fazer login com Google.");
    }
  };

  // Fecha o modal
  const closeGoogleModal = () => {
    setShowGoogleModal(false);
    setSelectedAccount(null);
  };

  // Navegação para cadastro
  const goToRegister = () => {
    navigation.navigate("Cadastro");
  };

  // Esqueceu senha
  const esqueceuSenha = () => {
    navigation.navigate("Esqueceu");
  };

  return (
    <ImageBackground source={Fundo} style={style.container} blurRadius={8}>
      <View style={style.overlay}>
        <Image source={Logo} style={style.logo} />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#ddd"
          style={style.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
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

        <TouchableOpacity 
          style={[
            style.botao, 
            loading && { opacity: 0.7 }
          ]} 
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={style.textoBotao}>Entrar</Text>
          )}
        </TouchableOpacity>

        <Text style={style.textregister}>OU</Text>

        {/* Botão do Google */}
        <TouchableOpacity 
          style={[
            style.botaoGoogle, 
            loadingGoogle && { opacity: 0.7 }
          ]} 
          onPress={handleGoogleLogin}
          disabled={loadingGoogle}
        >
          {loadingGoogle ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={[style.textoBotaoGoogle, { marginRight: 8 }]}>G</Text>
              <Text style={style.textoBotaoGoogle}>Entrar com Google</Text>
            </View>
          )}
        </TouchableOpacity>

        <Text style={style.textregister} onPress={esqueceuSenha}>
          Esqueceu a Senha?
        </Text>

        <TouchableOpacity style={{ marginTop: 40 }}>
          <Text style={style.textregister}>
            Não possui conta?{" "}
            <Text
              onPress={goToRegister}
              style={{
                color: "#ff0000",
                fontWeight: "bold",
                marginTop: 5,
                textAlign: "center",
              }}
            >
              Cadastre-se
            </Text>
          </Text>
        </TouchableOpacity>

        {/* Modal de Seleção de Conta Google */}
        <Modal
          visible={showGoogleModal}
          animationType="slide"
          transparent={true}
          onRequestClose={closeGoogleModal}
        >
          <View style={style.modalOverlay}>
            <View style={style.googleModal}>
              {/* Cabeçalho do Google */}
              <View style={style.googleHeader}>
                <Text style={style.googleLogo}>G</Text>
                <Text style={style.googleTitle}>Escolher uma conta</Text>
                <Text style={style.googleSubtitle}>Para continuar no MyApp</Text>
              </View>

              <ScrollView style={style.accountsList}>
                {googleAccounts.map((account) => (
                  <TouchableOpacity
                    key={account.id}
                    style={style.accountItem}
                    onPress={() => selectGoogleAccount(account)}
                  >
                    <Text style={style.accountPhoto}>{account.photo}</Text>
                    <View style={style.accountInfo}>
                      <Text style={style.accountName}>{account.name}</Text>
                      <Text style={style.accountEmail}>{account.email}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <TouchableOpacity 
                style={style.googleCancelButton}
                onPress={closeGoogleModal}
              >
                <Text style={style.googleCancelText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}