// Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      const userData = localStorage.getItem(email);
      if (!userData) {
        alert("Usuário não encontrado. Por favor, cadastre-se.");
        return;
      }

      const usuario = JSON.parse(userData);
      if (usuario.senha === senha) {
        // 🔐 Salva quem está logado
        localStorage.setItem('usuarioLogado', email);

        alert("Login realizado com sucesso!");
        navigate('/adote'); // 👈 Redireciona para Adote
      } else {
        alert("Senha incorreta.");
      }
    } catch (error) {
      alert("Erro ao processar login. Tente novamente.");
      console.error("Erro no login:", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
