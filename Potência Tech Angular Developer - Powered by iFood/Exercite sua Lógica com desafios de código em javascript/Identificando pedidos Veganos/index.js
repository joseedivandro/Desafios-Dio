const numPedidos = parseInt(gets());

for (let i = 1; i <= numPedidos; i++) {
  const prato = gets();
  const calorias = parseInt(gets());
  const ehVegano = gets().toLowerCase() === 's';

  // Verifica se o prato é vegano ou não e imprime a informação correspondente
  const tipoPrato = ehVegano ? 'Vegano' : 'Nao-vegano';

  // Imprime a informação do pedido
  console.log(`Pedido ${i}: ${prato} (${tipoPrato}) - ${calorias} calorias`);
}