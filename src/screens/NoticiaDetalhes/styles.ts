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
        borderBottomColor: '#E5E5E5',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    noticiaContent: {
        padding: 16,
    },
    noticiaImagem: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 16,
    },
    noticiaTitulo: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
        marginBottom: 12,
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
        fontStyle: 'italic',
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
        gap: 20,
    },
    curtidasContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    curtidasText: {
        fontSize: 16,
        color: '#FF3B30',
        fontWeight: '500',
    },
    comentariosInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    comentariosText: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '500',
    },
    comentariosSection: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
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
        borderRadius: 8,
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
        color: '#666',
    },
    comentarioTexto: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
        marginBottom: 12,
    },
    curtirButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        alignSelf: 'flex-start',
    },
    curtirText: {
        fontSize: 14,
        color: '#666',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        backgroundColor: '#FFF',
    },
    comentarioInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        maxHeight: 100,
        marginRight: 12,
    },
    enviarButton: {
        backgroundColor: '#007AFF',
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
});