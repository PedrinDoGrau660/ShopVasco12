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

  // Login tradicional
  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Sucesso", "Login realizado com sucesso!");
      navigation.navigate("Home", { 
        email: email,
        usuario: email.split('@')[0],
        loginType: "email"
      });
    }, 2000);
  };

  // Abre o modal de seleção de conta Google
  const handleGoogleLogin = () => {
    setLoadingGoogle(true);
    
    // Simula o carregamento inicial do Google
    setTimeout(() => {
      setLoadingGoogle(false);
      setShowGoogleModal(true);
    }, 1500);
  };

  // Seleciona uma conta Google
  const selectGoogleAccount = (account: any) => {
    if (account.id === "add") {
      // Simula adicionar nova conta
      Alert.alert("Nova Conta", "Funcionalidade de adicionar nova conta");
      return;
    }

    setSelectedAccount(account);
    
    // Simula o processo de autenticação
    setTimeout(() => {
      setShowGoogleModal(false);
      navigation.navigate("Home", {
        email: account.email,
        usuario: account.name,
        loginType: "google"
      });
    }, 1000);
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
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#ddd"
          style={style.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          autoCapitalize="none"
        />

        <TouchableOpacity style={style.botao} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={style.textoBotao}>Entrar</Text>
          )}
        </TouchableOpacity>

        <Text style={style.textregister}>OU</Text>

        {/* Botão do Google */}
        <TouchableOpacity 
          style={style.botaoGoogle} 
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