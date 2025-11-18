// src/data/camisa.ts
export interface Camisa {
  id: number;
  nome: string;
  preco: number;
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
    nome: "VESTIDO SOCIAL FEMININO BRANCO VASCO",
    preco: 289.99,
    descricaoPreco: "R$ 289,99 à vista no Pix - Vindi ou 10x de R$ 34,90 com juros Cartão Visa - Vindi",
    categoria: "feminina",
    subcategoria: "VESTIDOS SOCIAIS",
    imagens: [
      require('./CamisasImagens/CamisaBrancaLuisa.jpg'),
      require('./CamisasImagens/CamisaBrancaLuisaCorpo.jpg')
    ],
    cores: ["Branco"],
    tamanhos: ["PP", "P", "M", "G"],
    destaque: true,
    novidade: true
  },
  {
    id: 2,
    nome: "BLUSA LONGA FEMININA PRETA VASCO",
    preco: 179.99,
    descricaoPreco: "R$ 179,99 à vista no Pix - Vindi ou 8x de R$ 26,90 com juros Cartão Visa - Vindi",
    categoria: "feminina",
    subcategoria: "BLUSAS",
    imagens: [
      require('./CamisasImagens/CamisaLongaLuisa.jpg'),
      require('./CamisasImagens/CamisaLongaLuisaCorpo.jpg')
    ],
    cores: ["Preto"],
    tamanhos: ["PP", "P", "M", "G"],
    destaque: false,
    novidade: true
  },
  {
    id: 3,
    nome: "CAMISA SOCIAL FEMININA PRETA VASCO",
    preco: 139.99,
    descricaoPreco: "R$ 139,99 à vista no Pix - Vindi ou 6x de R$ 27,80 com juros Cartão Visa - Vindi",
    categoria: "feminina",
    subcategoria: "CAMISAS SOCIAIS",
    imagens: [
      require('./CamisasImagens/CamisaPretaLuisa1.jpg'),
      require('./CamisasImagens/CamisaPretaLuisaCorpo.jpg')
    ],
    cores: ["Preto"],
    tamanhos: ["PP", "P", "M", "G"],
    destaque: false,
    novidade: false
  },
  {
    id: 4,
    nome: "BLAZER SOCIAL FEMININO PRETO VASCO",
    preco: 329.99,
    descricaoPreco: "R$ 329,99 à vista no Pix - Vindi ou 12x de R$ 37,20 com juros Cartão Visa - Vindi",
    categoria: "feminina",
    subcategoria: "SOCIAIS",
    imagens: [
      require('./CamisasImagens/CamisaPretaSocialLuisa.jpg'),
      require('./CamisasImagens/CamisaPretaSocialLuisaCorpo.jpg')
    ],
    cores: ["Preto"],
    tamanhos: ["PP", "P", "M", "G"],
    destaque: true,
    novidade: false
  },

  // PRODUTOS MASCULINOS (IDs 11-20)
  {
    id: 11,
    nome: "CAMISA SOCIAL MASCULINA BRANCA VASCO",
    preco: 379.99,
    descricaoPreco: "R$ 379,99 à vista no Pix - Vindi ou 12x de R$ 42,49 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "CAMISAS SOCIAIS",
    imagens: [
      require('./CamisasImagens/CamisaBrancaPedro.jpg'),
      require('./CamisasImagens/CamisaBrancaPedroCorpo.jpg')
    ],
    cores: ["Branco"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: true,
    novidade: true
  },
  {
    id: 12,
    nome: "CAMISA LONGA MASCULINA PRETA VASCO",
    preco: 319.99,
    descricaoPreco: "R$ 319,99 à vista no Pix - Vindi ou 12x de R$ 36,10 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "CAMISAS",
    imagens: [
      require('./CamisasImagens/CamisaLongaPedro.jpg'),
      require('./CamisasImagens/CamisaLongaPedroCorpo.jpg')
    ],
    cores: ["Preto"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: false,
    novidade: true
  },
  {
    id: 13,
    nome: "CAMISA SOCIAL MASCULINA PRETA VASCO",
    preco: 199.99,
    descricaoPreco: "R$ 199,99 à vista no Pix - Vindi ou 10x de R$ 24,50 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "CAMISAS SOCIAIS",
    imagens: [
      require('./CamisasImagens/CamisaPretaPedro.jpg'),
      require('./CamisasImagens/CamisaPretaPedroCorpo.jpg')
    ],
    cores: ["Preto"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: false,
    novidade: false
  },
  {
    id: 14,
    nome: "CAMISA SOCIAL MASCULINA BRANCA PEDRO",
    preco: 159.99,
    descricaoPreco: "R$ 159,99 à vista no Pix - Vindi ou 6x de R$ 30,90 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "CAMISAS SOCIAIS",
    imagens: [
      require('./CamisasImagens/pedroNuno.png'),
      require('./CamisasImagens/pedroNuno1.png')
    ],
    cores: ["Branco"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: true,
    novidade: false
  },
  {
    id: 15,
    nome: "CAMISA PIXBET MASCULINA BRANCA VASCO",
    preco: 159.99,
    descricaoPreco: "R$ 159,99 à vista no Pix - Vindi ou 6x de R$ 30,90 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "CAMISAS OFICIAIS",
    imagens: [
      require('./CamisasImagens/pixbet1.png'),
      require('./CamisasImagens/pixbet2.png'),
      require('./CamisasImagens/pixbet3.png'),
      require('./CamisasImagens/pixbet4.png'),
    ],
    cores: ["Branco"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: true,
    novidade: false
  },
  {
    id: 16,
    nome: "CAMISA BETFAIR MASCULINA BRANCA VASCO",
    preco: 159.99,
    descricaoPreco: "R$ 159,99 à vista no Pix - Vindi ou 6x de R$ 30,90 com juros Cartão Visa - Vindi",
    categoria: "masculina",
    subcategoria: "CAMISAS OFICIAIS",
    imagens: [
      require('./CamisasImagens/betfair1.png'),
      require('./CamisasImagens/betfair2.png'),
    ],
    cores: ["Branco"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: true,
    novidade: false
  },

  // CONJUNTOS (IDs 21-30)
  {
    id: 21,
    nome: "CONJUNTO SOCIAL BRANCO E PRETO VASCO",
    preco: 599.99,
    descricaoPreco: "R$ 599,99 à vista no Pix - Vindi ou 12x de R$ 65,80 com juros Cartão Visa - Vindi",
    categoria: "conjunto",
    subcategoria: "CONJUNTOS SOCIAIS",
    imagens: [require('./CamisasImagens/Conjunto.jpg')],
    cores: ["Branco", "Preto"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: true,
    novidade: true
  },
  {
    id: 22,
    nome: "CONJUNTO SOCIAL MASCULINO PRETO VASCO",
    preco: 349.99,
    descricaoPreco: "R$ 349,99 à vista no Pix - Vindi ou 10x de R$ 41,80 com juros Cartão Visa - Vindi",
    categoria: "conjunto",
    subcategoria: "CONJUNTOS SOCIAIS",
    imagens: [
      require('./CamisasImagens/conjunto1.png'),
      require('./CamisasImagens/conjunto1_2.jpg')
    ],
    cores: ["Preto"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: false,
    novidade: true
  },
  {
    id: 23,
    nome: "CONJUNTO SOCIAL DUPLO MASCULINO VASCO",
    preco: 249.99,
    descricaoPreco: "R$ 249,99 à vista no Pix - Vindi ou 10x de R$ 29,80 com juros Cartão Visa - Vindi",
    categoria: "conjunto",
    subcategoria: "CONJUNTOS SOCIAIS",
    imagens: [
      require('./CamisasImagens/conjunto2.png'),
      require('./CamisasImagens/conjunto2_1.png')
    ],
    cores: ["Preto", "Cinza"],
    tamanhos: ["P", "M", "G", "GG"],
    destaque: false,
    novidade: true
  },
];