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
    aspectRatio: 16/9, // Proporção padrão de vídeo
    backgroundColor: '#000',
    borderRadius: 12,
    overflow: 'hidden'
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  videoTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  modalContent: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    minWidth: 200,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  whatsappButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
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
        require('./videos/aplausos.mp3'),
        { shouldPlay: true }
      );
      
      soundRef.current = sound as unknown as SoundObject;

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
    
    // 👇 AQUI ESTÁ A MUDANÇA IMPORTANTE: LIMPA O CARRINHO
    clearCart();
    
    // Limpa o som se estiver tocando
    if (soundRef.current) {
      soundRef.current.unloadAsync();
      soundRef.current = null;
    }
  };

   const handleOpenWhatsApp = () => {
    // 👇 SUBSTITUA A MENSAGEM ATUAL POR ESTA:
    const mensagem = `🛒 *PEDIDO - VASCO STORE* 🛒\n\n` +
      
      `*RESPOSTA AUTOMÁTICA:*\n` +
      `✅ Pedido recebido com sucesso!\n` +
      `📋 Nº do pedido: #${Math.random().toString(36).substr(2, 9).toUpperCase()}\n` +
      `⏰ Retornaremos em até 5 minutos\n` +
      `📞 Horário comercial: Seg-Sex 9h-18h\n\n` +
      
      `*ITENS DO PEDIDO:*\n\n` +
      `${cartItems.map((item, index) => 
        `*${index + 1}. ${item.nome}*\n` +
        `🔹 Cor: ${item.cor}\n` +
        `🔹 Tamanho: ${item.tamanho}\n` +
        `🔹 Quantidade: ${item.quantidade}\n` +
        `🔹 Preço: ${formatarPreco(item.precoDesconto || item.preco)}\n\n`
      ).join('')}` +
      
      `💰 *TOTAL DO PEDIDO: ${formatarPreco(getTotalPrice())}*\n\n` +
      
      `_Envie suas informações abaixo:_\n` +
      `• Nome completo\n` +
      `• Endereço completo\n` +
      `• CEP\n` +
      `• Telefone\n\n` +
      
      `💳 *FORMAS DE PAGAMENTO:*\n` +
      `• Pix (5% off)\n` +
      `• Cartão (até 12x)\n` +
      `• Boleto (à vista)`;

   Linking.openURL(`https://wa.me/554188395229?text=${encodeURIComponent(mensagem)}`)
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível abrir o WhatsApp. Verifique se o aplicativo está instalado.');
      });
    // Limpa o carrinho após enviar para o WhatsApp
    clearCart();
    
    // Fecha o modal
    setModalVisible(false);
    
    // Limpa o som
    if (soundRef.current) {
      soundRef.current.unloadAsync();
      soundRef.current = null;
    }
  };

  const handleVideoPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if ('didJustFinish' in status && status.didJustFinish) {
      // Quando o vídeo terminar, para a música mas NÃO fecha o modal automaticamente
      if (soundRef.current) {
        soundRef.current.stopAsync();
      }
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
        <View style={styles.modalContainer}>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={handleCloseModal}
          >
            <FontAwesome name="times" size={24} color="#fff" />
          </TouchableOpacity>
          
          <View style={styles.modalContent}>
            <Text style={styles.videoTitle}>🎉 Parabéns pela Compra! 🎉</Text>
            
            <View style={styles.videoContainer}>
              <Video
                ref={videoRef}
                source={require('./videos/1118.mp4')}
                style={styles.video}
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay={true}
                isLooping={false}
                onPlaybackStatusUpdate={handleVideoPlaybackStatusUpdate}
              />
            </View>

            <TouchableOpacity
              style={styles.whatsappButton}
              onPress={handleOpenWhatsApp}
            >
              <FontAwesome name="whatsapp" size={20} color="#fff" />
              <Text style={styles.whatsappButtonText}>Abrir WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
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