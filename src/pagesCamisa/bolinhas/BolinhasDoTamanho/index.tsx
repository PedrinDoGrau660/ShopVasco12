import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";

interface Props {
  tamanhos: string[]; // Recebe os tamanhos como prop
  onSizeSelect?: (size: string) => void;
  selectedSize?: string;
}

export default function Tamanho({ tamanhos, onSizeSelect, selectedSize }: Props) {
  const [sizeSelecionado, setSizeSelecionado] = useState(selectedSize || tamanhos[0] || "");

  const handleSizeSelect = (sizeName: string) => {
    setSizeSelecionado(sizeName);
    if (onSizeSelect) {
      onSizeSelect(sizeName); // Corrigido: era 'tamanho', deve ser 'sizeName'
    }
  };

  // Se não houver tamanhos, não renderiza nada
  if (!tamanhos || tamanhos.length === 0) {
    return null;
  }

  return (
    <View style={style.container}>
      <View style={style.sizesSection}>
        <Text style={style.sizesTitle}>Tamanhos Disponíveis ({sizeSelecionado})</Text>
        
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
                sizeSelecionado === size && style.sizeOptionSelected
              ]}
              onPress={() => handleSizeSelect(size)}
            >
              <Text style={[
                style.sizeText,
                sizeSelecionado === size && style.sizeTextSelected
              ]}>
                {size}
              </Text>
              {sizeSelecionado === size && (
                <Text style={style.sizeCheckmark}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}