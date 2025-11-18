// src/screens/Perfil/Perfil.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Animated,
  Easing,
  Linking,
} from 'react-native';
import { style } from './styles';
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';
import { StackParamList } from '../../routes/index.routes';
import { Ionicons, MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Hamburguer from '../../pageHome/hamburguer/hamburguer';

interface UserData {
  usuario: string;
  email: string;
  senha: string;
  loginType?: string;
}

interface RouteParams {
  email?: string;
  usuario?: string;
  loginType?: string;
}

// Componente de botão animado reutilizável
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function Perfil() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const route = useRoute();
  const params = route.params as RouteParams;
  
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.9));

  // Referências para animações de botões específicos
  const buttonAnimations = useRef(new Map()).current;

  // Foto de perfil padrão (vazia)
  const defaultProfilePhoto = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

  // Animação de entrada
  useEffect(() => {
    loadUserData();
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.back(1.2)),
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const loadUserData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userData');
      if (storedData) {
        const userData: UserData = JSON.parse(storedData);
        setUserData(userData);
      } else if (params?.email) {
        const userFromLogin: UserData = {
          usuario: params.usuario || params.email.split('@')[0],
          email: params.email,
          senha: '',
          loginType: params.loginType
        };
        setUserData(userFromLogin);
        await AsyncStorage.setItem('userData', JSON.stringify(userFromLogin));
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    } finally {
      setLoading(false);
    }
  };

  // Dados do usuário - PERFIL NOVO
  const usuario = {
    nome: userData?.usuario || params?.usuario || 'vasco_fan',
    email: userData?.email || params?.email || 'vasco@email.com',
    foto: defaultProfilePhoto,
    seguidores: 0,
    seguindo: 0,
    publicacoes: 0,
    bio: 'Perfil recém-criado 🚀 • Comece a compartilhar suas paixões pelo Vasco!',
    membroDesde: 'Hoje',
    isNewUser: true 
  };

  // Função simples para efeito de clique
  const createPressHandler = (onPress: () => void) => {
    const scaleValue = new Animated.Value(1);
    
    const handlePressIn = () => {
      Animated.spring(scaleValue, {
        toValue: 0.95,
        friction: 3,
        useNativeDriver: true,
      }).start();
    };

    const handlePressOut = () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start(() => {
        onPress();
      });
    };

    return { scaleValue, handlePressIn, handlePressOut };
  };

  // Handlers específicos com efeitos de clique
  const handleAddPhoto = () => {
    Alert.alert(
      'Adicionar Foto',
      'Escolha como deseja adicionar sua foto de perfil:',
      [
        {
          text: 'Tirar Foto',
          onPress: () => Alert.alert('Câmera', 'Funcionalidade de câmera em desenvolvimento'),
        },
        {
          text: 'Escolher da Galeria',
          onPress: () => Alert.alert('Galeria', 'Funcionalidade de galeria em desenvolvimento'),
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ]
    );
  };

  const handleCreatePost = () => {
    Alert.alert(
      'Primeira Publicação 🎉',
      'Que tal compartilhar sua paixão pelo Vasco? Crie sua primeira publicação!',
      [
        {
          text: 'Criar Publicação',
          onPress: () => Alert.alert('Criar', 'Editor de publicação em desenvolvimento'),
        },
        {
          text: 'Depois',
          style: 'cancel',
        },
      ]
    );
  };

  const handleSair = async () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        { 
          text: 'Cancelar', 
          style: 'cancel' 
        },
        { 
          text: 'Sair', 
          style: 'destructive', 
          onPress: async () => {
            try {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            } catch (error) {
              navigation.navigate('Login');
            }
          }
        }
      ]
    );
  };

  const handleShare = () => {
    Alert.alert('Compartilhar', 'Funcionalidade de compartilhamento em desenvolvimento');
  };

  const handleTabPress = (index: number, icon: string) => {
    if (index === 0) {
      // Tab ativa - nenhuma ação
    } else {
      Alert.alert('Em breve!', `A aba ${icon} estará disponível em breve!`);
    }
  };

  // Criar handlers para botões específicos
  const addPhotoHandler = createPressHandler(handleAddPhoto);
  const createPostHandler = createPressHandler(handleCreatePost);
  const sairHandler = createPressHandler(handleSair);
  const shareHandler = createPressHandler(handleShare);

  if (loading) {
    return (
      <View style={[style.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Animated.View style={{ opacity: fadeAnim, alignItems: 'center' }}>
          <View style={style.loadingAvatar} />
          <Text style={{ marginTop: 20, fontSize: 16, color: '#666', fontWeight: '600' }}>
            Preparando seu perfil...
          </Text>
        </Animated.View>
      </View>
    );
  }

  return (
    <View style={style.container}>
      {/* 👇 MUDE A COR DO HAMBURGUER PARA BRANCO */}
      <Hamburguer color="#fff" top={60} /> 
      
      <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
        <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
          
          {/* 👇 HEADER COM FUNDO PRETO */}
          <View style={style.header}>
            <View style={style.headerTop}>
              <View style={style.headerLeftSpace} />
              
              {/* 👇 MUDE A COR DO TEXTO PARA BRANCO */}
              <Text style={style.headerUsername}>@{usuario.nome.toLowerCase()}</Text>
              
              <View style={style.headerActions}>
                <AnimatedTouchable
                  onPressIn={createPostHandler.handlePressIn}
                  onPressOut={createPostHandler.handlePressOut}
                  style={[
                    style.headerButton,
                    { transform: [{ scale: createPostHandler.scaleValue }] }
                  ]}
                >
                  {/* 👇 MUDE A COR DO ÍCONE PARA BRANCO */}
                  <Feather name="plus-square" size={24} color="#fff" />
                </AnimatedTouchable>
              </View>
            </View>
          </View>

          {/* Seção de Informações do Perfil */}
          <View style={style.profileSection}>
            <View style={style.profileTop}>
              <View style={style.avatarContainer}>
                <View style={style.avatarPlaceholder}>
                  <Feather name="user" size={36} color="#999" />
                </View>
                
                <AnimatedTouchable
                  onPressIn={addPhotoHandler.handlePressIn}
                  onPressOut={addPhotoHandler.handlePressOut}
                  style={[
                    style.editAvatarButton,
                    { transform: [{ scale: addPhotoHandler.scaleValue }] }
                  ]}
                >
                  <Feather name="camera" size={16} color="#FFF" />
                </AnimatedTouchable>
                
                {usuario.isNewUser && (
                  <View style={style.newUserBadge}>
                    <Text style={style.newUserText}>NOVO</Text>
                  </View>
                )}
              </View>
              
              <View style={style.statsContainer}>
                <View style={style.statItem}>
                  <Text style={style.statNumber}>{usuario.publicacoes}</Text>
                  <Text style={style.statLabel}>Publicações</Text>
                </View>
                <View style={style.statItem}>
                  <Text style={style.statNumber}>{usuario.seguidores}</Text>
                  <Text style={style.statLabel}>Seguidores</Text>
                </View>
                <View style={style.statItem}>
                  <Text style={style.statNumber}>{usuario.seguindo}</Text>
                  <Text style={style.statLabel}>Seguindo</Text>
                </View>
              </View>
            </View>

            <View style={style.profileInfo}>
              <Text style={style.displayName}>{usuario.nome}</Text>
              <Text style={style.bio}>{usuario.bio}</Text>
              <Text style={style.memberSince}>Membro desde {usuario.membroDesde}</Text>
            </View>

            <View style={style.actionButtons}>
              <AnimatedTouchable
                onPressIn={addPhotoHandler.handlePressIn}
                onPressOut={addPhotoHandler.handlePressOut}
                style={[
                  style.editButton,
                  { transform: [{ scale: addPhotoHandler.scaleValue }] }
                ]}
              >
                <Text style={style.editButtonText}>Adicionar foto</Text>
              </AnimatedTouchable>
              
              <AnimatedTouchable
                onPressIn={shareHandler.handlePressIn}
                onPressOut={shareHandler.handlePressOut}
                style={[
                  style.shareButton,
                  { transform: [{ scale: shareHandler.scaleValue }] }
                ]}
              >
                <Feather name="share" size={18} color="#000" />
              </AnimatedTouchable>
            </View>

            {usuario.isNewUser && (
              <View style={style.welcomeMessage}>
                <Feather name="award" size={20} color="#1E40AF" />
                <Text style={style.welcomeText}>
                  Bem-vindo ao Vasco! Seu perfil foi criado com sucesso.
                </Text>
              </View>
            )}
          </View>

          {/* Destaques */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={style.highlights}
          >
            <AnimatedTouchable
              onPressIn={createPostHandler.handlePressIn}
              onPressOut={createPostHandler.handlePressOut}
              style={[
                style.highlightItem,
                { transform: [{ scale: createPostHandler.scaleValue }] }
              ]}
            >
              <View style={style.highlightCircle}>
                <Feather name="plus" size={20} color="#000" />
              </View>
              <Text style={style.highlightText}>Novo</Text>
            </AnimatedTouchable>
          </ScrollView>

          {/* Abas de Navegação */}
          <View style={style.tabs}>
            {[
              { icon: 'grid', id: 'tab_grid' },
              { icon: 'tv', id: 'tab_tv' },
              { icon: 'bookmark', id: 'tab_bookmark' },
              { icon: 'user', id: 'tab_user' }
            ].map((tab, index) => {
              const tabHandler = createPressHandler(() => handleTabPress(index, tab.icon));
              
              return (
                <AnimatedTouchable
                  key={tab.id}
                  onPressIn={tabHandler.handlePressIn}
                  onPressOut={tabHandler.handlePressOut}
                  style={[
                    style.tab,
                    index === 0 && style.tabActive,
                    { transform: [{ scale: tabHandler.scaleValue }] }
                  ]}
                >
                  <Feather 
                    name={tab.icon as any} 
                    size={24} 
                    color={index === 0 ? "#000" : "#666"} 
                  />
                </AnimatedTouchable>
              );
            })}
          </View>

          {/* Grid de Publicações */}
          <View style={style.postsGrid}>
            <AnimatedTouchable
              onPressIn={createPostHandler.handlePressIn}
              onPressOut={createPostHandler.handlePressOut}
              style={[
                style.postItem,
                { transform: [{ scale: createPostHandler.scaleValue }] }
              ]}
            >
              <View style={style.postPlaceholder}>
                <Feather name="plus" size={32} color="#DBDBDB" />
                <Text style={style.postPlaceholderText}>
                  Primeira publicação
                </Text>
              </View>
            </AnimatedTouchable>
          </View>

          {/* Botão Sair */}
          <AnimatedTouchable
            onPressIn={sairHandler.handlePressIn}
            onPressOut={sairHandler.handlePressOut}
            style={[
              style.logoutButton,
              { transform: [{ scale: sairHandler.scaleValue }] }
            ]}
          >
            <MaterialIcons name="logout" size={20} color="#666" />
            <Text style={style.logoutText}>Sair da Conta</Text>
          </AnimatedTouchable>

        </Animated.View>
      </ScrollView>
    </View>
  );
}