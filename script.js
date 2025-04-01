// Adiciona o item ao carrinho no localStorage
function adicionarAoCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
}

// Atualiza o contador do carrinho no menu
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const contador = document.getElementById('contadorCarrinho');
    contador.textContent = carrinho.length;
}

// Remove um item do carrinho
function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);  // Remove o item na posição 'index'
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    exibirCarrinho(); // Atualiza a visualização do carrinho
}

// Exibe os itens do carrinho
function exibirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.getElementById('carrinhoContainer');
    carrinhoContainer.style.display = carrinho.length > 0 ? 'block' : 'none';
    carrinhoContainer.innerHTML = `<h2>Itens no Carrinho</h2>`;

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML += `<p>O carrinho está vazio.</p>`;
    } else {
        let total = 0;
        carrinho.forEach((item, index) => {
            total += parseFloat(item.preco);
            carrinhoContainer.innerHTML += `
                <div>
                    <h3>${item.nome}</h3>
                    <p>R$ ${item.preco}</p>
                    <button onclick="removerDoCarrinho(${index})">Remover</button>
                </div>
            `;
        });
        carrinhoContainer.innerHTML += `<p><strong>Total: R$ ${total}</strong></p>`;
    }
}

// Lida com o clique no botão "Adicionar" do carrinho
document.querySelectorAll('.adicionarCarrinho').forEach(button => {
    button.addEventListener('click', () => {
        const nome = button.dataset.nome;
        const preco = button.dataset.preco;
        adicionarAoCarrinho(nome, preco);
    });
});

// Lida com o clique no botão "Carrinho"
document.getElementById('verCarrinho').addEventListener('click', (event) => {
    event.preventDefault();
    exibirCarrinho();
});

// Inicializa o contador do carrinho
atualizarContadorCarrinho();
