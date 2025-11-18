import React from "react";
import { 
  View, 
  Text, 
  Linking, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  Alert 
} from "react-native";
import { style } from "./styles";
import { RouteProp, useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import ParteDeCima from "../../PartesFixas/TopDoApp/top";
import BemVindo from "../../assets/pageBemVindo.png";
import MyCarousel from "../Carousel/CarouselHome";
import CarouselText from "../Carousel/CarouselText";
import MyCarouselCalendario from "../Carousel/CarouselCalendario";
import ParteDeBaixo from "../../PartesFixas/LowDoApp/index";
import { Ionicons } from "@expo/vector-icons";

type HomeRouteProp = RouteProp<StackParamList, "Home">;

type Props = {
  route: HomeRouteProp;
};

// Dados mockados de notícias
const NOTICIAS = [
  {
    id: '1',
    titulo: 'Diniz brilha no comando do Vasco',
    resumo: 'Técnico conquista torcida com estilo de jogo ofensivo e já pensa em reforços...',
    data: '20 Nov 2024',
    imagem: require('../../screens/imagens/diniz.png'),
    comentarios: 23,
    curtidas: 156
  },
  {
    id: '2',
    titulo: 'Pedrinho assume presidência do Vasco',
    resumo: 'Ex-jogador é empossado com projeto ambicioso de reestruturação do clube...',
    data: '18 Nov 2024',
    imagem: require('../../screens/imagens/pedrinho.png'),
    comentarios: 42,
    curtidas: 289
  },
  {
    id: '3',
    titulo: 'Vasco na disputa por Neymar Jr',
    resumo: 'Clube surpreende e entra na corrida pelo astro brasileiro...',
    data: '25 Nov 2024',
    imagem: require('../../screens/imagens/neymar.png'),
    comentarios: 87,
    curtidas: 528
  }
];

// Próximos jogos
const PROXIMOS_JOGOS = [
   {
    id: '1',
    data: '28/11',
    campeonato: 'Brasileirão Série A',
    adversario: 'Internacional',
    local: 'Sao Januario',
    horario: '19:30'
  }, {
    id: '2',
    data: '03/12',
    campeonato: 'Brasileirão Série A',
    adversario: 'Mirassol',
    local: 'São Januário',
    horario: 'A confirmar'
  },
  {
    id: '3',
    data: '07/12',
    campeonato: 'Brasileirão Série A',
    adversario: 'Atletico MG',
    local: 'Arena MRV',
    horario: 'A confirmar'
  },

];

export default function Home({ route }: Props) {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const { email, usuario } = route.params || {};

  const handleNoticiaPress = (noticiaId: string) => {
    navigation.navigate('NoticiaDetalhes', { noticiaId });
  };

  const handlePerfilPress = () => {
    navigation.navigate('Perfil');
  };

  const handleJogoPress = (jogo: any) => {
    Alert.alert(
      "Detalhes do Jogo",
      `${jogo.campeonato}\nVasco vs ${jogo.adversario}\n${jogo.data} - ${jogo.horario}\nLocal: ${jogo.local}`
    );
  };

  // Funções temporárias - você pode criar essas telas depois
// Na sua Home.tsx, substitua as funções:
const handleEstatisticasPress = () => {
  navigation.navigate('Estatisticas');
};

const handleTabelaPress = () => {
  navigation.navigate('Tabela');
};


  return (
    <View style={style.container}>
      <ParteDeCima onPerfilPress={handlePerfilPress} />
      
      <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
        
        {/* Saudação Personalizada */}
       

        <View style={style.imageBemVindo}>
          <Image source={BemVindo} style={style.bannerImage} resizeMode="contain" />
        </View>

        {/* Carousel de Textos */}
        <View style={style.containerTexto}>
          <CarouselText/>
        </View>

        {/* Carousel Principal */}
        <View style={style.carousel}>
          <MyCarousel />
        </View>

        {/* Menu Rápido */}
        <View style={style.menuRapido}>
          <View style={style.menuGrid}>
            <TouchableOpacity style={style.menuItem} onPress={handleEstatisticasPress}>
              <View style={[style.menuIcon, { backgroundColor: '#34C759' }]}>
                <Ionicons name="stats-chart" size={24} color="#FFF" />
              </View>
              <Text style={style.menuText}>Estatísticas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.menuItem} onPress={handleTabelaPress}>
              <View style={[style.menuIcon, { backgroundColor: '#FF9500' }]}>
                <Ionicons name="trophy" size={24} color="#FFF" />
              </View>
              <Text style={style.menuText}>Tabela</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Calendário de Jogos */}
        <View style={style.carouselNoticias}>
          <MyCarouselCalendario />
          
          {/* Lista de Próximos Jogos */}
          {PROXIMOS_JOGOS.slice(0, 3).map((jogo) => (
            <TouchableOpacity 
              key={jogo.id}
              style={style.cardJogo}
              onPress={() => handleJogoPress(jogo)}
            >
              <View style={style.jogoData}>
                <Text style={style.jogoDia}>{jogo.data}</Text>
                <Text style={style.jogoHorario}>{jogo.horario}</Text>
              </View>
              <View style={style.jogoInfo}>
                <Text style={style.jogoCampeonato}>{jogo.campeonato}</Text>
                <Text style={style.jogoAdversario}>Vasco vs {jogo.adversario}</Text>
                <Text style={style.jogoLocal}>{jogo.local}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Últimas Notícias */}
        <View style={style.linhasContainer}>
          <View style={style.headerSecao}>
            <Text style={style.tituloSecao}>Últimas Notícias</Text>
          </View>
          
          {NOTICIAS.map((noticia) => (
            <TouchableOpacity 
              key={noticia.id}
              style={style.cardNoticia}
              onPress={() => handleNoticiaPress(noticia.id)}
            >
              <Image source={noticia.imagem} style={style.noticiaImagem} />
              <View style={style.noticiaContent}>
                <View style={style.noticiaHeader}>
                  <Text style={style.noticiaData}>{noticia.data}</Text>
                  <View style={style.engajamentoNoticia}>
                    <View style={style.engajamentoItem}>
                      <Ionicons name="heart" size={14} color="#FF3B30" />
                      <Text style={style.engajamentoText}>{noticia.curtidas}</Text>
                    </View>
                    <View style={style.engajamentoItem}>
                      <Ionicons name="chatbubble" size={14} color="#007AFF" />
                      <Text style={style.engajamentoText}>{noticia.comentarios}</Text>
                    </View>
                  </View>
                </View>
                <Text style={style.noticiaTitulo}>{noticia.titulo}</Text>
                <Text style={style.noticiaResumo}>{noticia.resumo}</Text>
                <Text style={style.lerMais}>Toque para ler mais e comentar →</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Redes Sociais */}
        <View style={style.redesSociais}>
          <Text style={style.tituloSecao}>Siga o Vasco</Text>
          <View style={style.redesGrid}>
            <TouchableOpacity 
              style={style.redeItem} 
              onPress={() => Linking.openURL('https://instagram.com/vascodagama')}
            >
              <Ionicons name="logo-instagram" size={24} color="#E4405F" />
              <Text style={style.redeText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={style.redeItem}
              onPress={() => Linking.openURL('https://twitter.com/VascodaGama')}
            >
              <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
              <Text style={style.redeText}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={style.redeItem}
              onPress={() => Linking.openURL('https://youtube.com/vascotv')}
            >
              <Ionicons name="logo-youtube" size={24} color="#FF0000" />
              <Text style={style.redeText}>YouTube</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={style.redeItem}
              onPress={() => Linking.openURL('https://tiktok.com/@vascodagama')}
            >
              <Ionicons name="logo-tiktok" size={24} color="#fcfcfcff" />
              <Text style={style.redeText}>TikTok</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.Logo}></View>
        <ParteDeBaixo />
      </ScrollView>
    </View>
  );
}