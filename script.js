let carrinho = [];

function adicionarAoCarrinho(produtoId, preco) {
    const produto = document.getElementById(produtoId);
    
    // Adiciona o produto ao carrinho
    carrinho.push({
        nome: produto.querySelector('h3').textContent,
        preco: preco
    });

    // Atualiza a exibição do carrinho
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('listaCarrinho');
    const totalCarrinhoElement = document.getElementById('totalCarrinho');

    // Limpa a lista de carrinho
    listaCarrinho.innerHTML = '';

    // Atualiza a lista de carrinho e o total
    let totalCarrinho = 0;
    carrinho.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(listItem);

        totalCarrinho += item.preco;
    });

    totalCarrinhoElement.textContent = `R$ ${totalCarrinho.toFixed(2)}`;
}