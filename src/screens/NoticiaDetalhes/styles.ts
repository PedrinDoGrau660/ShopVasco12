// src/screens/NoticiaDetalhes/styles.ts
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  noticiaContent: {
    padding: 16,
  },
  noticiaTitulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
    lineHeight: 32,
  },
  noticiaMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  noticiaData: {
    fontSize: 14,
    color: '#666',
  },
  noticiaAutor: {
    fontSize: 14,
    color: '#666',
  },
  noticiaConteudo: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
  },
  engajamento: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  curtidasContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  curtidasText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
  },
  comentariosInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  comentariosText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
  },
  comentariosSection: {
    padding: 16,
    borderTopWidth: 8,
    borderTopColor: '#F8F8F8',
  },
  comentariosTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
  },
  comentarioCard: {
    backgroundColor: '#F8F8F8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  comentarioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  comentarioUsuario: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  comentarioData: {
    fontSize: 12,
    color: '#999',
  },
  comentarioTexto: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginBottom: 12,
  },
  curtirButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  curtirText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#FFF',
  },
  comentarioInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    maxHeight: 100,
    fontSize: 14,
  },
  enviarButton: {
    backgroundColor: '#007AFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});