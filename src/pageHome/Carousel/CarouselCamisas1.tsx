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

const images: ImageSourcePropType[] = [
  require("../../assets/dvd.jpg"),
  require("../../assets/dvd.jpg"),
  require("../../assets/dvd.jpg"),
  require("../../assets/dvd.jpg"),
];

export default function MyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = Dimensions.get("window").width;

  const handleThumbnailPress = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* Carousel principal */}
      <Carousel
        loop
        width={width * 0.9}
        height={250}
        autoPlay={false}
        data={images}
        onSnapToItem={(index) => setCurrentIndex(index)}
        defaultIndex={currentIndex}
        renderItem={({ item }: { item: ImageSourcePropType }) => (
          <Image source={item} style={styles.mainImage} />
        )}
      />
      
      {/* Indicadores de página */}
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex ? styles.paginationDotActive : styles.paginationDotInactive
            ]}
          />
        ))}
      </View>

      {/* Miniaturas das imagens alinhadas à esquerda */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.thumbnailsScrollContainer}
        contentContainerStyle={styles.thumbnailsContent}
      >
        {images.map((image, index) => (
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
});