// Dados dos itens do cardápio (entradas, pratos principais e sobremesas)
const menuItems = {
    entradas: [
        {
            nome: "Entradinha Casquinha de Caranguejo",
            descricao: "110g de carne de caranguejo refogada com cheiro-verde, tomate e leite de coco natural. Acompanhado de farofa da Bahia e molho de coco.",
            preco: "R$ 62,00",
            imagem: "entradinha.png",
            alt: "Casquinha de caranguejo acompanhada de farofa e molho de coco"
        }
    ],
    pratosPrincipais: [
        {
            nome: "Picanha Coco Bambu",
            descricao: "600g de picanha grelhada, acompanhada de vinagrete, farofa amarela, mandioca e arroz biro-biro.",
            preco: "R$ 225,00",
            imagem: "prato principal.png",
            alt: "Picanha grelhada acompanhada de arroz, mandioca, vinagrete e farofa amarela"
        }
    ],
    sobremesas: [
        {
            nome: "Petit Gateau de Chocolate",
            descricao: "Bolinho quente de chocolate acompanhado de sorvete de creme.",
            preco: "R$ 50,00",
            imagem: "sobremesa.png",
            alt: "Petit Gateau de chocolate com sorvete de creme"
        }
    ]
};

// Função para criar os itens do cardápio dinamicamente
function criarCardapio() {
    const menuElement = document.getElementById("menu");

    // Itera sobre as categorias (entradas, pratos principais e sobremesas)
    for (let categoria in menuItems) {
        const section = document.createElement('section');
        section.id = categoria;

        const h2 = document.createElement('h2');
        h2.innerText = categoria.charAt(0).toUpperCase() + categoria.slice(1); // Capitaliza a primeira letra
        section.appendChild(h2);

        // Cria os artigos para cada item dentro de cada categoria
        menuItems[categoria].forEach(item => {
            const article = document.createElement('article');
            
            const img = document.createElement('img');
            img.src = item.imagem;
            img.alt = item.alt;
            article.appendChild(img);
            
            const textContent = document.createElement('div');
            textContent.classList.add('text-content');
            
            const h3 = document.createElement('h3');
            h3.innerText = item.nome;
            textContent.appendChild(h3);
            
            const pDescricao = document.createElement('p');
            pDescricao.innerText = item.descricao;
            textContent.appendChild(pDescricao);
            
            const pPreco = document.createElement('p');
            pPreco.innerText = item.preco;
            textContent.appendChild(pPreco);
            
            article.appendChild(textContent);
            section.appendChild(article);
        });

        menuElement.appendChild(section);
    }
}

// Chama a função para injetar os itens do cardápio no HTML
criarCardapio();
