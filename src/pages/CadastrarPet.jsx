import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CadastrarPet() {
  const [pet, setPet] = useState({
    nome: '',
    idade: '',
    vacinado: false,
    bairro: '',
    motivo: '',
    doador: '',
    imagem: '', // base64 ou URL
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPet({
      ...pet,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPet((prev) => ({ ...prev, imagem: reader.result })); // salva imagem em base64
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const petsSalvos = JSON.parse(localStorage.getItem('petsCadastrados')) || [];
    const novoPet = { ...pet, id: Date.now() }; // ID único baseado em timestamp

    localStorage.setItem('petsCadastrados', JSON.stringify([...petsSalvos, novoPet]));

    alert('Pet cadastrado com sucesso!');
    navigate('/adote'); // redireciona para a página Adote
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Pet para Adoção</h2>
      <form className="pet-form" onSubmit={handleSubmit}>
        <label>Nome do Pet:</label>
        <input name="nome" value={pet.nome} onChange={handleChange} required />

        <label>Idade:</label>
        <input name="idade" value={pet.idade} onChange={handleChange} required />

        <label>Bairro:</label>
        <input name="bairro" value={pet.bairro} onChange={handleChange} required />

        <label>Nome do Doador:</label>
        <input name="doador" value={pet.doador} onChange={handleChange} required />

        <label>Motivo da Doação:</label>
        <input name="motivo" value={pet.motivo} onChange={handleChange} required />

        <label>Imagem do Pet:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {pet.imagem && (
          <div style={{ marginTop: '10px' }}>
            <p>Pré-visualização da imagem:</p>
            <img src={pet.imagem} alt="Preview" style={{ maxWidth: '200px' }} />
          </div>
        )}

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="vacinado"
            checked={pet.vacinado}
            onChange={handleChange}
          />
          Vacinado
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
