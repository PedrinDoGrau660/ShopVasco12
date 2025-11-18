// components/SelecaoConjunto.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

interface OpcaoCamisa {
  id: number;
  nome: string;
  imagens: any[];
  coresDisponiveis: string[];
}

interface Props {
  opcoesCamisas: OpcaoCamisa[];
  onCamisasSelecionadas: (camisas: number[]) => void;
}

export default function SelecaoConjunto({ opcoesCamisas, onCamisasSelecionadas }: Props) {
  const [camisasSelecionadas, setCamisasSelecionadas] = useState<number[]>([]);

  const toggleCamisa = (camisaId: number) => {
    let novasSelecionadas: number[];

    if (camisasSelecionadas.includes(camisaId)) {
      // Remove a camisa se já estiver selecionada
      novasSelecionadas = camisasSelecionadas.filter(id => id !== camisaId);
    } else {
      // Adiciona a camisa se não estiver selecionada (máximo 2)
      if (camisasSelecionadas.length < 2) {
        novasSelecionadas = [...camisasSelecionadas, camisaId];
      } else {
        // Substitui a primeira selecionada se já tiver 2
        novasSelecionadas = [camisasSelecionadas[1], camisaId];
      }
    }

    setCamisasSelecionadas(novasSelecionadas);
    onCamisasSelecionadas(novasSelecionadas);
  };

  const getCamisaNome = (id: number) => {
    return opcoesCamisas.find(camisa => camisa.id === id)?.nome || '';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ESCOLHA 2 CAMISAS</Text>
      <Text style={styles.subtitulo}>
        {camisasSelecionadas.length}/2 selecionadas
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.opcoesContainer}>
          {opcoesCamisas.map((camisa) => (
            <TouchableOpacity
              key={camisa.id}
              style={[
                styles.camisaCard,
                camisasSelecionadas.includes(camisa.id) && styles.camisaCardSelecionada
              ]}
              onPress={() => toggleCamisa(camisa.id)}
            >
              <Image 
                source={camisa.imagens[0]} 
                style={styles.camisaImage}
                resizeMode="contain"
              />
              
              <View style={styles.camisaInfo}>
                <Text 
                  style={[
                    styles.camisaNome,
                    camisasSelecionadas.includes(camisa.id) && styles.camisaNomeSelecionada
                  ]}
                  numberOfLines={2}
                >
                  {camisa.nome}
                </Text>
                
                <View style={styles.coresContainer}>
                  {camisa.coresDisponiveis.map((cor, index) => (
                    <View
                      key={index}
                      style={[
                        styles.bolinhaCor,
                        { backgroundColor: cor.toLowerCase() }
                      ]}
                    />
                  ))}
                </View>

                {camisasSelecionadas.includes(camisa.id) && (
                  <View style={styles.selecionadoBadge}>
                    <Text style={styles.selecionadoText}>✓</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* CAMISAS SELECIONADAS */}
      {camisasSelecionadas.length > 0 && (
        <View style={styles.selecionadasContainer}>
          <Text style={styles.selecionadasTitulo}>Suas camisas:</Text>
          <View style={styles.selecionadasLista}>
            {camisasSelecionadas.map((id, index) => (
              <View key={id} style={styles.selecionadaItem}>
                <Text style={styles.selecionadaTexto}>
                  {index + 1}. {getCamisaNome(id)}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitulo: {
    color: '#C00000',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '600',
  },
  scrollContainer: {
    marginBottom: 10,
  },
  opcoesContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  camisaCard: {
    width: 140,
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  camisaCardSelecionada: {
    borderColor: '#C00000',
    backgroundColor: 'rgba(192, 0, 0, 0.1)',
    transform: [{ scale: 1.02 }],
  },
  camisaImage: {
    width: '100%',
    height: 100,
    borderRadius: 6,
    marginBottom: 8,
  },
  camisaInfo: {
    flex: 1,
  },
  camisaNome: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    textAlign: 'center',
  },
  camisaNomeSelecionada: {
    color: '#C00000',
  },
  coresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginBottom: 5,
  },
  bolinhaCor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  selecionadoBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#C00000',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selecionadoText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  selecionadasContainer: {
    backgroundColor: 'rgba(40, 40, 40, 0.9)',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#C00000',
  },
  selecionadasTitulo: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  selecionadasLista: {
    gap: 4,
  },
  selecionadaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selecionadaTexto: {
    color: '#CCCCCC',
    fontSize: 12,
  },
});