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

  // Dados atualizados do Vasco na temporada 2025 (baseado no SofaScore)
  const estatisticas = {
    temporada: "2025",
    posicao: 11,
    pontos: 42,
    aproveitamento: "42%",
    jogos: 33,
    vitorias: 12,
    empates: 6,
    derrotas: 15,
    golsPro: 50,
    golsContra: 49,
    saldoGols: 1,
    finalizacoesTotal: 385,
    finalizacoesNoGol: 145,
    precisaoFinalizacao: "38%",
    posseDeBola: "52%",
    passesTotal: 14520,
    precisaoPasses: "84%",
    cartoesAmarelos: 45,
    cartoesVermelhos: 3,
    jogadorArtilheiro: "Pablo Vegetti",
    golsArtilheiro: 26,
    jogadorAssistencias: "Lucas Piton",
    assistencias: 7,
    jogadorMaisMinutos: "Léo Jardim",
    minutosJogados: 2970
  };

  const estatisticasCasa = {
    vitorias: 7,
    empates: 4,
    derrotas: 5,
    golsPro: 28,
    golsContra: 20,
    aproveitamento: "55%"
  };

  const estatisticasFora = {
    vitorias: 5,
    empates: 2,
    derrotas: 10,
    golsPro: 22,
    golsContra: 29,
    aproveitamento: "29%"
  };

  // Últimas 5 partidas (W = Vitória, D = Derrota, L = Empate)
  const ultimasPartidas = ["W", "W", "D", "D", "D"];

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
        
        {/* Informações da Temporada */}
        <View style={styles.infoTemporada}>
          <Text style={styles.temporadaTitle}>Temporada</Text>
          <Text style={styles.temporadaAno}>2025</Text>
          <Text style={styles.atualizacao}>Última atualização: 18/11/2025</Text>
        </View>

        {/* Resumo da Temporada */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resumo da Temporada</Text>
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

        {/* Últimas 5 Partidas */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Últimas 5 Partidas</Text>
          <View style={styles.ultimasPartidas}>
            {ultimasPartidas.map((resultado, index) => (
              <View 
                key={index} 
                style={[
                  styles.partidaCirculo,
                  resultado === 'W' && styles.vitoriaCirculo,
                  resultado === 'D' && styles.derrotaCirculo,
                  resultado === 'L' && styles.empateCirculo
                ]}
              >
                <Text style={styles.partidaTexto}>{resultado}</Text>
              </View>
            ))}
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
              <Text style={styles.localAproveitamento}>{estatisticasCasa.aproveitamento} aproveitamento</Text>
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
              <Text style={styles.localAproveitamento}>{estatisticasFora.aproveitamento} aproveitamento</Text>
            </View>
          </View>
        </View>

        {/* Estatísticas de Jogo */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Estatísticas de Jogo</Text>
          <View style={styles.estatisticasJogo}>
            <View style={styles.estatisticaLinha}>
              <Text style={styles.estatisticaLabel}>Posse de Bola</Text>
              <Text style={styles.estatisticaValor}>{estatisticas.posseDeBola}</Text>
            </View>
            <View style={styles.estatisticaLinha}>
              <Text style={styles.estatisticaLabel}>Finalizações</Text>
              <Text style={styles.estatisticaValor}>{estatisticas.finalizacoesTotal}</Text>
            </View>
            <View style={styles.estatisticaLinha}>
              <Text style={styles.estatisticaLabel}>Finalizações no Gol</Text>
              <Text style={styles.estatisticaValor}>{estatisticas.finalizacoesNoGol}</Text>
            </View>
            <View style={styles.estatisticaLinha}>
              <Text style={styles.estatisticaLabel}>Precisão de Finalização</Text>
              <Text style={styles.estatisticaValor}>{estatisticas.precisaoFinalizacao}</Text>
            </View>
            <View style={styles.estatisticaLinha}>
              <Text style={styles.estatisticaLabel}>Passes</Text>
              <Text style={styles.estatisticaValor}>{estatisticas.passesTotal.toLocaleString()}</Text>
            </View>
            <View style={styles.estatisticaLinha}>
              <Text style={styles.estatisticaLabel}>Precisão de Passes</Text>
              <Text style={styles.estatisticaValor}>{estatisticas.precisaoPasses}</Text>
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

            <View style={styles.destaqueItem}>
              <Ionicons name="time" size={24} color="#34C759" />
              <View style={styles.destaqueInfo}>
                <Text style={styles.destaqueLabel}>Mais Minutos</Text>
                <Text style={styles.destaqueValue}>{estatisticas.jogadorMaisMinutos}</Text>
                <Text style={styles.destaqueStats}>{estatisticas.minutosJogados} min</Text>
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
  ultimasPartidas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  partidaCirculo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vitoriaCirculo: {
    backgroundColor: '#34C759',
  },
  empateCirculo: {
    backgroundColor: '#FF9500',
  },
  derrotaCirculo: {
    backgroundColor: '#FF3B30',
  },
  partidaTexto: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
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
    marginBottom: 2,
  },
  localAproveitamento: {
    fontSize: 10,
    color: '#666',
  },
  divisoria: {
    width: 1,
    height: 50,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 16,
  },
  estatisticasJogo: {
    gap: 8,
  },
  estatisticaLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  estatisticaLabel: {
    fontSize: 14,
    color: '#333',
  },
  estatisticaValor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  destaques: {
    gap: 12,
  },
  destaqueItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  destaqueInfo: {
    marginLeft: 12,
    flex: 1,
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