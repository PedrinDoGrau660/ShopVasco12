// src/screens/Perfil/styles.ts
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  
  // 👇 HEADER ATUALIZADO COM FUNDO PRETO
  header: {
    backgroundColor: '#000', // FUNDO PRETO
    paddingTop: 60,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeftSpace: {
    width: 40, // Espaço para o hamburguer
  },
  // 👇 TEXTO DO HEADER EM BRANCO
  headerUsername: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // TEXTO BRANCO
    textAlign: 'center',
    flex: 1,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: 5,
  },

  // ... resto dos estilos permanecem iguais ...
  profileSection: {
    padding: 20,
    backgroundColor: '#fff',
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 20,
  },
  avatarPlaceholder: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#C00000',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  newUserBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#C00000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  newUserText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  profileInfo: {
    marginBottom: 15,
  },
  displayName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: '#333',
    lineHeight: 18,
    marginBottom: 8,
  },
  memberSince: {
    fontSize: 12,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  shareButton: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  welcomeMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    padding: 12,
    borderRadius: 8,
    gap: 10,
  },
  welcomeText: {
    flex: 1,
    fontSize: 14,
    color: '#1E40AF',
    fontWeight: '500',
  },
  highlights: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  highlightItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  highlightCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 5,
  },
  highlightText: {
    fontSize: 12,
    color: '#333',
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  postsGrid: {
    padding: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postItem: {
    width: '33.333%',
    aspectRatio: 1,
    padding: 1,
  },
  postPlaceholder: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
  },
  postPlaceholderText: {
    marginTop: 8,
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    gap: 10,
  },
  logoutText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  loadingAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
  },
});