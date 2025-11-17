// src/screens/CartScreen.tsx
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Linking,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackParamList } from '../routes/index.routes';
import { useCart } from '../contexts/CartContext';
import ParteDeCima from '../PartesFixas/TopDoApp/top';
import { FontAwesome } from '@expo/vector-icons';
import { Video, Audio, ResizeMode } from 'expo-av';
import { AVPlaybackStatus } from 'expo-av';

// Tipos para as refs
type SoundObject = {
  unloadAsync: () => Promise<void>;
  stopAsync: () => Promise<void>;
};

type VideoObject = {
  // Métodos do Video que você pode precisar
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 16
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  emptyCartIcon: {
    marginBottom: 20
  },
  emptyCartText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#333',
    textAlign: 'center'
  },
  emptyCartSubText: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 22,
    marginHorizontal: 20
  },
  botaoContinuarComprando: {
    backgroundColor: '#C00000',
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
    minWidth: 200,
    alignItems: 'center'
  },
  textoBotaoContinuar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  tituloCarrinho: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center'
  },
  cartItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8
  },
  cartItemInfo: {
    flex: 1,
    marginLeft: 12
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  cartItemDetail: {
    fontSize: 14,
    color: '#666',
    marginTop: 4
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C00000',
    marginTop: 4
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  quantityButton: {
    backgroundColor: '#C00000',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: 'bold'
  },
  removeButton: {
    marginLeft: 'auto',
    padding: 8
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 16,
    marginTop: 16,
    marginBottom: 20
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333'
  },
  headersup: { 
    height: 3,
    backgroundColor: "#C00000", 
    marginVertical: 10,
  },
  botoesAcao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
    gap: 12
  },
  botaoLimparCarrinho: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center'
  },
  textoBotaoLimpar: {
    color: '#666',
    fontWeight: 'bold'
  },
  botaoFinalizarCompra: {
    flex: 2,
    backgroundColor: '#C00000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center'
  },
  textoBotaoFinalizar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  // NOVOS ESTILOS PARA PÁGINA VAZIA
  emptyPageContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  emptyPageContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  },
  emptyPageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center'
  },
  emptyPageMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30
  },
  // ESTILOS PARA O MODAL DE VÍDEO
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  videoContainer: {
    width: '90%',
    height: 300,
    backgroundColor: '#000'
  },
  video: {
    flex: 1
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  videoTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  }
});

// COMPONENTE SEPARADO PARA CARRINHO VAZIO
function EmptyCartScreen() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  return (
    <View style={styles.emptyPageContainer}>
      <ParteDeCima />
      
      <View style={styles.emptyPageContent}>
        <View style={styles.emptyCartIcon}>
          <FontAwesome name="shopping-cart" size={100} color="#e0e0e0" />
        </View>
        
        <Text style={styles.emptyPageTitle}>Carrinho Vazio</Text>
        
        <Text style={styles.emptyPageMessage}>
          Seu carrinho está esperando por produtos incríveis!{'\n'}
          Explore nossa loja e adicione itens que combinam com você.
        </Text>

        <TouchableOpacity
          style={styles.botaoContinuarComprando}
          onPress={() => navigation.navigate('Home', {
            email: undefined,
            usuario: undefined,
            loginType: undefined
          })}
        >
          <Text style={styles.textoBotaoContinuar}>Explorar Produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// COMPONENTE PRINCIPAL PARA CARRINHO COM ITENS
function CartWithItems() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice
  } = useCart();

  const [modalVisible, setModalVisible] = useState(false);
  const videoRef = useRef<Video>(null);
  const soundRef = useRef<SoundObject | null>(null);

  const formatarPreco = (preco: number) => {
    return `R$ ${preco.toFixed(2).replace('.', ',')}`;
  };

  // Função para tocar música de comemoração
  const playCelebrationSound = async () => {
    try {
      // Para a música atual se estiver tocando
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
      }

      // Carrega e toca a música
      const { sound } = await Audio.Sound.createAsync(
        // Substitua pelo seu arquivo de música
        // require('../../assets/celebration-sound.mp3'),
        { uri: 'https://www.soundjay.com/button/beep-07.mp3' }, // URL temporária para teste
        { shouldPlay: true }
      );
      
      soundRef.current = sound as unknown as SoundObject;

      // Para a música automaticamente após 5 segundos
      setTimeout(async () => {
        if (soundRef.current) {
          await soundRef.current.stopAsync();
          await soundRef.current.unloadAsync();
          soundRef.current = null;
        }
      }, 5000);

    } catch (error) {
      console.log('Erro ao tocar música:', error);
    }
  };

  const handleFinalizarCompra = async () => {
    if (cartItems.length === 0) {
      Alert.alert('Carrinho vazio', 'Adicione produtos ao carrinho antes de finalizar a compra.');
      return;
    }

    // Toca a música de comemoração
    await playCelebrationSound();

    // Abre o modal com o vídeo
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    
    // Limpa o som se estiver tocando
    if (soundRef.current) {
      soundRef.current.unloadAsync();
      soundRef.current = null;
    }
    
    // Abre o WhatsApp após fechar o vídeo
    const mensagem = `Olá! Gostaria de comprar os seguintes produtos:\n\n${
      cartItems.map(item => 
        `${item.nome} - ${item.cor} - Quantidade: ${item.quantidade} - ${formatarPreco(item.precoDesconto || item.preco)}`
      ).join('\n')
    }\n\nTotal: ${formatarPreco(getTotalPrice())}`;

    Linking.openURL(`https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`);
    
    // Limpa o carrinho após finalizar a compra
    clearCart();
  };

  const handleVideoPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if ('didJustFinish' in status && status.didJustFinish) {
      // Quando o vídeo terminar, fecha automaticamente e abre o WhatsApp
      handleCloseModal();
    }
  };

  return (
    <View style={styles.container}>
      <ParteDeCima />
      
      <ScrollView style={styles.content}>
        <Text style={styles.tituloCarrinho}>Meu Carrinho</Text>

        {/* LINHA DIVISÓRIA - APENAS QUANDO TEM ITENS */}
        <View style={styles.headersup}></View>

        {cartItems.map((item) => (
          <View key={`${item.id}-${item.cor}`} style={styles.cartItemContainer}>
            <Image source={item.imagem} style={styles.cartItemImage} />
            
            <View style={styles.cartItemInfo}>
              <Text style={styles.cartItemName}>{item.nome}</Text>
              <Text style={styles.cartItemDetail}>Cor: {item.cor}</Text>
              <Text style={styles.cartItemPrice}>
                {formatarPreco(item.precoDesconto || item.preco)}
              </Text>

              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => updateQuantity(item.id, item.quantidade - 1)}
                >
                  <FontAwesome name="minus" size={12} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.quantityText}>{item.quantidade}</Text>

                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => updateQuantity(item.id, item.quantidade + 1)}
                >
                  <FontAwesome name="plus" size={12} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeFromCart(item.id)}
                >
                  <FontAwesome name="trash" size={16} color="#ff4444" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>
            Total: {formatarPreco(getTotalPrice())}
          </Text>
        </View>

        <View style={styles.botoesAcao}>
          <TouchableOpacity
            style={styles.botaoLimparCarrinho}
            onPress={() => Alert.alert(
              'Limpar Carrinho',
              'Tem certeza que deseja limpar o carrinho?',
              [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Limpar', onPress: clearCart, style: 'destructive' }
              ]
            )}
          >
            <Text style={styles.textoBotaoLimpar}>Limpar Carrinho</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoFinalizarCompra}
            onPress={handleFinalizarCompra}
          >
            <Text style={styles.textoBotaoFinalizar}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* MODAL DO VÍDEO */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View>
                <Text style={styles.videoTitle}>🎉 Parabéns pela Compra! 🎉</Text>
                <View style={styles.videoContainer}>
                  <Video
                    ref={videoRef}
                    // source={require('../../assets/celebration-video.mp4')} // Substitua pelo seu vídeo
                    source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }} // URL temporária para teste
                    style={styles.video}
                    resizeMode={ResizeMode.CONTAIN}
                    shouldPlay={true}
                    isLooping={false}
                    onPlaybackStatusUpdate={handleVideoPlaybackStatusUpdate}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
            
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={handleCloseModal}
            >
              <FontAwesome name="times" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

// COMPONENTE PRINCIPAL
export default function CartScreen() {
  const { cartItems } = useCart();

  // Se o carrinho estiver vazio, mostra a página especial
  if (cartItems.length === 0) {
    return <EmptyCartScreen />;
  }

  // Se tiver itens, mostra o carrinho normal
  return <CartWithItems />;
}