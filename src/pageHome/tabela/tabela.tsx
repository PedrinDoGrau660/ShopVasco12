// src/screens/Tabela/Tabela.tsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Tabela() {
  const navigation = useNavigation();

  // Dados mockados da tabela do Brasileirão Série A 2024
  const tabela = [
    { posicao: 1, time: "Flamengo", pontos: 71, jogos: 38, vitorias: 22, empates: 5, derrotas: 11, saldo: 35 },
    { posicao: 2, time: "Palmeiras", pontos: 70, jogos: 38, vitorias: 21, empates: 7, derrotas: 10, saldo: 32 },
    { posicao: 3, time: "São Paulo", pontos: 68, jogos: 38, vitorias: 20, empates: 8, derrotas: 10, saldo: 28 },
    { posicao: 4, time: "Atlético-MG", pontos: 66, jogos: 38, vitorias: 19, empates: 9, derrotas: 10, saldo: 25 },
    { posicao: 5, time: "Grêmio", pontos: 64, jogos: 38, vitorias: 18, empates: 10, derrotas: 10, saldo: 22 },
    { posicao: 6, time: "Fluminense", pontos: 62, jogos: 38, vitorias: 17, empates: 11, derrotas: 10, saldo: 18 },
    { posicao: 7, time: "Botafogo", pontos: 61, jogos: 38, vitorias: 17, empates: 10, derrotas: 11, saldo: 15 },
    { posicao: 8, time: "Fortaleza", pontos: 59, jogos: 38, vitorias: 16, empates: 11, derrotas: 11, saldo: 12 },
    { posicao: 9, time: "Internacional", pontos: 57, jogos: 38, vitorias: 15, empates: 12, derrotas: 11, saldo: 10 },
    { posicao: 10, time: "Corinthians", pontos: 55, jogos: 38, vitorias: 14, empates: 13, derrotas: 11, saldo: 8 },
    { posicao: 11, time: "Cruzeiro", pontos: 53, jogos: 38, vitorias: 14, empates: 11, derrotas: 13, saldo: 5 },
    { posicao: 12, time: "Vasco da Gama", pontos: 51, jogos: 38, vitorias: 13, empates: 12, derrotas: 13, saldo: 2 },
    { posicao: 13, time: "Bahia", pontos: 49, jogos: 38, vitorias: 13, empates: 10, derrotas: 15, saldo: -3 },
    { posicao: 14, time: "Santos", pontos: 47, jogos: 38, vitorias: 12, empates: 11, derrotas: 15, saldo: -8 },
    { posicao: 15, time: "Red Bull Bragantino", pontos: 45, jogos: 38, vitorias: 11, empates: 12, derrotas: 15, saldo: -12 },
    { posicao: 16, time: "Coritiba", pontos: 43, jogos: 38, vitorias: 10, empates: 13, derrotas: 15, saldo: -15 },
    { posicao: 17, time: "América-MG", pontos: 41, jogos: 38, vitorias: 9, empates: 14, derrotas: 15, saldo: -18 },
    { posicao: 18, time: "Goiás", pontos: 39, jogos: 38, vitorias: 9, empates: 12, derrotas: 17, saldo: -22 },
    { posicao: 19, time: "Cuiabá", pontos: 37, jogos: 38, vitorias: 8, empates: 13, derrotas: 17, saldo: -25 },
    { posicao: 20, time: "Athletico-PR", pontos: 35, jogos: 38, vitorias: 7, empates: 14, derrotas: 17, saldo: -28 },
  ];

  const getPosicaoStyle = (posicao: number) => {
    if (posicao <= 4) return styles.posicaoLibertadores; // Libertadores
    if (posicao <= 6) return styles.posicaoPreLibertadores; // Pré-Libertadores
    if (posicao <= 12) return styles.posicaoSulAmericana; // Sul-Americana
    if (posicao <= 16) return styles.posicaoNeutra; // Neutro
    return styles.posicaoRebaixamento; // Rebaixamento
  };

  const getTimeStyle = (time: string) => {
    if (time === "Vasco da Gama") return styles.timeVasco;
    return styles.timeNormal;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tabela do Brasileirão</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Legenda */}
        <View style={styles.legenda}>
          <View style={styles.legendaItem}>
            <View style={[styles.legendaColor, { backgroundColor: '#00B894' }]} />
            <Text style={styles.legendaText}>Libertadores</Text>
          </View>
          <View style={styles.legendaItem}>
            <View style={[styles.legendaColor, { backgroundColor: '#74B9FF' }]} />
            <Text style={styles.legendaText}>Pré-Libertadores</Text>
          </View>
          <View style={styles.legendaItem}>
            <View style={[styles.legendaColor, { backgroundColor: '#FDCB6E' }]} />
            <Text style={styles.legendaText}>Sul-Americana</Text>
          </View>
          <View style={styles.legendaItem}>
            <View style={[styles.legendaColor, { backgroundColor: '#E17055' }]} />
            <Text style={styles.legendaText}>Rebaixamento</Text>
          </View>
        </View>

        {/* Cabeçalho da Tabela */}
        <View style={styles.cabecalho}>
          <Text style={styles.colPos}>#</Text>
          <Text style={styles.colTime}>Time</Text>
          <Text style={styles.colPts}>PTS</Text>
          <Text style={styles.colJogos}>J</Text>
          <Text style={styles.colVitorias}>V</Text>
          <Text style={styles.colEmpates}>E</Text>
          <Text style={styles.colDerrotas}>D</Text>
          <Text style={styles.colSaldo}>SG</Text>
        </View>

        {/* Lista de Times */}
        {tabela.map((time) => (
          <View key={time.posicao} style={[styles.linha, getPosicaoStyle(time.posicao)]}>
            <Text style={[styles.colPos, getPosicaoStyle(time.posicao)]}>{time.posicao}</Text>
            <Text style={[styles.colTime, getTimeStyle(time.time)]}>{time.time}</Text>
            <Text style={styles.colPts}>{time.pontos}</Text>
            <Text style={styles.colJogos}>{time.jogos}</Text>
            <Text style={styles.colVitorias}>{time.vitorias}</Text>
            <Text style={styles.colEmpates}>{time.empates}</Text>
            <Text style={styles.colDerrotas}>{time.derrotas}</Text>
            <Text style={styles.colSaldo}>{time.saldo > 0 ? `+${time.saldo}` : time.saldo}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  legenda: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
  },
  legendaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    flexBasis: '48%',
  },
  legendaColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendaText: {
    fontSize: 10,
    color: '#666',
  },
  cabecalho: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
    marginBottom: 8,
  },
  linha: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    alignItems: 'center',
  },
  colPos: {
    width: 30,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  colTime: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
  },
  colPts: {
    width: 35,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  colJogos: {
    width: 25,
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
  colVitorias: {
    width: 25,
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
  colEmpates: {
    width: 25,
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
  colDerrotas: {
    width: 25,
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
  colSaldo: {
    width: 35,
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
  posicaoLibertadores: {
    backgroundColor: 'rgba(0, 184, 148, 0.1)',
  },
  posicaoPreLibertadores: {
    backgroundColor: 'rgba(116, 185, 255, 0.1)',
  },
  posicaoSulAmericana: {
    backgroundColor: 'rgba(253, 203, 110, 0.1)',
  },
  posicaoNeutra: {
    backgroundColor: 'transparent',
  },
  posicaoRebaixamento: {
    backgroundColor: 'rgba(225, 112, 85, 0.1)',
  },
  timeVasco: {
    fontWeight: '700',
    color: '#000',
  },
  timeNormal: {
    color: '#333',
  },
});