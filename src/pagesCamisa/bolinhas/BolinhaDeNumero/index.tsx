import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style"

// Números de páginas disponíveis
const availablePages = [
  { id: 1, number: "1" },
  { id: 2, number: "2" },
  { id: 3, number: "3" },
  { id: 4, number: "4" },
  { id: 5, number: "5" },
  { id: 6, number: "6" },
];

export default function Paginacao() {
  const [selectedPage, setSelectedPage] = useState("1");

  const handlePageSelect = (pageNumber: string) => {
    setSelectedPage(pageNumber);
  };

  return (
    <View style={style.container}>
          <View style={style.pagesSection}>
            
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={style.pagesContainer}
              contentContainerStyle={style.pagesContent}
            >
              {availablePages.map((page) => (
                <TouchableOpacity
                  key={page.id}
                  style={[
                    style.pageOption,
                    selectedPage === page.number && style.pageOptionSelected
                  ]}
                  onPress={() => handlePageSelect(page.number)}
                >
                  <Text style={[
                    style.pageNumber,
                    selectedPage === page.number && style.pageNumberSelected
                  ]}>
                    {page.number}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
    </View>
  );
}