// src/screens/Estatisticas/Estatisticas.tsx
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

export default function Estatisticas() {
  const navigation = useNavigation();

  // Dados mockados das estatísticas do Vasco
  const estatisticas = {
    temporada: "2024",
    posicao: 12,
    pontos: 51,
    aproveitamento: "45%",
    jogos: 38,
    vitorias: 13,
    empates: 12,
    derrotas: 13,
    golsPro: 42,
    golsContra: 40,
    saldoGols: 2,
    cartoesAmarelos: 78,
    cartoesVermelhos: 5,
    jogadorArtilheiro: "Pedro Raul",
    golsArtilheiro: 12,
    jogadorAssistencias: "Payet",
    assistencias: 8,
  };

  const estatisticasCasa = {
    vitorias: 8,
    empates: 6,
    derrotas: 4,
    golsPro: 25,
    golsContra: 16,
  };

  const estatisticasFora = {
    vitorias: 5,
    empates: 6,
    derrotas: 9,
    golsPro: 17,
    golsContra: 24,
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Estatísticas do Vasco</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Resumo da Temporada */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resumo da Temporada 2024</Text>
          <View style={styles.resumoGrid}>
            <View style={styles.resumoItem}>
              <Text style={styles.resumoValor}>{estatisticas.posicao}º</Text>
              <Text style={styles.resumoLabel}>Posição</Text>
            </View>
            <View style={styles.resumoItem}>
              <Text style={styles.resumoValor}>{estatisticas.pontos}</Text>
              <Text style={styles.resumoLabel}>Pontos</Text>
            </View>
            <View style={styles.resumoItem}>
              <Text style={styles.resumoValor}>{estatisticas.aproveitamento}</Text>
              <Text style={styles.resumoLabel}>Aproveitamento</Text>
            </View>
          </View>
        </View>

        {/* Desempenho Geral */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Desempenho Geral</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{estatisticas.jogos}</Text>
              <Text style={styles.statLabel}>Jogos</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, styles.vitoria]}>{estatisticas.vitorias}</Text>
              <Text style={styles.statLabel}>Vitórias</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, styles.empate]}>{estatisticas.empates}</Text>
              <Text style={styles.statLabel}>Empates</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, styles.derrota]}>{estatisticas.derrotas}</Text>
              <Text style={styles.statLabel}>Derrotas</Text>
            </View>
          </View>
        </View>

        {/* Gols */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Estatísticas de Gols</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, styles.golPro]}>{estatisticas.golsPro}</Text>
              <Text style={styles.statLabel}>Gols Pró</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, styles.golContra]}>{estatisticas.golsContra}</Text>
              <Text style={styles.statLabel}>Gols Contra</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, styles.saldoPositivo]}>{estatisticas.saldoGols}</Text>
              <Text style={styles.statLabel}>Saldo</Text>
            </View>
          </View>
        </View>

        {/* Desempenho Casa x Fora */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Casa vs Fora</Text>
          <View style={styles.comparacao}>
            <View style={styles.local}>
              <Text style={styles.localTitle}>🏠 Em Casa</Text>
              <View style={styles.localStats}>
                <Text style={styles.localStat}>{estatisticasCasa.vitorias}V</Text>
                <Text style={styles.localStat}>{estatisticasCasa.empates}E</Text>
                <Text style={styles.localStat}>{estatisticasCasa.derrotas}D</Text>
              </View>
              <Text style={styles.localGols}>{estatisticasCasa.golsPro}:{estatisticasCasa.golsContra}</Text>
            </View>
            
            <View style={styles.divisoria} />
            
            <View style={styles.local}>
              <Text style={styles.localTitle}>✈️ Fora</Text>
              <View style={styles.localStats}>
                <Text style={styles.localStat}>{estatisticasFora.vitorias}V</Text>
                <Text style={styles.localStat}>{estatisticasFora.empates}E</Text>
                <Text style={styles.localStat}>{estatisticasFora.derrotas}D</Text>
              </View>
              <Text style={styles.localGols}>{estatisticasFora.golsPro}:{estatisticasFora.golsContra}</Text>
            </View>
          </View>
        </View>

        {/* Artilharia e Assistências */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Destaques Individuais</Text>
          <View style={styles.destaques}>
            <View style={styles.destaqueItem}>
              <Ionicons name="football" size={24} color="#FF3B30" />
              <View style={styles.destaqueInfo}>
                <Text style={styles.destaqueLabel}>Artilheiro</Text>
                <Text style={styles.destaqueValue}>{estatisticas.jogadorArtilheiro}</Text>
                <Text style={styles.destaqueStats}>{estatisticas.golsArtilheiro} gols</Text>
              </View>
            </View>
            
            <View style={styles.destaqueItem}>
              <Ionicons name="share" size={24} color="#007AFF" />
              <View style={styles.destaqueInfo}>
                <Text style={styles.destaqueLabel}>Assistências</Text>
                <Text style={styles.destaqueValue}>{estatisticas.jogadorAssistencias}</Text>
                <Text style={styles.destaqueStats}>{estatisticas.assistencias} assistências</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Disciplina */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Disciplina</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, styles.amarelo]}>{estatisticas.cartoesAmarelos}</Text>
              <Text style={styles.statLabel}>Amarelos</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, styles.vermelho]}>{estatisticas.cartoesVermelhos}</Text>
              <Text style={styles.statLabel}>Vermelhos</Text>
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
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  resumoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resumoItem: {
    alignItems: 'center',
    flex: 1,
  },
  resumoValor: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  resumoLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  vitoria: {
    color: '#34C759',
  },
  empate: {
    color: '#FF9500',
  },
  derrota: {
    color: '#FF3B30',
  },
  golPro: {
    color: '#34C759',
  },
  golContra: {
    color: '#FF3B30',
  },
  saldoPositivo: {
    color: '#34C759',
  },
  amarelo: {
    color: '#FF9500',
  },
  vermelho: {
    color: '#FF3B30',
  },
  comparacao: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  local: {
    flex: 1,
    alignItems: 'center',
  },
  localTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  localStats: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  localStat: {
    fontSize: 12,
    marginHorizontal: 4,
    color: '#666',
  },
  localGols: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  divisoria: {
    width: 1,
    height: 40,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 16,
  },
  destaques: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  destaqueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  destaqueInfo: {
    marginLeft: 12,
  },
  destaqueLabel: {
    fontSize: 12,
    color: '#666',
  },
  destaqueValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  destaqueStats: {
    fontSize: 12,
    color: '#666',
  },
});