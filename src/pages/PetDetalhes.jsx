import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PetDetalhes() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    // Busca os pets do localStorage
    const petsCadastrados = JSON.parse(localStorage.getItem('petsCadastrados')) || [];

    // Procura pelo pet com o ID correspondente
    const petEncontrado = petsCadastrados.find((p) => p.id === Number(id));

    setPet(petEncontrado);
  }, [id]);

  if (!pet) {
    return <p>Pet não encontrado.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{pet.nome}</h2>
      <img
        src={pet.imagem}
        alt={`Foto de ${pet.nome}`}
        style={{ maxWidth: '300px', borderRadius: '8px' }}
      />
      <p><strong>Idade:</strong> {pet.idade}</p>
      <p><strong>Bairro:</strong> {pet.bairro}</p>
      <p><strong>Motivo da doação:</strong> {pet.motivo}</p>
      <p><strong>Doador:</strong> {pet.doador}</p>
      <p><strong>Status da vacinação:</strong> {pet.vacinado ? 'Vacinado' : 'Não vacinado'}</p>
    </div>
  );
}
