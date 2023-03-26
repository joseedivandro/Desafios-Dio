// JSON do Cliente 1
const cliente1 = {
    nome: gets(),
    item: gets(),
    preco: parseFloat(gets())
    };
    
    // JSON do Cliente 2
    const cliente2 = {
    nome: gets(),
    item: gets(),
    preco: parseFloat(gets())
    };
    
    // Função para comparar dois objetos JSON
    function saoIguais(obj1, obj2) {
    // Converte os objetos em strings para compará-los
    const string1 = JSON.stringify(obj1);
    const string2 = JSON.stringify(obj2);
    return string1 === string2;
    }
    
    // Verifica se os pedidos são iguais e imprime a saída correspondente
    if (saoIguais(cliente1, cliente2)) {
    console.log("Os pedidos são iguais");
    } else {
    console.log("Os pedidos são diferentes");
    }