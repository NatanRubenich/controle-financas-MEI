import React, { useState, useEffect } from 'react';
import { useLogin } from '../../../Context/LoginContext';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from '../../../axios/axios';
import { useHistory } from 'react-router';


import { usuarioSchema } from '../../Validations/ValidacaoEditarUsuario';

import ModalSucesso from '../../ModalSucesso/ModalSucesso';

const elementos = [
  {nome: "nome", titulo: "Nome", tipo: "text", classe: "col-md-6", erro: "Insira um nome válido"},
  {nome: "sobrenome", titulo: "Sobrenome", tipo: "text", classe: "col-md-6", erro: "Insira um sobrenome válido"},
  {nome: "nomeEmpresa", titulo: "Nome da Empresa", tipo: "text", classe: "col-md-6", erro: "Insira um nome de empresa válido"},
  {nome: "cidade", titulo: "Cidade", tipo: "text", classe: "col-md-6", erro: "Insira uma cidade válida"},
  {nome: "cpf", titulo: "CPF", tipo: "text", classe: "col-md-6", erro: "Insira um CPF válido"},
  {nome: "cnpj", titulo: "CNPJ", tipo: "text", classe: "col-md-6", erro: "Insira um CNPJ válido"},
  {nome: "telefone", titulo: "Telefone", tipo: "text", classe: "col-md-6", erro: "Insira um telefone válido"}
];


// HELPER - LIMPADOR DE SÍMBOLOS
const limparSimbolos = (form) => {
  const filtro = (valor) => {
    return valor.replace(/\D/g,'');
  }

  // Limpando símbolos
  const formFiltrado = {
    ...form, 
    telefone: filtro(form.telefone),
    cnpj: filtro(form.cnpj),
    cpf: filtro(form.cpf)
  }

  return formFiltrado;
}

const DadosConta = ({usuario}) => {

  // Historico
  const historico = useHistory();

  // Erros
  const [ errosCadastro, setErrosCadastro ] = useState([]);

  // Sucesso 
  const [ sucesso, setSucesso ] = useState(false);

  // Hook de login global
  const { logado, setLogado } = useLogin();

  // React hook form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(usuarioSchema)
  });


  useEffect(() => {
    console.log('renderizado', usuario, usuario ? true : false)
  }, [usuario])


  // DADOS PÓS VALIDAÇÃO DO YUP
  const handleDadosValidados = (form) => {
    const formFiltrado = limparSimbolos(form);
    requisicaoPost(formFiltrado);
  }

  // POST REQUEST
  const requisicaoPost = (form) => {
    setErrosCadastro([]);
    axios({
      method: 'patch',
      url: '/minha-conta/editar/enviar',
      data: form,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res) => {
      if(res.status) {
        console.log(res.status === 200)
        setSucesso(true);
      }
      if(res.asdas) { 
        console.log('ERROS', res.data.erros);
        setErrosCadastro(res.data.erros);
      }
    })
    .catch((err) => {
      console.log("Erro ao cadastrar");
    }); 
  }


  // Gerar elementos JSX
  const gerarElementosInput = () => {
    const resultadoElementos = elementos.map((item) => {
      return (
        <div className={item.classe}>
          <label htmlFor={item.nome} class="form-label mt-2">{item.titulo}</label>
          <input 
            type={item.tipo} 
            className="form-control" 
            id={item.nome} 
            defaultValue={usuario[item.nome]}
            {...register(item.nome)}
          />
          <span className="text-danger">{errors[item.nome] && `${errors[item.nome].message}`}</span>
        </div>
      )
    });
    return resultadoElementos;
  }



  // JSX
  return (            
    <form class="row" onSubmit={handleSubmit((form) => handleDadosValidados(form))}>
      {usuario ? gerarElementosInput() : null}
      <div class="col-0 p-4">
        <div className="row">
          { errosCadastro.map( e => <span className="text-danger">{e}</span>) }
          { sucesso ? <ModalSucesso 
            titulo="Atualização realizada com sucesso!" 
            texto="Redirecionando..."
            url="/minha-conta"
            /> : null 
          }
          <div className="d-flex flex-row">
            <button className="mx-1 w-50 btn btn-secondary py-3 mt-2" onClick={() => historico.push('/minha-conta')}>Cancelar</button>
            <button className="mx-1 w-50 btn btn-primary py-3 mt-2" type="submit">Enviar</button>
          </div>
        </div>
      </div>

    </form>

  );

}



export default DadosConta;