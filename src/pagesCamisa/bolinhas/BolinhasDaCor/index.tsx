import React, { useState } from "react";
import { View, Text,  TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style"


// Cores disponíveis
const availableColors = [
  { id: 1, name: "Preto", value: "#000000" },
  { id: 2, name: "Branco", value: "#FFFFFF" },
];

export default function Camisa1() {
  const [selectedColor, setSelectedColor] = useState("Preto");

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
  };

  return (
    <View style={style.container}>
          <View style={style.colorsSection}>
            <Text style={style.colorsTitle}>Cores Disponiveis ({selectedColor})</Text>
            
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={style.colorsContainer}
              contentContainerStyle={style.colorsContent}
            >
              {availableColors.map((color) => (
                <TouchableOpacity
                  key={color.id}
                  style={[
                    style.colorOption,
                    { backgroundColor: color.value },
                    selectedColor === color.name && style.colorOptionSelected
                  ]}
                  onPress={() => handleColorSelect(color.name)}
                >
                  {selectedColor === color.name && (
                    <Text style={style.colorCheckmark}>✓</Text>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
    </View>
  );
}