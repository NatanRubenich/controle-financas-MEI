import React, { useState } from 'react';
import FormInput from './FormInput/FormInput';
import * as yup from 'yup';

import { usuarioSchema } from '../../Validations/ValidacaoCadastro';

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

  const [ erros, setErros ] = useState({})

  const validacaoYup = async () => {
    const isValid = await usuarioSchema.isValid(form);
    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault(form);
    if(form.senha != form.senhaConf) {
      setErros({...erros, senha: "As senhas não correspondem"});
    }
    await validacaoYup();
  }

  return (            
    <form class="row" onSubmit={handleSubmit}>

      <FormInput nome="nome" titulo="Nome" tipo="text" classe="col-md-6" form={form} setForm={setForm}/>
      <FormInput nome="sobrenome" titulo="Sobrenome" tipo="text" classe="col-md-6" form={form} setForm={setForm}/>
      <FormInput nome="nomeEmpresa" titulo="Nome da Empresa" tipo="text" classe="col-md-7"  form={form} setForm={setForm}/>
      <FormInput nome="cnpj" titulo="CNPJ" tipo="text" classe="col-md-5"  form={form} setForm={setForm}/>
      <FormInput nome="email" titulo="Email" tipo="text" classe="col-md-7"  form={form} setForm={setForm}/>
      <FormInput nome="telefone" titulo="Telefone" tipo="text" classe="col-md-5"  form={form} setForm={setForm}/>
      <FormInput nome="senha" titulo="Senha" tipo="password" classe="col-md-6"  form={form} setForm={setForm}/>
      <FormInput nome="senhaConf" titulo="Confirme a Senha" tipo="password" classe="col-md-6"  form={form} setForm={setForm}/>
      
      <div class="col-0 p-4">
        <div className="row">
          <button className="btn btn-primary btn-block py-3">Cadastrar</button>
        </div>
      </div>

    </form>

  );

}



export default FormCadastro;