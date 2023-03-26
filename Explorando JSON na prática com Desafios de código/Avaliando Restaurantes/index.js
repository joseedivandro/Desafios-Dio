const restaurantes = [
    {
      nome: gets(), 
      avaliacao: parseFloat(gets())
    },
    {
      nome: gets(), 
      avaliacao: parseFloat(gets())
    }
  ];
  
  const melhorRestaurante = restaurantes.reduce((restauranteAtual, proximoRestaurante) => {
    return proximoRestaurante.avaliacao > restauranteAtual.avaliacao ? proximoRestaurante : restauranteAtual;
  });
  
  print(`Restaurante: ${melhorRestaurante.nome}, Avaliação: ${melhorRestaurante.avaliacao.toFixed(1)}`);