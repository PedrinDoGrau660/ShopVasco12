import React from "react";
import { 
  View, 
  Image, 
  Dimensions, 
  StyleSheet, 
  ImageSourcePropType,
  useWindowDimensions 
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const images: ImageSourcePropType[] = [
  require("../image/calendario.jpeg"),
  require("../image/calendario1.jpeg"),
  require("../image/calendario3.jpeg"),
];

export default function MyCarousel() {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  
  // Calcula a altura baseada na proporção das imagens de calendário
  const carouselHeight = screenHeight * 0.25; // 25% da altura da tela

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={screenWidth - 32} // 16px de margem de cada lado
        height={carouselHeight}
        autoPlay
        autoPlayInterval={3000}
        scrollAnimationDuration={1000}
        data={images}
        renderItem={({ item, index }: { item: ImageSourcePropType; index: number }) => (
          <View style={styles.card}>
            <Image 
              source={item} 
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    padding: 8, // Espaço interno para a imagem respirar
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
});