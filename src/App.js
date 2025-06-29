import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

import cachorro2 from './img/SaquaDot.jpg';

import PetDetalhes from './pages/PetDetalhes.jsx';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import CadastrarPet from './pages/CadastrarPet';
import Home from './pages/Home';
import Adote from './pages/Adote';
import AchadosPerdidos from './pages/AchadosPerdidos';
import Noticias from './pages/Noticias';
import Ongs from './pages/Ongs';
import PetShop from './pages/Petshop';
import ListarPets from './pages/ListarPets';

// Função para verificar se o usuário está logado
const isLoggedIn = () => {
  return !!localStorage.getItem('usuarioLogado');
};

// Componente da aplicação principal com botão de logout
function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const navigate = useNavigate();

  // Função de logout
  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    navigate('/login');
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="header-inner-content">
          <img src={cachorro2} alt="Logo" className="logo-n" />
          <nav>
            <ul>
              {!isLoggedIn() ? (
                <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/cadastro">Cadastro</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/">Início</Link></li>
                  <li><Link to="/adote">Adote um Pet</Link></li>
                  <li><Link to="/achados">Achados e Perdidos</Link></li>
                  <li><Link to="/noticias">Notícias</Link></li>
                  <li><Link to="/ongs">ONGS</Link></li>
                  <li><Link to="/petshop">PetShop</Link></li>
                  <li><Link to="/listar">Listar Pets</Link></li>
                  <li>
                    <button onClick={handleLogout} className="logout-button">Sair</button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>

      {/* Rotas */}
      <Routes>
        {/* Redireciona "/" para login se não estiver logado */}
        <Route path="/" element={isLoggedIn() ? <Home /> : <Navigate to="/login" replace />} />

        {/* Rotas protegidas */}
        <Route path="/adote" element={isLoggedIn() ? <Adote /> : <Navigate to="/login" replace />} />
        <Route path="/achados" element={isLoggedIn() ? <AchadosPerdidos /> : <Navigate to="/login" replace />} />
        <Route path="/noticias" element={isLoggedIn() ? <Noticias /> : <Navigate to="/login" replace />} />
        <Route path="/ongs" element={isLoggedIn() ? <Ongs /> : <Navigate to="/login" replace />} />
        <Route path="/petshop" element={isLoggedIn() ? <PetShop /> : <Navigate to="/login" replace />} />
        <Route path="/pet/:id" element={isLoggedIn() ? <PetDetalhes /> : <Navigate to="/login" replace />} />
        <Route path="/cadastrar" element={isLoggedIn() ? <CadastrarPet /> : <Navigate to="/login" replace />} />
        <Route path="/listar" element={isLoggedIn() ? <ListarPets /> : <Navigate to="/login" replace />} />

        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;
