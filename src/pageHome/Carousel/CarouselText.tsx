import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; // ← Adicionei Image

export default function CarouselTexto() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  
  // Array de slides - CORRIGIDO
  const slides = [
      { 
    tipo: 'imagem',
    conteudo: require('../../assets/globo.png'),
    texto: "Compre de qualquer lugar\ndo mundo"
  },
  { 
    tipo: 'imagem', 
    conteudo: require('../../assets/descontonormal.png'),
    texto: "Desconto para sócio torcedor" 
  },
  { 
    tipo: 'imagem',
    conteudo: require('../../assets/descontopix.png'),
    texto: "Desconto para pagamento no PIX"
  },

  ];

  // useEffect CORRIGIDO (usando slides.length)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceAtual((indiceAnterior) => 
        indiceAnterior === slides.length - 1 ? 0 : indiceAnterior + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.carouselTexto}>
      {slides[indiceAtual].tipo === 'texto' ? (
        <Text style={styles.textoSlide}>
          {slides[indiceAtual].conteudo}
        </Text>
      ) : (
        <View style={styles.slideComImagem}>
          <Image 
            source={slides[indiceAtual].conteudo} 
            style={styles.icone} // ← Mudei para 'icone'
          />
          <Text style={styles.textoSlide}>
            {slides[indiceAtual].texto}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  carouselTexto: {
    paddingVertical: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  textoSlide: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff', 
  },
  slideComImagem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icone: {
    width: 44,
    height: 44,
    marginRight: 8,
    marginTop: 0, 
  },
});