// routes/index.routes.ts
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pageEntrar/login";
import Cadastro from "../pageEntrar/register";
import Esqueceu from "../pageEntrar/esqueceusenha";
import Home from "../pageHome/principal/home";
import Camisa1 from "../pagesCamisa/camisa1/produtosdetalhes"
import Camisa2 from "../pagesCamisa/camisa2/index";
import LinhaMasculina from "../LinhasDeCamisa/LinhaMasculina/index";
import LinhaFeminina from "../LinhasDeCamisa/LinhaFeminina";
import Conjunto from "../LinhasDeCamisa/Conjunto";

// Importe as páginas individuais dos produtos
import CalcaAquecimento from "../pagesCamisa/camisa1/produtosdetalhes";
import CamisetaTreino from "../pagesCamisa/camisa2/index";

export type StackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Esqueceu: undefined;
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
      
      {/* Rotas dos produtos individuais */}
      <Stack.Screen name="CalcaAquecimento" component={CalcaAquecimento} />
      <Stack.Screen name="CamisetaTreino" component={CamisetaTreino} />
    </Stack.Navigator>
  );
}