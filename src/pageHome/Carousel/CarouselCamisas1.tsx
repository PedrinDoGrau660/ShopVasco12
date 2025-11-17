import React, { useState } from "react";
import { 
  View, 
  Image, 
  Dimensions, 
  StyleSheet, 
  ImageSourcePropType, 
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

interface Props {
  imagens: any[]; // Array de imagens recebido como prop
}

export default function MyCarousel({ imagens }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = Dimensions.get("window").width;

  // Se não houver imagens, mostra um placeholder
  if (!imagens || imagens.length === 0) {
    return (
      <View style={styles.container}>
        <Image 
          source={require("../../assets/dvd.jpg")} 
          style={styles.mainImage} 
        />
        <Text style={styles.noImagesText}>Imagem não disponível</Text>
      </View>
    );
  }

  const handleThumbnailPress = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* Carousel principal */}
      <Carousel
        loop={imagens.length > 1}
        width={width * 0.9}
        height={250}
        autoPlay={false}
        data={imagens}
        onSnapToItem={(index) => setCurrentIndex(index)}
        defaultIndex={currentIndex}
        renderItem={({ item }: { item: ImageSourcePropType }) => (
          <Image source={item} style={styles.mainImage} />
        )}
      />
      
      {/* Indicadores de página - só mostra se tiver mais de 1 imagem */}
      {imagens.length > 1 && (
        <View style={styles.pagination}>
          {imagens.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentIndex ? styles.paginationDotActive : styles.paginationDotInactive
              ]}
            />
          ))}
        </View>
      )}

      {/* Miniaturas das imagens - só mostra se tiver mais de 1 imagem */}
      {imagens.length > 1 && (
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.thumbnailsScrollContainer}
          contentContainerStyle={styles.thumbnailsContent}
        >
          {imagens.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.thumbnail,
                index === currentIndex && styles.thumbnailActive
              ]}
              onPress={() => handleThumbnailPress(index)}
            >
              <Image 
                source={image} 
                style={styles.thumbnailImage} 
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  mainImage: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
    borderRadius: 8,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: "#000",
  },
  paginationDotInactive: {
    backgroundColor: "#CCC",
  },
  thumbnailsScrollContainer: {
    width: "100%",
    marginVertical: 16,
  },
  thumbnailsContent: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "transparent",
    overflow: "hidden",
  },
  thumbnailActive: {
    borderColor: "#000",
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  noImagesText: {
    marginTop: 10,
    color: "#666",
    fontSize: 14,
  },
});