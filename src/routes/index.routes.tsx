// routes/index.routes.ts
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pageEntrar/login";
import Cadastro from "../pageEntrar/register";
import Esqueceu from "../pageEntrar/esqueceusenha";
import Home from "../pageHome/principal/home";
import Camisa1 from "../pageHome/pagesCamisa/camisa1/index"

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

    {/* <Stack.Screen name="Perfil" component={PerfilScreen} /> */}
    {/* <Stack.Screen name="Config" component={ConfigScreen} /> */}
    {/* <Stack.Screen name="Ajuda" component={AjudaScreen} /> */}
  </Stack.Navigator>
);
}
