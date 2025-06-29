
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    if (localStorage.getItem(email)) {
      alert("Usuário já existe!");
      return;
    }

    const usuario = { email, senha };
    localStorage.setItem(email, JSON.stringify(usuario));
    alert("Usuário cadastrado com sucesso!");
    navigate('/login');
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleCadastro}>
        <h2>Cadastro</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
