import React from 'react';
import { Link } from 'react-router-dom';


const VerConta = ({usuario}) => {

  return (
    <div className="row fs-6 py-2">
      <div className="row g-0 ps-3 ps-md-5">
        <div className="col-0 col-md-6 my-3">Nome: {usuario && usuario.nome}</div>
        <div className="col-0 col-md-6 my-3">Sobrenome: {usuario && usuario.sobrenome}</div>
        <div className="col-0 col-md-6 my-3">Nome da Empresa: {usuario && usuario.nomeEmpresa}</div>
        <div className="col-0 col-md-6 my-3">Cidade: {usuario && usuario.cidade}</div>
        <div className="col-0 col-md-6 my-3">CPF: {usuario && usuario.cpf}</div>
        <div className="col-0 col-md-6 my-3">CNPJ: {usuario && usuario.cnpj}</div>
        <div className="col-0 col-md-6 my-3">Email: {usuario && usuario.email}</div>
        <div className="col-0 col-md-6 my-3">Telefone: {usuario && usuario.telefone}</div>
      </div>

      <div className="d-flex flex-row mt-5">
        <Link to="/minha-conta/editar" className="mx-1 w-50 btn btn-primary py-3 mt-2">Editar Informações</Link>
        <Link className="mx-1 w-50 btn btn-danger py-3 mt-2">Alterar Senha</Link>
      </div>
    </div>
  );

}

export default VerConta;