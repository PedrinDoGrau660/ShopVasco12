import React, { useState, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const MENU_WIDTH = width * 0.7;

// Interface para as props
interface HamburguerProps {
  color?: string;
  top?: number; // 👈 Nova prop para posição
}

export default function Hamburguer({ color = "#fff", top = 20 }: HamburguerProps) {
  const [menuAberto, setMenuAberto] = useState(false);
  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation(); 

  // Função genérica para abrir/fechar
  const alternarMenu = () => {
    const abrir = !menuAberto;
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: abrir ? 0 : -MENU_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: abrir ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => setMenuAberto(abrir));
  };

  // Função para fechar e ir para outra página
  const navegarPara = (tela: string) => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -MENU_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setMenuAberto(false);
      navigation.navigate(tela as never);
    });
  };

  return (
    <>
      {/* Ícone do menu no header - AGORA COM PROP DE COR E POSIÇÃO */}
      <TouchableOpacity
        onPress={alternarMenu}
        style={{
          position: "absolute",
          left: 20,
          top: top, // 👈 Usando a prop aqui
          zIndex: 20,
          elevation: 20,
        }}
      >
        <FontAwesome name="bars" size={22} color={color} />
      </TouchableOpacity>

      {/* Fundo escuro */}
      {menuAberto && (
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: "rgba(0,0,0,0.6)",
              opacity: fadeAnim,
              zIndex: 5,
            },
          ]}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPress={alternarMenu}
          />
        </Animated.View>
      )}

      {/* Menu lateral animado */}
      <Animated.View
        style={[
          styles.menu,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <Text style={styles.title}>⚔️ Vasco App</Text>

        <TouchableOpacity style={styles.item} onPress={() => navegarPara("Home")}>
          <Text style={styles.text}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navegarPara("LinhaFeminina")}>
          <Text style={styles.text}>Linha Feminina</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navegarPara("LinhaMasculina")}>
          <Text style={styles.text}>Linha Masculina</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navegarPara("Conjunto")}>
          <Text style={styles.text}>Conjunto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navegarPara("Perfil")}>
          <Text style={styles.text}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navegarPara("Login")}>
          <Text style={[styles.text, { color: "#C00000" }]}>🚪 Sair</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    width: MENU_WIDTH,
    height: height,
    backgroundColor: "#000",
    borderRightWidth: 3,
    borderRightColor: "#C00000",
    paddingTop: 120,
    paddingHorizontal: 25,
    zIndex: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  item: {
    paddingVertical: 15,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});