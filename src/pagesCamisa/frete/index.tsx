import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const FreteCalculator = () => {
  const [cepPart1, setCepPart1] = useState('');
  const [cepPart2, setCepPart2] = useState('');
  const [calculando, setCalculando] = useState(false);

  const calcularFrete = async () => {
    // Validação dos CEPs
    if (cepPart1.length !== 5 || cepPart2.length !== 3) {
      Alert.alert('Erro', 'Por favor, digite um CEP válido (5 dígitos + 3 dígitos)');
      return;
    }

    const cepCompleto = `${cepPart1}-${cepPart2}`;
    
    setCalculando(true);

    try {
      // Simulação de API - cálculo de frete
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Dados fictícios para demonstração
      const prazos = ['3-5 dias úteis', '5-7 dias úteis', '7-10 dias úteis'];
      const valores = ['R$ 15,90', 'R$ 12,50', 'R$ 25,00', 'R$ 18,75'];
      
      const prazoSelecionado = prazos[Math.floor(Math.random() * prazos.length)];
      const valorSelecionado = valores[Math.floor(Math.random() * valores.length)];

      Alert.alert(
        '📦 Cálculo de Frete',
        `**CEP:** ${cepCompleto}\n\n**Prazo de entrega:** ${prazoSelecionado}\n**Valor do frete:** ${valorSelecionado}`,
        [{ text: 'OK', style: 'default' }]
      );
      
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível calcular o frete. Verifique sua conexão e tente novamente.');
    } finally {
      setCalculando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cepLabel}>CEP</Text>
      
      <TextInput
        placeholder="00000"
        placeholderTextColor="#ddd"
        style={styles.inputCep1}
        keyboardType="number-pad"
        maxLength={5}
        value={cepPart1}
        onChangeText={setCepPart1}
      />
      
      <Text style={styles.separator}>-</Text>
      
      <TextInput
        placeholder="000"
        placeholderTextColor="#ddd"
        style={styles.inputCep2}
        keyboardType="number-pad"
        maxLength={3}
        value={cepPart2}
        onChangeText={setCepPart2}
      />
     
      <TouchableOpacity 
        onPress={calcularFrete} 
        disabled={calculando}
        style={[
          styles.botaoCalcular,
          calculando && styles.botaoDesabilitado
        ]}
      >
        <Text style={styles.textoBotao}>
          {calculando ? 'Calculando...' : 'Calcular frete'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  cepLabel: {
    color: "#fff",
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
  },
  inputCep1: {
    width: 70,
    height: 45,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#fff",
    fontSize: 16,
    textAlign: 'center',
    marginRight: 5,
  },
  inputCep2: {
    width: 50,
    height: 45,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 8,
    paddingHorizontal: 8,
    color: "#fff",
    fontSize: 16,
    textAlign: 'center',
    marginRight: 15,
  },
  separator: {
    color: "#fff",
    fontSize: 18,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  botaoCalcular: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  botaoDesabilitado: {
    opacity: 0.6,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 14,
    fontWeight: '500',
  },
});

export default FreteCalculator;