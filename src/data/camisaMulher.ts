// src/data/camisa.ts
export interface Camisa {
  id: number;
  nome: string;
  preco: number;
  precoDesconto: number;
  descricaoPreco: string;
  categoria: 'feminina' | 'masculina' | 'conjunto';
  subcategoria: string;
  imagens: any[];
  cores: string[];
  tamanhos: string[];
  destaque: boolean;
  novidade: boolean;
}

export const camisas: Camisa[] = [
  // PRODUTOS FEMININOS - ADICIONE ESTES
  {
    id: 10,
    nome: "VESTIDO OFICIAL VASCO DA GAMA",
    preco: 289.99,
    precoDesconto: 275.49,
    descricaoPreco: "R$ 275,49 à vista com desconto Pix - Vindi ou 10x de R$ 32,90 com juros Cartão Visa - Vindi",
    categoria: "feminina",
    subcategoria: "VESTIDOS",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Preto", "Branco", "Vermelho"],
    tamanhos: ["PP", "P", "M", "G"],
    destaque: true,
    novidade: true
  },
  {
    id: 11,
    nome: "BLUSA FEMININA VASCO 2024",
    preco: 179.99,
    precoDesconto: 170.99,
    descricaoPreco: "R$ 170,99 à vista com desconto Pix - Vindi ou 8x de R$ 24,90 com juros Cartão Visa - Vindi",
    categoria: "feminina",
    subcategoria: "BLUSAS",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Rosa", "Branco", "Preto"],
    tamanhos: ["PP", "P", "M", "G"],
    destaque: false,
    novidade: true
  },
  {
    id: 12,
    nome: "SAIA JEANS VASCO",
    preco: 139.99,
    precoDesconto: 132.99,
    descricaoPreco: "R$ 132,99 à vista com desconto Pix - Vindi ou 6x de R$ 25,80 com juros Cartão Visa - Vindi",
    categoria: "feminina",
    subcategoria: "SAIAS",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Azul", "Preto"],
    tamanhos: ["PP", "P", "M", "G"],
    destaque: false,
    novidade: false
  },
  {
    id: 13,
    nome: "JAQUETA FEMININA INVERNO VASCO",
    preco: 329.99,
    precoDesconto: 313.49,
    descricaoPreco: "R$ 313,49 à vista com desconto Pix - Vindi ou 12x de R$ 35,20 com juros Cartão Visa - Vindi",
    categoria: "feminina",
    subcategoria: "INVERNO",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Preto", "Cinza", "Vermelho"],
    tamanhos: ["PP", "P", "M", "G"],
    destaque: true,
    novidade: false
  },
  {
    id: 14,
    nome: "LEGGINGS TREINO VASCO",
    preco: 159.99,
    precoDesconto: 151.99,
    descricaoPreco: "R$ 151,99 à vista com desconto Pix - Vindi ou 6x de R$ 28,90 com juros Cartão Visa - Vindi",
    categoria: "feminina",
    subcategoria: "LEGGINGS",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Preto", "Cinza", "Rosa"],
    tamanhos: ["PP", "P", "M", "G"],
    destaque: false,
    novidade: true
  },
  // ... seus produtos masculinos existentes
];