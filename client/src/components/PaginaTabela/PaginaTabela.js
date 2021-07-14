import React from 'react';
import TabelaCrud from './TabelaCrud/TabelaCrud';

const PaginaTabela = () => {

  return (
    <div className="tabela-imagem">
      <div className="row min-vh-100 m-0">
        <div className="blind"></div>
        <div className="col-11 col-md-10 mx-auto m-5 bg-light rounded justify-content-center align-items-center z-index2">
          <div className="container">
            <h4 className="text-center mt-4 mb-5">Registros</h4>
            <div className="container">
              <TabelaCrud/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );



}

export default PaginaTabela;