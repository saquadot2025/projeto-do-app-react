import React, { useEffect, useState } from 'react';

function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const petsSalvos = JSON.parse(localStorage.getItem('petsCadastrados')) || [];
    setPets(petsSalvos);
  }, []);

  return (
    <main>
      <div className="gray-background">
        <div className="page-inner-content">
          <h3 className="section-title">Pets para Adoção</h3>
          <div className="subtitle-underline"></div>
          <div className="cols cols-4">
            {pets.length === 0 ? (
              <p>Nenhum pet cadastrado ainda.</p>
            ) : (
              pets.map((pet, index) => (
                <div className="product" key={index}>
                  <img src={pet.imagem} alt={pet.nome} />
                  <p className="product-name">{pet.nome}</p>
                  <p className="rate">★★★★☆</p>
                  <p className="product-price">{pet.vacinado ? 'Vacinado' : 'Não vacinado'}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
