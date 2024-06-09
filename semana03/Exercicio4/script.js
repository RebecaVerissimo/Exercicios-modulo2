const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 }
];

const lista = document.getElementById("lista")

produtos.forEach(item => { 
    const produto = document.createElement('li')
    produto.innerText = `${item.nome}, ${item.valor}`

    lista.appendChild(produto)
    
});

