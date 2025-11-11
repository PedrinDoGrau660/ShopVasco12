// src/screens/Perfil/Perfil.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { style } from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackParamList } from '../../routes/index.routes';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserData {
  usuario: string;
  email: string;
  senha: string;
}

export default function Perfil() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  // Dados padrão caso não encontre no AsyncStorage
  const defaultUser = {
    nome: 'Usuário',
    email: 'email@exemplo.com',
    foto: 'https://example.com/foto-perfil.jpg',
    membroDesde: new Date().toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' }),
    comentarios: 0,
    curtidas: 0,
    noticiasSalvas: 0
  };

  // Carrega os dados do usuário do AsyncStorage
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userData');
      if (storedData) {
        const userData: UserData = JSON.parse(storedData);
        setUserData(userData);
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
      Alert.alert('Erro', 'Não foi possível carregar os dados do usuário');
    } finally {
      setLoading(false);
    }
  };

  // Combina dados do AsyncStorage com dados padrão
  const usuario = {
    nome: userData?.usuario || defaultUser.nome,
    email: userData?.email || defaultUser.email,
    foto: defaultUser.foto,
    membroDesde: defaultUser.membroDesde,
    comentarios: defaultUser.comentarios,
    curtidas: defaultUser.curtidas,
    noticiasSalvas: defaultUser.noticiasSalvas
  };

  const menuItems = [
    {
      icon: 'person-outline' as const,
      name: 'Editar Perfil',
      screen: 'EditarPerfil' as keyof StackParamList,
    },
    {
      icon: 'bookmark-outline' as const,
      name: 'Notícias Salvas',
      screen: 'NoticiasSalvas' as keyof StackParamList,
    },
    {
      icon: 'chatbubble-outline' as const,
      name: 'Meus Comentários',
      screen: 'MeusComentarios' as keyof StackParamList,
    },
    {
      icon: 'notifications-outline' as const,
      name: 'Notificações',
      screen: 'Notificacoes' as keyof StackParamList,
    },
    {
      icon: 'lock-closed-outline' as const,
      name: 'Privacidade',
      screen: 'Privacidade' as keyof StackParamList,
    },
    {
      icon: 'help-circle-outline' as const,
      name: 'Ajuda & Suporte',
      screen: 'Ajuda' as keyof StackParamList,
    }
  ];

  const handleMenuPress = (screen: keyof StackParamList) => {
    const telasSemParametros: (keyof StackParamList)[] = [
      'Login', 'Home', 'Perfil'
    ];
    
    if (telasSemParametros.includes(screen)) {
      navigation.navigate(screen as any);
    } else {
      Alert.alert('Em desenvolvimento', `A tela "${screen}" está em desenvolvimento.`);
    }
  };

  const handleSair = async () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair da sua conta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Sair', 
          style: 'destructive', 
          onPress: async () => {
            try {
              // Opcional: Limpar dados sensíveis do AsyncStorage
              // await AsyncStorage.removeItem('userData');
              
              // Navegar para Login
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            } catch (error) {
              console.error('Erro ao sair:', error);
              navigation.navigate('Login');
            }
          }
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={[style.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={style.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={style.headerTitle}>Perfil</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Informações do Usuário */}
        <View style={style.profileSection}>
          <View style={style.avatarContainer}>
            <Image 
              source={{ uri: usuario.foto }} 
              style={style.avatar}
              defaultSource={require('../../assets/dvd.jpg')}
            />
            <TouchableOpacity style={style.editAvatarButton}>
              <Ionicons name="camera" size={16} color="#FFF" />
            </TouchableOpacity>
          </View>
          
          <Text style={style.userName}>{usuario.nome}</Text>
          <Text style={style.userEmail}>{usuario.email}</Text>
          <Text style={style.memberSince}>Membro desde {usuario.membroDesde}</Text>
          
          {/* Indicador de dados carregados */}
          {userData && (
            <Text style={style.dataSource}>Dados do cadastro ✓</Text>
          )}
        </View>

        {/* Estatísticas */}
        <View style={style.statsContainer}>
          <View style={style.statItem}>
            <Text style={style.statNumber}>{usuario.comentarios}</Text>
            <Text style={style.statLabel}>Comentários</Text>
          </View>
          <View style={style.statDivider} />
          <View style={style.statItem}>
            <Text style={style.statNumber}>{usuario.curtidas}</Text>
            <Text style={style.statLabel}>Curtidas</Text>
          </View>
          <View style={style.statDivider} />
          <View style={style.statItem}>
            <Text style={style.statNumber}>{usuario.noticiasSalvas}</Text>
            <Text style={style.statLabel}>Salvas</Text>
          </View>
        </View>

        {/* Menu */}
        <View style={style.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index}
              style={style.menuItem}
              onPress={() => handleMenuPress(item.screen)}
            >
              <View style={style.menuItemLeft}>
                <Ionicons name={item.icon} size={22} color="#666" />
                <Text style={style.menuItemText}>{item.name}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Botão Sair */}
        <TouchableOpacity style={style.logoutButton} onPress={handleSair}>
          <MaterialIcons name="logout" size={22} color="#FF3B30" />
          <Text style={style.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}