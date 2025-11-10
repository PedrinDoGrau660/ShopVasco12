import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";

// Tamanhos disponíveis
const availableSizes = [
  { id: 1, name: "10", value: "10" },
  { id: 2, name: "12", value: "12" },
  { id: 3, name: "14", value: "14" },
  { id: 4, name: "16", value: "16" },
  { id: 5, name: "P", value: "P" },
  { id: 6, name: "M", value: "M" },
  { id: 7, name: "G", value: "G" },
  { id: 8, name: "GG", value: "GG" },
];

export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState("10");

  const handleSizeSelect = (sizeName: string) => {
    setSelectedSize(sizeName);
  };

  return (
    <View style={style.container}>
      <View style={style.sizesSection}>
        <Text style={style.sizesTitle}>Tamanhos Disponíveis ({selectedSize})</Text>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={style.sizesContainer}
          contentContainerStyle={style.sizesContent}
        >
          {availableSizes.map((size) => (
            <TouchableOpacity
              key={size.id}
              style={[
                style.sizeOption,
                selectedSize === size.name && style.sizeOptionSelected
              ]}
              onPress={() => handleSizeSelect(size.name)}
            >
              <Text style={[
                style.sizeText,
                selectedSize === size.name && style.sizeTextSelected
              ]}>
                {size.name}
              </Text>
              {selectedSize === size.name && (
                <Text style={style.sizeCheckmark}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}