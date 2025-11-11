import React from "react";
import { View, Text, Linking, TouchableOpacity, Image, ScrollView } from "react-native";
import { style } from "./styles";
import { RouteProp, useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/index.routes";
import ParteDeCima from "../../PartesFixas/TopDoApp/top";
import BemVindo from "../../assets/pageBemVindo.png";
import MyCarousel from "../Carousel/CarouselHome";
import CarouselText from "../Carousel/CarouselText";
import MyCarouselCalendario from "../Carousel/CarouselCalendario";
import ParteDeBaixo from "../../PartesFixas/LowDoApp/index";

type HomeRouteProp = RouteProp<StackParamList, "Home">;

type Props = {
  route: HomeRouteProp;
};

// Dados mockados de notícias
const NOTICIAS = [
  {
    id: '1',
    titulo: 'Time vence campeonato estadual',
    resumo: 'Nosso time conquistou o título do campeonato estadual...',
    data: '15 Nov 2024',
    imagem: 'https://example.com/noticia1.jpg',
    comentarios: 23
  },
  {
    id: '2',
    titulo: 'Novo uniforme é lançado',
    resumo: 'Conheça o novo uniforme da temporada 2024/2025...',
    data: '10 Nov 2024',
    imagem: 'https://example.com/noticia2.jpg',
    comentarios: 15
  },
  {
    id: '3',
    titulo: 'Contratação do jogador estrela',
    resumo: 'Clube anuncia a contratação do reforço para a temporada...',
    data: '05 Nov 2024',
    imagem: 'https://example.com/noticia3.jpg',
    comentarios: 42
  }
];

export default function Home({ route }: Props) {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  // FUNÇÃO PARA LIDAR COM A PESQUISA NA HOME
  const handleSearch = (searchText: string) => {
    if (searchText.trim()) {
      const termo = searchText.toLowerCase().trim();
      
      const termosFemininos = [
        'feminino', 'feminina', 'mulher', 'mulheres', 'menina', 'meninas',
        'blusa', 'vestido', 'saia', 'feminina'
      ];
      
      const termosConjuntos = [
        'conjunto', 'kit', 'combo', 'pack', 'conjuntos', 'kits'
      ];
      
      const termosMasculinos = [
        'masculino', 'masculina', 'homem', 'homens', 'menino', 'meninos',
        'camisa', 'camiseta', 'short', 'bermuda', 'calça', 'jaqueta', 'moletom'
      ];

      if (termosFemininos.some(termoF => termo.includes(termoF))) {
        navigation.navigate('LinhaFeminina', { 
          searchTerm: searchText 
        });
      } else if (termosConjuntos.some(termoC => termo.includes(termoC))) {
        navigation.navigate('Conjunto', { 
          searchTerm: searchText 
        });
      } else {
        navigation.navigate('LinhaMasculina', { 
          searchTerm: searchText 
        });
      }
    }
  };

  const handleNoticiaPress = (noticiaId: string) => {
    navigation.navigate('NoticiaDetalhes', { noticiaId });
  };

  const handlePerfilPress = () => {
    navigation.navigate('Perfil');
  };

  return (
    <View style={style.container}>
      // Na sua Home page, atualize o ParteDeCima:
<ParteDeCima onPerfilPress={() => navigation.navigate('Perfil')} />
      
      <ScrollView style={style.content} showsVerticalScrollIndicator={false}>
        <View style={style.imageBemVindo}>
          <Image source={BemVindo} style={style.bannerImage} resizeMode="contain" />
        </View>

        <View style={style.containerTexto}>
          <CarouselText/>
        </View>

        <View style={style.carousel}>
          <MyCarousel />
        </View>
        
        <View style={style.carouselNoticias}>
          <Text style={style.tituloCalendario}>Calendário de Jogos</Text>
          <MyCarouselCalendario />
        </View>

        <View style={style.linhasContainer}>
          <Text style={style.tituloNoticias}>Últimas Notícias</Text>
          
          {NOTICIAS.map((noticia) => (
            <TouchableOpacity 
              key={noticia.id}
              style={style.cardNoticia}
              onPress={() => handleNoticiaPress(noticia.id)}
            >
              <View style={style.noticiaHeader}>
                <Text style={style.noticiaData}>{noticia.data}</Text>
                <View style={style.comentariosBadge}>
                  <Text style={style.comentariosText}>{noticia.comentarios}</Text>
                </View>
              </View>
              <Text style={style.noticiaTitulo}>{noticia.titulo}</Text>
              <Text style={style.noticiaResumo}>{noticia.resumo}</Text>
              <Text style={style.lerMais}>Toque para ler mais e comentar →</Text>
            </TouchableOpacity>
          ))}
        </View>
        <ParteDeBaixo />
      </ScrollView>
    </View>
  );
}