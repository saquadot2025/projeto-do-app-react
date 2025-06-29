import React from 'react';
import cachorro from '../img/ong milau.png';
import cachorro3 from '../img/toca-segura.png';
import cachorro5 from '../img/ong patas.jpeg';
import cachorro6 from '../img/adote.jpeg';
import cachorro7 from '../img/ong-amor-animal.png';
import cachorro8 from '../img/caosemdono.jpeg';


const pets = [
  { nome: 'Caramelo', imagem: cachorro, vacinado: true },
  { nome: 'Nina', imagem: cachorro3, vacinado: true },
  
  { nome: 'Rex', imagem: cachorro5, vacinado: true },
  { nome: 'cachorro7', imagem: cachorro6, vacinado: true },
  { nome: 'Sansão', imagem: cachorro7, vacinado: true },
  { nome: 'Simba', imagem: cachorro8, vacinado: true },
  
  
];

export default function Adote() {
  return (
    <main>
      <div className="gray-background">
        <div className="page-inner-content">
          <h3 className="section-title">Ons parceiras</h3>
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
