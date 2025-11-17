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
  // CONJUNTOS - ADICIONE ESTES
  {
    id: 20,
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
    id: 21,
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
    id: 22,
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
  },
  {
    id: 23,
    nome: "KIT INFANTIL VASCO",
    preco: 279.99,
    precoDesconto: 265.99,
    descricaoPreco: "R$ 265,99 à vista com desconto Pix - Vindi ou 8x de R$ 37,20 com juros Cartão Visa - Vindi",
    categoria: "conjunto",
    subcategoria: "CONJUNTOS INFANTIS",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Vermelho", "Preto", "Branco"],
    tamanhos: ["4", "6", "8", "10", "12"],
    destaque: false,
    novidade: true
  },
  {
    id: 24,
    nome: "CONJUNTO CASUAL VASCO",
    preco: 389.99,
    precoDesconto: 370.49,
    descricaoPreco: "R$ 370,49 à vista com desconto Pix - Vindi ou 10x de R$ 44,30 com juros Cartão Visa - Vindi",
    categoria: "conjunto",
    subcategoria: "CONJUNTOS CASUAIS",
    imagens: [require('../assets/dvd.jpg')],
    cores: ["Cinza", "Preto", "Azul"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: false,
    novidade: false
  },
  // ... seus produtos masculinos e femininos existentes
];