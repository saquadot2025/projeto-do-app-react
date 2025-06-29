import React from 'react';
import cachorro from '../img/vac8.jpeg';
import cachorro3 from '../img/vac1.png';
import cachorro5 from '../img/vac2.jpg';
import cachorro6 from '../img/vac3.jpeg';
import cachorro7 from '../img/vac9.jpg';
import cachorro8 from '../img/vac5.jpeg';
import cachorro9 from '../img/vac6.jpeg';
import cachorro10 from '../img/vac8.jpeg';



const pets = [
  { nome: 'Caramelo', imagem: cachorro, vacinado: true },
  { nome: 'Nina', imagem: cachorro3, vacinado: true },
  
  { nome: 'Rex', imagem: cachorro5, vacinado: true },
  { nome: 'cachorro7', imagem: cachorro6, vacinado: true },
  { nome: 'Sansão', imagem: cachorro7, vacinado: true },
  { nome: 'Simba', imagem: cachorro8, vacinado: true },
  { nome: 'Salomao', imagem: cachorro9, vacinado: true },
  { nome: 'vac7', imagem: cachorro10, vacinado: true },
];

export default function Adote() {
  return (
    <main>
      <div className="gray-background">
        <div className="page-inner-content">
          <h3 className="section-title">Noticias</h3>
          <div className="subtitle-underline"></div>
          <div className="cols cols-4">
            {pets.map((pet, index) => (
              <div className="product" key={index}>
                <img src={pet.imagem} alt={pet.nome} title={`Imagem de ${pet.nome}`} />
                <p className="product-name"></p>
                <p className="rate">campanha de vacinação.</p>
                <p className="product-price">{}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
