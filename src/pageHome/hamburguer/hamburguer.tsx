import React, { useState, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
  View,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const MENU_WIDTH = width * 0.8;

interface HamburguerProps {
  color?: string;
  top?: number;
}

// Interface para o MenuItem
interface MenuItemProps {
  icon: string;
  title: string;
  onPress: () => void;
  isLogout?: boolean;
}

export default function Hamburguer({ color = "#fff", top = 20 }: HamburguerProps) {
  const [menuAberto, setMenuAberto] = useState(false);
  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation(); 

  const alternarMenu = () => {
    const abrir = !menuAberto;
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: abrir ? 0 : -MENU_WIDTH,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: abrir ? 1 : 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(() => setMenuAberto(abrir));
  };

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

  // Componente MenuItem com tipagem correta
  const MenuItem = ({ icon, title, onPress, isLogout = false }: MenuItemProps) => (
    <TouchableOpacity 
      style={[
        styles.menuItem,
        isLogout && styles.menuItemLogout
      ]} 
      onPress={onPress}
    >
      <View style={styles.menuItemContent}>
        <MaterialIcons 
          name={icon as any} 
          size={22} 
          color={isLogout ? "#C00000" : "#fff"} 
          style={styles.menuIcon}
        />
        <Text style={[
          styles.menuText,
          isLogout && styles.menuTextLogout
        ]}>
          {title}
        </Text>
      </View>
      {!isLogout && (
        <MaterialIcons name="chevron-right" size={18} color="#666" />
      )}
    </TouchableOpacity>
  );

  return (
    <>
      {/* Ícone do menu hamburguer */}
      <TouchableOpacity
        onPress={alternarMenu}
        style={[
          styles.menuButton,
          { top: top }
        ]}
      >
        <View style={styles.menuButtonInner}>
          <FontAwesome name="bars" size={20} color={color} />
        </View>
      </TouchableOpacity>

      {/* Overlay escuro com blur effect */}
      {menuAberto && (
        <Animated.View
          style={[
            styles.overlay,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.overlayTouchable}
            activeOpacity={1}
            onPress={alternarMenu}
          />
        </Animated.View>
      )}

      {/* Menu lateral animado */}
      <Animated.View
        style={[
          styles.menuContainer,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        {/* Header do menu */}
        <View style={styles.menuHeader}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>⚔️</Text>
            <View>
              <Text style={styles.logoTitle}>VASCO STORE</Text>
              <Text style={styles.logoSubtitle}>Coleção Oficial</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={alternarMenu}
          >
            <MaterialIcons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Divisor */}
        <View style={styles.divider} />

        {/* Itens do menu */}
        <View style={styles.menuItems}>
          <MenuItem 
            icon="home" 
            title="Início" 
            onPress={() => navegarPara("Home")}
          />
          <MenuItem 
            icon="woman" 
            title="Linha Feminina" 
            onPress={() => navegarPara("LinhaFeminina")}
          />
          <MenuItem 
            icon="man" 
            title="Linha Masculina" 
            onPress={() => navegarPara("LinhaMasculina")}
          />
          <MenuItem 
            icon="style" 
            title="Conjuntos" 
            onPress={() => navegarPara("Conjunto")}
          />
          <MenuItem 
            icon="person" 
            title="Meu Perfil" 
            onPress={() => navegarPara("Perfil")}
          />
          <MenuItem 
            icon="shopping-cart" 
            title="Meu Carrinho" 
            onPress={() => navegarPara("Carrinho")}
          />
        </View>

        {/* Footer do menu */}
        <View style={styles.menuFooter}>
          <View style={styles.divider} />
          <MenuItem 
            icon="logout" 
            title="Sair da Conta" 
            onPress={() => navegarPara("Login")}
            isLogout={true}
          />
          <Text style={styles.versionText}>Vasco Store v1.0</Text>
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    position: "absolute",
    left: 20,
    zIndex: 20,
    elevation: 20,
  },
  menuButtonInner: {
    backgroundColor: 'rgba(192, 0, 0, 0.9)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 15,
  },
  overlayTouchable: {
    flex: 1,
  },
  menuContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: MENU_WIDTH,
    height: height,
    backgroundColor: "#0a0a0a",
    borderRightWidth: 1,
    borderRightColor: "#1a1a1a",
    zIndex: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
  },
  menuHeader: {
    paddingTop: 60,
    paddingHorizontal: 25,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(192, 0, 0, 0.1)',
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoIcon: {
    fontSize: 28,
  },
  logoTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  logoSubtitle: {
    color: "#C00000",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 2,
  },
  closeButton: {
    padding: 5,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginVertical: 10,
  },
  menuItems: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  menuItemLogout: {
    backgroundColor: 'rgba(192, 0, 0, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(192, 0, 0, 0.3)',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    marginRight: 15,
    width: 24,
  },
  menuText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  menuTextLogout: {
    color: "#C00000",
    fontWeight: "600",
  },
  menuFooter: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  versionText: {
    color: "#666",
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
});