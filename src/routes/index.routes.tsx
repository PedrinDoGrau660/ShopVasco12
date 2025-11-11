// routes/index.routes.ts
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native"; // Adicione estas importações
import Login from "../pageEntrar/login";
import Cadastro from "../pageEntrar/register";
import Esqueceu from "../pageEntrar/esqueceusenha";
import Home from "../pageHome/principal/home";
import Camisa1 from "../pagesCamisa/camisa1/produtosdetalhes"
import Camisa2 from "../pagesCamisa/camisa2/index";
import LinhaMasculina from "../LinhasDeCamisa/LinhaMasculina/index";
import LinhaFeminina from "../LinhasDeCamisa/LinhaFeminina";
import Conjunto from "../LinhasDeCamisa/Conjunto";
import NoticiaDetalhes from "../screens/NoticiaDetalhes/NoticiaDetalhes";
import Perfil from "../screens/Perfil/perfil"; // Corrigido para P maiúsculo

// Importe as páginas individuais dos produtos
import CalcaAquecimento from "../pagesCamisa/camisa1/produtosdetalhes";
import CamisetaTreino from "../pagesCamisa/camisa2/index";

// Componentes placeholder para as rotas que não existem ainda - CORRIGIDOS
const ShortsJogo = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>ShortsJogo - Em desenvolvimento</Text>
  </View>
);
const JaquetaInverno = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>JaquetaInverno - Em desenvolvimento</Text>
  </View>
);
const MeiaoOficial = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>MeiaoOficial - Em desenvolvimento</Text>
  </View>
);
const MoletomCasual = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>MoletomCasual - Em desenvolvimento</Text>
  </View>
);
const VestidoOficial = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>VestidoOficial - Em desenvolvimento</Text>
  </View>
);
const BlusaFeminina = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>BlusaFeminina - Em desenvolvimento</Text>
  </View>
);
const SaiaJeans = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>SaiaJeans - Em desenvolvimento</Text>
  </View>
);
const JaquetaFeminina = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>JaquetaFeminina - Em desenvolvimento</Text>
  </View>
);
const LeggingsTreino = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>LeggingsTreino - Em desenvolvimento</Text>
  </View>
);
const KitCompleto = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>KitCompleto - Em desenvolvimento</Text>
  </View>
);
const ConjuntoTreinoMasculino = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>ConjuntoTreinoMasculino - Em desenvolvimento</Text>
  </View>
);
const ConjuntoFemininoElegance = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>ConjuntoFemininoElegance - Em desenvolvimento</Text>
  </View>
);
const KitInfantil = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>KitInfantil - Em desenvolvimento</Text>
  </View>
);

export type StackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Esqueceu: undefined;
  NoticiaDetalhes: { noticiaId: string };
  Perfil: undefined;

  Home: {
    email?: string;
    usuario?: string;
    loginType?: "google" | "email";
  };
  Camisa1: undefined;
  Camisa2: undefined;
  LinhaMasculina: {
    searchTerm?: string;
  };
  LinhaFeminina: {
    searchTerm?: string;
  };
  Conjunto: {
    searchTerm?: string;
  };
  // Rotas dos produtos individuais
  CalcaAquecimento: undefined;
  CamisetaTreino: undefined;

  ShortsJogo: undefined;
  JaquetaInverno: undefined;
  MeiaoOficial: undefined;
  MoletomCasual: undefined;
  
  // Rotas femininas
  VestidoOficial: undefined;
  BlusaFeminina: undefined;
  SaiaJeans: undefined;
  JaquetaFeminina: undefined;
  LeggingsTreino: undefined;

  // Rotas de conjuntos
  KitCompleto: undefined;
  ConjuntoTreinoMasculino: undefined;
  ConjuntoFemininoElegance: undefined;
  KitInfantil: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Esqueceu" component={Esqueceu} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Camisa1" component={Camisa1} />
      <Stack.Screen name="Camisa2" component={Camisa2} />
      <Stack.Screen name="LinhaMasculina" component={LinhaMasculina} />
      <Stack.Screen name="LinhaFeminina" component={LinhaFeminina} />
      <Stack.Screen name="Conjunto" component={Conjunto} />
      <Stack.Screen name="NoticiaDetalhes" component={NoticiaDetalhes} />
      <Stack.Screen name="Perfil" component={Perfil} />
      
      {/* Rotas dos produtos individuais */}
      <Stack.Screen name="CalcaAquecimento" component={CalcaAquecimento} />
      <Stack.Screen name="CamisetaTreino" component={CamisetaTreino} />

      {/* Rotas placeholder - CORRIGIDAS */}
      <Stack.Screen name="ShortsJogo" component={ShortsJogo} />
      <Stack.Screen name="JaquetaInverno" component={JaquetaInverno} />
      <Stack.Screen name="MeiaoOficial" component={MeiaoOficial} />
      <Stack.Screen name="MoletomCasual" component={MoletomCasual} />
      <Stack.Screen name="VestidoOficial" component={VestidoOficial} />
      <Stack.Screen name="BlusaFeminina" component={BlusaFeminina} />
      <Stack.Screen name="SaiaJeans" component={SaiaJeans} />
      <Stack.Screen name="JaquetaFeminina" component={JaquetaFeminina} />
      <Stack.Screen name="LeggingsTreino" component={LeggingsTreino} />
      <Stack.Screen name="KitCompleto" component={KitCompleto} />
      <Stack.Screen name="ConjuntoTreinoMasculino" component={ConjuntoTreinoMasculino} />
      <Stack.Screen name="ConjuntoFemininoElegance" component={ConjuntoFemininoElegance} />
      <Stack.Screen name="KitInfantil" component={KitInfantil} />
    </Stack.Navigator>
  );
}