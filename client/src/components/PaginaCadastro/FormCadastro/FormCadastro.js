import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from '../../../axios/axios';

import { usuarioSchema } from '../../Validations/ValidacaoCadastro';

const elementos = [
  {nome: "nome", titulo: "Nome", tipo: "text", classe: "col-md-6", erro: "Insira um nome válido"},
  {nome: "sobrenome", titulo: "Sobrenome", tipo: "text", classe: "col-md-6", erro: "Insira um sobrenome válido"},
  {nome: "nomeEmpresa", titulo: "Nome da Empresa", tipo: "text", classe: "col-md-7", erro: "Insira um nome de empresa válido"},
  {nome: "cnpj", titulo: "CNPJ", tipo: "text", classe: "col-md-5", erro: "Insira um CNPJ válido"},
  {nome: "email", titulo: "Email", tipo: "text", classe: "col-md-7", erro: "Insira um email válido"},
  {nome: "telefone", titulo: "Telefone", tipo: "text", classe: "col-md-5", erro: "Insira um telefone válido"},
  {nome: "senha", titulo: "Senha", tipo: "password", classe: "col-md-6", erro: "Insira uma senha válida"},
  {nome: "senhaConf", titulo: "Confirme a Senha", tipo: "password", classe: "col-md-6", erro: "Senhas não correspondem"}
];


// LIMPADOR DE SÍMBOLOS
const limparSimbolos = (valor) => {
  const valorNovo = valor.replace(/\D/g,'');
  return valorNovo;
}

const FormCadastro = () => {

  // Erros
  const [ errosCadastro, setErrosCadastro ] = useState([]);

  // React hook form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(usuarioSchema)
  });
  
  const gerarElementosInput = () => {
    const resultadoElementos = elementos.map((item) => {
      return (
        <div className={item.classe}>
          <label htmlFor={item.nome} class="form-label mt-2">{item.titulo}</label>
          <input 
            type={item.tipo} 
            className="form-control" 
            id={item.nome} 
            {...register(item.nome)}
          />
          <span className="text-danger">{errors[item.nome] && `${errors[item.nome].message}`}</span>
        </div>
      )
    });
    return resultadoElementos;
  }


  // POST REQUEST
  const requisicaoPost = (form) => {
    axios({
      method: 'post',
      url: '/registro/enviar',
      data: form
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err)); 
  }
  

  // Dados já validados
  // Retirar qualquer símbolo
  const handleDadosValidados = (form) => {
    // Limpando símbolos
    const formFiltrado = {
      ...form, 
      telefone: limparSimbolos(form.telefone),
      cnpj: limparSimbolos(form.cnpj)
    }
    // Removendo a confirmação de senha
    delete formFiltrado.senhaConf;
    
  
    requisicaoPost(formFiltrado);
   
  }



  // JSX
  return (            
    <form class="row" onSubmit={handleSubmit((form) => handleDadosValidados(form))}>
      {gerarElementosInput()}
      <div class="col-0 p-4">
        <div className="row">
          <button className="btn btn-primary btn-block py-3">Cadastrar</button>
        </div>
      </div>

    </form>

  );

}



export default FormCadastro;