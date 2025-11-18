import React from "react";
import { 
  View, 
  Image, 
  Dimensions, 
  StyleSheet, 
  ImageSourcePropType, 
  Text 
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

// Array de objetos contendo imagem e mensagem
const carouselData = [
  {
    image: require("../image/image1.png"),
    message: "Entrando em campo com o sangue no olho"
  },
  {
    image: require("../image/image2.png"),
    message: "Artilheiro de 2021"
  },
  {
    image: require("../image/image3.png"),
    message: "Zagueiro destaque das categorias de base"
  }
];

export default function MyCarousel() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={350}
        height={350}
        autoPlay
        autoPlayInterval={2500}
        scrollAnimationDuration={1000}
        data={carouselData}
        renderItem={({ item }: { item: { image: ImageSourcePropType, message: string } }) => (
          <View style={styles.slideContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>{item.message}</Text>
            </View>
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
  },
  slideContainer: {
    position: "relative",
    width: "100%",
    height: 350,
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
    borderRadius: 10,
  },
  messageContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
    borderRadius: 5,
  },
  messageText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});