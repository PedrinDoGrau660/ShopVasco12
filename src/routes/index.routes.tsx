// routes/index.routes.ts
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Login from "../pageEntrar/login";
import Cadastro from "../pageEntrar/register";
import Esqueceu from "../pageEntrar/esqueceusenha";
import Home from "../pageHome/principal/home";
import LinhaMasculina from "../LinhasDeCamisa/LinhaMasculina/index";
import LinhaFeminina from "../LinhasDeCamisa/LinhaFeminina";
import Conjunto from "../LinhasDeCamisa/Conjunto";
import NoticiaDetalhes from "../screens/NoticiaDetalhes/NoticiaDetalhes";
import Perfil from "../screens/Perfil/perfil"; 
import CartScreen from "../screens/CartScreen";
import CamisaDetalhes from "../pagesCamisa/camisa1/produtosdetalhes";
import Estatisticas from "../pageHome/Estatisticas/estatisticas";
import Tabela from "../pageHome/tabela/tabela";

export type StackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Esqueceu: undefined;
  NoticiaDetalhes: { noticiaId: string };
  Perfil: undefined;
  CamisaDetalhes: { camisaId: number }; 
  Carrinho: undefined;
  Home: { email?: string; usuario?: string; loginType?: string };
  Estatisticas: undefined;
  Tabela: undefined;
  Calendario: undefined;
  Noticias: undefined;
  LinhaMasculina: {
    searchTerm?: string;
  };
  LinhaFeminina: {
    searchTerm?: string;
  };
  Conjunto: {
    searchTerm?: string;
  };  
};

export type StackNavigation = NativeStackNavigationProp<StackParamList>;

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
      <Stack.Screen name="CamisaDetalhes" component={CamisaDetalhes} />
      <Stack.Screen name="LinhaMasculina" component={LinhaMasculina} />
      <Stack.Screen name="LinhaFeminina" component={LinhaFeminina} />
      <Stack.Screen name="Conjunto" component={Conjunto} />
      <Stack.Screen name="NoticiaDetalhes" component={NoticiaDetalhes} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Estatisticas" component={Estatisticas} />
      <Stack.Screen name="Tabela" component={Tabela} />
      <Stack.Screen 
        name="Carrinho" 
        component={CartScreen} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}