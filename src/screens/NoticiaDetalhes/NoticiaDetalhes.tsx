// src/screens/NoticiaDetalhes/NoticiaDetalhes.tsx
import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import { style } from './styles';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackParamList } from '../../routes/index.routes';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NoticiaDetalhesRouteProp = RouteProp<StackParamList, 'NoticiaDetalhes'>;

interface Comentario {
    id: string;
    usuario: string;
    texto: string;
    data: string;
    curtidas: number;
    usuariosQueCurtiram: string[]; // Nova propriedade para controlar quem já curtiu
}

export default function NoticiaDetalhes() {
    const navigation = useNavigation();
    const route = useRoute<NoticiaDetalhesRouteProp>();
    const { noticiaId } = route.params;

    const [novoComentario, setNovoComentario] = useState('');
    const [comentarios, setComentarios] = useState<Comentario[]>([
        {
            id: '1',
            usuario: 'João Silva',
            texto: 'Que vitória incrível! Time jogou muito!',
            data: '15 Nov 2024 - 14:30',
            curtidas: 8,
            usuariosQueCurtiram: ['user123', 'user456'] // IDs de usuários que já curtiram
        },
        {
            id: '2',
            usuario: 'Maria Santos',
            texto: 'Orgulho desse time! Vamos para a próxima!',
            data: '15 Nov 2024 - 15:45',
            curtidas: 5,
            usuariosQueCurtiram: ['user789']
        }
    ]);

    // Dados mockados da notícia
    const noticia = {
        id: noticiaId,
        titulo: 'Time vence campeonato estadual',
        conteudo: `Em uma partida eletrizante, nosso time conquistou o título do campeonato estadual após uma campanha impecável. 

A equipe demonstrou grande determinação e habilidade throughout do torneio, culminando em uma vitória espetacular na final.

O jogo decisivo foi marcado por momentos de grande emoção, com o time demonstrando um futebol de alta qualidade e muita garra.

Esta conquista marca um momento histórico para o clube e para todos os torcedores que acompanharam de perto essa jornada incrível.`,
        data: '15 Nov 2024',
        autor: 'Redação Esportiva',
        imagem: 'https://example.com/noticia1.jpg',
        curtidas: 156,
        comentarios: comentarios.length
    };

    // Função para obter o ID único do usuário atual
    const getUserId = async (): Promise<string> => {
        try {
            // Tenta obter do AsyncStorage (usuário logado)
            const userData = await AsyncStorage.getItem('userData');
            if (userData) {
                const parsedData = JSON.parse(userData);
                return parsedData.email || 'user_' + Date.now(); // Usa email como ID ou cria um temporário
            }
            // Se não tem usuário logado, cria um ID temporário baseado no dispositivo
            return 'guest_' + Math.random().toString(36).substr(2, 9);
        } catch (error) {
            return 'guest_' + Math.random().toString(36).substr(2, 9);
        }
    };

    const handleAdicionarComentario = () => {
        if (novoComentario.trim() === '') {
            Alert.alert('Atenção', 'Digite um comentário antes de enviar.');
            return;
        }

        const novoComentarioObj: Comentario = {
            id: Date.now().toString(),
            usuario: 'Você', // Em uma app real, viria do perfil do usuário
            texto: novoComentario,
            data: 'Agora',
            curtidas: 0,
            usuariosQueCurtiram: []
        };

        setComentarios([novoComentarioObj, ...comentarios]);
        setNovoComentario('');
    };

    const handleCurtirComentario = async (comentarioId: string) => {
        const userId = await getUserId();

        setComentarios(comentarios.map(comentario => {
            if (comentario.id === comentarioId) {
                // Verifica se o usuário já curtiu este comentário
                const usuarioJaCurtiu = comentario.usuariosQueCurtiram.includes(userId);

                if (usuarioJaCurtiu) {
                    // Se já curtiu, remove o like
                    Alert.alert('Info', 'Você já curtiu este comentário!');
                    return comentario;
                } else {
                    // Se não curtiu, adiciona o like
                    return {
                        ...comentario,
                        curtidas: comentario.curtidas + 1,
                        usuariosQueCurtiram: [...comentario.usuariosQueCurtiram, userId]
                    };
                }
            }
            return comentario;
        }));
    };

    // Função para verificar se o usuário atual já curtiu um comentário
    const usuarioJaCurtiuComentario = async (comentario: Comentario): Promise<boolean> => {
        const userId = await getUserId();
        return comentario.usuariosQueCurtiram.includes(userId);
    };

    // Componente para o botão de curtir com estado
    const CurtirButton = ({ comentario }: { comentario: Comentario }) => {
        const [jaCurtiu, setJaCurtiu] = useState(false);

        // Verifica se o usuário já curtiu quando o componente monta
        React.useEffect(() => {
            const checkIfLiked = async () => {
                const liked = await usuarioJaCurtiuComentario(comentario);
                setJaCurtiu(liked);
            };
            checkIfLiked();
        }, [comentario]);

        return (
            <TouchableOpacity
                style={style.curtirButton}
                onPress={() => handleCurtirComentario(comentario.id)}
                disabled={jaCurtiu}
            >
                <Ionicons
                    name={jaCurtiu ? "heart" : "heart-outline"}
                    size={16}
                    color={jaCurtiu ? "#FF3B30" : "#666"}
                />
                <Text style={[
                    style.curtirText,
                    jaCurtiu && { color: '#FF3B30', fontWeight: '600' }
                ]}>
                    {comentario.curtidas}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <KeyboardAvoidingView
            style={style.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView style={style.content}>
                {/* Header */}
                <View style={style.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={style.headerTitle}>Notícia</Text>
                    <View style={{ width: 24 }} />
                </View>

                {/* Conteúdo da Notícia */}
                <View style={style.noticiaContent}>
                    <Text style={style.noticiaTitulo}>{noticia.titulo}</Text>
                    <View style={style.noticiaMeta}>
                        <Text style={style.noticiaData}>{noticia.data}</Text>
                        <Text style={style.noticiaAutor}>Por {noticia.autor}</Text>
                    </View>

                    <Text style={style.noticiaConteudo}>{noticia.conteudo}</Text>

                    <View style={style.engajamento}>
                        <View style={style.curtidasContainer}>
                            <Ionicons name="heart" size={20} color="#FF3B30" />
                            <Text style={style.curtidasText}>{noticia.curtidas}</Text>
                        </View>
                        <View style={style.comentariosInfo}>
                            <Ionicons name="chatbubble" size={20} color="#007AFF" />
                            <Text style={style.comentariosText}>{noticia.comentarios} comentários</Text>
                        </View>
                    </View>
                </View>

                {/* Seção de Comentários */}
                <View style={style.comentariosSection}>
                    <Text style={style.comentariosTitle}>Comentários</Text>

                    {comentarios.map((comentario) => (
                        <View key={comentario.id} style={style.comentarioCard}>
                            <View style={style.comentarioHeader}>
                                <Text style={style.comentarioUsuario}>{comentario.usuario}</Text>
                                <Text style={style.comentarioData}>{comentario.data}</Text>
                            </View>
                            <Text style={style.comentarioTexto}>{comentario.texto}</Text>
                            <CurtirButton comentario={comentario} />
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Input de Comentário */}
            <View style={style.inputContainer}>
                <TextInput
                    style={style.comentarioInput}
                    placeholder="Adicione um comentário..."
                    value={novoComentario}
                    onChangeText={setNovoComentario}
                    multiline
                />
                <TouchableOpacity
                    style={[
                        style.enviarButton,
                        { opacity: novoComentario.trim() ? 1 : 0.5 }
                    ]}
                    onPress={handleAdicionarComentario}
                    disabled={!novoComentario.trim()}
                >
                    <Ionicons name="send" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}