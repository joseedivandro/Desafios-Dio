Desafio
A empresa DIO Delivery precisa calcular o valor total de um pedido e imprimir na tela as seguintes informações: o nome do cliente, o endereço de entrega e o total do pedido, incluindo a taxa de entrega, fixa de R$ 5.00.

Entrada
Entrada deverá receber os valores que preencherão o objeto JSON , ele deverá conter as seguintes propriedades:

cliente: uma string com o nome do cliente.
endereco: uma string com o endereço de entrega.
quantidade de itens: indica a quantidade de itens que devem ser lidos no array a seguir.
itens: um array de objetos que representam um item do pedido, com as seguintes propriedades:
nome (string)
preço (number)
Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.


Saída
Deverá retornar uma mensagem (string) que informa o nome do cliente, o endereço de entrega e o total do pedido, da seguinte maneira: 

Pedido: ${pedido.cliente}
Endereço de entrega: ${pedido.endereco}
Total: R$ ${totalCalculado}