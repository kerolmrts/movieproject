
export async function getFilmes() {
  
  try {
  
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TMDB_AUTH_TOKEN}`
      }
    };

    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=pt-BR', options);

 
    if (!response.ok) {
      throw new Error(`Erro ao buscar filmes em tendência: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const filmes = data.results.map((movie) => {
      return {
        titulo: movie.title,
        id: movie.id,
        categoria: movie.genre_ids.join(', '),
        dataLancamento: movie.release_date,
        selecao: "novo", 
        sinopse: movie.overview,
        imagem: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
        Votos: movie.vote_average
      };
    });
    console.log(filmes)

    return filmes;

  } catch (error) {
    console.error('Erro ao buscar filmes em tendência:', error);
    return [];
  }
}

export async function getMovieTitle() {
  try{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_AUTH_TOKEN}`
    }
  };

  const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc', options)
  
     if (!response.ok) {
      throw new Error(`Erro ao buscar filmes: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const filmes = data.results.map((movie) => {
      return {
        titulo: movie.title,
        id: movie.id,
        categoria: movie.genre_ids.join(', '),
        dataLancamento: movie.release_date,
        sinopse: movie.overview,
        imagem: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
        Votos: movie.vote_average
      }
    });
   

    return filmes;
  }catch (error) {
      console.error('Erro ao buscar filmes em tendência:', error);
      return [];

  }
}



export async function getFilmePorId(id) {
  try {
    const filmes = await getFilmes();
    const filmesDaBusca = await getMovieTitle('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc'); 
    const todosFilmes = [...filmes, ...filmesDaBusca];
    const result = todosFilmes.find((movie) => movie.id === id);
    return result;
  } catch (error) {
    console.error('Erro ao buscar filme por ID:', error);
    return null;
  }
}