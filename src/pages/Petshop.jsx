import React from 'react';
import cachorro from '../img/mirante do petshop.jpeg';
import cachorro3 from '../img/petjuju.jpeg';
import cachorro5 from '../img/pesepatos.png';
import cachorro6 from '../img/apaixonasos por quatro patas.jpeg';
import cachorro7 from '../img/agrijar.jpeg';
import cachorro8 from '../img/fofocao2.jpg';
import cachorro9 from '../img/mundo animal.jpg';
import cachorro10 from '../img/verdeminho.jpeg';


const pets = [
  { nome: 'Mirante do Petshop ', imagem: cachorro, petshopMiau: true },
  { nome: 'pet juju', imagem: cachorro3, vacinado: true },
  { nome: 'Verde Minho', imagem: cachorro10, vacinado: true },
  { nome: 'Pes e patos', imagem: cachorro5, vacinado: true },
  { nome: 'Apaixonados por quatro patas', imagem: cachorro6, vacinado: true },
  { nome: 'Agrijar', imagem: cachorro7, vacinado: true },
  { nome: 'Fofocão', imagem: cachorro8, vacinado: true },
  { nome: 'Mundo Animal', imagem: cachorro9, vacinado: true },
];

export default function Adote() {
  return (
    <main>
      <div className="gray-background">
        <div className="page-inner-content">
          <h3 className="section-title">Pet Shop</h3>
          <div className="subtitle-underline"></div>
          <div className="cols cols-4">
            {pets.map((pet, index) => (
              <div className="product" key={index}>
                <img src={pet.imagem} alt={pet.nome} title={`Imagem de ${pet.nome}`} />
                <p className="product-name">{pet.nome}</p>
                <p className="rate">petshop</p>
                <p className="product-price">{pet.vacinado ? 'Vacinado' : 'Não vacinado'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

