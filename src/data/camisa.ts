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
  // PRODUTOS FEMININOS (IDs 1-10)
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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

  // PRODUTOS MASCULINOS (IDs 11-20)
  {
    id: 11,
    nome: "CAMISA JUVENIL KOMBAT HOME PLAYER 25",
    preco: 379.99,
    precoDesconto: 360.99,
    descricaoPreco: "R$ 360,99 à vista com desconto Pix - Vindi ou 12x de R$ 40,49 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "UNIFORME DE JOGO",
    imagens: [require('../assets/dvd.jpg'), require('../assets/dvd.jpg')],
    cores: ["Preto", "Azul", "Branco"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: true,
    novidade: true
  },
  {
    id: 12,
    nome: "CALÇA AQUECIMENTO COMISSÃO VASCO 25",
    preco: 319.99,
    precoDesconto: 303.99,
    descricaoPreco: "R$ 303,99 à vista com desconto Pix - Vindi ou 12x de R$ 34,10 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "AQUECIMENTO",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Preto", "Cinza"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: false,
    novidade: true
  },
  {
    id: 13,
    nome: "CAMISETA TREINO VASCO 2024",
    preco: 199.99,
    precoDesconto: 189.99,
    descricaoPreco: "R$ 189,99 à vista com desconto Pix - Vindi ou 10x de R$ 22,50 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "TREINO",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Branco", "Preto", "Vermelho"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: false,
    novidade: false
  },
  {
    id: 14,
    nome: "SHORTS JOGO VASCO PRINCIPAL",
    preco: 159.99,
    precoDesconto: 151.99,
    descricaoPreco: "R$ 151,99 à vista com desconto Pix - Vindi ou 6x de R$ 28,90 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "UNIFORME DE JOGO",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Branco", "Preto"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: true,
    novidade: false
  },

  // CONJUNTOS (IDs 21-30)
  {
    id: 21,
    nome: "KIT COMPLETO VASCO 2024",
    preco: 599.99,
    precoDesconto: 569.99,
    descricaoPreco: "R$ 569,99 à vista com desconto Pix - Vindi ou 12x de R$ 63,80 com juros Cartão Visa - Vindi",
    categoria: "conjunto",
    subcategoria: "KITS COMPLETOS",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Preto", "Branco", "Vermelho"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: true,
    novidade: true
  },
  {
    id: 22,
    nome: "CONJUNTO TREINO MASCULINO",
    preco: 349.99,
    precoDesconto: 332.49,
    descricaoPreco: "R$ 332,49 à vista com desconto Pix - Vindi ou 10x de R$ 39,80 com juros Cartão Visa - Vindi",
    categoria: "conjunto",
    subcategoria: "CONJUNTOS MASCULINOS",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Preto", "Cinza", "Azul"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: false,
    novidade: true
  },
  {
    id: 23,
    nome: "CONJUNTO FEMININO ELEGANCE",
    preco: 429.99,
    precoDesconto: 408.49,
    descricaoPreco: "R$ 408,49 à vista com desconto Pix - Vindi ou 10x de R$ 48,90 com juros Cartão Visa - Vindi",
    categoria: "conjunto",
    subcategoria: "CONJUNTOS FEMININOS",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Rosa", "Preto", "Branco"],
    tamanhos: ["PP", "P", "M", "G"],
    destaque: true,
    novidade: false
  }
];