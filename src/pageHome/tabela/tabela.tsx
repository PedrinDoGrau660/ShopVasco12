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

  // Dados da tabela conforme a imagem - Temporada 2025
  const tabela = [
    { posicao: 1, time: "Flamengo", pontos: 71, jogos: 33, vitorias: 21, empates: 8, derrotas: 4, golsPro: 69, golsContra: 21, saldo: 48 },
    { posicao: 2, time: "Palmeiras", pontos: 68, jogos: 33, vitorias: 21, empates: 5, derrotas: 7, golsPro: 58, golsContra: 29, saldo: 29 },
    { posicao: 3, time: "Cruzeiro", pontos: 64, jogos: 33, vitorias: 18, empates: 10, derrotas: 5, golsPro: 46, golsContra: 22, saldo: 24 },
    { posicao: 4, time: "Mirassol", pontos: 59, jogos: 33, vitorias: 16, empates: 11, derrotas: 6, golsPro: 54, golsContra: 33, saldo: 21 },
    { posicao: 5, time: "Bahia", pontos: 53, jogos: 33, vitorias: 15, empates: 8, derrotas: 10, golsPro: 44, golsContra: 40, saldo: 4 },
    { posicao: 6, time: "Botafogo", pontos: 52, jogos: 33, vitorias: 14, empates: 10, derrotas: 9, golsPro: 44, golsContra: 28, saldo: 16 },
    { posicao: 7, time: "Fluminense", pontos: 51, jogos: 33, vitorias: 15, empates: 6, derrotas: 12, golsPro: 38, golsContra: 37, saldo: 1 },
    { posicao: 8, time: "Braganfino", pontos: 45, jogos: 34, vitorias: 13, empates: 6, derrotas: 15, golsPro: 40, golsContra: 50, saldo: -10 },
    { posicao: 9, time: "São Paulo", pontos: 46, jogos: 33, vitorias: 12, empates: 9, derrotas: 12, golsPro: 37, golsContra: 36, saldo: 1 },
    { posicao: 10, time: "Atlético-MG", pontos: 44, jogos: 34, vitorias: 11, empates: 11, derrotas: 12, golsPro: 37, golsContra: 39, saldo: -2 },
    { posicao: 11, time: "Vasco da Gama", pontos: 42, jogos: 33, vitorias: 12, empates: 6, derrotas: 15, golsPro: 50, golsContra: 49, saldo: 1 },
    { posicao: 12, time: "Ceará SC", pontos: 42, jogos: 33, vitorias: 11, empates: 9, derrotas: 13, golsPro: 31, golsContra: 30, saldo: 1 },
    { posicao: 13, time: "Corinthians", pontos: 42, jogos: 33, vitorias: 11, empates: 9, derrotas: 13, golsPro: 35, golsContra: 38, saldo: -3 },
    { posicao: 14, time: "Grêmio", pontos: 40, jogos: 33, vitorias: 10, empates: 10, derrotas: 13, golsPro: 35, golsContra: 43, saldo: -8 },
    { posicao: 15, time: "Internacional", pontos: 37, jogos: 33, vitorias: 9, empates: 10, derrotas: 14, golsPro: 37, golsContra: 46, saldo: -9 },
    { posicao: 16, time: "Santos", pontos: 36, jogos: 33, vitorias: 9, empates: 9, derrotas: 15, golsPro: 34, golsContra: 48, saldo: -14 },
    { posicao: 17, time: "EC Vitória", pontos: 36, jogos: 33, vitorias: 8, empates: 11, derrotas: 14, golsPro: 29, golsContra: 47, saldo: -18 },
    { posicao: 18, time: "Juventude", pontos: 32, jogos: 33, vitorias: 9, empates: 5, derrotas: 19, golsPro: 29, golsContra: 59, saldo: -30 },
    { posicao: 19, time: "Fortaleza", pontos: 31, jogos: 33, vitorias: 7, empates: 10, derrotas: 16, golsPro: 34, golsContra: 51, saldo: -17 },
    { posicao: 20, time: "Sport Recife", pontos: 17, jogos: 33, vitorias: 2, empates: 11, derrotas: 20, golsPro: 25, golsContra: 60, saldo: -35 },
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
        <Text style={styles.headerTitle}>Classificação</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Informações da Temporada */}
        <View style={styles.infoTemporada}>
          <Text style={styles.temporadaTitle}>Temporada</Text>
          <Text style={styles.temporadaAno}>2025</Text>
          <Text style={styles.atualizacao}>Última atualização: 18/11/2025</Text>
        </View>

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
          <Text style={styles.colTime}>Clube</Text>
          <Text style={styles.colPts}>Pts</Text>
          <Text style={styles.colJogos}>PJ</Text>
          <Text style={styles.colVitorias}>VIT</Text>
          <Text style={styles.colEmpates}>E</Text>
          <Text style={styles.colDerrotas}>DER</Text>
          <Text style={styles.colGolsPro}>GP</Text>
          <Text style={styles.colGolsContra}>GC</Text>
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
            <Text style={styles.colGolsPro}>{time.golsPro}</Text>
            <Text style={styles.colGolsContra}>{time.golsContra}</Text>
            <Text style={styles.colSaldo}>{time.saldo > 0 ? `+${time.saldo}` : time.saldo}</Text>
          </View>
        ))}

        {/* Informações de Qualificação */}
        <View style={styles.qualificacao}>
          <Text style={styles.qualificacaoTitle}>Qualificação/Rebaixamento</Text>
          <View style={styles.qualificacaoLista}>
            <View style={styles.qualificacaoItem}>
              <View style={[styles.qualificacaoCor, { backgroundColor: '#00B894' }]} />
              <Text style={styles.qualificacaoTexto}>Fase de grupos da CONMEBOL Libertadores</Text>
            </View>
            <View style={styles.qualificacaoItem}>
              <View style={[styles.qualificacaoCor, { backgroundColor: '#74B9FF' }]} />
              <Text style={styles.qualificacaoTexto}>Qualificadoras da CONMEBOL Libertadores</Text>
            </View>
            <View style={styles.qualificacaoItem}>
              <View style={[styles.qualificacaoCor, { backgroundColor: '#FDCB6E' }]} />
              <Text style={styles.qualificacaoTexto}>Fase de grupos da CONMEBOL Sudamericana</Text>
            </View>
            <View style={styles.qualificacaoItem}>
              <View style={[styles.qualificacaoCor, { backgroundColor: '#E17055' }]} />
              <Text style={styles.qualificacaoTexto}>Rebaixamento</Text>
            </View>
          </View>
        </View>

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
  infoTemporada: {
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
  },
  temporadaTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  temporadaAno: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  atualizacao: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
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
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    alignItems: 'center',
  },
  colPos: {
    width: 25,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  colTime: {
    flex: 1,
    fontSize: 12,
    marginLeft: 4,
  },
  colPts: {
    width: 30,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  colJogos: {
    width: 25,
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
  },
  colVitorias: {
    width: 25,
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
  },
  colEmpates: {
    width: 20,
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
  },
  colDerrotas: {
    width: 25,
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
  },
  colGolsPro: {
    width: 25,
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
  },
  colGolsContra: {
    width: 25,
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
  },
  colSaldo: {
    width: 30,
    fontSize: 10,
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
  qualificacao: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
  },
  qualificacaoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  qualificacaoLista: {
    gap: 6,
  },
  qualificacaoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qualificacaoCor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  qualificacaoTexto: {
    fontSize: 12,
    color: '#333',
  },
});