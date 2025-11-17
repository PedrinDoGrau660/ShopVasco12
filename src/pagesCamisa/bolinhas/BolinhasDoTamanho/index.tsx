import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";

interface Props {
  tamanhos: string[]; // Recebe os tamanhos como prop
}

export default function Tamanho({ tamanhos }: Props) {
  const [selectedSize, setSelectedSize] = useState(tamanhos[0] || "");

  const handleSizeSelect = (sizeName: string) => {
    setSelectedSize(sizeName);
  };

  // Se não houver tamanhos, não renderiza nada
  if (!tamanhos || tamanhos.length === 0) {
    return null;
  }

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
          {tamanhos.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={[
                style.sizeOption,
                selectedSize === size && style.sizeOptionSelected
              ]}
              onPress={() => handleSizeSelect(size)}
            >
              <Text style={[
                style.sizeText,
                selectedSize === size && style.sizeTextSelected
              ]}>
                {size}
              </Text>
              {selectedSize === size && (
                <Text style={style.sizeCheckmark}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}