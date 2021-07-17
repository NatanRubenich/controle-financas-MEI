import React, { useState } from 'react';
import FormInput from './FormInput/FormInput';

const FormCadastro = () => {

  const [ form, setForm ] = useState({
    nome: "",
    sobrenome: "",
    nomeEmpresa: "",
    cnpj: "",
    email: "",
    telefone: "",
    senha: "",
    senhaConf: ""
  });


  return (            
    <form class="row">

      <FormInput nome="nome" titulo="Nome" tipo="text" classe="col-md-6"/>
      <FormInput nome="sobrenome" titulo="Sobrenome" tipo="text" classe="col-md-6"/>
      <FormInput nome="nomeEmpresa" titulo="Nome da Empresa" tipo="text" classe="col-md-7"/>
      <FormInput nome="cnpj" titulo="CNPJ" tipo="text" classe="col-md-5"/>
      <FormInput nome="email" titulo="Email" tipo="email" classe="col-md-7"/>
      <FormInput nome="telefone" titulo="Telefone" tipo="text" classe="col-md-5"/>
      <FormInput nome="senha" titulo="Senha" tipo="password" classe="col-md-6"/>
      <FormInput nome="senhaConf" titulo="Confirme a Senha" tipo="password" classe="col-md-6"/>
      
      <div class="col-0 p-4">
        <div className="row">
          <button className="btn btn-primary btn-block py-3">Cadastrar</button>
        </div>
      </div>

    </form>

  );

}



export default FormCadastro;