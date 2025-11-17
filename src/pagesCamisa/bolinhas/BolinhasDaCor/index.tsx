// bolinhas/BolinhasDaCor/index.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";

interface Props {
  cores: string[]; // Recebe as cores como prop
  onColorSelect?: (colorName: string) => void; // Callback opcional
}

export default function Cores({ cores, onColorSelect }: Props) {
  const [selectedColor, setSelectedColor] = useState(cores[0] || "");

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
    // Chama o callback se existir
    if (onColorSelect) {
      onColorSelect(colorName);
    }
  };

  // Se não houver cores, não renderiza nada
  if (!cores || cores.length === 0) {
    return null;
  }

  // Mapeia nomes de cores para valores hex
  const getColorValue = (colorName: string): string => {
    const colorMap: { [key: string]: string } = {
      "Preto": "#000000",
      "Branco": "#FFFFFF",
      "Azul": "#0000FF", 
      "Vermelho": "#FF0000",
      "Verde": "#00FF00",
      "Amarelo": "#FFFF00",
      "Rosa": "#FFC0CB",
      "Cinza": "#808080",
      "Laranja": "#FFA500",
      "Roxo": "#800080",
      "Marrom": "#8B4513",
      "Bege": "#F5F5DC"
    };
    
    return colorMap[colorName] || "#CCCCCC"; // Cor padrão se não encontrar
  };

  return (
    <View style={style.container}>
      <View style={style.colorsSection}>
        <Text style={style.colorsTitle}>Cores Disponíveis ({selectedColor})</Text>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={style.colorsContainer}
          contentContainerStyle={style.colorsContent}
        >
          {cores.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                style.colorOption,
                { backgroundColor: getColorValue(color) },
                selectedColor === color && style.colorOptionSelected
              ]}
              onPress={() => handleColorSelect(color)}
            >
              {selectedColor === color && (
                <Text style={style.colorCheckmark}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}