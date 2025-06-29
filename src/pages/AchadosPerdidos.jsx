import React from 'react';
import cachorro from '../img/Caramelo.jpg';
import cachorro3 from '../img/Nina.jpg';
import cachorro5 from '../img/Preto.jpg';
import cachorro6 from '../img/Rex.jpg';
import cachorro7 from '../img/cachorro7.jpeg';
import cachorro8 from '../img/Sansão.jpeg';
import cachorro9 from '../img/Simba.jpg';
import cachorro10 from '../img/Spike.jpg';

const pets = [
  { nome: 'Caramelo', imagem: cachorro, vacinado: true },
  { nome: 'Nina', imagem: cachorro3, vacinado: true },
  { nome: 'Preto', imagem: cachorro10, vacinado: true },
  { nome: 'Rex', imagem: cachorro5, vacinado: true },
  { nome: 'cachorro7', imagem: cachorro6, vacinado: true },
  { nome: 'Sansão', imagem: cachorro7, vacinado: true },
  { nome: 'Simba', imagem: cachorro8, vacinado: true },
  { nome: 'Spike', imagem: cachorro9, vacinado: true },
];

export default function Adote() {
  return (
    <main>
      <div className="gray-background">
        <div className="page-inner-content">
          <h3 className="section-title">Achados e Perdidos</h3>
          <div className="subtitle-underline"></div>
          <div className="cols cols-4">
            {pets.map((pet, index) => (
              <div className="product" key={index}>
                <img src={pet.imagem} alt={pet.nome} title={`Imagem de ${pet.nome}`} />
                <p className="product-name">{pet.nome}</p>
                <p className="rate">★★★★☆</p>
                <p className="product-price">{pet.vacinado ? 'Vacinado' : 'Não vacinado'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
