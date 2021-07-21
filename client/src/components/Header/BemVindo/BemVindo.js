import React from 'react';

import { useCliente } from "../../../Context/ClienteContext";

const TesteContext = () => {
  const { usuario, setUsuario } = useCliente();

  let nomeUsuario = null;
  if(usuario) {
    nomeUsuario = <span className="text">Bem vindo, {localStorage.getItem("usuario")}</span>
  }

  return (
    <div className="d-none d-md-flex flex-row-reverse position-relative w-50">
      {nomeUsuario}
    </div>
  );
}

export default TesteContext;
