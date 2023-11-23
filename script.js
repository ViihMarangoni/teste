function adicionarAoCarrinho(id, preco) {
    // Obter o produto selecionado
    let produtoSelecionado = document.getElementById(id);

    // Clonar o produto para movê-lo para o carrinho
    let produtoNoCarrinho = produtoSelecionado.cloneNode(true);

    // Adicionar o produto clonado à lista do carrinho
    document.getElementById('listaCarrinho').appendChild(produtoNoCarrinho);

    // Atualizar o total do carrinho
    atualizarTotalCarrinho(preco);
}

function atualizarTotalCarrinho(preco) {
    // Obter o elemento do total do carrinho
    let totalCarrinho = document.getElementById('totalCarrinho');

    // Obter o valor atual do total e converter para número
    let totalAtual = parseFloat(totalCarrinho.innerText.replace('R$', '').trim());

    // Adicionar o preço do produto ao total
    let novoTotal = totalAtual + preco;

    // Atualizar o texto do total com o novo valor
    totalCarrinho.innerText = 'R$ ' + novoTotal.toFixed(2);
} 