const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

// Calculando o preço total do pedido
const precoTotalHamburguer = valorHamburguer * quantidadeHamburguer;
const precoTotalBebida = valorBebida * quantidadeBebida;
const precoTotalPedido = precoTotalHamburguer + precoTotalBebida;

// Calculando o troco necessário
const troco = valorPago - precoTotalPedido;

// Exibindo o resultado para o usuário
print(`O preço final do pedido é R$ ${precoTotalPedido.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`);