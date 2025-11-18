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
    Image,
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
    usuariosQueCurtiram: string[];
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
            usuariosQueCurtiram: ['user123', 'user456']
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

    // Dados das notícias baseadas no ID
    const noticias = {
        '1': {
            id: '1',
            titulo: 'Diniz brilha no comando do Vasco: torcida aprova trabalho do técnico',
            conteudo: `Fernando Diniz está fazendo um excelente trabalho à frente do Vasco da Gama e conquistando a torcida com seu estilo de jogo característico.

O técnico, que assumiu o time há três meses, vem implementando sua filosofia de posse de bola e pressão alta, características que marcaram sua passagem por outros clubes.

Sob o comando de Diniz, o Vasco apresenta um futebol mais organizado e ofensivo, com grande volume de jogo e criação constante de oportunidades. Os jogadores parecem ter assimilado bem as ideias do treinador.

"Estamos evoluindo a cada partida. O Diniz trouxe uma identidade para o time que há muito tempo não víamos no Vasco", comentou um torcedor após a última vitória.

A diretoria do clube já sinalizou que pretende manter o técnico para a próxima temporada, confiante no trabalho que vem sendo desenvolvido.`,
            data: '20 Nov 2024',
            autor: 'Redação Esportiva',
            imagem: require('../imagens/diniz.png'),
            curtidas: 234,
            comentarios: comentarios.length
        },
        '2': {
    id: '2',
    titulo: 'Pedrinho assume presidência do Vasco com projeto ambicioso',
    conteudo: `Em uma virada histórica para o clube, Pedrinho foi oficialmente empossado como o novo presidente do Vasco da Gama. O ex-jogador, que já era ídolo da torcida, agora assume o comando do clube com um projeto de reestruturação completa.

Em seu discurso de posse, Pedrinho destacou a importância de unir a tradição vascaína com uma gestão moderna e profissional. "Chegou a hora de devolver ao Vasco o lugar que merece no cenário nacional. Vamos trabalhar com transparência, competência e muito amor por esta camisa", afirmou emocionado.

Entre as primeiras medidas anunciadas estão:
• Reformulação do departamento de futebol
• Investimento nas categorias de base
• Modernização da estrutura do clube
• Fortalecimento da marca Vasco no exterior

A torcida recebeu a notícia com euforia. "O Pedrinho conhece o clube como ninguém, sabe o que é ser vascaíno. Estamos confiantes", declarou um torcedor na sede do clube.

Analistas do mercado esportivo veem a escolha como acertada, considerando a popularidade e o conhecimento de Pedrinho sobre o futebol.`,
    data: '20 Nov 2024',
    autor: 'Redação Institucional',
    imagem: require('../imagens/pedrinho.png'),
    curtidas: 342,
    comentarios: comentarios.length
},         '3': {
    id: '3',
    titulo: 'Vasco surpreende e entra na disputa por Neymar Jr',
    conteudo: `O Vasco da Gama causou frisson no mercado da bola ao demonstrar interesse em contratar Neymar Jr. A informação, que parecia improvável, ganhou força após reuniões sigilosas entre a diretoria do clube e representantes do astro brasileiro.

Segundo fontes próximas ao jogador, Neymar estaria aberto a ouvir a proposta vascaína, principalmente pela sua histórica admiração pelo clube e pela possibilidade de se tornar um ídolo em um projeto ambicioso.

"O Vasco está disposto a fazer um investimento histórico. Sabemos que é uma negociação complexa, mas temos um projeto sólido para apresentar ao Neymar", revelou um diretor do clube sob condição de anonimato.

A proposta incluiria um contrato de dois anos, com salário compatível com o mercado e uma série de benefícios comerciais. A torcida já começou a pressionar nas redes sociais, com a hashtag #NeymarNoVasco viralizando.

Se concretizada, esta seria uma das maiores contratações da história do futebol brasileiro, equiparando-se aos grandes nomes que já vestiram a camisa cruz-maltina.`,
    data: '25 Nov 2024',
    autor: 'Redação Mercado da Bola',
    imagem: require('../imagens/neymar.png'),
    curtidas: 528,
    comentarios: comentarios.length
}
        };

    const noticia = noticias[noticiaId as keyof typeof noticias];

    // Função para obter o ID único do usuário atual
    const getUserId = async (): Promise<string> => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData) {
                const parsedData = JSON.parse(userData);
                return parsedData.email || 'user_' + Date.now();
            }
            return 'guest_' + Math.random().toString(36).substr(2, 9);
        } catch (error) {
            return 'guest_' + Math.random().toString(36).substr(2, 9);
        }
    };

    const handleAdicionarComentario = async () => {
    if (novoComentario.trim() === '') {
        Alert.alert('Atenção', 'Digite um comentário antes de enviar.');
        return;
    }

    try {
        // Busca os dados do usuário logado
        const userDataString = await AsyncStorage.getItem('userData');
        let usuarioNome = 'Usuário';
        
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            usuarioNome = userData.usuario || userData.name || 'Usuário';
        }

        const novoComentarioObj: Comentario = {
            id: Date.now().toString(),
            usuario: usuarioNome, // Usa o nome real do usuário
            texto: novoComentario,
            data: 'Agora',
            curtidas: 0,
            usuariosQueCurtiram: []
        };

        setComentarios([novoComentarioObj, ...comentarios]);
        setNovoComentario('');
        
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        // Fallback caso haja erro
        const novoComentarioObj: Comentario = {
            id: Date.now().toString(),
            usuario: 'Você',
            texto: novoComentario,
            data: 'Agora',
            curtidas: 0,
            usuariosQueCurtiram: []
        };
        setComentarios([novoComentarioObj, ...comentarios]);
        setNovoComentario('');
    }
};

    const handleCurtirComentario = async (comentarioId: string) => {
        const userId = await getUserId();

        setComentarios(comentarios.map(comentario => {
            if (comentario.id === comentarioId) {
                const usuarioJaCurtiu = comentario.usuariosQueCurtiram.includes(userId);

                if (usuarioJaCurtiu) {
                    Alert.alert('Info', 'Você já curtiu este comentário!');
                    return comentario;
                } else {
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

    const usuarioJaCurtiuComentario = async (comentario: Comentario): Promise<boolean> => {
        const userId = await getUserId();
        return comentario.usuariosQueCurtiram.includes(userId);
    };

    const CurtirButton = ({ comentario }: { comentario: Comentario }) => {
        const [jaCurtiu, setJaCurtiu] = useState(false);

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
                    
                    {/* Imagem da Notícia */}
                    <Image 
                        source={noticia.imagem} 
                        style={style.noticiaImagem}
                        resizeMode="cover"
                    />
                    
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