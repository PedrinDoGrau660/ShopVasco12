import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Linking, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleAssinar = () => {
    // Lógica para assinar newsletter
    console.log('Nome:', nome, 'Email:', email);
    // Limpar campos após assinar
    setNome('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Seção Newsletter */}
        <View style={styles.newsletterSection}>
          <Text style={styles.newsletterTitle}>
            Assine nossa newsletter e ganhe um presente!
          </Text>
          
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TouchableOpacity style={styles.botaoAssinar} onPress={handleAssinar}>
            <Text style={styles.textoBotaoAssinar}>Assinar</Text>
          </TouchableOpacity>
        </View>

        {/* Linha divisória */}
        <View style={styles.linhaDivisoria} />

        {/* Seção Links */}
        <View style={styles.linksContainer}>
          
          {/* Como comprar */}
          <View style={styles.colunaLinks}>
            <Text style={styles.tituloColuna}>Como comprar</Text>
            <TouchableOpacity><Text style={styles.link}>Segurança</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Envio</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Pagamento</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Tempo de Garantia</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Depoimentos de Clientes</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Notícias</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Política de Privacidade</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Termos de uso</Text></TouchableOpacity>
          </View>

          {/* Linha divisória */}
          <View style={styles.linhaVertical} />

          {/* Trocas e devoluções */}
          <View style={styles.colunaLinks}>
            <Text style={styles.tituloColuna}>Trocas e devoluções</Text>
            <TouchableOpacity><Text style={styles.link}>Sócio Torcedor</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Contato</Text></TouchableOpacity>
          </View>

          {/* Linha divisória */}
          <View style={styles.linhaVertical} />

          {/* Contato */}
          <View style={styles.colunaLinks}>
            <Text style={styles.tituloColuna}>Contato</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:2121485476')}>
              <Text style={styles.link}>21 2148-5476</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:futmarcas@futmarcas.com.br')}>
              <Text style={styles.link}>futmarcas@futmarcas.com.br</Text>
            </TouchableOpacity>
            <Text style={styles.horario}>Segunda a Sexta de 08h às 17h</Text>
          </View>

        </View>

        {/* Linha divisória */}
        <View style={styles.linhaDivisoria} />

        {/* Formas de pagamento */}
        <View style={styles.pagamentoContainer}>
          <Text style={styles.textoPagamento}>Formas de pagamento:</Text>
          <View style={styles.bandeirasContainer}>
            <Text style={styles.bandeira}>VISA</Text>
            <Text style={styles.bandeira}>Mastercard</Text>
            <Text style={styles.bandeira}>Elo</Text>
            <Text style={styles.bandeira}>American Express</Text>
            <Text style={styles.bandeira}>Pix</Text>
            <Text style={styles.bandeira}>Boleto</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  newsletterSection: {
    marginBottom: 30,
  },
  newsletterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  botaoAssinar: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotaoAssinar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linhaDivisoria: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginVertical: 25,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  colunaLinks: {
    flex: 1,
    minWidth: 150,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  tituloColuna: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  link: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    paddingVertical: 2,
  },
  horario: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
    fontStyle: 'italic',
  },
  linhaVertical: {
    borderRightColor: '#ddd',
    borderRightWidth: 1,
    marginHorizontal: 10,
    height: 'auto',
  },
  pagamentoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  textoPagamento: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    fontWeight: '500',
  },
  bandeirasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  bandeira: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
});

export default Footer;