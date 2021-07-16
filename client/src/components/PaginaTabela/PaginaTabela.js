import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../Header/Header';
import TabelaCrud from './TabelaCrud/TabelaCrud';
import AdicionarRegistro from './AdicionarRegistro/AdicionarRegistro';



const PaginaTabela = () => {

  const [ show, setShow ] = useState('Registros');

  const tabela = (
    <div className="container">
      <h4 className="text-center mt-4 mb-4 titulo text-uppercase">{show}</h4>
      <div className="container p-0">
        <TabelaCrud trocarElemento={(e) => setShow(e)}/>
      </div>
    </div>
  );
  
  const adicionar = (
    <div className="container">
      <h4 className="text-center mt-4 mb-4 titulo text-uppercase">{show}</h4>
      <div className="container p-0">
        <AdicionarRegistro trocarElemento={(e) => setShow(e)}/>
      </div>
    </div>
  );
  

  const mostrarElemento = () => {
    switch (show) {
      case 'Registros':
        return tabela;
      case 'Novo Registro':
        return adicionar;
    
      default:
        return <div></div>;
    }
  }

  return (
    <div>
      <Header/>
    <div className="tabela-imagem">
      <div className="row min-vh-100 m-0 position-relative">
        <div className="blind"></div>
        <div className="col-11 col-md-10 mx-auto m-5 bg-light rounded justify-content-center align-items-center shadow-lg z-index2">
          <div className="container">
            <h4 className="text-center mt-4 mb-4 titulo text-uppercase">TITULO</h4>
            <div className="container p-0">

              <BrowserRouter>
                <div>
                  <Route path="/novo" exact component={AdicionarRegistro} />
                </div>
              </BrowserRouter>
            </div>
          </div>



        </div>

        </div>
      </div>
    </div>
  );



}

export default PaginaTabela;