import React from "react";
import { View, Image, Dimensions, StyleSheet, ImageSourcePropType } from "react-native";
import Carousel from "react-native-reanimated-carousel";



const images: ImageSourcePropType[] = [
  require("../../assets/dvd.jpg"),
  require("../../assets/dvd.jpg"),
  require("../../assets/dvd.jpg"),
];

export default function MyCarousel() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={350}
        height={200}
        autoPlay
        autoPlayInterval={2500}
        scrollAnimationDuration={1000}
        data={images}
        renderItem={({ item }: { item: ImageSourcePropType }) => (
          <Image source={item} style={styles.image} />
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
  image: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },
});
