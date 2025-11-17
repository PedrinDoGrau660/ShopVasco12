import React, { useState } from "react";
import { 
  View, 
  Text, 
  Linking, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  TextInput 
} from "react-native";
import { Top } from "./styletop"
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Hamburguer from "../../pageHome/hamburguer/hamburguer";
import Logo from "../../assets/forççaaaaa.png";

// Props para o componente ParteDeCima
interface ParteDeCimaProps {
  children?: React.ReactNode;
  onSearch?: (searchText: string) => void;
  showSearchBar?: boolean;
  onPerfilPress?: () => void;
}

export default function ParteDeCima({ 
  children, 
  onSearch, 
  showSearchBar = true, 
  onPerfilPress 
}: ParteDeCimaProps) {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const [searchText, setSearchText] = useState("");

  const handlePerfilPress = () => {
    if (onPerfilPress) {
      onPerfilPress();
    } else {
      // Navega para a tela de perfil por padrão
      navigation.navigate('Perfil');
    }
  };

  // Função para lidar com a pesquisa
  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText.trim());
    }
  };

  // Função para limpar a pesquisa
  const handleClearSearch = () => {
    setSearchText("");
    if (onSearch) {
      onSearch("");
    }
  };

  // Função para quando o texto muda
  const handleTextChange = (text: string) => {
    setSearchText(text);
    
    // Se o usuário apagar tudo, pesquisa automaticamente com string vazia
    if (text === "" && onSearch) {
      onSearch("");
    }
  };

  return (
    <View>
      {/* Container Social */}
      <View style={Top.socialContainer}>
        <TouchableOpacity onPress={() => Linking.openURL("https://facebook.com")}>
          <FontAwesome name="facebook" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com")}>
          <FontAwesome name="twitter" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://instagram.com")}>
          <FontAwesome name="instagram" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://pinterest.com")}>
          <FontAwesome name="pinterest" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://vk.com")}>
          <FontAwesome name="vk" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://t.me")}>
          <FontAwesome name="telegram" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePerfilPress}>
          <Ionicons name="person-circle" size={28} color="#ffffffff" />
        </TouchableOpacity>
      </View>

      {/* Header Principal */}
      <View style={Top.headersup}>
        <Hamburguer />
        <Image source={Logo} style={Top.Logo} />
        <Text style={Top.titleright}>Vasco</Text>
        <Image source={Logo} style={Top.Logo} />
      </View>

      {/* Barra de Pesquisa */}
      {showSearchBar && (
        <View style={Top.searchContainer}>
          <View style={Top.searchInputContainer}>
            <FontAwesome name="search" size={18} color="#666" style={Top.searchIcon} />
            <TextInput
              style={Top.searchInput}
              placeholder="Pesquisar camisas, calças, shorts..."
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={handleTextChange}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={handleClearSearch} style={Top.clearButton}>
                <FontAwesome name="times-circle" size={18} color="#666" />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={Top.searchButton} onPress={handleSearch}>
            <Text style={Top.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>
      )}

      {children}
    </View>
  );
}