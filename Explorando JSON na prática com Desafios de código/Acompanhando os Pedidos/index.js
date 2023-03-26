// Criando um objeto chamado "pedido" com as propriedades do cliente e do pedido:
const pedido = {
    cliente: {
    nome: gets(), // Lê a primeira linha da "Entrada": Nome do Cliente.
    endereco: gets(), // Lê a segunda linha da "Entrada": Endereço do Cliente.
    },
    id: parseInt(gets()), // Lê a terceira linha da "Entrada": ID do Pedido.
    };
    
    // Lê a quarta linha da "Entrada": Telefone do Cliente.
    const telefone = gets();
    
    // Adiciona a propriedade "telefone" dinamicamente no objeto JSON "pedido.cliente".
    pedido.cliente.telefone = telefone;
    
    // Imprime a saída formatada de acordo com o desafio:
    print(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}`);
    print(`ID: ${pedido.id}`);
    print(`Tel: ${pedido.cliente.telefone}`);