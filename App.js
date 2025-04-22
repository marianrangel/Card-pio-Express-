import React, { useState } from "react";
import menuItems from "./data";
import MenuItem from "./componente/MenuItem";
import "./styles.css";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (item) => {
    // Adiciona o item ao carrinho sem verificação de duplicidade
    setCarrinho((prevCarrinho) => [...prevCarrinho, item]);
  };

  const excluirItem = (itemId) => {
    // Remove apenas o item específico baseado no id
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter((item) => item.id !== itemId)
    );
  };

  const calcularTotal = () => {
    // Certifica-se de que o preço é tratado como número antes de calcular o total
    return carrinho
      .reduce((total, item) => total + Number(item.price), 0)
      .toFixed(2); // Garante que o total tenha 2 casas decimais
  };

  return (
    <main className="cardapio-container">
      <h1 className="menu-title">Nosso Cardápio</h1>

      <section className="lista-itens-cardapio">
        {menuItems.map((item, index) => (
          <MenuItem key={item.id} {...item} image={item.imageUrl} onAdd={() => adicionarAoCarrinho(item)} />
        ))}
      </section>

      <section className="carrinho">
        <h2>Carrinho</h2>
        {carrinho.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul>
            {carrinho.map((item) => (
              <li key={item.id}>
                {item.name} - R$ {item.price}{" "}
                <button
                  onClick={() => excluirItem(item.id)}
                  style={{ marginLeft: '10px', color: 'red' }}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="total">
          <h3>Total: R$ {calcularTotal()}</h3>
        </div>
      </section>
    </main>
  );
}

export default App;
