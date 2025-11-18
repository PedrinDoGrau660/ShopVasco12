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
  imagens: any[];
}

export default function MyCarousel({ imagens }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = Dimensions.get("window").width;

  if (!imagens || imagens.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.placeholderContainer}>
          <Image 
            source={require("../../assets/dvd.jpg")} 
            style={styles.placeholderImage} 
            resizeMode="contain"
          />
          <Text style={styles.noImagesText}>Imagem não disponível</Text>
        </View>
      </View>
    );
  }

  const handleThumbnailPress = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* CAROUSEL PRINCIPAL COM DESIGN PREMIUM */}
      <View style={styles.carouselWrapper}>
        <Carousel
          loop={imagens.length > 1}
          width={width * 0.92}
          height={380}
          autoPlay={false}
          data={imagens}
          onSnapToItem={(index) => setCurrentIndex(index)}
          defaultIndex={currentIndex}
          renderItem={({ item }: { item: ImageSourcePropType }) => (
            <View style={styles.imageCard}>
              <View style={styles.imageContainer}>
                <Image 
                  source={item} 
                  style={styles.mainImage}
                  resizeMode="contain"
                />
              </View>
              
              {/* OVERLAY DE NAVEGAÇÃO */}
              {imagens.length > 1 && (
                <>
                  <View style={styles.navOverlay}>
                    <Text style={styles.navText}>
                      {currentIndex + 1} / {imagens.length}
                    </Text>
                  </View>
                </>
              )}
            </View>
          )}
        />
      </View>
      
      {/* INDICADORES MODERNOS */}
      {imagens.length > 1 && (
        <View style={styles.paginationContainer}>
          <View style={styles.pagination}>
            {imagens.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === currentIndex && styles.paginationDotActive
                ]}
              />
            ))}
          </View>
        </View>
      )}

      {/* MINIATURAS ESTILIZADAS */}
      {imagens.length > 1 && (
        <View style={styles.thumbnailsWrapper}>
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
                  styles.thumbnailCard,
                  index === currentIndex && styles.thumbnailCardActive
                ]}
                onPress={() => handleThumbnailPress(index)}
              >
                <Image 
                  source={image} 
                  style={styles.thumbnailImage} 
                  resizeMode="contain"
                />
                {index === currentIndex && (
                  <View style={styles.thumbnailIndicator} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 5,
  },
  
  carouselWrapper: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingVertical: 10,
  },
  
  // CARD DA IMAGEM PRINCIPAL
  imageCard: {
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
    borderRadius: 16,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  imageContainer: {
    width: "100%",
    height: 320,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "rgba(20, 20, 20, 0.7)", // Fundo escuro sofisticado
  },
  
  mainImage: {
    width: "95%",
    height: "95%",
  },
  
  // NAVEGAÇÃO PREMIUM
  navOverlay: {
    position: 'absolute',
    top: 25,
    right: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  
  navText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  
  // PAGINAÇÃO MODERNA
  paginationContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  
  paginationDotActive: {
    backgroundColor: "#C00000",
    width: 20,
  },
  
  // MINIATURAS PREMIUM
  thumbnailsWrapper: {
    width: '100%',
    marginVertical: 15,
  },
  
  thumbnailsScrollContainer: {
    width: "100%",
    maxHeight: 70,
  },
  
  thumbnailsContent: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  
  thumbnailCard: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.1)",
    overflow: "hidden",
    backgroundColor: "rgba(30, 30, 30, 0.8)",
    padding: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  
  thumbnailCardActive: {
    borderColor: "#C00000",
    backgroundColor: "rgba(192, 0, 0, 0.1)",
    transform: [{ scale: 1.05 }],
  },
  
  thumbnailImage: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  
  thumbnailIndicator: {
    position: 'absolute',
    bottom: -2,
    left: '25%',
    width: '50%',
    height: 3,
    backgroundColor: '#C00000',
    borderRadius: 2,
  },
  
  // PLACEHOLDER ESTILIZADO
  placeholderContainer: {
    width: "100%",
    height: 350,
    backgroundColor: "rgba(30, 30, 30, 0.8)",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
  },
  
  placeholderImage: {
    width: "60%",
    height: "60%",
    opacity: 0.3,
  },
  
  noImagesText: {
    marginTop: 15,
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 14,
    fontWeight: '500',
  },
});