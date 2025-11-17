// src/data/camisa.ts
export interface Camisa {
  id: number;
  nome: string;
  preco: number;
  precoDesconto: number;
  descricaoPreco: string;
  categoria: 'feminina' | 'masculina' | 'conjunto';
  subcategoria: string; // ADICIONE ESTA LINHA
  imagens: any[];
  cores: string[];
  tamanhos: string[];
  destaque: boolean;
  novidade: boolean;
}

export const camisas: Camisa[] = [
  {
    id: 1,
    nome: "CAMISA JUVENIL KOMBAT HOME PLAYER 25",
    preco: 379.99,
    precoDesconto: 360.99,
    descricaoPreco: "R$ 360,99 à vista com desconto Pix - Vindi ou 12x de R$ 40,49 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "UNIFORME DE JOGO", // ADICIONE
    imagens: [require('../assets/dvd.jpg'), require('../assets/dvd.jpg')],
    cores: ["Preto", "Azul", "Branco"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: true,
    novidade: true
  },
  {
    id: 2,
    nome: "CALÇA AQUECIMENTO COMISSÃO VASCO 25",
    preco: 319.99,
    precoDesconto: 303.99,
    descricaoPreco: "R$ 303,99 à vista com desconto Pix - Vindi ou 12x de R$ 34,10 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "AQUECIMENTO", // ADICIONE
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Preto", "Cinza"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: false,
    novidade: true
  },
  {
    id: 3,
    nome: "CAMISETA TREINO VASCO 2024",
    preco: 199.99,
    precoDesconto: 189.99,
    descricaoPreco: "R$ 189,99 à vista com desconto Pix - Vindi ou 10x de R$ 22,50 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "TREINO", // ADICIONE
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Branco", "Preto", "Vermelho"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: false,
    novidade: false
  },
  {
    id: 4,
    nome: "SHORTS JOGO VASCO PRINCIPAL",
    preco: 159.99,
    precoDesconto: 151.99,
    descricaoPreco: "R$ 151,99 à vista com desconto Pix - Vindi ou 6x de R$ 28,90 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "UNIFORME DE JOGO", // ADICIONE
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Branco", "Preto"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: true,
    novidade: false
  },
  // Adicione mais produtos masculinos aqui...
];