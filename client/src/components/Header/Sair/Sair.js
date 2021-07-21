import React from 'react';
import { useLogin } from '../../../Context/LoginContext';

const AtualizarStateUsuario = () => {
  const { logado, setLogado } = useLogin();

  const handleSair = () => {
    localStorage.clear();
    setLogado(false);
  }

  return (
    <a href="#" className="nav-link cursor" onClick={handleSair}>Sair</a>
  );
}

export default AtualizarStateUsuario;
