// Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
    cliente: gets(),
    endereco: gets(),
    itens: [],
    taxaEntrega: 5.0
  };
  
  // Para popular o array de itens, criamos a seguinte estrutura de repetição:
  const quantidadeItens = parseInt(gets());
  while (pedido.itens.length < quantidadeItens) {
    const nomeItem = gets();
    const precoItem = parseFloat(gets());
    pedido.itens.push({ nome: nomeItem, preco: precoItem });
  }
  
  // Percorremos o array de itens do pedido e calculamos o seu valor total:
  let totalPedido = 0;
  pedido.itens.forEach(item => {
    totalPedido += item.preco;
  });
  
  // Adicionamos a taxa de entrega ao valor total do pedido:
  totalPedido += pedido.taxaEntrega;
  
  // Imprimimos a saída no padrão descrito neste desafio:
  console.log(`Pedido: ${pedido.cliente}`);
  console.log(`Endereco de entrega: ${pedido.endereco}`);
  console.log(`Total: R$ ${totalPedido.toFixed(2)}`);
  