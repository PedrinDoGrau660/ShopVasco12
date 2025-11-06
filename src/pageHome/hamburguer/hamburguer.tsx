import React, { useState, useRef } from "react";
import { Text, TouchableOpacity, Animated, View, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get('window');
const MENU_WIDTH = width * 0.6; // 60% da tela

export default function Hamburguer() {
  const [menuAberto, setMenuAberto] = useState(false);
  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;

  const alternarMenu = () => {
    const toValue = menuAberto ? -MENU_WIDTH : 0;
    
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      {/* Botão Hamburguer - DENTRO DO HEADER */}
      <TouchableOpacity
        onPress={alternarMenu}
        style={{ 
          position: 'absolute',
          left: 20, // Dentro do padding do header
          zIndex: 11, // Acima do header
        }}
      >
        <FontAwesome name="bars" size={22} color="#fff" />
      </TouchableOpacity>

      {/* Overlay para fechar menu */}
      {menuAberto && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 9,
          }}
          onPress={alternarMenu}
        />
      )}

      {/* Menu Lateral */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: MENU_WIDTH,
          height: '100%',
          backgroundColor: '#070707',
          paddingTop: 120, // Abaixo do header
          transform: [{ translateX: slideAnim }],
          zIndex: 10,
        }}
      >
        {/* Itens do Menu */}
        <TouchableOpacity style={{ padding: 20, paddingLeft: 30 }} onPress={alternarMenu}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 20, paddingLeft: 30 }} onPress={alternarMenu}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 20, paddingLeft: 30 }} onPress={alternarMenu}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 20, paddingLeft: 30 }} onPress={alternarMenu}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 20, paddingLeft: 30 }} onPress={alternarMenu}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Sair</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}