Desafio
Imagine que você é um desenvolvedor de uma plataforma de entregas de comida que está trabalhando em um novo recurso que permitirá que os entregadores vejam informações sobre os clientes dos pedidos que devem entregar, incluindo o nome, endereço, ID e número de telefone da pessoa.

Sua tarefa é criar um programa em JavaScript que leia os dados de um pedido, que incluem (principalmente) as informações do Cliente. Com os dados de entrada em mãos, seu programa deve apresentá-los em uma tela (Saída) para os entregadores orquestrarem as entregas dos pedidos.

Entrada
A entrada do programa será feita pelo usuário e terá as seguintes informações (propriedades):

nome: o nome do cliente, representado por uma string;
endereco: endereço do cliente, representado por uma string;
id: identificador do pedido do cliente, representado por um valor numérico;
telefone: telefone do cliente, representado por uma string;
Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

Saída
Deverá retornar uma mensagem (string) que mostre as informações do cliente e do pedido na tela, veja exemplo abaixo:

Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}
ID: ${pedido.id}
Tel: ${pedido.cliente.telefone}