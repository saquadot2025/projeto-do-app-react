import React, { useEffect, useState } from 'react';

export default function ListarPets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const petsCadastrados = JSON.parse(localStorage.getItem('petsCadastrados')) || [];
    setPets(petsCadastrados);
  }, []);

  const excluirPet = (id) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir este pet?');
    if (!confirmacao) return;

    const novosPets = pets.filter((pet) => pet.id !== id);
    localStorage.setItem('petsCadastrados', JSON.stringify(novosPets));
    setPets(novosPets);
  };

  if (pets.length === 0) {
    return <p>Nenhum pet cadastrado.</p>;
  }

  return (
    <div>
      <h2>Pets Cadastrados</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pets.map((pet) => (
          <li key={pet.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h3>{pet.nome}</h3>
            <p><strong>Idade:</strong> {pet.idade}</p>
            <p><strong>Bairro:</strong> {pet.bairro}</p>
            <p><strong>Doador:</strong> {pet.doador}</p>
            <p><strong>Motivo:</strong> {pet.motivo}</p>
            <p><strong>Vacinado:</strong> {pet.vacinado ? 'Sim' : 'Não'}</p>
            {pet.imagem && (
              <img src={pet.imagem} alt={pet.nome} style={{ maxWidth: '200px' }} />
            )}
            <br />
            <button onClick={() => excluirPet(pet.id)} style={{ marginTop: '10px', color: 'white', backgroundColor: 'red' }}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
