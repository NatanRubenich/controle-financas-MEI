import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../axios/axios';

import ItemCrud from './ItemCrud/ItemCrud';


const PaginaTabela = () => {

  const [ dadosTabela, setDadosTabela ] = useState([]);
  const [ renderizar, setRenderizar ] = useState(false);

  // Requisição AXIOS GET
  const requisitarRegistros = async () => {
    if(localStorage.getItem("token")) {
      await axios({
        method: 'get',
        url: '/registros',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(resposta => {
        console.log('RENDERIZEI', resposta);
        setDadosTabela(resposta.data.items);
      })
      .catch(err => {
        console.log(err);
      });
    } else {
      console.log('Erro ao requisitar registros');
    }
  }

  // Deletar Entrada

  // Use Effect
  useEffect(() => {
    requisitarRegistros();
  }, [renderizar]);
  

  // Produz os elementos JSX 
  const gerarTabela = () => {
    let elementoReturn = null;

    if(dadosTabela) {
      elementoReturn = dadosTabela.map((e) => {
        return <ItemCrud key={e._id} dados={e} deletar={(id) => handleDeletar(id)} />;
      });
    }

    return elementoReturn;
  }


  // Handle deletar items
  const handleDeletar = async (id) => {
    if(localStorage.getItem("token")) {
      await axios({
        method: 'delete',
        data: {id},
        url: '/registros/deletar',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((res) => {
        console.log('resposta', res);
        setRenderizar(!renderizar);
      })
      .catch(err => {
        console.log(err);
      });
      console.log('fiz a req');
    } else {
      console.log('Erro ao requisitar registros');
    }
    
  }

  return (
  <div className="col-11 col-md-10 mx-auto m-5 bg-light rounded justify-content-center align-items-center shadow-lg z-index2">
    <div className="container">
      <h4 className="text-center mt-4 mb-4 titulo text-uppercase">Registros</h4>
      <div className="container p-0">
        <div className="row">
          <div className="d-flex flex-row-reverse px-2 pb-2">
            <Link to="/registros/novo">
              <button className="btn btn-success m-1 d-flex align-items-center">
                <i className="fas fa-plus"></i>
                <span className="ps-2 text-white">Adicionar Registro</span>
              </button>
            </Link> 
            <button className="btn btn-warning m-1 d-flex align-items-center">
              <i className="fas fa-calculator"></i>
              <span className="ps-2">Gerar Extrato Mensal</span>
            </button> 
          </div>

          <div className="col-0">
            <table className="table table-striped">
              <thead className="bg-success text-white">
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Tipo de Venda</th>
                  <th scope="col">Data</th>
                  <th scope="col">Quant.</th>
                  <th scope="col">Valor Unit.</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Desconto</th>
                  <th scope="col">Nota Fiscal</th>
                  <th scope="col">Valor Final</th>
                  <th scope="col">Ações</th>
                </tr> 
              </thead>
              <tbody>

              {gerarTabela()}

              </tbody>
            </table>
          </div>      
        </div>
      </div>
    </div>
  </div>
  );
}

export default PaginaTabela;