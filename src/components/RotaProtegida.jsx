import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RotaProtegida({ children }) {
  const { usuario } = useAuth();

  if (!usuario) {
    // Se não estiver logado, redireciona para o login
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RotaProtegida;
