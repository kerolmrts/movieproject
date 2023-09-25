const movies = [
  {
    titulo: "Os Mercenários 4",
    id: 1,
    categoria: "Ação",
    dataLancamento: "21/09/2023",
    selecao: "novo",
    sinopse:"Eles estão de volta e trouxeram reforço! O lendário grupo de mercenários liderado por Barney Ross (Sylvester Stallone) tem uma nova missão explosiva: impedir o início da Terceira Guerra Mundial. Quando as coisas saem do controle, Christmas (Jason Statham) e os novos membros da equipe (Megan Fox, 50 Cent e Tony Jaa) são recrutados para impedir que o pior aconteça. Prepare-se para perder o fôlego neste novo capítulo de uma das maiores franquias de ação da história!",
    imagem:
      "https://ovicio.com.br/wp-content/uploads/2023/07/20230721-image-2-768x1184.png",
  },
  {
    titulo: "Som da Liberdade",
    id: 2,
    categoria: "Drama",
    dataLancamento: "21/09/2023",
    selecao: "novo",
    sinopse:"Filme baseado em uma história real e acompanha o ex-agente especial do Governo Americano Tim Ballard (Jim Caviezel), que embarca em uma missão arriscada para resgatar crianças vítimas de tráfico infantil. Na Colômbia, Ballard decide deixar seu cargo no Governo para seguir em busca da quadrilha em sua jornada que, agora, se torna pessoal.",
    imagem:
      "https://cinepop.com.br/wp-content/uploads/2023/08/somdaliberdade.jpg",
  },
  {
    titulo: "Reflexão",
    id: 3,
    categoria: "Drama",
    dataLancamento: "21/09/2023",
    selecao: "novo",
    sinopse: "Serhiy, um cirurgião ucraniano, é capturado pelas forças militares russas na zona de conflito no leste da Ucrânia e, durante esse cativeiro, é exposto a situações terríveis de humilhação, violência e indiferença. Após ser libertado, ele retorna ao seu confortável apartamento de classe média e tenta encontrar um propósito na vida reconstruindo seu relacionamento com a filha e a ex-mulher.",
    imagem:
      "https://cinepop.com.br/wp-content/uploads/2023/05/reflection_poster.jpg.webp",
  },
  {
    titulo: "Davi Contra os Bancos",
    id: 4,
    categoria: "Comédia",
    dataLancamento: "21/09/2023",
    selecao: "novo",
    sinopse: "A trama segue história real de Dave Fishwick, um empresário idealista que decidiu lutar contra o sistema e abrir seu próprio banco para ajudar sua comunidade. Ao lado de seu advogado, ele se tornará um herói local.",
    imagem:
      "https://cinepop.com.br/wp-content/uploads/2023/08/bank-of-dave.jpg.webp",
  },
  {
    titulo: "After: Para Sempre",
    id: 5,
    categoria: "Romance",
    dataLancamento: "14/09/2023",
    sinopse:"O filme mostra o desfecho da intensa história de amor de Tessa (Josephine Langford) e Hardin (Hero Fiennes Tiffin). Para um casal que já passou por tudo, resta apenas uma pergunta: essa relação resistirá? O quinto e último filme da franquia, que mexe com corações ao redor do mundo, traz as respostas sobre “Hessa”.",
    imagem:
      "https://cinema10.com.br/upload/filmes/filmes_16932_after-para-sempre-poster.jpg?default=poster",
  },
  {
    titulo: "A freira 2",
    id: 6,
    categoria: "Terror",
    dataLancamento: "07/09/2023",
    imagem:
      "https://cinema10.com.br/upload/filmes/filmes_16449_a-freira-2-poster-nac.jpg?default=poster",
  },
  {
    titulo: "Toc Toc Toc: Ecos do Além",
    id: 7,
    categoria: "Terror",
    dataLancamento: "01/09/2023",
    imagem:
      "https://cinepop.com.br/wp-content/uploads/2023/06/toc-toc-toc-poster-819x1024.jpg.webp",
  },
  {
    titulo: "Presos na Floresta: Fuja se For Capaz",
    id: 8,
    categoria: "Terror",
    dataLancamento: "01/09/2023",
    imagem:
      "https://cinemaeafins.com.br/wp-content/uploads/2023/08/presos-na-floresta-2023-poster.jpg",
  },
  {
    titulo: "Drácula: A Última Viagem do Deméter",
    id: 9,
    categoria: "Terror",
    dataLancamento: "28/08/2023",
    imagem:
      "https://cinepop.com.br/wp-content/uploads/2023/04/dracula-1.jpg.webp",
  },
  {
    titulo: "Tire 5 Cartas",
    id: 10,
    categoria: "Comédia",
    dataLancamento: "07/09/2023",
    sinopse:"Fátima é uma mulher de 60 anos que saiu de São Luís para o Rio de Janeiro para realizar o sonho de ser cantora. Com o passar dos anos seu sonho ficou cada vez mais distante e ela se viu obrigada a trocar os palcos pelas cartas do tarô. Com a ajuda de seu marido Lindoval, ela enrola seus clientes obtendo informações sobre eles nas redes sociais. Quando um anel de turmalina paraíba aparece em sua casa, Fátima e seu marido fogem de bandidos para o Maranhão, embarcando numa aventura para lá de engraçada e emocionante.",
    imagem:
      "https://cinepop.com.br/wp-content/uploads/2023/07/tire-5-cartas-poster.jpg.webp",
  },
  {
    titulo: "Gran Turismo",
    id: 11,
    categoria: "Ação",
    dataLancamento: "24/08/2023",
    imagem:
      "https://cinema10.com.br/upload/filmes/filmes_16321_gran-turismo-poster-de-jogador-a-corredor.jpg?default=poster",
  },

  {
    titulo: "Besouro Azul",
    id: 12,
    categoria: "Ação",
    dataLancamento: "17/08/2023",
    imagem:
      "https://jovemnerd.com.br/wp-content/uploads/2022/12/besouro_azul_poster__912a2jsc-760x950.jpg",
  },
  {
    titulo: "Oppenheimer",
    id: 13,
    dataLancamento: "20/07/2023",
    categoria: "Ação",
    imagem:
      "https://gamearena.gg/wp-content/uploads/2023/05/FvUVt3hXgAAxP1H.jpg",
  },
  {
    titulo: "O Porteiro",
    id: 14,
    categoria: "Comédia",
    dataLancamento: "31/08/2023",
    imagem:
      "https://cinepop.com.br/wp-content/uploads/2023/08/o_porteiro_poster.jpg.webp",
  },
  {
    titulo: "Barbie",
    id: 15,
    categoria: "Comédia",
    dataLancamento: "20/07/2023",
    imagem: "https://www.itaucinemas.com.br/_img/_filmes/5327_capa.jpg?Barbie",
  },
  {
    titulo: "As Oito Montanhas",
    id: 16,
    categoria: "Drama",
    dataLancamento: "01/09/2023",
    imagem:
      "https://cinepop.com.br/wp-content/uploads/2023/03/as-oito-montanhas-poster.webp",
  },
  {
    titulo: "Os Escolhidos",
    id: 17,
    categoria: "Drama",
    dataLancamento: "31/08/2023",
    imagem: "https://cinepop.com.br/wp-content/uploads/2023/09/chosen.webp",
  },

  {
    titulo: "Coisas do Amor",
    id: 18,
    categoria: "Romance",
    dataLancamento: "17/08/2023",
    imagem:
      "https://cinema10.com.br/upload/filmes/filmes_16793_15370-medio.jpg?default=poster",
  },
  {
    titulo: "Que Horas Eu Te Pego?",
    id: 19,
    categoria: "Romance",
    dataLancamento: "15/06/2023",
    imagem: "https://br.web.img3.acsta.net/pictures/23/04/25/00/50/3748586.jpg",
  },
  {
    titulo: "Amor(es) Verdadeiro(s)",
    id: 20,
    categoria: "Romance",
    dataLancamento: "17/05/2023",
    imagem:
      "https://cinepop.com.br/wp-content/uploads/2023/02/one-true-loves-poster.jpg.webp",
  },
];

export function getFilmes() {
  return movies;
}

export function getFilmePorId(id) {
  const result = movies.filter((movie) => {
    return movie.id === id;
  });
  return result[0];
}
