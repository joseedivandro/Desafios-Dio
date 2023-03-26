const pedidos = [
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    }
  ];
  
  // Encontrar o pedido mais próximo utilizando o método reduce do array
  const pedidoMaisProximo = pedidos.reduce((pedidoAnterior, pedidoAtual) => {
    return pedidoAtual.distancia < pedidoAnterior.distancia ? pedidoAtual : pedidoAnterior;
  });
  
  // Exibir o resultado no console
  console.log(`O pedido mais próximo é o de ${pedidoMaisProximo.nome}, do tipo ${pedidoMaisProximo.tipo}`);