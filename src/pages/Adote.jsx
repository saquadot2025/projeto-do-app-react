import { Link } from 'react-router-dom';

export default function Adote() {
  // Pegando somente os pets cadastrados do localStorage
  const petsCadastrados = JSON.parse(localStorage.getItem('petsCadastrados')) || [];

  return (
    <main>
      <div className="gray-background">
        <div className="page-inner-content">
          <h3 className="section-title">Pets Para Adoção</h3>
          <Link to="/cadastrar" className="btn-cadastrar-pet">+ Cadastrar novo pet</Link>

          <div className="subtitle-underline"></div>
          <div className="cols cols-4">
            {petsCadastrados.length === 0 && (
              <p>Nenhum pet cadastrado para adoção ainda.</p>
            )}
            {petsCadastrados.map((pet) => (
              <div className="product" key={pet.id}>
                <Link to={`/pet/${pet.id}`}>
                  <img src={pet.imagem} alt={pet.nome} title={`Imagem de ${pet.nome}`} />
                </Link>

                <p className="pet-name">{pet.nome}</p>
                <p className="pet-bairro">Bairro: {pet.bairro}</p>
                <p className="pet-doador">Doador: {pet.doador}</p>
                <p className={`product-price ${pet.vacinado ? 'vacinado' : 'nao-vacinado'}`}>
                  {pet.vacinado ? 'Vacinado 💉' : 'Não vacinado '}
</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
